import { getRotationFunction } from "./get-rotation-function.ts";
import { Face } from "../cube/face.ts";
import { Rotation } from "../cube/rotation.ts";

const cw = Rotation.clockwise;
const ccw = Rotation.counterclockwise;

const getMovesMap = (global: any, gAngle: any) => {
  return {
    t: getRotationFunction(Face.top, cw, global, gAngle),
    l: getRotationFunction(Face.left, cw, global, gAngle),
    f: getRotationFunction(Face.front, cw, global, gAngle),
    r: getRotationFunction(Face.right, cw, global, gAngle),
    b: getRotationFunction(Face.back, cw, global, gAngle),
    d: getRotationFunction(Face.down, cw, global, gAngle),
    T: getRotationFunction(Face.top, ccw, global, gAngle),
    L: getRotationFunction(Face.left, ccw, global, gAngle),
    F: getRotationFunction(Face.front, ccw, global, gAngle),
    R: getRotationFunction(Face.right, ccw, global, gAngle),
    B: getRotationFunction(Face.back, ccw, global, gAngle),
    D: getRotationFunction(Face.down, ccw, global, gAngle),
  };
};

export { getMovesMap };
