import { Face } from "./face.ts";
import { Rotation } from "./rotation.ts";

const rotationAliases: Record<string, { face: Face; rotation: Rotation }> = {
  t: { face: Face.top, rotation: Rotation.clockwise },
  T: { face: Face.top, rotation: Rotation.counterclockwise },
  l: { face: Face.left, rotation: Rotation.clockwise },
  L: { face: Face.left, rotation: Rotation.counterclockwise },
  f: { face: Face.front, rotation: Rotation.clockwise },
  F: { face: Face.front, rotation: Rotation.counterclockwise },
  r: { face: Face.right, rotation: Rotation.clockwise },
  R: { face: Face.right, rotation: Rotation.counterclockwise },
  b: { face: Face.back, rotation: Rotation.clockwise },
  B: { face: Face.back, rotation: Rotation.counterclockwise },
  d: { face: Face.down, rotation: Rotation.clockwise },
  D: { face: Face.down, rotation: Rotation.counterclockwise },
};


export { rotationAliases };
