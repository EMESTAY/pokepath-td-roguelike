import { RNG } from "../../utils/RNG.js";

export class RunState {
  constructor(seed = null, config = {}) {
    this.baseSeed = seed || Date.now().toString();
    this.rng = new RNG(this.baseSeed);

    // Run specific resources
    this.gold = config.startingGold || 0;
    this.health = config.startingHealth || 10;
    this.wave = 1;

    // Inventory management for the run
    this.inventory = [];
    this.activeSynergies = new Set();

    // Tracking
    this.startTime = Date.now();
    this.statistics = {
      damageDealt: 0,
      goldEarned: 0,
      enemiesDefeated: 0,
    };
  }

  addGold(amount) {
    this.gold += amount;
    if (amount > 0) this.statistics.goldEarned += amount;
    return this.gold;
  }

  spendGold(amount) {
    if (this.gold >= amount) {
      this.gold -= amount;
      return true;
    }
    return false;
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    return this.health <= 0; // isDead
  }

  heal(amount) {
    this.health += amount; // Logic for max health should be handled here or by caller depending on constraints
  }

  serialize() {
    return {
      seed: this.baseSeed,
      gold: this.gold,
      health: this.health,
      wave: this.wave,
      inventory: this.inventory,
      statistics: this.statistics,
    };
  }
}
