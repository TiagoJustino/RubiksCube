import { getThreeJsCamera } from "./get-threejs-camera.ts";
import { CAMERA_INITIAL_POSITION, CAMERA_RESET_DURATION } from "./contants.ts";
import { cubicOut } from "svelte/easing";

const resetCamera = (cam: any, camPosition: any) => {
  const tjsCamera = getThreeJsCamera(cam);
  if (tjsCamera) {
    const { x, y, z } = tjsCamera.position;
    camPosition.set([x, y, z], { duration: 0 });
  }
  camPosition.set(
    [
      CAMERA_INITIAL_POSITION[0],
      CAMERA_INITIAL_POSITION[1],
      CAMERA_INITIAL_POSITION[2],
    ],
    {
      duration: CAMERA_RESET_DURATION,
      easing: cubicOut,
    }
  );
};

export { resetCamera };
