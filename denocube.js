const cube = {};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

cube.newCube = function() {
  const ret = {
    faces: {
      top:   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
      down:  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
      left:  ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
      right: ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      front: ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      back:  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    }
  };
  return ret;
}

cube.rotateFace = function(f) {
  const tmpc = f[0];
  const tmpe = f[1];

  f[0] = f[6];
  f[6] = f[8];
  f[8] = f[2];
  f[2] = tmpc;

  f[1] = f[3];
  f[3] = f[7];
  f[7] = f[5];
  f[5] = tmpe;
};

cube.assignArray = function(f1, f2, f1i, f2i) {
  for (let i = 0; i < f1i.length; i++) {
    f1[f1i[i]] = f2[f2i[i]];
  }
};

cube.rotateTop = function(c) {
  const faces = [c.faces.left, c.faces.front, c.faces.right, c.faces.back];
  const tmp = [];
  cube.rotateFace(c.faces.top);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [0, 1, 2]);
  cube.assignArray(faces[0], faces[1], [0, 1, 2], [0, 1, 2]);
  cube.assignArray(faces[1], faces[2], [0, 1, 2], [0, 1, 2]);
  cube.assignArray(faces[2], faces[3], [0, 1, 2], [0, 1, 2]);
  cube.assignArray(faces[3],      tmp, [0, 1, 2], [0, 1, 2]);
};

cube.rotateDown = function(c) {
  const faces = [c.faces.back, c.faces.right, c.faces.front, c.faces.left];
  const tmp = [];
  cube.rotateFace(c.faces.down);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [6, 7, 8]);
  cube.assignArray(faces[0], faces[1], [6, 7, 8], [6, 7, 8]);
  cube.assignArray(faces[1], faces[2], [6, 7, 8], [6, 7, 8]);
  cube.assignArray(faces[2], faces[3], [6, 7, 8], [6, 7, 8]);
  cube.assignArray(faces[3],      tmp, [6, 7, 8], [0, 1, 2]);
};

cube.rotateLeft = function(c) {
  const faces = [c.faces.back, c.faces.down, c.faces.front, c.faces.top];
  const tmp = [];
  cube.rotateFace(c.faces.left);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [8, 5, 2]);
  cube.assignArray(faces[0], faces[1], [8, 5, 2], [0, 3, 6]);
  cube.assignArray(faces[1], faces[2], [0, 3, 6], [0, 3, 6]);
  cube.assignArray(faces[2], faces[3], [0, 3, 6], [0, 3, 6]);
  cube.assignArray(faces[3],      tmp, [0, 3, 6], [0, 1, 2]);
};

cube.rotateRight = function(c) {
  const faces = [c.faces.top, c.faces.front, c.faces.down, c.faces.back];
  const tmp = [];
  cube.rotateFace(c.faces.right);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [2, 5, 8]);
  cube.assignArray(faces[0], faces[1], [2, 5, 8], [2, 5, 8]);
  cube.assignArray(faces[1], faces[2], [2, 5, 8], [2, 5, 8]);
  cube.assignArray(faces[2], faces[3], [2, 5, 8], [6, 3, 0]);
  cube.assignArray(faces[3],      tmp, [6, 3, 0], [0, 1, 2]);
};

cube.rotateFront = function(c) {
  const faces = [c.faces.top, c.faces.left, c.faces.down, c.faces.right];
  const tmp = [];
  cube.rotateFace(c.faces.front);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [6, 7, 8]);
  cube.assignArray(faces[0], faces[1], [6, 7, 8], [8, 5, 2]);
  cube.assignArray(faces[1], faces[2], [2, 5, 8], [0, 1, 2]);
  cube.assignArray(faces[2], faces[3], [0, 1, 2], [6, 3, 0]);
  cube.assignArray(faces[3],      tmp, [0, 3, 6], [0, 1, 2]);
};

cube.rotateBack = function(c) {
  const faces = [c.faces.right, c.faces.down, c.faces.left, c.faces.top];
  const tmp = [];
  cube.rotateFace(c.faces.back);
  cube.assignArray(     tmp, faces[0], [0, 1, 2], [2, 5, 8]);
  cube.assignArray(faces[0], faces[1], [2, 5, 8], [8, 7, 6]);
  cube.assignArray(faces[1], faces[2], [6, 7, 8], [0, 3, 6]);
  cube.assignArray(faces[2], faces[3], [0, 3, 6], [2, 1, 0]);
  cube.assignArray(faces[3],      tmp, [0, 1, 2], [0, 1, 2]);
};

cube.rotateTopPrime = function(c) {
  cube.rotateTop(c);
  cube.rotateTop(c);
  cube.rotateTop(c);
}

cube.rotateDownPrime = function(c) {
  cube.rotateDown(c);
  cube.rotateDown(c);
  cube.rotateDown(c);
}

cube.rotateLeftPrime = function(c) {
  cube.rotateLeft(c);
  cube.rotateLeft(c);
  cube.rotateLeft(c);
}

cube.rotateRightPrime = function(c) {
  cube.rotateRight(c);
  cube.rotateRight(c);
  cube.rotateRight(c);
}

cube.rotateFrontPrime = function(c) {
  cube.rotateFront(c);
  cube.rotateFront(c);
  cube.rotateFront(c);
}

cube.rotateBackPrime = function(c) {
  cube.rotateBack(c);
  cube.rotateBack(c);
  cube.rotateBack(c);
}

cube.shuffle = function(c) {
  const movs = ['t', "t'", 'd', "d'", 'l', "l'", 'r', "r'", 'f', "f'", 'b', "b'"];
  const len = movs.length;
  let n = getRandom(12, 18);
  const hist = [];
  while(n > 0) {
    n--;
    const mov = movs[getRandom(0, len - 1)];
    hist.push(mov);
    cube.rotate(mov, c);
  }
  return hist;
}

cube.rotate = function(input, c) {
  if(input == 't') {
    cube.rotateTop(c);
  } else if (input == "t'") {
    cube.rotateTopPrime(c);
  } else if (input == 'd') {
    cube.rotateDown(c);
  } else if (input == "d'") {
    cube.rotateDownPrime(c);
  } else if (input == 'l') {
    cube.rotateLeft(c);
  } else if (input == "l'") {
    cube.rotateLeftPrime(c);
  } else if (input == 'r') {
    cube.rotateRight(c);
  } else if (input == "r'") {
    cube.rotateRightPrime(c);
  } else if (input == 'f') {
    cube.rotateFront(c);
  } else if (input == "f'") {
    cube.rotateFrontPrime(c);
  } else if (input == 'b') {
    cube.rotateBack(c);
  } else if (input == "b'") {
    cube.rotateBackPrime(c);
  }
}

export { cube };
