import { loadData, saveData } from './repositories/StorageRepository.js';

export class DataManager {
  constructor() {
    this.data = loadData();
  }

  get config() {
    return this.data.config;
  }

  get save() {
    return this.data.save;
  }

  saveGame(player, team, box, area, shop, teamManager) {
    saveData(player, team, box, area, shop, teamManager);

    // Update local cache to match what was just saved
    // Note: saveData in data.js reads from localStorage, so we should arguably just update our memory state
    // to match. But for now, we'll just keep relying on loadData() initially.
    // Ideally we would refactor saveData to take the current state, but let's wrap it for now.

    // For consistency, we might want to update our this.data.save reference if saveData modifies it in place?
    // data.js saveData creates a NEW object structure for save.
  }
}
