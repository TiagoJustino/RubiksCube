import { CubeState } from "./cube-state.ts";
import type { ICube } from "./cube.ts";

function reverseMove(input: string): string {
  const inputArr: string[] = input.match(/.{1,1}/g) as string[];
  return inputArr
    .map((x) => (x.charCodeAt(0) > 94 ? x.toUpperCase() : x.toLowerCase()))
    .reverse()
    .join("");
}

function _dfs(
  cube: ICube,
  moves: string[],
  target: CubeState,
  depth: number,
  usedMoves: string[]
): { found: boolean; usedMoves?: string[] } {
  // console.log('_dfs depth', depth, 'usedMoves', usedMoves);
  if (cube.satisfies(target)) {
    return { found: true, usedMoves };
  }
  for (const move of moves) {
    usedMoves.push(move);
    cube.rotateAlias(move);
    if (depth == 0 && cube.satisfies(target)) {
      return { found: true, usedMoves };
    }
    if (depth > 0) {
      const ret = _dfs(cube, moves, target, depth - 1, usedMoves);
      if (ret.found) {
        return ret;
      }
    }
    cube.rotateAlias(reverseMove(move));
    usedMoves.pop();
  }
  return { found: false };
}

function dfs(cube: ICube, moves: string[], target: CubeState, stepIndex: number): string[] {
  const maxDepth = 50;
  for (let depth = 0; depth < maxDepth; depth++) {
    if(depth > 4) {
      console.log('depth', depth, 'stepIndex', stepIndex);
    }
    const ret = _dfs(cube, moves, target, depth, []);
    if (ret.found) {
      return ret.usedMoves as string[];
    }
  }
  Deno.exit();
  return [];
}

export { dfs };
