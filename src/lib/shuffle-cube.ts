import { execRandomMove } from "./exec-random-move.ts";
import { SHUFFLING_CYCLES } from "./contants.ts";

const shuffleCube = (first: boolean, g: any, m: any) => {
  if (g.rotating || (g.shuffling && first) || g.solving) {
    return;
  }
  g.shuffling = true;
  if (first) {
    g.shufflingCycles = SHUFFLING_CYCLES;
  }
  if (g.shufflingCycles) {
    execRandomMove(shuffleCube.bind(this, false, g, m), m);
    g.shufflingCycles--;
    return;
  }
  g.shuffling = false;
};

export { shuffleCube };
