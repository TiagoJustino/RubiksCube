import { Axis } from '../cube/axis.ts';
import { Color } from '../cube/color.ts';
import type { ICubelet } from '../cube/cubelet.ts';
import type { IFacelet } from '../cube/facelet.ts';
import { Face } from '../cube/face.ts';

interface IPlane {
  x: number;
  y: number;
  z: number;
  xa: number;
  ya: number;
  za: number;
  color: Color;
}

interface IBoxPosition {
  x: number;
  y: number;
  z: number;
  xa: number;
  ya: number;
  za: number;
  planes: IPlane[];
}

function faceletToPlane(facelet: IFacelet): IPlane {
  return {
    x: facelet.axis == Axis.x ? 0.5 * facelet.direction : 0,
    y: facelet.axis == Axis.y ? 0.5 * facelet.direction : 0,
    z: facelet.axis == Axis.z ? 0.5 * facelet.direction : 0,
    xa: facelet.axis == Axis.y ? Math.PI / 2 : 0,
    ya: facelet.axis == Axis.x ? Math.PI / 2 : 0,
    za: facelet.axis == Axis.z ? Math.PI / 2 : 0,
    color: facelet.color
  };
}

function calculateRotationX(x: number, y: number, angle: number): number {
  return x * Math.cos(angle) - y * Math.sin(angle);
}

function calculateRotationY(x: number, y: number, angle: number): number {
  return x * Math.sin(angle) + y * Math.cos(angle);
}

function getCubeletCoordinatValue(
  axis: Axis,
  cubelet: ICubelet,
  rotatingFace: Face,
  angle: number
): number {
  const x = cubelet.x;
  const y = cubelet.y;
  const z = cubelet.z;
  if (!rotatingFace) {
    return cubelet[axis];
  }
  if (!cubelet.getFaces().includes(rotatingFace)) {
    return cubelet[axis];
  }
  switch (rotatingFace) {
    case Face.top:
      return axis == Axis.z
        ? calculateRotationX(z, x, -1 * angle)
        : axis == Axis.x
        ? calculateRotationY(z, x, -1 * angle)
        : cubelet[axis];
    case Face.left:
      return axis == Axis.y
        ? calculateRotationX(y, z, angle)
        : axis == Axis.z
        ? calculateRotationY(y, z, angle)
        : cubelet[axis];
    case Face.front:
      return axis == Axis.x
        ? calculateRotationX(x, y, -1 * angle)
        : axis == Axis.y
        ? calculateRotationY(x, y, -1 * angle)
        : cubelet[axis];
    case Face.right:
      return axis == Axis.y
        ? calculateRotationX(y, z, -1 * angle)
        : axis == Axis.z
        ? calculateRotationY(y, z, -1 * angle)
        : cubelet[axis];
    case Face.back:
      return axis == Axis.x
        ? calculateRotationX(x, y, angle)
        : axis == Axis.y
        ? calculateRotationY(x, y, angle)
        : cubelet[axis];
    case Face.down:
      return axis == Axis.z
        ? calculateRotationX(z, x, angle)
        : axis == Axis.x
        ? calculateRotationY(z, x, angle)
        : cubelet[axis];
  }
}

function getCubeletAxisAngle(
  axis: Axis,
  cubelet: ICubelet,
  rotatingFace: Face,
  angle: number
): number {
  if (!rotatingFace) {
    return 0;
  }
  if (!cubelet.getFaces().includes(rotatingFace)) {
    return 0;
  }
  if (
    (axis != Axis.x || ![Face.left, Face.right].includes(rotatingFace)) &&
    (axis != Axis.y || ![Face.top, Face.down].includes(rotatingFace)) &&
    (axis != Axis.z || ![Face.front, Face.back].includes(rotatingFace))
  ) {
    return 0;
  }
  if ([Face.left, Face.back, Face.down].includes(rotatingFace)) {
    return angle;
  }
  return -1 * angle;
}

function cubeletToBoxPosition(cubelet: ICubelet, rotatingFace: Face, angle: number): IBoxPosition {
  const planes: IPlane[] = cubelet.facelets.map(faceletToPlane);
  return {
    x: getCubeletCoordinatValue(Axis.x, cubelet, rotatingFace, angle),
    y: getCubeletCoordinatValue(Axis.y, cubelet, rotatingFace, angle),
    z: getCubeletCoordinatValue(Axis.z, cubelet, rotatingFace, angle),
    xa: getCubeletAxisAngle(Axis.x, cubelet, rotatingFace, angle),
    ya: getCubeletAxisAngle(Axis.y, cubelet, rotatingFace, angle),
    za: getCubeletAxisAngle(Axis.z, cubelet, rotatingFace, angle),
    planes
  };
}

export { cubeletToBoxPosition };
export type { IBoxPosition };
