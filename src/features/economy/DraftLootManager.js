import { RunState } from '../../js/game/core/RunState.js';

export class DraftLootManager {
  constructor(game) {
    this.game = game;
    this.rng = game.runState.rng;
  }

  generateOptions(count = 3) {
    const options = [];
    for (let i = 0; i < count; i++) {
      const type = this.rng.choice(['GOLD', 'HEAL', 'ITEM']);
      options.push(this.createOption(type));
    }
    return options;
  }

  createOption(type) {
    switch (type) {
      case 'GOLD': {
        const amount = this.rng.nextInt(50, 150) * (1 + this.game.area.waveNumber * 0.1);
        return {
          type: 'GOLD',
          label: `Gain ${Math.floor(amount)} Gold`,
          action: () => this.game.player.changeGold(Math.floor(amount)),
        };
      }
      case 'HEAL':
        return {
          type: 'HEAL',
          label: 'Heal 2 HP',
          action: () => this.game.player.getHealed(2),
        };
      case 'ITEM': {
        // Placeholder - real implementation would pick from ItemData
        const itemId = this.rng.choice(['leftovers', 'lifeOrb', 'choiceScarf']);
        return {
          type: 'ITEM',
          label: `Item: ${itemId}`, // Would map to Item Name
          action: () => this.game.player.obtainItem({ id: itemId }),
        };
      }
      default:
        return null;
    }
  }
}
