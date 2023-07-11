import { Cubelet } from "./cubelet.ts";
import type { ICubelet } from "./cubelet.ts";
import { intermediate2dMap } from "./intermeditate-2d-map.ts";
import { Face } from "./face.ts";
import { Rotation } from "./rotation.ts";
import { rotationAliases } from "./rotation-aliases.ts";
import { CubeState, steps } from "./cube-state.ts";
import { dfs } from "./dfs.ts";
import { testState } from "./test-state.ts";
import { Axis } from "./axis.ts";

interface ICube {
  cubelets: ICubelet[];
  rotateAlias(alias: string): Cube;
  satisfies(cubelets: CubeState): boolean;
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Cube implements ICube {
  cubelets: ICubelet[];

  constructor(cubelets?: Cubelet[]) {
    if (cubelets) {
      this.cubelets = cubelets;
    } else {
      this.cubelets = [];
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          for (let z = -1; z < 2; z++) {
            this.cubelets.push(new Cubelet(x, y, z));
          }
        }
      }
    }
  }

  toString() {
    return this.cubelets.map((c) => c.toString()).join("\n");
  }

  // TODO: increase performance
  satisfies(cubeletStates: CubeState): boolean {
    const cubeState = this.toString();
    return testState(cubeState, cubeletStates);
  }

  /*
  The important part
  inspired by:
  https://www.youtube.com/watch?v=RMo_CLi1Z5g
  https://rogier-en-paul.github.io/HobbySite/rubikscubesolver/
   */
  solve(): string[] {
    let usedMoves: string[] = [];
    for (const step of steps) {
      usedMoves = usedMoves.concat(dfs(this, step.moves, step.state));
    }
    return usedMoves;
  }

  clone(): Cube {
    const cubelets: Cubelet[] = [];
    for (const cubelet of this.cubelets) {
      cubelets.push(cubelet.clone());
    }
    const newCube = new Cube(cubelets);
    return newCube;
  }

  export() {
    for (const cubelet of this.cubelets) {
      cubelet.export();
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

  rotate(face: Face, rotation: Rotation): Cube {
    const faceToAxisVal: Record<Face, { axis: Axis; val: number }> = {
      [Face.top]: { axis: Axis.y, val: 1 },
      [Face.down]: { axis: Axis.y, val: -1 },
      [Face.front]: { axis: Axis.z, val: 1 },
      [Face.back]: { axis: Axis.z, val: -1 },
      [Face.left]: { axis: Axis.x, val: -1 },
      [Face.right]: { axis: Axis.x, val: 1 },
    };
    const axisVal = faceToAxisVal[face];
    for (const cubelet of this.cubelets) {
      if (cubelet[axisVal.axis] == axisVal.val) {
        cubelet.rotate(face, rotation);
      }
    }
    return this;
  }

  shuffle(): string[] {
    const keys = Object.keys(rotationAliases);
    const len = keys.length;
    let rotations = 20;
    const moves: string[] = [];
    while (rotations) {
      const i = getRandom(0, len - 1);
      const move = keys[i];
      this.rotateAlias(move);
      moves.push(move);
      rotations--;
    }
    return moves;
  }

  rotateAlias(alias: string): Cube {
    if (alias.length < 1) {
      return this;
    }
    if (alias.length > 1) {
      const aliases: string[] = alias.match(/.{1,1}/g) as string[];
      for (const currentAlias of aliases) {
        this.rotateAlias(currentAlias);
      }
      return this;
    }
    const rotationAlias = rotationAliases[alias];
    if (!rotationAlias) {
      return this;
    }
    return this.rotate(rotationAlias.face, rotationAlias.rotation);
  }

  print2d() {
    console.log(this.get2dString());
  }
}

export { Cube };
export type { ICube };
