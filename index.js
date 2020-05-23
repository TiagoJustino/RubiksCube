function onControllerCreated($scope) {
  var colorsMap = {
    'w': 'white',
    'y': 'yellow',
    'r': 'red',
    'o': 'orange',
    'b': 'blue',
    'g': 'green'
  };

  $scope.myCube = cube.newCube();

  $scope.getClass = function(c) {
    return `boxes ${colorsMap[c]}`;
  }

  $scope.rotate = function(input) {
    cube.rotate(input.replace('p', "'"), $scope.myCube);
  }
}

const module = angular.module("app", []);
const controller = module.controller("AppCtrl", onControllerCreated);
