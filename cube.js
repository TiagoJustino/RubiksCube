(function(exports){

  exports.newCube = function() {
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

  exports.rotateFace = function(f) {
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

  exports.assignArray = function(f1, f2, f1i, f2i) {
    for (i = 0; i < f1i.length; i++) {
      f1[f1i[i]] = f2[f2i[i]];
    }
  };

  exports.rotateTop = function(c) {
    const faces = [c.faces.left, c.faces.front, c.faces.right, c.faces.back];
    const tmp = [];
    exports.rotateFace(c.faces.top);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [0, 1, 2]);
    exports.assignArray(faces[0], faces[1], [0, 1, 2], [0, 1, 2]);
    exports.assignArray(faces[1], faces[2], [0, 1, 2], [0, 1, 2]);
    exports.assignArray(faces[2], faces[3], [0, 1, 2], [0, 1, 2]);
    exports.assignArray(faces[3],      tmp, [0, 1, 2], [0, 1, 2]);
  };

  exports.rotateDown = function(c) {
    const faces = [c.faces.back, c.faces.right, c.faces.front, c.faces.left];
    const tmp = [];
    exports.rotateFace(c.faces.down);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [6, 7, 8]);
    exports.assignArray(faces[0], faces[1], [6, 7, 8], [6, 7, 8]);
    exports.assignArray(faces[1], faces[2], [6, 7, 8], [6, 7, 8]);
    exports.assignArray(faces[2], faces[3], [6, 7, 8], [6, 7, 8]);
    exports.assignArray(faces[3],      tmp, [6, 7, 8], [0, 1, 2]);
  };

  exports.rotateLeft = function(c) {
    const faces = [c.faces.back, c.faces.down, c.faces.front, c.faces.top];
    const tmp = [];
    exports.rotateFace(c.faces.left);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [8, 5, 2]);
    exports.assignArray(faces[0], faces[1], [8, 5, 2], [0, 3, 6]);
    exports.assignArray(faces[1], faces[2], [0, 3, 6], [0, 3, 6]);
    exports.assignArray(faces[2], faces[3], [0, 3, 6], [0, 3, 6]);
    exports.assignArray(faces[3],      tmp, [0, 3, 6], [0, 1, 2]);
  };

  exports.rotateRight = function(c) {
    const faces = [c.faces.top, c.faces.front, c.faces.down, c.faces.back];
    const tmp = [];
    exports.rotateFace(c.faces.right);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [2, 5, 8]);
    exports.assignArray(faces[0], faces[1], [2, 5, 8], [2, 5, 8]);
    exports.assignArray(faces[1], faces[2], [2, 5, 8], [2, 5, 8]);
    exports.assignArray(faces[2], faces[3], [2, 5, 8], [6, 3, 0]);
    exports.assignArray(faces[3],      tmp, [6, 3, 0], [0, 1, 2]);
  };

  exports.rotateFront = function(c) {
    const faces = [c.faces.top, c.faces.left, c.faces.down, c.faces.right];
    const tmp = [];
    exports.rotateFace(c.faces.front);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [6, 7, 8]);
    exports.assignArray(faces[0], faces[1], [6, 7, 8], [8, 5, 2]);
    exports.assignArray(faces[1], faces[2], [2, 5, 8], [0, 1, 2]);
    exports.assignArray(faces[2], faces[3], [0, 1, 2], [6, 3, 0]);
    exports.assignArray(faces[3],      tmp, [0, 3, 6], [0, 1, 2]);
  };

  exports.rotateBack = function(c) {
    const faces = [c.faces.right, c.faces.down, c.faces.left, c.faces.top];
    const tmp = [];
    exports.rotateFace(c.faces.back);
    exports.assignArray(     tmp, faces[0], [0, 1, 2], [2, 5, 8]);
    exports.assignArray(faces[0], faces[1], [2, 5, 8], [8, 7, 6]);
    exports.assignArray(faces[1], faces[2], [6, 7, 8], [0, 3, 6]);
    exports.assignArray(faces[2], faces[3], [0, 3, 6], [2, 1, 0]);
    exports.assignArray(faces[3],      tmp, [0, 1, 2], [0, 1, 2]);
  };

  exports.rotateTopPrime = function(c) {
    exports.rotateTop(c);
    exports.rotateTop(c);
    exports.rotateTop(c);
  }

  exports.rotateDownPrime = function(c) {
    exports.rotateDown(c);
    exports.rotateDown(c);
    exports.rotateDown(c);
  }

  exports.rotateLeftPrime = function(c) {
    exports.rotateLeft(c);
    exports.rotateLeft(c);
    exports.rotateLeft(c);
  }

  exports.rotateRightPrime = function(c) {
    exports.rotateRight(c);
    exports.rotateRight(c);
    exports.rotateRight(c);
  }

  exports.rotateFrontPrime = function(c) {
    exports.rotateFront(c);
    exports.rotateFront(c);
    exports.rotateFront(c);
  }

  exports.rotateBackPrime = function(c) {
    exports.rotateBack(c);
    exports.rotateBack(c);
    exports.rotateBack(c);
  }

  exports.rotate = function(input, c) {
    if(input == 't') {
      exports.rotateTop(c);
    } else if (input == "t'") {
      exports.rotateTopPrime(c);
    } else if (input == 'd') {
      exports.rotateDown(c);
    } else if (input == "d'") {
      exports.rotateDownPrime(c);
    } else if (input == 'l') {
      exports.rotateLeft(c);
    } else if (input == "l'") {
      exports.rotateLeftPrime(c);
    } else if (input == 'r') {
      exports.rotateRight(c);
    } else if (input == "r'") {
      exports.rotateRightPrime(c);
    } else if (input == 'f') {
      exports.rotateFront(c);
    } else if (input == "f'") {
      exports.rotateFrontPrime(c);
    } else if (input == 'b') {
      exports.rotateBack(c);
    } else if (input == "b'") {
      exports.rotateBackPrime(c);
    }
  }

  exports.void = function(c, faces) {
    for(const f of Object.keys(faces)) {
      for(const v of faces[f]) {
        c.faces[f][v] = 'v';
      }
    }
  }

  exports.setBlankTop = function(c) {
    exports.void(c, { left: [ 0, 1, 2 ], front: [ 0, 1, 2 ], right: [ 0, 1, 2 ], back: [ 0, 1, 2 ], top: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }
  exports.setBlankDown = function(c) {
    exports.void(c, { left: [ 6, 7, 8 ], front: [ 6, 7, 8 ], right: [ 6, 7, 8 ], back: [ 6, 7, 8 ], down: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }
  exports.setBlankLeft = function(c) {
    exports.void(c, { top: [ 0, 3, 6 ], front: [ 0, 3, 6 ], down: [ 0, 3, 6 ], back: [ 2, 5, 8 ], left: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }
  exports.setBlankRight = function(c) {
    exports.void(c, { top: [ 2, 5, 8 ], front: [ 2, 5, 8 ], down: [ 2, 5, 8 ], back: [ 0, 3, 6 ], right: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }
  exports.setBlankFront = function(c) {
    exports.void(c, { left: [ 2, 5, 8 ], top: [ 6, 7, 8 ], right: [ 0, 3, 6 ], down: [ 0, 1, 2 ], front: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }
  exports.setBlankBack = function(c) {
    exports.void(c, { left: [ 0, 3, 6 ], top: [ 0, 1, 2 ], right: [ 2, 5, 8 ], down: [ 6, 7, 8 ], back: [ 0, 1, 2, 3, 5, 6, 7, 8] });
  }

  exports.setBlank = function(input, c) {
    if(input == 't' || input == "t'") {
      exports.setBlankTop(c);
    } else if (input == 'd' || input == "d'") {
      exports.setBlankDown(c);
    } else if (input == 'l' || input == "l'") {
      exports.setBlankLeft(c);
    } else if (input == 'r' || input == "r'") {
      exports.setBlankRight(c);
    } else if (input == 'f' || input == "f'") {
      exports.setBlankFront(c);
    } else if (input == 'b' || input == "b'") {
      exports.setBlankBack(c);
    }
  }

}(typeof exports === 'undefined' ? this.cube = {} : exports));
