import { Trait } from "../Trait.js";

export class WaterRouteSynergy extends Trait {
  constructor() {
    super("water_route_synergy", "Water Route Synergy");
  }

  onEvent(event, payload) {
    if (event === "RECALCULATE_AURAS") {
      this.applyEffect(payload.area, payload.towers);
    }
  }

  applyEffect(area, towers) {
    const waterTiles = area.placementTiles.filter((t) => t.land === 3);
    const activeWaterTowers = waterTiles.filter(
      (t) => t.tower && t.tower.pokemon.specie.tiles.includes(3)
    );

    if (
      waterTiles.length > 0 &&
      waterTiles.length === activeWaterTowers.length
    ) {
      activeWaterTowers.forEach((t) => {
        const tower = t.tower;
        tower.waterSynergyActive = true;
        tower.power = Math.floor(tower.basePower * 1.1); // Use basePower to avoid infinite scaling if called multiple times
        tower.speed = tower.baseSpeed * 0.9;
        tower.projectile.power = tower.power;
      });
    }
  }
}
