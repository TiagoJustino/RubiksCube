function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function onControllerCreated($scope, $timeout) {
  var colorsMap = {
    'w': 'white',
    'y': 'yellow',
    'r': 'red',
    'o': 'orange',
    'b': 'blue',
    'v': 'void',
    'g': 'green'
  };

  $scope.myCube = cube.newCube();

  $scope.getClass = function(c) {
    return `boxes ${colorsMap[c]}`;
  }

  $scope.finishRotation = function(input, callback) {
    $scope.myCube = JSON.parse(JSON.stringify($scope.backupCube));
    cube.rotate(input.replace('p', "'"), $scope.myCube);
    if(callback) {
      $timeout(callback, 350, true);
    }
    $scope.rotateRunning = false;
  }

  $scope.rotate = function(input, callback = null) {
    $scope.rotateRunning = true;
    $scope.backupCube = JSON.parse(JSON.stringify($scope.myCube));
    cube.setBlank(input.replace('p', "'"), $scope.myCube);
    $timeout($scope.finishRotation.bind(this, input, callback), 350, true);
  }

  $scope.onShuffleRotateFinished = function(c, n, first) {
    if (n > 0) {
      $scope.shuffle(c, n, first);
    } else {
      $scope.shuffleRunning = false;
    }
  }

  $scope.shuffle = async function(c, n, first = true) {
    $scope.shuffleRunning = true;
    const movs = ['t', 'tp', 'd', 'dp', 'l', 'lp', 'r', 'rp', 'f', 'fp', 'b', 'bp'];
    const len = movs.length;
    if(first) {
      n = getRandom(12, 18);
    }
    if(n > 0) {
      n--;
      i = getRandom(0, len - 1);
      $scope.rotate(movs[i], $scope.onShuffleRotateFinished.bind(this, c, n, false));
    }
  }

  $scope.reset = function() {
    $scope.myCube = cube.newCube();
  }

  $scope.btDisabled = function() {
    return $scope.shuffleRunning || $scope.rotateRunning;
  }
}

const module = angular.module("app", []);
const controller = module.controller("AppCtrl", ['$scope', '$timeout', onControllerCreated]);
