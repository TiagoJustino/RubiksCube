import { Cube } from "../cube/cube.ts";

const resetCube = (g: any, angle: any) => {
  if (g.rotating || g.shuffling || g.solving) {
    return;
  }
  g.cube = new Cube();
  // workaround to force redraw
  angle.set(0.0001, { duration: 0 });
  angle.set(0, { duration: 0 });
};

export { resetCube };
