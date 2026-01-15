import { Element } from "../utils/Element.js";
import { text } from "../file/text.js";
import { playSound, setVolume } from "../file/audio.js";
import { Main } from "./Main.js";

export class Init {
  constructor(dataManager) {
    this.dataManager = dataManager;
    this.lang = dataManager.config.language;

    this.render();
  }

  render = () => {
    if (this.lang == 6) {
      document.body.style.fontFamily = "PixelMPlus";
    } else if (this.lang == 7) {
      document.body.style.fontFamily = "NGC";
    } else document.body.style.fontFamily = "PressStart2P";

    this.scene = new Element(document.getElementById("screen"), {
      className: "init-scene",
    }).element;
    setVolume();
    this.createLoadingBar();
    playSound("start", "ui");
    fetch("./src/assets/assets.json")
      .then((res) => res.json())
      .then((assets) => {
        this.preloadAssets(assets, () => {
          this.scene.remove();
          new Main(this.dataManager);
        });
      });
  };

  createLoadingBar() {
    const loading = ["LOADING", "CARGANDO"];

    this.loadingText = new Element(this.scene, {
      className: "loading-text",
      text: text.ui.loading[this.lang].toUpperCase(),
    }).element;
    this.loadingBarBackground = new Element(this.scene, {
      className: "loading-bar-bg",
    }).element;
    this.loadingBar = new Element(this.loadingBarBackground, {
      className: "loading-bar",
    }).element;
  }

  preloadAssets(assets, onComplete) {
    let loaded = 0;
    const total = assets.images.length + assets.sounds.length;

    const checkLoaded = () => {
      loaded++;
      const percent = Math.floor((loaded / total) * 100);
      this.loadingBar.style.width = `${percent}%`;

      if (loaded === total) {
        onComplete();
      }
    };
    assets.images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkLoaded;
      img.onerror = checkLoaded;
    });

    assets.sounds.forEach((src) => {
      const audio = new Audio();
      audio.src = src;
      audio.oncanplaythrough = checkLoaded;
      audio.onerror = checkLoaded;
    });
  }
}
