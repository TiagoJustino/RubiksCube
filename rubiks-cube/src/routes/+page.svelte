<script lang="ts">
  import * as THREE from 'three';
  import * as SC from 'svelte-cubed';
  import { cubeletToBoxPosition } from '$lib/cubelet-to-box-position';
  import { Cube } from '../../../v2/cube';
  import { Face } from '../../../v2/face';
  import { Rotation } from '../../../v2/rotation';
  import * as knobby from 'svelte-knobby';

  const ANGLE_STEP_SIZE = Math.PI / 2 / 45;
  const CAMERA_INITIAL_POSITION = [3, 4, 5];
  let cube: Cube = new Cube();
  let rotating: Face = null as unknown as Face;
  let rotation: Rotation = Rotation.clockwise;
  let angle = Math.PI / 6;
  let cameraPosition = CAMERA_INITIAL_POSITION;

  const controls = knobby.panel({
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
    reset: () => {
      cube = new Cube();
    },
    'reset camera': () => {
      cameraPosition = CAMERA_INITIAL_POSITION;
    },
  });
  $controls.workaround = true;
  $controls.DO_NOT_DELETE_ME = true;
  SC.onFrame(() => {
    if (rotating) {
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
  });
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

  {#each cube.cubelets.map( (cublet) => cubeletToBoxPosition(cublet, rotating, angle) ) as box, index}
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
