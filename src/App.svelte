<script lang="ts">
  import * as THREE from "three";
  import { cubeletToBoxPosition } from "./lib/cubelet-to-box-position";
  import Menu from "./lib/Menu.svelte";
  import { Cube } from "./cube/cube";
  import { Rotation } from "./cube/rotation";
  import * as knobby from "svelte-knobby";
  import { Hamburger } from "svelte-hamburgers";
  import * as SC from "svelte-cubed";
  import { tweened } from "svelte/motion";
  import { CAMERA_INITIAL_POSITION } from "./lib/contants";
  import { getKnobbyConfig } from "./lib/get-knobby-config";
  import { solve } from "./lib/solve";
  import { resetCamera } from "./lib/reset-camera";
  import { shuffleCube } from "./lib/shuffle-cube";
  import { resetCube } from "./lib/reset-cube";
  import { getMovesMap } from "./lib/get-moves-map";

  let camera: any;
  let open: any;

  const gAngle = tweened(0);
  const cameraPosition = tweened([
    CAMERA_INITIAL_POSITION[0],
    CAMERA_INITIAL_POSITION[1],
    CAMERA_INITIAL_POSITION[2],
  ]);

  const global = {
    rotating: null,
    rotation: Rotation.clockwise,
    shuffling: false,
    solving: false,
    solveMoves: [],
    shufflingCycles: 0,
    cube: new Cube(),
  };

  const movesMap = getMovesMap(global, gAngle);

  const resetCam = () => resetCamera(camera, cameraPosition);
  const solveFirst = () => solve(true, global, movesMap);
  const shuffleCubeFirst = () => shuffleCube(true, global, movesMap);
  const resetCubeG = () => resetCube(global, gAngle);

  const knobbyConfig = getKnobbyConfig(
    movesMap,
    shuffleCubeFirst,
    solveFirst,
    resetCubeG,
    resetCam
  );

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

  {#each global.cube.cubelets.map( (cublet) => cubeletToBoxPosition(cublet, global.rotating, $gAngle) ) as box, index}
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
