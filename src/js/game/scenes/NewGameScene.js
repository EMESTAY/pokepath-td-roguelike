import { GameScene } from "../../utils/GameScene.js";
import { Element } from "../../utils/Element.js";
import { Input } from "../../utils/Input.js";
import { text } from "../../file/text.js";
import { saveData } from "../../file/data.js";
import { Pokemon } from "../component/Pokemon.js";
import { pokemonData } from "../data/pokemonData.js";
import { playSound, playMusic } from "../../file/audio.js";

const STARTER = [
  pokemonData["charmander"],
  pokemonData["treecko"],
  pokemonData["froaki"],
];

export class NewGameScene extends GameScene {
  constructor(main) {
    super(400, 400);
    this.main = main;

    this.starterSelected = 0;
    this.languageSelected = 0;
    this.gameMode = 0; // 0: Classic, 1: Draft
    this.header.removeChild(this.closeButton);
    this.render();
  }

  render() {
    this.title.innerHTML = text.newGame.title[this.main.lang].toUpperCase();
    this.container.classList.add("new-game-grid");

    // 1. Flags Row
    this.flagContainer = new Element(this.container, {
      className: "new-game-flag-container",
    }).element;
    this.flagContainer.style.gridRow = "1";
    this.flags = [];

    for (let i = 0; i < 9; i++) {
      this.flags[i] = new Element(this.flagContainer, {
        className: "new-game-flag",
      }).element;
      this.flags[i].addEventListener("click", () => {
        this.selectLanguage(i);
      });
      this.flags[i].addEventListener("mouseenter", () => {
        playSound("hover1", "ui");
      });
    }

    // 2. Character Row (Wrapper)
    this.charRow = new Element(this.container, {
      className: "new-game-char-row",
    }).element;
    this.charRow.style.gridRow = "2";

    this.avatarPrev = new Element(this.charRow, {
      className: "profile-scene-avatar-arrow-prev-ng",
      text: "<",
    }).element;

    this.portrait = new Element(this.charRow, {
      className: "profile-scene-portrait-ng",
    }).element;

    this.avatarNext = new Element(this.charRow, {
      className: "profile-scene-avatar-arrow-next-ng",
      text: ">",
    }).element;

    this.avatarPrev.addEventListener("click", () => {
      this.changePortrait(-1);
    });
    this.avatarNext.addEventListener("click", () => {
      this.changePortrait(1);
    });
    this.avatarPrev.addEventListener("mouseenter", () => {
      playSound("hover1", "ui");
    });
    this.avatarNext.addEventListener("mouseenter", () => {
      playSound("hover1", "ui");
    });

    // 3. Name Row
    // Input creates its own container, append directly to grid
    this.name = new Input(this.container, "text", {
      className: "profile-scene-name-ng",
      maxlength: 11,
      cb: () => {
        this.changeName();
      },
    });
    // Remove manual positioning style from Input AND assign grid row
    this.name.value.style.removeProperty("top");
    this.name.input.style.gridRow = "3";

    // 4. Mode Label Row
    this.modeLabel = new Element(this.container, {
      className: "menu-scene-label",
    }).element;
    this.modeLabel.style.width = "100%";
    this.modeLabel.style.textAlign = "center";
    this.modeLabel.style.color = "white";
    this.modeLabel.style.gridRow = "4";

    // 5. Mode Select Row
    this.modeRow = new Element(this.container, {
      className: "menu-scene-row",
    }).element;
    this.modeRow.style.justifyContent = "center";
    this.modeRow.style.width = "100%";
    this.modeRow.style.gridRow = "5";

    this.modeRow.prev = new Element(this.modeRow, {
      className: "menu-scene-arrow",
      text: "<",
    }).element;
    this.modeRow.prev.style.width = "15px";

    this.modeRow.value = new Element(this.modeRow, {
      className: "menu-scene-value",
    }).element;
    this.modeRow.value.style.width = "150px";

    this.modeRow.next = new Element(this.modeRow, {
      className: "menu-scene-arrow",
      text: ">",
    }).element;
    this.modeRow.next.style.width = "15px";

    this.modeRow.prev.addEventListener("click", () => {
      this.toggleGameMode();
    });
    this.modeRow.next.addEventListener("click", () => {
      this.toggleGameMode();
    });
    this.modeRow.prev.addEventListener("mouseenter", () => {
      playSound("hover1", "ui");
    });
    this.modeRow.next.addEventListener("mouseenter", () => {
      playSound("hover1", "ui");
    });

    // 6. Starter Name Row
    this.starterName = new Element(this.container, {
      className: "new-game-starter-name",
    }).element;
    this.starterName.style.gridRow = "6";

    // 7. Starter Icons Row
    this.starterContainer = new Element(this.container, {
      className: "new-game-starter-container",
    }).element;
    this.starterContainer.style.gridRow = "7";
    this.starters = [];

    STARTER.forEach((starter, i) => {
      this.starters[i] = new Element(this.starterContainer, {
        className: "new-game-starter",
        image: starter.sprite.base,
      }).element;
      this.starters[i].addEventListener("mouseenter", () => {
        playSound("hover1", "ui");
      });
      this.starters[i].addEventListener("click", () => {
        playSound("click1", "ui");
        this.selectStarter(i);
      });
    });

    // 8. Description Row
    this.starterDescription = new Element(this.container, {
      className: "new-game-starter-description",
    }).element;
    this.starterDescription.style.gridRow = "8";

    // 9. Button Row
    this.startButton = new Element(this.container, {
      className: "new-game-start-button",
    }).element;
    this.startButton.style.gridRow = "9";
    this.startButton.addEventListener("click", () => this.close());
    this.startButton.addEventListener("mouseenter", () => {
      playSound("open", "ui");
    });
  }

  update() {
    this.title.innerHTML = text.newGame.title[this.main.lang].toUpperCase();
    this.name.value.placeholder = this.main.player.name;
    this.portrait.style.backgroundImage = `url("./src/assets/images/portraits/${this.main.player.portrait}.png")`;
    this.startButton.innerText =
      text.newGame.start[this.main.lang].toUpperCase();

    // MODE
    this.modeLabel.innerText = text.ui.mode[this.main.lang].toUpperCase();
    if (this.gameMode === 0) {
      this.modeRow.value.innerText =
        text.ui.classic[this.main.lang].toUpperCase();
      this.starterContainer.style.display = "flex";
      this.starterName.style.display = "block";
      this.starterDescription.innerText =
        STARTER[this.starterSelected].ability.description[
          this.main.lang
        ].toUpperCase();
      this.selectStarter(this.starterSelected);
    } else {
      this.modeRow.value.innerText =
        text.ui.draft[this.main.lang].toUpperCase();
      this.starterContainer.style.display = "none";
      this.starterName.style.display = "none";
      this.starterDescription.innerText =
        text.ui.draftDesc[this.main.lang].toUpperCase();
      this.starterDescription.style.color = "white";
    }
  }

  toggleGameMode() {
    this.gameMode = this.gameMode === 0 ? 1 : 0;
    this.update();
    playSound("option", "ui");
  }

  selectStarter(pos) {
    this.starterSelected = pos;
    this.starterName.innerText =
      STARTER[this.starterSelected].name[this.main.lang].toUpperCase();
    this.starterName.style.color = STARTER[this.starterSelected].color;

    this.starterDescription.innerText =
      STARTER[this.starterSelected].ability.description[
        this.main.lang
      ].toUpperCase();
    this.starterDescription.style.color = STARTER[this.starterSelected].color;

    STARTER.forEach((starter, i) => {
      this.starters[i].style.filter = "revert-layer";
      if (pos == i)
        this.starters[
          i
        ].style.filter = `brightness(1) drop-shadow(0 0 4px ${starter.color})`;
    });
  }

  selectLanguage(pos) {
    this.languageSelected = pos;
    this.main.lang = pos;

    this.flags.forEach((flag, i) => {
      flag.style.filter = "revert-layer";
      if (pos == i)
        flag.style.filter = `brightness(1) drop-shadow(1px 1px black)`;
    });

    if (pos == 6) document.body.style.fontFamily = "PixelMPlus";
    else if (pos == 7) document.body.style.fontFamily = "NGC";
    else if (pos == 8) document.body.style.fontFamily = "NGC";
    else document.body.style.fontFamily = "PressStart2P";

    this.main.dataManager.config.language = pos;
    this.main.dataManager.persist();

    this.update();
    this.main.updateLanguage();
    playSound("hover2", "ui");
  }

  changePortrait(dir) {
    let pos = this.main.player.portrait;
    pos += dir;

    if (pos < 0) pos = 19;
    else if (pos > 19) pos = 0;

    this.main.player.portrait = pos;

    this.update();
    this.main.UI.updatePlayer();
    playSound("option", "ui");
  }

  changeName() {
    this.main.player.name = this.name.value.value;
    this.main.UI.updatePlayer();
  }

  /*saveProfile() {
		const data = JSON.parse(window.localStorage.getItem("data"));
        data.save.player.name = this.main.player.name;
        data.save.player.portrait = this.main.player.portrait;
        window.localStorage.setItem("data", JSON.stringify(data));
	}*/

  open() {
    super.open();
    this.update();
    this.selectLanguage(0);
    this.selectStarter(0);
    playMusic("intro");
  }

  close() {
    super.close();

    // Save Game Mode
    // Assuming we might want to store this in dataManager if needed for run persistence
    // For now we just pass it conceptually or use it to decide flow
    this.main.gameMode = this.gameMode;

    if (this.gameMode === 0) {
      // Classic Mode
      this.main.team.addPokemon(
        new Pokemon(STARTER[this.starterSelected], 1, null, this.main)
      );
      this.main.shop.eggList.splice(this.starterSelected, 1);

      this.main.UI.update();
      this.main.dataManager.saveGame(
        this.main.player,
        this.main.team,
        this.main.box,
        this.main.area,
        this.main.shop,
        this.main.teamManager
      );

      this.main.tutorialScene.open();
    } else {
      // Roguelike Mode: Random Starter & Skip Draft
      const randomStarterIndex = Math.floor(Math.random() * STARTER.length);
      const randomStarter = STARTER[randomStarterIndex];

      this.main.team.addPokemon(new Pokemon(randomStarter, 1, null, this.main));
      // We don't remove it from eggList to allow finding it later perhaps, or we can remove it.
      // Let's remove it to avoid immediate duplicate possibility in rewards if that Logic uses eggList.
      // But for now, let's just add it.
      this.main.shop.eggList.splice(randomStarterIndex, 1);

      this.main.UI.update();
      this.main.dataManager.saveGame(
        this.main.player,
        this.main.team,
        this.main.box,
        this.main.area,
        this.main.shop,
        this.main.teamManager
      );

      this.main.tutorialScene.open();
    }

    playSound("button2", "ui");
  }
}
