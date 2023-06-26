import chalk from 'https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js'

import { cube } from './denocube.js';

const colorsMap = {
  'w': 'bgWhite',
  'y': 'bgYellow',
  'r': 'bgRed',
  'o': 'bgOrange',
  'b': 'bgBlue',
  'g': 'bgGreen'
};

chalk.bgOrange = chalk.bgHex('#FFA500');

function getInColor(a, b, c) {
  const fa = chalk[colorsMap[a]];
  const fb = chalk[colorsMap[b]];
  const fc = chalk[colorsMap[c]];
  return `${fa(` ${a}`)}${fb(` ${b}`)}${fc(` ${c}`)}`;
}

function printCubeTop(c) {
  console.log(`       ${getInColor(c.faces.top[0], c.faces.top[1], c.faces.top[2])}`);
  console.log(`       ${getInColor(c.faces.top[3], c.faces.top[4], c.faces.top[5])}`);
  console.log(`       ${getInColor(c.faces.top[6], c.faces.top[7], c.faces.top[8])}`);
};

function printCubeMiddle(c) {
  let line1 = `${getInColor(c.faces.left[0] ,c.faces.left[1] ,c.faces.left[2])}`;
  let line2 = `${getInColor(c.faces.left[3] ,c.faces.left[4] ,c.faces.left[5])}`;
  let line3 = `${getInColor(c.faces.left[6] ,c.faces.left[7] ,c.faces.left[8])}`;
  line1 = `${line1} ${getInColor(c.faces.front[0], c.faces.front[1], c.faces.front[2])}`;
  line2 = `${line2} ${getInColor(c.faces.front[3], c.faces.front[4], c.faces.front[5])}`;
  line3 = `${line3} ${getInColor(c.faces.front[6], c.faces.front[7], c.faces.front[8])}`;
  line1 = `${line1} ${getInColor(c.faces.right[0], c.faces.right[1], c.faces.right[2])}`;
  line2 = `${line2} ${getInColor(c.faces.right[3], c.faces.right[4], c.faces.right[5])}`;
  line3 = `${line3} ${getInColor(c.faces.right[6], c.faces.right[7], c.faces.right[8])}`;
  line1 = `${line1} ${getInColor(c.faces.back[0], c.faces.back[1], c.faces.back[2])}`;
  line2 = `${line2} ${getInColor(c.faces.back[3], c.faces.back[4], c.faces.back[5])}`;
  line3 = `${line3} ${getInColor(c.faces.back[6], c.faces.back[7], c.faces.back[8])}`;
  console.log(line1);
  console.log(line2);
  console.log(line3);
};

function printCubeDown(c) {
  console.log(`       ${getInColor(c.faces.down[0] ,c.faces.down[1] ,c.faces.down[2])}`);
  console.log(`       ${getInColor(c.faces.down[3] ,c.faces.down[4] ,c.faces.down[5])}`);
  console.log(`       ${getInColor(c.faces.down[6] ,c.faces.down[7] ,c.faces.down[8])}`);
};

function printCube(c) {
  printCubeTop(c);
  printCubeMiddle(c);
  printCubeDown(c);
};

let myCube = cube.newCube();

function onLine(line) {
  const input = line?.trim();
  if(input == 't') {
    cube.rotate(input, myCube);
  } else if (input == "t'") {
    cube.rotate(input, myCube);
  } else if (input == 'd') {
    cube.rotate(input, myCube);
  } else if (input == "d'") {
    cube.rotate(input, myCube);
  } else if (input == 'l') {
    cube.rotate(input, myCube);
  } else if (input == "l'") {
    cube.rotate(input, myCube);
  } else if (input == 'r') {
    cube.rotate(input, myCube);
  } else if (input == "r'") {
    cube.rotate(input, myCube);
  } else if (input == 'f') {
    cube.rotate(input, myCube);
  } else if (input == "f'") {
    cube.rotate(input, myCube);
  } else if (input == 'b') {
    cube.rotate(input, myCube);
  } else if (input == "b'") {
    cube.rotate(input, myCube);
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
  printCube(myCube);
}

printCube(myCube);
do {
  const line = prompt('');
  onLine(line);
} while(true);
