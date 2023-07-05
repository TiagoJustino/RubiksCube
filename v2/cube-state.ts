export type CubeState = string[];
export type Step = { state: CubeState, moves: string[] };
const steps: Step[] = [];

/*
using cfop method as describd in https://jperm.net/3x3/cfop
 */

/* cross steps */
// step 0
steps.push({ state: [
  "..-1..:(x|y)(white|green);(y|z)(green|white)\n"
], 
  moves: [ "t", "T", "l", "L", "f", "F", "r", "R", "b", "B", "d", "D", "dr", "db", "dl", "df" ],
});
// step 1
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:(x|y)(white|blue);(y|z)(blue|white)\n"
], 
  moves: [ "t", "T", "l", "L", "f", "F", "r", "R", "b", "B", "d", "D", "dr", "db", "dl", "df" ],
});
// step 2
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:(x|y)(red|white);(y|z)(white|red)\n",
], 
  moves: [ "t", "T", "l", "L", "f", "F", "r", "R", "b", "B", "d", "D", "dr", "db", "dl", "df" ],
});
// step 3
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:(x|y)(orange|white);(y|z)(white|orange)\n"
], 
  moves: [ "t", "T", "l", "L", "f", "F", "r", "R", "b", "B", "d", "D", "dr", "db", "dl", "df" ],
});
// step 4
steps.push({ state: [
  " 0 1-1:ywhite;zgreen",
], 
  moves: [ "bb", "BTltbDB", "d", "dd", "D" ],
});
// step 5
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "-1 1 0:xred;ywhite" 
], 
  moves: [ "ll", "ltBTLdl", "d", "dd", "D" ],
});
// step 6
steps.push({ state: [
  ...steps[steps.length - 1].state,
  " 1 1 0:xorange;ywhite" 
], 
  moves: [ "rr", "rtFTRdr", "d", "dd", "D" ],
});
// step 7
steps.push({
  state: [...steps[steps.length - 1].state,
  " 0 1 1:ywhite;zblue"],
  moves: [ "ff", "ftLTFdf", "d", "dd", "D" ],
});

/*
using F2L method as described in
https://www.youtube.com/watch?v=Ar_Zit1VLG0
*/

// red and green
// step 8
steps.push({
  state: [
    ...steps[steps.length - 1].state,
    "..-1..:x(red|green);y(white);z(green|red)",
    "..-1..:xred;ygreen\n",
  ],
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 9
steps.push({ state: [
  ...steps[steps.length - 2].state,
  " (0|1)-1 (0|1):x(red|green);y(white);z(green|red)",
  "-1-1 0:xred;ygreen\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 10
steps.push({ state: [
  ...steps[steps.length - 3].state,
  "-1 0-1:xred;zgreen",
  "-1 1-1:xred;ywhite;zgreen"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});

// orange and green
// step 11
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:x(orange|green);y(white);z(green|orange)",
  "..-1..:xgreen;yorange\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 12
steps.push({ state: [
  ...steps[steps.length - 2].state,
  " (0|1)-1 (0|1):x(orange|green);y(white);z(green|orange)",
  "-1-1 0:xgreen;yorange\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 13
steps.push({ state: [
  ...steps[steps.length - 3].state,
  " 1 0-1:xorange;zgreen",
  " 1 1-1:xorange;ywhite;zgreen"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});

// blue and orange
// step 14
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:x(orange|blue);y(white);z(blue|orange)",
  "..-1..:xorange;yblue\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 15
steps.push({ state: [
  ...steps[steps.length - 2].state,
  " (0|1)-1 (0|1):x(orange|blue);y(white);z(blue|orange)",
  "-1-1 0:xorange;yblue\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 16
steps.push({ state: [
  ...steps[steps.length - 3].state,
  " 1 0 1:xorange;zblue",
  " 1 1 1:xorange;ywhite;zblue"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});

// red and blue
// step 17
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "..-1..:x(red|blue);y(white);z(blue|red)",
  "..-1..:xblue;yred\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 18
steps.push({ state: [
  ...steps[steps.length - 2].state,
  " (0|1)-1 (0|1):x(red|blue);y(white);z(blue|red)",
  "-1-1 0:xblue;yred\n"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});
// step 19
steps.push({ state: [
  ...steps[steps.length - 3].state,
  "-1 0 1:xred;zblue",
  "-1 1 1:xred;ywhite;zblue"
], 
  moves: [ "d", "D", "RDr", "BDb", "LDl", "FDf", "fTrt", "bDB", "lDL", "fDF", "rDR", "Fdf", "Rdr", "Bdb", "Ldl", "bdB", "ldL", "fdF", "rdR", "dRdrD", "ddRdrDD", "DRdrd", ],
});

// step 20
steps.push({
  state: [
    ...steps[steps.length - 1].state,
    "..-1 0:x(blue|orange|green|red);y(yellow)\n",
    " 0-1..:y(yellow);z(blue|orange|green|red)\n",
  ],
  moves: [ "FRDrdf", "RBDbdr", "BLDldb", "LFDfdl", "d", "dd", "D" ],
});
// step 21
steps.push({
  state: [
    ...steps[steps.length - 2].state,
    "-1-1 0:x(blue|orange|green|red);y(yellow)\n",
    " 1-1 0:x(blue|orange|green|red);y(yellow)\n",
    " 0-1-1:y(yellow);z(blue|orange|green|red)\n",
    " 0-1 1:y(yellow);z(blue|orange|green|red)\n",
  ],
  moves: [ "FRDrdf", "RBDbdr", "BLDldb", "LFDfdl", "d", "dd", "D" ],
});
// step 22
steps.push({
  state: [
    ...steps[steps.length - 3].state,
    " 0-1 1:yyellow;zblue",
    "-1-1 0:xred;yyellow",
    " 1-1 0:xorange;yyellow",
    " 0-1-1:yyellow;zgreen",
  ],
  moves: [
    "RDrDRDDrD",
    "dRDrDRDDrDD",
    "ddRDrDRDDrDDD",
    "DRDrDRDDrDd",
    "RDrDRDDrDRDrDRDDrD",
    "RDrDRDDrDdRDrDRDDrDD",
    "RDrDRDDrDddRDrDRDDrDDD",
    "RDrDRDDrDDRDrDRDDrDd",
    "dRDrDRDDrDDRDrDRDDrD",
    "dRDrDRDDrDDdRDrDRDDrDD",
    "dRDrDRDDrDDddRDrDRDDrDDD",
    "dRDrDRDDrDDDRDrDRDDrDd",
    "ddRDrDRDDrDDDRDrDRDDrD",
    "ddRDrDRDDrDDDdRDrDRDDrDD",
    "ddRDrDRDDrDDDddRDrDRDDrDDD",
    "ddRDrDRDDrDDDDRDrDRDDrDd",
    "DRDrDRDDrDdRDrDRDDrD",
    "DRDrDRDDrDddRDrDRDDrDD",
    "DRDrDRDDrDdddRDrDRDDrDDD",
    "DRDrDRDDrDdDRDrDRDDrDd",
  ],
});

// step 23
steps.push({
  state: [
    ...steps[steps.length - 1].state,
    " 1-1 1:x(orange|yellow|blue);y(orange|yellow|blue);z(orange|yellow|blue)",
  ],
  moves: [ "lDRdLDr", "d", "D" ],
});
// step 24
steps.push({ state: [
  ...steps[steps.length - 1].state,
  "-1-1 1:x(red|yellow|blue);y(red|yellow|blue);z(red|yellow|blue)",
  "-1-1-1:x(red|yellow|green);y(red|yellow|green);z(red|yellow|green)",
  " 1-1-1:x(orange|yellow|green);y(orange|yellow|green);z(orange|yellow|green)",
], 
  moves: [ "lDRdLDr", "d", "D" ],
});
// step 25
steps.push({
  state: [ " 1-1 1:xorange;yyellow;zblue"],
  moves: [ "rtRTrtRT", "rtRTrtRTrtRTrtRT" ],
});
// step 26
steps.push({
  state: [ "-1-1 1:xred;yyellow;zblue" ], 
  moves: [ "drtRTrtRTD", "drtRTrtRTrtRTrtRTD" ],
});
// step 27
steps.push({
  state: [ "-1-1-1:xred;yyellow;zgreen" ], 
  moves: [ "ddrtRTrtRTDD", "ddrtRTrtRTrtRTrtRTDD" ],
});
// step 28
steps.push({
  state: [ ...steps[steps.length - 6].state, " 1-1-1:xorange;yyellow;zgreen" ], 
  moves: [ "DrtRTrtRTd", "DrtRTrtRTrtRTrtRTd", ],
});

export { steps };
