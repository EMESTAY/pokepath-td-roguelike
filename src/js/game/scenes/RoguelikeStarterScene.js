import { GameScene } from "../../utils/GameScene.js";
import { Element } from "../../utils/Element.js";
import { text } from "../../file/text.js";
import { playSound } from "../../file/audio.js";
import { pokemonData } from "../data/pokemonData.js";
import { Pokemon } from "../component/Pokemon.js";

export class RoguelikeStarterScene extends GameScene {
  constructor(main) {
    super(700, 400); 
    this.main = main;
    this.starters = [];
    this.render();
  }

  render() {
    this.title.innerHTML = "SELECT STARTER";
    this.container.classList.add("roguelike-scene-container");

    this.cardContainer = new Element(this.container, {
      className: "roguelike-card-container",
    }).element;

    this.closeButton.style.display = "none"; // Forced choice
  }

  open() {
    super.open();
    this.title.innerHTML = "SELECT STARTER";
    this.generateStarters();
    this.renderCards();
  }

  generateStarters() {
    this.starters = [];
    const keys = Object.keys(pokemonData);
    
    // Filter for suitable starters: Low cost, evolved form (stage 1/baby), no megas
    // costScale: 'low' is a good proxy for starter-tier strength
    const candidates = keys.filter(key => {
        const p = pokemonData[key];
        return (
            p.costScale === "low" && 
            !key.includes("Mega") && 
            p.ability // Ensure it has data implemented
        );
    });

    // Select 3 unique random candidates
    for (let i = 0; i < 3; i++) {
        if (candidates.length === 0) break;
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const key = candidates[randomIndex];
        this.starters.push(pokemonData[key]);
        candidates.splice(randomIndex, 1); // Remove to ensure uniqueness
    }
  }

  renderCards() {
    this.cardContainer.innerHTML = "";
    this.starters.forEach((starter) => {
      const card = new Element(this.cardContainer, {
        className: "roguelike-card common", // Starters are 'common' rarity tier usually
      }).element;

      // Title
      new Element(card, {
        tagName: "div",
        text: starter.name[this.main.lang].toUpperCase(),
        className: "roguelike-card-title",
      });

      // Icon
      const imgContainer = new Element(card, {
        className: "roguelike-card-img-container",
      }).element;

      const img = new Element(imgContainer, {
        image: starter.sprite.base,
        className: "roguelike-card-icon",
      }).element;
      img.style.width = "80%";
      img.style.height = "80%";
      img.style.backgroundSize = "contain";
      img.style.backgroundRepeat = "no-repeat";
      img.style.backgroundPosition = "center";

      // Description Container
      const descContainer = new Element(card, {
        className: "roguelike-card-desc-container",
      }).element;

      // Description (Ability)
      let abilityDesc = "No description.";
      let abilityName = "Unknown";
      if (starter.ability) {
          abilityDesc = starter.ability.description[this.main.lang] || starter.ability.description[0];
          abilityName = starter.ability.name[this.main.lang] || starter.ability.name[0];
      }

      new Element(descContainer, {
        text: abilityDesc,
        className: "roguelike-card-desc",
      });

      // Subtext
      new Element(descContainer, {
        text: `Ability: ${abilityName}`,
        className: "roguelike-card-subtext",
      });

      // Events
      card.style.cursor = "pointer";
      card.onclick = () => this.selectStarter(starter);
      card.onmouseenter = () => playSound("hover1", "ui");
    });
  }

  selectStarter(starterData) {
    playSound("click1", "ui"); // or 'equip'
    
    // Add Pokemon
    this.main.team.addPokemon(new Pokemon(starterData, 1, null, this.main));
    
    // Remove from eggList to mimic NewGameScene logic (optional but consistent)
    // Finding the index in eggList is tricky since we picked from pokemonData directly.
    // However, NewGameScene spliced by index of STARTER array. 
    // Here we picked randomly. Let's assume we don't need to splice from shop 
    // because Roguelike mode might handle shop differently or it doesn't matter.
    // Actually, NewGameScene logic: "this.main.shop.eggList.splice(this.starterSelected, 1);"
    // This removes the *starter choice* from the egg list so you don't roll it immediately?
    // We can skip this or try to find it. I'll skip it for safety.

    this.main.UI.update();
    
    // Save Game
    this.main.dataManager.saveGame(
        this.main.player,
        this.main.team,
        this.main.box,
        this.main.area,
        this.main.shop,
        this.main.teamManager
    );

    this.close();
    
    // Start the game!
    // Since we are skipping tutorial, we just let the game flow continue.
    // NewGameScene usually opens TutorialScene. TutorialScene close() does nothing specific?
    // Wait, where does the game actually *start*?
    // Main.js calls `this.game.load()`.
    // The game loop is running. `Area.loadArea` sets up the map.
    // If we just close this scene, the user sees the map and can click "Next Wave".
    
    // Optional: Trigger a notification or sound
    playSound("levelUp", "ui");
  }
}
