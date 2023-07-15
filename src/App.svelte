<script lang="ts">
  import * as THREE from "three";
  import { cubeletToBoxPosition } from "./lib/cubelet-to-box-position";
  import Menu from "./lib/Menu.svelte";
  import { Cube } from "./cube/cube";
  import { Face } from "./cube/face";
  import { Rotation } from "./cube/rotation";
  import * as knobby from "svelte-knobby";
  import { Hamburger } from "svelte-hamburgers";
  import * as SC from "svelte-cubed";
  import { tweened } from "svelte/motion";
  import { cubicOut, quadInOut } from "svelte/easing";
  import { CAMERA_INITIAL_POSITION } from "./lib/contants";

  function getRotationFunction(_rotating: Face, _rotation: Rotation): Function {
    const angleDuration = 250;
    return (cb: Function) => {
      if (rotating) {
        return;
      }
      rotating = _rotating;
      rotation = _rotation;
      if (rotation == Rotation.clockwise) {
        angle.set(Math.PI / 2, { duration: angleDuration, easing: quadInOut });
      } else {
        angle.set(-(Math.PI / 2), {
          duration: angleDuration,
          easing: quadInOut,
        });
      }
      setTimeout(onFinishRotation.bind(this, cb), angleDuration);
    };
  }

  const top = getRotationFunction(Face.top, Rotation.clockwise);
  const left = getRotationFunction(Face.left, Rotation.clockwise);
  const front = getRotationFunction(Face.front, Rotation.clockwise);
  const right = getRotationFunction(Face.right, Rotation.clockwise);
  const back = getRotationFunction(Face.back, Rotation.clockwise);
  const down = getRotationFunction(Face.down, Rotation.clockwise);
  const topPrime = getRotationFunction(Face.top, Rotation.counterclockwise);
  const leftPrime = getRotationFunction(Face.left, Rotation.counterclockwise);
  const frontPrime = getRotationFunction(Face.front, Rotation.counterclockwise);
  const rightPrime = getRotationFunction(Face.right, Rotation.counterclockwise);
  const backPrime = getRotationFunction(Face.back, Rotation.counterclockwise);
  const downPrime = getRotationFunction(Face.down, Rotation.counterclockwise);

  const movesMap: Record<string, Function> = {
    t: top,
    l: left,
    f: front,
    r: right,
    b: back,
    d: down,
    T: topPrime,
    L: leftPrime,
    F: frontPrime,
    R: rightPrime,
    B: backPrime,
    D: downPrime,
  };

  const cameraPosition = tweened([
    CAMERA_INITIAL_POSITION[0],
    CAMERA_INITIAL_POSITION[1],
    CAMERA_INITIAL_POSITION[2],
  ]);

  let cube: Cube = new Cube();
  let rotating: Face = null as unknown as Face;
  let rotation: Rotation = Rotation.clockwise;
  let shuffling = false;
  let solving = false;
  let solveMoves: string[] = [];
  let shufflingCycles = 0;

  const angle = tweened(0);
  let camera: any;
  let open: any;

  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function onFinishRotation(cb: Function) {
    cube = cube.rotate(rotating, rotation as Rotation);
    rotating = null as unknown as Face;
    angle.set(0, { duration: 0 });
    if (cb && typeof cb == 'function') {
      cb();
    }
  }

  function solve(first: boolean) {
    if (rotating || shuffling || (solving && first)) {
      return;
    }
    if(first) {
      solveMoves = cube.clone().solve();
      if (solveMoves.length > 0) {
        solveMoves = solveMoves.join("").split("");
        solving = true;
      } else {
        solving = false;
        return;
      }
    }
    if (solveMoves.length < 1) {
      solving = false;
    }
    if (solving) {
      const moveAlias: string = solveMoves.splice(0, 1)[0];
      const moveAsFunction = movesMap[moveAlias];
      moveAsFunction(solve.bind(this, false));
    }
  }

  function getThreeJsCamera() {
    for (const [_, value] of camera?.$$?.context?.entries()) {
      if (value?.type == "PerspectiveCamera") {
        return value;
      }
    }
    return null;
  }

  function resetCamera() {
    const camera = getThreeJsCamera();
    if (camera) {
      const { x, y, z } = camera.position;
      cameraPosition.set([x, y, z], { duration: 0 });
    }
    cameraPosition.set(
      [
        CAMERA_INITIAL_POSITION[0],
        CAMERA_INITIAL_POSITION[1],
        CAMERA_INITIAL_POSITION[2],
      ],
      {
        duration: 600,
        easing: cubicOut,
      }
    );
  }

  function resetCube() {
    if (rotating || shuffling || solving) {
      return;
    }
    cube = new Cube();
  }

  function execRandomMove(cb?: Function) {
    const moves = Object.keys(movesMap);
    const len = moves.length;
    const i = getRandom(0, len - 1);
    const move = moves[i];
    const moveAsFunction = movesMap[move];
    moveAsFunction(cb);
  }

  function shuffleCube(first: boolean) {
    if (rotating || (shuffling && first) || solving) {
      return;
    }
    shuffling = true;
    if (first) {
      shufflingCycles = 20;
    }
    if (shufflingCycles) {
      execRandomMove(shuffleCube.bind(this, false));
      shufflingCycles--;
      return;
    }
    shuffling = false;
  }

  const knobbyConfig = {
    clockwise: { top, left, front, right, back, down },
    counterclockwise: {
      "top prime": topPrime,
      "left prime": leftPrime,
      "front prime": frontPrime,
      "right prime": rightPrime,
      "back prime": backPrime,
      "down prime": downPrime,
    },
    shuffle: shuffleCube.bind(this, true),
    solve: solve.bind(this, true),
    reset: resetCube,
    "reset camera": resetCamera,
  };

  const controls = knobby.panel(knobbyConfig);
  $controls.workaround = true;
  $controls.DO_NOT_DELETE_ME = true;
</script>

<SC.Canvas
  antialias
  background={new THREE.Color("papayawhip")}
  fog={new THREE.FogExp2("papayawhip", 0.05)}
  shadows
>
  <SC.Mesh
    geometry={new THREE.PlaneGeometry(50, 50)}
    material={new THREE.MeshStandardMaterial({ color: "burlywood" })}
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -1.9, 0]}
    receiveShadow
  />

  {#each cube.cubelets.map( (cublet) => cubeletToBoxPosition(cublet, rotating, $angle) ) as box, index}
    <SC.Group
      position={[box.x, box.y, box.z]}
      rotation={[box.xa, box.ya, box.za]}
    >
      <SC.Mesh
        geometry={new THREE.BoxGeometry(0.99, 0.99, 0.99)}
        material={new THREE.MeshStandardMaterial({ color: "black" })}
        castShadow
      />
      {#each box.planes as plane, idx}
        <SC.Mesh
          geometry={new THREE.PlaneGeometry(0.95, 0.95)}
          material={new THREE.MeshStandardMaterial({
            color: plane.color,
            side: THREE.DoubleSide,
          })}
          rotation={[plane.xa, plane.ya, plane.za]}
          position={[plane.x, plane.y, plane.z]}
          receiveShadow
        />
      {/each}
    </SC.Group>
  {/each}

  <SC.PerspectiveCamera bind:this={camera} position={$cameraPosition} />
  <SC.OrbitControls />
  <SC.AmbientLight intensity={0.6} />
  <SC.DirectionalLight
    intensity={0.6}
    position={[-2, 3, 2]}
    shadow={{ mapSize: [2048, 2048] }}
  />
</SC.Canvas>

<div style="position: absolute; bottom: 0; right: 0; z-index: 999">
  <Menu bind:open />
  <div style="float:right">
    <Hamburger bind:open />
  </div>
</div>
