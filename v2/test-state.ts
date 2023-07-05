import { CubeState } from "./cube-state.ts";

function testState(cubeState: string, cubeletStates: CubeState): boolean {
  for (const cubeletState of cubeletStates) {
    if (!cubeState.match(cubeletState)) {
      return false;
    }
  }
  return true;
}

export { testState };
