const solve = (first: boolean, g: any, m: any) => {
  if (g.rotating || g.shuffling || (g.solving && first)) {
    return;
  }
  if (first) {
    g.solveMoves = g.cube.clone().solve();
    if (g.solveMoves.length > 0) {
      g.solveMoves = g.solveMoves.join("").split("");
      g.solving = true;
    } else {
      g.solving = false;
      return;
    }
  }
  if (g.solveMoves.length < 1) {
    g.solving = false;
  }
  if (g.solving) {
    const moveAlias: string = g.solveMoves.splice(0, 1)[0];
    const moveAsFunction = m[moveAlias];
    moveAsFunction(solve.bind(this, false, g, m));
  }
};

export { solve };
