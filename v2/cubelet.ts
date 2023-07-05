import { CubeletType } from "./cubelet-type.ts";
import { IFacelet, Facelet } from "./facelet.ts";
import { Axis } from "./axis.ts";
import { Color } from "./color.ts";
import { Face } from "./face.ts";
import { Rotation } from "./rotation.ts";

interface ICubelet {
  x: number;
  y: number;
  z: number;
  type: CubeletType;
  facelets: IFacelet[];
  getFaces(): Face[];
  export(): void;
  clone(): Cubelet;
  rotate(face: Face, rotationt: Rotation): void;
  satisfies(facelet: string): boolean;
}

class Cubelet implements ICubelet {
  type: CubeletType;
  facelets: Facelet[];

  constructor(
    public x: number,
    public y: number,
    public z: number,
    type?: CubeletType,
    facelets?: Facelet[]
  ) {
    if (type) {
      this.type = type;
    } else {
      this.type = this.initType(x, y, z);
    }
    if (facelets) {
      this.facelets = facelets;
    } else {
      this.facelets = this.initFacelets();
    }
  }

  clone(): Cubelet {
    const facelets: Facelet[] = [];
    for (const facelet of this.facelets) {
      facelets.push(facelet.clone());
    }
    const newCubelet = new Cubelet(this.x, this.y, this.z, this.type, facelets);
    return newCubelet;
  }

  satisfies(faceletState: string): boolean {
    const facelet: string = this.facelets
      .map((f) => `${f.axis}${f.color}`)
      .sort()
      .join(";");
    return faceletState == facelet;
  }

  toString() {
    const x = `${(this.x < 0 ? "" : " " )}${this.x}`;
    const y = `${(this.y < 0 ? "" : " " )}${this.y}`;
    const z = `${(this.z < 0 ? "" : " " )}${this.z}`;
    const thisCubelet = `${x}${y}${z}`;
    const thisFacelet: string = this.facelets
      .map((f) => `${f.axis}${f.color}`)
      .sort()
      .join(";");
    return `${thisCubelet}:${thisFacelet}`;
  }

  export() {
    console.log(this.toString());
  }

  initFacelets(): Facelet[] {
    switch (this.type) {
      case CubeletType.center:
        return this.initCenterFacelet();
      case CubeletType.edge:
        return this.initEdgeFacelets();
      case CubeletType.corner:
        return this.initCornerFacelets();
    }
    return [];
  }

  initCenterFacelet(): Facelet[] {
    if (this.x != 0) {
      return [
        new Facelet(Axis.x, this.x, this.x < 0 ? Color.red : Color.orange),
      ];
    }
    if (this.y != 0) {
      return [
        new Facelet(Axis.y, this.y, this.y < 0 ? Color.yellow : Color.white),
      ];
    }
    return [new Facelet(Axis.z, this.z, this.z < 0 ? Color.green : Color.blue)];
  }

  initEdgeFacelets(): Facelet[] {
    if (this.x == 0) {
      return [
        new Facelet(Axis.y, this.y, this.y < 0 ? Color.yellow : Color.white),
        new Facelet(Axis.z, this.z, this.z < 0 ? Color.green : Color.blue),
      ];
    }
    if (this.y == 0) {
      return [
        new Facelet(Axis.x, this.x, this.x < 0 ? Color.red : Color.orange),
        new Facelet(Axis.z, this.z, this.z < 0 ? Color.green : Color.blue),
      ];
    }
    return [
      new Facelet(Axis.x, this.x, this.x < 0 ? Color.red : Color.orange),
      new Facelet(Axis.y, this.y, this.y < 0 ? Color.yellow : Color.white),
    ];
  }

  initCornerFacelets(): Facelet[] {
    return [
      new Facelet(Axis.x, this.x, this.x < 0 ? Color.red : Color.orange),
      new Facelet(Axis.y, this.y, this.y < 0 ? Color.yellow : Color.white),
      new Facelet(Axis.z, this.z, this.z < 0 ? Color.green : Color.blue),
    ];
  }

  initType(x: number, y: number, z: number): CubeletType {
    const middle = ["000"];
    const center = ["-100", "0-10", "00-1", "100", "010", "001"];
    const corner = [
      "-1-1-1",
      "-1-11",
      "-11-1",
      "-111",
      "1-1-1",
      "1-11",
      "11-1",
      "111",
    ];
    if (middle.includes([x, y, z].join(""))) {
      return CubeletType.middle;
    }
    if (center.includes([x, y, z].join(""))) {
      return CubeletType.center;
    }
    if (corner.includes([x, y, z].join(""))) {
      return CubeletType.corner;
    }
    return CubeletType.edge;
  }

  getFaces(): Face[] {
    const faces: Face[] = [];
    if (this.y > 0) {
      faces.push(Face.top);
    }
    if (this.x < 0) {
      faces.push(Face.left);
    }
    if (this.z < 0) {
      faces.push(Face.back);
    }
    if (this.x > 0) {
      faces.push(Face.right);
    }
    if (this.z > 0) {
      faces.push(Face.front);
    }
    if (this.y < 0) {
      faces.push(Face.down);
    }
    return faces;
  }

  rotateTop(rotation: Rotation) {
    if (rotation == Rotation.clockwise) {
      const tmp = this.x;
      this.x = -1 * this.z;
      this.z = tmp;
    } else {
      const tmp = this.x;
      this.x = this.z;
      this.z = -1 * tmp;
    }
  }

  rotateLeft(rotation: Rotation) {
    if (rotation == Rotation.clockwise) {
      const tmp = this.z;
      this.z = this.y;
      this.y = -1 * tmp;
    } else {
      const tmp = this.z;
      this.z = -1 * this.y;
      this.y = tmp;
    }
  }

  rotateFront(rotation: Rotation) {
    if (rotation == Rotation.clockwise) {
      const tmp = this.x;
      this.x = this.y;
      this.y = -1 * tmp;
    } else {
      const tmp = this.x;
      this.x = -1 * this.y;
      this.y = tmp;
    }
  }

  rotateRight(rotation: Rotation) {
    const keys = Object.keys(Rotation);
    this.rotateLeft(
      keys[(keys.indexOf(rotation) + 1) % keys.length] as Rotation
    );
  }

  rotateBack(rotation: Rotation) {
    const keys = Object.keys(Rotation);
    this.rotateFront(
      keys[(keys.indexOf(rotation) + 1) % keys.length] as Rotation
    );
  }

  rotateDown(rotation: Rotation) {
    const keys = Object.keys(Rotation);
    this.rotateTop(
      keys[(keys.indexOf(rotation) + 1) % keys.length] as Rotation
    );
  }

  rotateFace(face: Face, rotation: Rotation) {
    switch (face) {
      case Face.top:
        return this.rotateTop(rotation);
      case Face.left:
        return this.rotateLeft(rotation);
      case Face.front:
        return this.rotateFront(rotation);
      case Face.right:
        return this.rotateRight(rotation);
      case Face.back:
        return this.rotateBack(rotation);
      case Face.down:
        return this.rotateDown(rotation);
    }
  }

  rotate(face: Face, rotation: Rotation) {
    this.rotateFace(face, rotation);
    for (const facelet of this.facelets) {
      if (facelet.face != face) {
        facelet.rotate(face, rotation);
      }
    }
  }
}

export { Cubelet };
export type { ICubelet };
