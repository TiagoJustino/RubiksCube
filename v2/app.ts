import chalk from 'https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js'

import { Cube } from './cube.ts'
import { Face } from './face.ts';
import { Rotation } from './rotation.ts';

const colorsMap = {
  'w': 'bgWhite',
  'y': 'bgYellow',
  'r': 'bgRed',
  'o': 'bgOrange',
  'b': 'bgBlue',
  'g': 'bgGreen'
};

chalk.bgOrange = chalk.bgHex('#FFA500');

const cube = new Cube();

function printCube(cube: Cube) {
  const cubeString: string = cube.get2dString();
  const coloredCube = cubeString.replace(/ [a-z]/g, (facelet: string): string => {
    const key = colorsMap[facelet.charAt(1)];
    const func: Function = (chalk as unknown as Record<string, Function>)[key];
    return func(facelet);
  });
  console.log(coloredCube);
}

function onLine(line: string) {
  const input = line?.trim();
  if(input == 't') {
    cube.rotate(Face.top, Rotation.clockwise);
  } else if (input == 'T') {
    cube.rotate(Face.top, Rotation.counterclockwise);
  } else if (input == 'd') {
    cube.rotate(Face.down, Rotation.clockwise);
  } else if (input == 'D') {
    cube.rotate(Face.down, Rotation.counterclockwise);
  } else if (input == 'l') {
    cube.rotate(Face.left, Rotation.clockwise);
  } else if (input == 'L') {
    cube.rotate(Face.left, Rotation.counterclockwise);
  } else if (input == 'r') {
    cube.rotate(Face.right, Rotation.clockwise);
  } else if (input == 'R') {
    cube.rotate(Face.right, Rotation.counterclockwise);
  } else if (input == 'f') {
    cube.rotate(Face.front, Rotation.clockwise);
  } else if (input == 'F') {
    cube.rotate(Face.front, Rotation.counterclockwise);
  } else if (input == 'b') {
    cube.rotate(Face.back, Rotation.clockwise);
  } else if (input == 'B') {
    cube.rotate(Face.back, Rotation.counterclockwise);
  } else if (input == 's') {
    const movs = cube.shuffle(myCube);
    console.log(' =>', movs.join(' '));
  } else if (input == '0') {
    myCube = cube.newCube();
  } else if (input == 'q' || line == Deno.EOF) {
    console.log('Have a nice one!');
    Deno.exit(0);
  } else {
    console.log('unknown command');
  }
  printCube(cube);
}

printCube(cube);
do {
  const line = prompt('');
  onLine(line);
} while(true);
