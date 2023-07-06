<script lang="ts">
  import * as THREE from 'three';
  import * as SC from 'svelte-cubed';
  import { cubeletToBoxPosition } from './lib/cubelet-to-box-position';
  import { Cube } from './cube/cube';
  import { Face } from './cube/face';
  import { Rotation } from './cube/rotation';
  import * as knobby from 'svelte-knobby';
  import type { Writable } from 'svelte/store';

  const ANGLE_STEP_SIZE = Math.PI / 2 / 15;
  const CAMERA_INITIAL_POSITION = [3, 4, 5];
  const moves: string[] = [
    'top',
    'left',
    'front',
    'right',
    'back',
    'down',
    'top prime',
    'left prime',
    'front prime',
    'right prime',
    'back prime',
    'down prime'
  ];
  const movesAliases: Record<string, string> = {
    t: 'top',
    l: 'left',
    f: 'front',
    r: 'right',
    b: 'back',
    d: 'down',
    T: 'top prime',
    L: 'left prime',
    F: 'front prime',
    R: 'right prime',
    B: 'back prime',
    D: 'down prime'
  };

  let cube: Cube = new Cube();
  let rotating: Face = null as unknown as Face;
  let rotation: Rotation = Rotation.clockwise;
  let angle = Math.PI / 2;
  let cameraPosition = CAMERA_INITIAL_POSITION;
  let shuffling = false;
  let solving = false;
  let solveMoves: string[] = [];
  let shufflingFirst = true;
  let shufflingCycles = 0;
  let controls: Writable<any>;

  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getSolveButton(): HTMLButtonElement {
    const detailsKnobby = document.querySelector('details.knobby') as Element;
    const divRoot = detailsKnobby.querySelector('div.root') as Element;
    return Array.from(divRoot.querySelectorAll('button')).find(el => el.textContent == 'solve') as HTMLButtonElement;
  }
  
  function disableSolveButton() {
    getSolveButton().disabled = true;
  }

  function enableSolveButton() {
    getSolveButton().disabled = false;
  }

  function rotatingLoop() {
    if (
      (rotation == Rotation.clockwise && angle >= Math.PI / 2) ||
      (rotation == Rotation.counterclockwise && angle <= -(Math.PI / 2))
    ) {
      cube = cube.rotate(rotating, rotation as Rotation);
      rotating = null as unknown as Face;
      angle = 0;
    } else {
      angle = angle + (rotation == Rotation.clockwise ? 1 : -1) * ANGLE_STEP_SIZE;
    }
  }

  function shufflingLoop() {
    if (shufflingFirst) {
      shufflingCycles = 20;
      shufflingFirst = false;
    }
    const len = moves.length;
    if (shufflingCycles <= 0) {
      shuffling = false;
      cube.print2d();
      return;
    }
    shufflingCycles--;
    const i = getRandom(0, len - 1);
    const move = moves[i];
    const moveAsFunction = ($controls as unknown as Record<string, Function>)[move];
    moveAsFunction();
  }

  function setSolveMoves(moves: string[]) {
    solveMoves = moves.join('').split('');
    solving = true;
  }

  function getNextSolveMoves() {
    solveMoves = cube.clone().solve();
    if(solveMoves.length > 0) {
      setSolveMoves(solveMoves);
      disableSolveButton();
    } else {
      solving = false;
      enableSolveButton();
    }
  }

  function solvingLoop() {
    if (solveMoves.length < 1) {
      solving = false;
      enableSolveButton();
    }
    if(solving) {
      const moveAlias: string = solveMoves.splice(0, 1)[0];
      const move: string = movesAliases[moveAlias];
      const moveAsFunction = ($controls as unknown as Record<string, Function>)[move];
      moveAsFunction();
    }
  }

  function onFrameLoop() {
    if (rotating) {
      rotatingLoop();
    } else if (shuffling) {
      shufflingLoop();
    } else if (solving) {
      solvingLoop();
    }
  }

  controls = knobby.panel({
    top: () => {
      rotating = Face.top;
      rotation = Rotation.clockwise;
    },
    left: () => {
      rotating = Face.left;
      rotation = Rotation.clockwise;
    },
    front: () => {
      rotating = Face.front;
      rotation = Rotation.clockwise;
    },
    right: () => {
      rotating = Face.right;
      rotation = Rotation.clockwise;
    },
    back: () => {
      rotating = Face.back;
      rotation = Rotation.clockwise;
    },
    down: () => {
      rotating = Face.down;
      rotation = Rotation.clockwise;
    },
    'top prime': () => {
      rotating = Face.top;
      rotation = Rotation.counterclockwise;
    },
    'left prime': () => {
      rotating = Face.left;
      rotation = Rotation.counterclockwise;
    },
    'front prime': () => {
      rotating = Face.front;
      rotation = Rotation.counterclockwise;
    },
    'right prime': () => {
      rotating = Face.right;
      rotation = Rotation.counterclockwise;
    },
    'back prime': () => {
      rotating = Face.back;
      rotation = Rotation.counterclockwise;
    },
    'down prime': () => {
      rotating = Face.down;
      rotation = Rotation.counterclockwise;
    },
    shuffle: () => {
      shuffling = true;
      shufflingFirst = true;
    },
    solve: () => {
      getNextSolveMoves();
    },
    reset: () => {
      cube = new Cube();
    },
    'reset camera': () => {
      cameraPosition = CAMERA_INITIAL_POSITION;
    }
  });

  $controls.workaround = true;
  $controls.DO_NOT_DELETE_ME = true;

  SC.onFrame(onFrameLoop);
</script>

<SC.Canvas
  antialias
  background={new THREE.Color('papayawhip')}
  fog={new THREE.FogExp2('papayawhip', 0.1)}
  shadows
>
  <SC.Mesh
    geometry={new THREE.PlaneGeometry(50, 50)}
    material={new THREE.MeshStandardMaterial({ color: 'burlywood' })}
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -1.9, 0]}
    receiveShadow
  />

  {#each cube.cubelets.map((cublet) => cubeletToBoxPosition(cublet, rotating, angle)) as box, index}
    <SC.Group position={[box.x, box.y, box.z]} rotation={[box.xa, box.ya, box.za]}>
      <SC.Mesh
        geometry={new THREE.BoxGeometry(0.99, 0.99, 0.99)}
        material={new THREE.MeshStandardMaterial({ color: 'black' })}
        castShadow
      />
      {#each box.planes as plane, idx}
        <SC.Mesh
          geometry={new THREE.PlaneGeometry(0.95, 0.95)}
          material={new THREE.MeshStandardMaterial({ color: plane.color, side: THREE.DoubleSide })}
          rotation={[plane.xa, plane.ya, plane.za]}
          position={[plane.x, plane.y, plane.z]}
          receiveShadow
        />
      {/each}
    </SC.Group>
  {/each}

  <SC.PerspectiveCamera position={cameraPosition} />
  <SC.OrbitControls />
  <SC.AmbientLight intensity={0.6} />
  <SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }} />
</SC.Canvas>
