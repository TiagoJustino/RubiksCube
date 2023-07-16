import { getRandom } from "./get-random.ts";

const execRandomMove = (cb?: Function, m: any) => {
  const moves = Object.keys(m);
  const len = moves.length;
  const i = getRandom(0, len - 1);
  const move = moves[i];
  const moveAsFunction = m[move];
  moveAsFunction(cb);
};

export { execRandomMove };
