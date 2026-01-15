import { Init } from '../core/Init.js';
import { DataManager } from '../data/DataManager.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('contextmenu', (event) => event.preventDefault());
  document.addEventListener('dragstart', (event) => event.preventDefault());
  const dataManager = new DataManager();
  new Init(dataManager);
});
