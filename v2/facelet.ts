import { Axis } from "./axis.ts";
import { Color } from "./color.ts";
import { Face } from "./face.ts";
import { Rotation } from "./rotation.ts";

interface IFacelet {
  axis: Axis;
  direction: number;
  color: Color;
}

const axisFaces: Record<Axis, [Face, Face]> = {
  [Axis.x]: [Face.left, Face.right],
  [Axis.y]: [Face.top, Face.down],
  [Axis.z]: [Face.back, Face.front],
};

class Facelet implements IFacelet {
  constructor(
    public axis: Axis,
    public direction: number,
    public color: Color
  ) {}

  getFace(): Face {
    if (this.axis == Axis.x) {
      if (this.direction > 0) {
        return Face.right;
      }
      return Face.left;
    }
    if (this.axis == Axis.y) {
      if (this.direction > 0) {
        return Face.top;
      }
      return Face.down;
    }
    if (this.direction > 0) {
      return Face.front;
    }
    return Face.back;
  }

  rotateCommon(rotation: Rotation, axis: [Axis, Axis]) {
    const face = this.getFace();
    if (
      (rotation == Rotation.clockwise && axisFaces[axis[0]].includes(face)) ||
      (rotation == Rotation.counterclockwise &&
        axisFaces[axis[1]].includes(face))
    ) {
      this.direction = -1 * this.direction;
    }
    this.axis = axis[(axis.indexOf(this.axis) + 1) % 2];
  }

  rotateTop(rotation: Rotation) {
    this.rotateCommon(rotation, [Axis.z, Axis.x]);
  }

  rotateLeft(rotation: Rotation) {
    this.rotateCommon(rotation, [Axis.z, Axis.y]);
  }

  rotateFront(rotation: Rotation) {
    this.rotateCommon(rotation, [Axis.x, Axis.y]);
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

  rotate(face: Face, rotation: Rotation) {
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
}

export { Facelet };
export type { IFacelet };
