import { Init } from "./game/Init.js";
import { DataManager } from "./game/core/DataManager.js";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
  const dataManager = new DataManager();
  new Init(dataManager);
});
