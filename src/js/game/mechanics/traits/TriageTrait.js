import { Trait } from '../Trait.js';

export class TriageTrait extends Trait {
  constructor() {
    super('triage', 'Triage');
  }

  onEvent(event, payload) {
    if (event === 'RECALCULATE_AURAS') {
      this.applyAura(payload.towers);
    }
  }

  applyAura(towers) {
    towers.forEach((source) => {
      if (source.ability?.id !== 'triage') return;

      let auraRange = source.range;
      if (source.pokemon?.item?.id == 'revelationAroma') auraRange += 25;

      towers.forEach((target) => {
        if (source === target) return;

        const distance = Math.hypot(
          target.center.x - source.center.x,
          target.center.y - source.center.y
        );
        if (distance <= auraRange) {
          target.auraBuffActive = true;
          // Note: Triage logic in Tower.js sets specific flags/stats based on this
        }
      });
    });
  }
}
