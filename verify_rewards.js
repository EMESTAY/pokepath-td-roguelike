import { pokemonData } from "./src/js/game/data/pokemonData.js";
import { Gen1Manifest } from "./src/js/game/data/Gen1Manifest.js";

console.log("=== REWARD GENERATION VERIFICATION ===");
const GEN1_KEYS = Array.from(Gen1Manifest);
const keys = Object.keys(pokemonData);

console.log(`Total Pokemon in Data: ${keys.length}`);
console.log(`Total Gen 1 Manifest Keys: ${GEN1_KEYS.length}`);

console.log("\n--- Checking Filter Logic ---");
let validCount = 0;
let failAnalysis = {
  notInManifest: 0,
  badCost: 0,
  isMega: 0,
  noAbility: 0,
};

keys.forEach((key) => {
  const p = pokemonData[key];

  const inManifest = GEN1_KEYS.includes(key);
  const costOk = p.costScale === "low" || p.costScale === "mid";
  const notMega = !key.includes("Mega");
  const hasAbility = !!p.ability;

  if (inManifest && costOk && notMega && hasAbility) {
    validCount++;
    // console.log(`VALID: ${key}`);
  } else {
    if (!inManifest) failAnalysis.notInManifest++;
    // prioritizing reasons for the counters
    else if (!costOk) failAnalysis.badCost++;
    else if (!notMega) failAnalysis.isMega++;
    else if (!hasAbility) failAnalysis.noAbility++;
  }
});

console.log(`\nVALID KEYS FOUND: ${validCount}`);
console.log("Failure Reasons (Hierarchical):");
console.log(JSON.stringify(failAnalysis, null, 2));

if (validCount === 0) {
  console.log(
    "\nCRITICAL: No valid keys found. Investigating 'charmander' specifically:"
  );
  const c = pokemonData["charmander"];
  if (c) {
    console.log("Charmander Data:", JSON.stringify(c, null, 2));
    console.log("In Manifest:", GEN1_KEYS.includes("charmander"));
    console.log("Cost Scale:", c.costScale);
    console.log("Ability:", !!c.ability);
  } else {
    console.log("Charmander not found in pokemonData!");
  }
}
