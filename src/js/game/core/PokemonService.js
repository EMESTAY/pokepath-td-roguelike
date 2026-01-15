import { pokemonData } from "../data/pokemonData.js";
import { Gen1Manifest } from "../data/Gen1Manifest.js";

class PokemonService {
  constructor() {
    this.mode = "sandbox"; // 'sandbox' | 'roguelike'
  }

  setMode(mode) {
    if (mode !== "sandbox" && mode !== "roguelike") {
      console.error(`Invalid mode: ${mode}. Defaulting to sandbox.`);
      this.mode = "sandbox";
      return;
    }
    this.mode = mode;
    console.log(`PokemonService: Mode switched to ${this.mode}`);
  }

  getSpecie(key) {
    if (!pokemonData[key]) return null;

    if (this.mode === "roguelike") {
      if (!Gen1Manifest.has(key)) {
        return null;
      }
    }
    return pokemonData[key];
  }

  /**
   * Returns the evolution target key if allowed.
   * Blocks cross-gen evolution in Roguelike mode.
   */
  getEvolution(currentKey) {
    const specie = pokemonData[currentKey];
    if (!specie || !specie.evolution) return null;

    const targetKey = specie.evolution.pokemon;

    if (this.mode === "roguelike") {
      if (!Gen1Manifest.has(targetKey)) {
        console.log(
          `PokemonService: Blocking evolution ${currentKey} -> ${targetKey} (Gen 1 Restriction)`
        );
        return null;
      }
    }

    return specie.evolution;
  }
  /**
   * Returns 'count' random unique Gen 1 keys.
   */
  getRandomGen1Starters(count = 3) {
    // 1. HARDCODED SAFE LIST (The "True" Starters + Icons)
    // These are guaranteed to exist and work.
    const SAFE_POOL = [
      "bulbasaur",
      "charmander",
      "squirtle",
      "pikachu",
      "eevee",
      "jigglypuff",
      "meowth",
      "psyduck",
      "machop",
      "geodude",
      "abra",
      "gastly",
    ];

    // 2. Validate they exist in data (just in case)
    const validPool = SAFE_POOL.filter((k) => pokemonData[k]);

    // 3. Select Randomly
    const selected = [];
    // Deep copy pool to avoid removing from constant if we loop
    let currentPool = [...validPool];

    for (let i = 0; i < count; i++) {
      if (currentPool.length === 0) {
        // Emergency refill if we ran out (shouldn't happen with count=3)
        currentPool = [...validPool];
      }

      const idx = Math.floor(Math.random() * currentPool.length);
      selected.push(currentPool[idx]);
      currentPool.splice(idx, 1);
    }

    console.log("[PokemonService] getRandomGen1Starters Returning:", selected);
    return selected;
  }
}

export const pokemonService = new PokemonService();
