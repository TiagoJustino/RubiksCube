import { Face } from "../cube/face.ts";
import { Rotation } from "../cube/rotation.ts";

const onFinishRotation = (cb: Function, g: any, angle: any) => {
  g.cube = g.cube.rotate(g.rotating, g.rotation as Rotation);
  g.rotating = null as unknown as Face;
  angle.set(0, { duration: 0 });
  if (cb && typeof cb == "function") {
    cb();
  }
};

export { onFinishRotation };
