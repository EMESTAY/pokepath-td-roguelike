import { GameScene } from "../../utils/GameScene.js";
import { Element } from "../../utils/Element.js";
import { text } from "../../file/text.js";
import { playSound } from "../../file/audio.js";
import { pokemonData } from "../data/pokemonData.js";
import { itemData } from "../data/itemData.js";
import { Pokemon } from "../component/Pokemon.js";

export class RoguelikeScene extends GameScene {
  constructor(main) {
    super(700, 400); // 700x400 window for better card spacing
    this.main = main;
    this.rewards = [];
    this.render();
  }

  render() {
    this.title.innerHTML = "CHOOSE REWARD";
    this.container.classList.add("roguelike-scene-container");

    this.cardContainer = new Element(this.container, {
      className: "roguelike-card-container",
    }).element;

    this.rerollCost = 500;
    this.renderRerollButton();
    this.closeButton.style.display = "none"; // Lock the window
  }

  finishSelection() {
    this.close();
    if (
      this.main.area &&
      typeof this.main.area.endWaveContinue === "function"
    ) {
      this.main.area.endWaveContinue();
    } else {
      console.error("endWaveContinue not found in Area");
    }
  }

  renderRerollButton() {
    this.rerollBtn = new Element(this.container, {
      tagName: "button",
      className: "roguelike-reroll-btn",
      text: `REROLL (500g)`,
    }).element;

    // Allow button to be styled nicely
    this.rerollBtn.style.marginTop = "20px";
    this.rerollBtn.style.padding = "10px 20px";
    this.rerollBtn.style.fontSize = "16px";
    this.rerollBtn.style.cursor = "pointer";
    this.rerollBtn.style.backgroundColor = "#d32f2f";
    this.rerollBtn.style.color = "white";
    this.rerollBtn.style.border = "none";
    this.rerollBtn.style.borderRadius = "5px";
    this.rerollBtn.style.fontWeight = "bold";
    this.rerollBtn.style.boxShadow = "0 4px #b71c1c";

    this.rerollBtn.addEventListener("click", () => this.reroll());

    // Hover effects
    this.rerollBtn.onmouseenter = () => {
      this.rerollBtn.style.backgroundColor = "#f44336";
      playSound("hover1", "ui");
    };
    this.rerollBtn.onmouseleave = () => {
      this.rerollBtn.style.backgroundColor = "#d32f2f";
    };
  }

  reroll() {
    if (this.main.player.gold >= this.rerollCost) {
      playSound("buy", "ui");
      this.main.player.changeGold(-this.rerollCost);
      this.rerollCost = Math.floor(this.rerollCost * 1.5);
      this.rerollBtn.innerText = `REROLL (${this.rerollCost}g)`;
      this.generateRewards();
      this.renderCards();
    } else {
      playSound("error", "ui");
    }
  }

  open() {
    super.open();
    this.rerollCost = 500; // Reset cost on new wave
    if (this.rerollBtn)
      this.rerollBtn.innerText = `REROLL (${this.rerollCost}g)`;
    this.generateRewards();
    this.renderCards();
  }

  generateRewards() {
    this.rewards = [];
    for (let i = 0; i < 3; i++) {
      this.rewards.push(this.getRandomReward());
    }
  }

  getRandomReward() {
    const rand = Math.random();
    if (rand < 0.05) return this.generateConsumableReward(); // 5% chance
    if (rand < 0.5) return this.generatePokemonReward();
    if (rand < 0.85) return this.generateItemReward();
    return this.generateResourceReward();
  }

  generateConsumableReward() {
    const isPotion = Math.random() < 0.5;

    if (isPotion) {
      return {
        type: "potion",
        name: "MAX POTION",
        desc: "Restores 1 Life (Heart) to the Player.",
        subtext: "Consumable",
        icon: "./src/assets/images/items/potion.png", // Verify path or use generic
        rarity: "legendary",
      };
    } else {
      return {
        type: "candy",
        name: "RARE CANDY",
        desc: "Instantly levels up 3 random team members.",
        subtext: "Consumable",
        icon: "./src/assets/images/items/rare-candy.png", // Verify path
        rarity: "rare",
      };
    }
  }

  generatePokemonReward() {
    const keys = Object.keys(pokemonData);
    // Filter: Tier 1 (low/mid cost) + No Mega + Has Ability
    const validKeys = keys.filter((key) => {
      const p = pokemonData[key];
      return (
        (p.costScale === "low" || p.costScale === "mid") &&
        !key.includes("Mega") &&
        p.ability
      );
    });

    const randomKey = validKeys[Math.floor(Math.random() * validKeys.length)];
    const spec = pokemonData[randomKey];

    const existing = this.main.team.pokemon.find(
      (p) => p.specie.id === spec.id
    );
    if (existing) {
      return {
        type: "upgrade",
        data: existing, // Pass the existing instance
        name: `UPGRADE: ${spec.name[this.main.lang]}`,
        desc: "Grant +3 Levels instantly.",
        subtext: `Current Lvl: ${existing.lvl} -> ${existing.lvl + 3}`,
        icon: spec.sprite.base,
        rarity: "rare", // Force blue border for upgrades
      };
    }

    let abilityName = "Unknown";
    let abilityDesc = "No description.";

    if (spec.ability && spec.ability.name && spec.ability.description) {
      abilityName = spec.ability.name[this.main.lang] || spec.ability.name[0];
      abilityDesc =
        spec.ability.description[this.main.lang] || spec.ability.description[0];
    }

    // Rarity Logic (Simple heuristic)
    let rarity = "common";
    if (spec.costScale === "mid") rarity = "rare";
    if (spec.costScale === "high") rarity = "legendary";

    return {
      type: "pokemon",
      data: spec,
      name: spec.name[this.main.lang],
      desc: abilityDesc,
      subtext: `Ability: ${abilityName}`,
      icon: spec.sprite.base,
      rarity: rarity,
    };
  }

  generateItemReward() {
    const keys = Object.keys(itemData);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const item = itemData[randomKey];

    let desc = "No description.";
    if (item.description) {
      desc = item.description[this.main.lang] || item.description[0];
    }

    let rarity = "common";
    if (item.price > 10000) rarity = "rare";
    if (item.price > 20000) rarity = "legendary";

    return {
      type: "item",
      data: item,
      name: item.name[this.main.lang],
      desc: desc,
      subtext: "Hold Item",
      icon: item.sprite,
      rarity: rarity,
    };
  }

  generateResourceReward() {
    const wave = this.main.area.waveNumber;
    let amount = 300 + wave * 50;
    let rarity = "common";

    // Critical Gold High Roll (10% chance)
    if (Math.random() < 0.1) {
      amount *= 2;
      rarity = "rare";
    }

    return {
      type: "gold",
      amount: amount,
      name: `${amount} GOLD`,
      desc: "Add to your current funds.",
      subtext: "Currency",
      icon: "./src/assets/images/items/nugget.png",
      rarity: rarity,
    };
  }

  renderCards() {
    this.cardContainer.innerHTML = "";
    this.rewards.forEach((reward) => {
      const card = new Element(this.cardContainer, {
        className: `roguelike-card ${reward.rarity}`,
      }).element;

      // Title
      new Element(card, {
        tagName: "div",
        text: reward.name.toUpperCase(),
        className: "roguelike-card-title",
      });

      // Icon
      const imgContainer = new Element(card, {
        className: "roguelike-card-img-container",
      }).element;

      const img = new Element(imgContainer, {
        image: reward.icon,
        className: "roguelike-card-icon",
      }).element;
      // Force styles that might have been lost or need reinforcement
      img.style.width = "80%";
      img.style.height = "80%";
      img.style.backgroundSize = "contain";
      img.style.backgroundRepeat = "no-repeat";
      img.style.backgroundPosition = "center";

      // Description Container
      const descContainer = new Element(card, {
        className: "roguelike-card-desc-container",
      }).element;

      // Description
      new Element(descContainer, {
        text: reward.desc,
        className: "roguelike-card-desc",
      });

      // Subtext (Ability Name / Type)
      new Element(descContainer, {
        text: reward.subtext,
        className: "roguelike-card-subtext",
      });

      // Events
      card.style.cursor = "pointer"; // Force cursor
      card.onclick = (e) => {
        // Use onclick for direct assignment, ensuring no duplicate listeners
        e.stopPropagation();
        this.selectReward(reward);
      };

      card.onmouseenter = () => {
        playSound("hover1", "ui");
      };
    });
  }

  selectReward(reward) {
    playSound("equip", "ui");

    if (reward.type === "pokemon") {
      const newPokemon = new Pokemon(reward.data, 1, null, this.main);
      if (this.main.team.pokemon.length < this.main.player.teamSlots) {
        this.main.team.addPokemon(newPokemon);
      } else {
        this.main.box.addPokemon(newPokemon);
        this.main.notification.display("Team full! Sent to Box.");
        setTimeout(() => this.main.notification.hide(), 2000);
      }
    } else if (reward.type === "upgrade") {
      // Level up existing pokemon 3 times
      reward.data.levelUp();
      reward.data.levelUp();
      reward.data.levelUp();
      playSound("levelUp", "ui"); // Hypothetical sound, or reuse 'equip'
    } else if (reward.type === "item") {
      this.main.player.obtainItem(reward.data);
    } else if (reward.type === "gold") {
      this.main.player.changeGold(reward.amount);
    } else if (reward.type === "potion") {
      this.main.player.getHealed(1);
    } else if (reward.type === "candy") {
      // Level up 3 random unique members if possible, or repeat
      for (let i = 0; i < 3; i++) {
        const member =
          this.main.team.pokemon[
            Math.floor(Math.random() * this.main.team.pokemon.length)
          ];
        if (member) member.levelUp();
      }
      playSound("levelUp", "ui");
    }

    this.finishSelection();
  }
}
