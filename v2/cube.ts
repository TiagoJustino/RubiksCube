import { Cubelet } from "./cubelet.ts";
import type { ICubelet } from "./cubelet.ts";
import { intermediate2dMap } from "./intermeditate-2d-map.ts";
import { Face } from "./face.ts";
import { Rotation } from "./rotation.ts";

class Cube {
  cubelets: ICubelet[];

  constructor() {
    this.cubelets = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          this.cubelets.push(new Cubelet(x, y, z));
        }
      }
    }
  }

  getIntermediateRepresentation() {
    const res: string[][] = [];
    for (let i = 0; i < 6; i++) {
      res[i] = new Array(9).fill(" ");
    }
    for (const cubelet of this.cubelets) {
      for (const facelet of cubelet.facelets) {
        const key = `${cubelet.type};${cubelet.x};${cubelet.y};${cubelet.z};${facelet.axis};${facelet.direction}`;
        const [faceIndex, faceletIndex] = intermediate2dMap[key]
          .split(";")
          .map((part) => parseInt(part, 10));
        res[faceIndex][faceletIndex] = facelet.color.charAt(0);
      }
    }
    return res;
  }

  get2dString() {
    const offsets = [
      [0, 3],
      [3, 0],
      [3, 3],
      [3, 6],
      [3, 9],
      [6, 3],
    ];
    const res: string[][] = [];
    for (let i = 0; i < 9; i++) {
      res[i] = Array(12).fill(" ");
    }
    const intermediate = this.getIntermediateRepresentation();
    for (let f = 0; f < 6; f++) {
      const face = intermediate[f];
      const [i_offset, j_offset] = offsets[f];
      let n = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          res[i + i_offset][j + j_offset] = face[n];
          n++;
        }
      }
    }
    return " " + res.map((line) => line.join(" ")).join("\n ");
  }

  rotate(face: Face, rotation: Rotation) {
    for(const cubelet of this.cubelets) {
      if(cubelet.getFaces().includes(face)) {
        cubelet.rotate(face, rotation);
      }
    }
    return this;
  }

  print2d() {
    console.log(this.get2dString());
  }
}

export { Cube };
