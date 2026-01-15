import { Store } from './Store.js';

export class DataManager {
  constructor() {
    this.store = new Store();
  }

  get config() {
    return this.store.config;
  }

  get save() {
    return this.store.save;
  }

  saveGame(player, team, box, area, shop, teamManager) {
    this.store.persist(player, team, box, area, shop, teamManager);
  }
}
