import * as knobby from "svelte-knobby";

const getKnobby = (knobbyConfig: any) => {
  return knobby.panel(knobbyConfig);
};

export { getKnobby };
