const getMenuConfig = (
  m: any,
  shuffleCubeFirst: Function,
  solveFirst: Function,
  resetCubeG: Function,
  resetCam: Function
) => {
  return {
    clockwise: {
      top: m.t,
      left: m.l,
      front: m.f,
      right: m.r,
      back: m.b,
      down: m.d,
    },
    counterclockwise: {
      "top prime": m.T,
      "left prime": m.L,
      "front prime": m.F,
      "right prime": m.R,
      "back prime": m.B,
      "down prime": m.D,
    },
    shuffle: shuffleCubeFirst,
    solve: solveFirst,
    reset: resetCubeG,
    "reset camera": resetCam,
  };
};

export { getMenuConfig };
