import { loadData, saveData } from './repositories/StorageRepository.js';

export class Store {
  constructor() {
    this.state = loadData();
  }

  get config() {
    return this.state.config;
  }

  get save() {
    return this.state.save;
  }

  // Allow accessing raw state for initialization
  getRawState() {
    return this.state;
  }

  // Update specific parts of the state (if we move to a push model)
  update(key, value) {
    this.state[key] = value;
  }

  // Persist the current game state
  // We still need to gather data from the entities until they are refactored to use the Store directly.
  persist(player, team, box, area, shop, teamManager) {
    saveData(player, team, box, area, shop, teamManager);

    // In a full refactor, 'saveData' should take the Store's state.
    // But currently saveData REGENERATES the save object from entities.
    // So for now, Store is just a read-access wrapper + persistence trigger.
  }
}
