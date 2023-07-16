import { Face } from "../cube/face.ts";
import { Rotation } from "../cube/rotation.ts";
import { onFinishRotation } from "./on-finish-rotation.ts";
import { quadInOut } from "svelte/easing";
import { ROTATION_DURATION } from "./contants.ts";

const getRotationFunction = (
  _rotating: Face,
  _rotation: Rotation,
  g: any,
  angle: any
): Function => {
  return (cb: Function) => {
    if (g.rotating) {
      return;
    }
    g.rotating = _rotating;
    g.rotation = _rotation;
    if (g.rotation == Rotation.clockwise) {
      angle.set(Math.PI / 2, {
        duration: ROTATION_DURATION,
        easing: quadInOut,
      });
    } else {
      angle.set(-(Math.PI / 2), {
        duration: ROTATION_DURATION,
        easing: quadInOut,
      });
    }
    setTimeout(onFinishRotation.bind(this, cb, g, angle), ROTATION_DURATION);
  };
};

export { getRotationFunction };
