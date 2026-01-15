import { Trait } from "../Trait.js";

export class PowerAuraTrait extends Trait {
  constructor() {
    super("powerAura", "Power Aura");
  }

  onEvent(event, payload) {
    if (event === "RECALCULATE_AURAS") {
      this.applyEffect(payload.towers);
    }
  }

  applyEffect(towers) {
    towers.forEach((source) => {
      if (source.ability?.id !== "powerAura") return;

      let auraRange = source.range;
      if (source.pokemon?.item?.id == "revelationAroma") auraRange += 25;

      let numAllies = 0;

      towers.forEach((target) => {
        if (source === target) return;

        const distance = Math.hypot(
          target.center.x - source.center.x,
          target.center.y - source.center.y
        );

        if (distance <= auraRange) {
          numAllies++;
          target.auraBuffActive = true;
          // Logic for applying buff values is handled in Tower.recalculatePower currently
          // Ideally, we move the math here too, but for step 1 let's just flag it
        }
      });

      if (numAllies === 9) source.main.player.unlockAchievement(20);
    });
  }
}
