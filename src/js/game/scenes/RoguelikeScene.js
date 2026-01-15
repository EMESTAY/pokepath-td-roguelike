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

    this.assignmentContainer = new Element(this.container, {
      className: "roguelike-assignment-container",
    }).element;
    this.assignmentContainer.style.display = "none";

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
      
      this.rerollCount++;
      this.rerollCost = 200 + (this.rerollCount * 150);
      
      this.rerollBtn.innerText = `REROLL (-${this.rerollCost}g)`;
      this.generateRewards();
      this.renderOdds();
      this.renderCards();
    } else {
      playSound("error", "ui");
    }
  }

  open() {
    super.open();
    this.rerollCost = 200; // Reset cost on new wave
    this.rerollCount = 0;
    if (this.rerollBtn)
      this.rerollBtn.innerText = `REROLL (-${this.rerollCost}g)`;
    
    // Ensure correct view
    if (this.cardContainer) this.cardContainer.style.display = "flex";
    if (this.assignmentContainer) this.assignmentContainer.style.display = "none";
    if (this.rerollBtn) this.rerollBtn.style.display = "block";
    if (this.oddsText) this.oddsText.style.display = "block";
    this.title.innerHTML = "CHOOSE REWARD";

    this.generateRewards();
    this.renderOdds();
    this.renderCards();
  }

  renderOdds() {
    let consumable = 5;
    // Check bad luck protection condition
    if (this.main.player.health[this.main.area.map.id] <= 4) {
      consumable = 15;
    }
    
    // Probabilities from getRandomReward:
    // P(Consumable) = consumable / 100
    // Remaining = 100 - consumable
    // P(Pokemon) = 0.45 (constant relative to total? No, relative to 1.0 in logic)
    // The logic in getRandomReward is:
    // rand < consumableChance (consumable)
    // rand < consumableChance + 0.45 (pokemon) -> So Pokemon is strictly 0.45 width
    // rand < consumableChance + 0.45 + 0.35 (item) -> Item is strictly 0.35 width
    // Else (Resource) -> Remainder
    
    // So:
    const pokemon = 45;
    const item = 35;
    const gold = 100 - (consumable + pokemon + item);

    if (!this.oddsText) {
      this.oddsText = new Element(this.container, { 
          tagName: 'div', 
          className: 'roguelike-odds-text',
          text: ''
      }).element;
      // Style locally or move to CSS
      this.oddsText.style.marginTop = "8px";
      this.oddsText.style.fontSize = "10px";
      this.oddsText.style.color = "#ccc";
      this.oddsText.style.textAlign = "center";
      this.oddsText.style.fontFamily = '"Press Start 2P", sans-serif'; // Maintain pixel font
      this.oddsText.style.textShadow = "1px 1px #000";
    }

    this.oddsText.innerText = `ODDS: UNIT ${pokemon}% | ITEM ${item}% | GOLD ${gold}% | CONSUMABLE ${consumable}%`;
  }

  generateRewards() {
    this.rewards = [];
    for (let i = 0; i < 3; i++) {
      this.rewards.push(this.getRandomReward());
    }
  }

  getRandomReward() {
    const rand = Math.random();
    
    let consumableChance = 0.05;
    if (this.main.player.health[this.main.area.map.id] <= 4) {
      consumableChance = 0.15;
    }

    if (rand < consumableChance) return this.generateConsumableReward(); 
    if (rand < consumableChance + 0.45) return this.generatePokemonReward();
    if (rand < consumableChance + 0.45 + 0.35) return this.generateItemReward();
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
    const GEN1_KEYS = [
        'abra', 'alakazam', 'arbok', 'charizard', 'charmander', 'charmeleon', 
        'clefable', 'clefairy', 'cubone', 'dewgong', 'ditto', 'ekans', 
        'electrode', 'farfetchd', 'gastly', 'gengar', 'golduck', 'gyarados', 
        'haunter', 'kabuto', 'kabutops', 'kadabra', 'koffing', 'lapras', 
        'machamp', 'machoke', 'machop', 'magikarp', 'mankey', 'marowak', 
        'meowth', 'omanyte', 'omastar', 'persian', 'pidgeot', 'pidgeotto', 
        'pidgey', 'pikachu', 'primeape', 'psyduck', 'raichu', 'sandshrew', 
        'sandslash', 'seel', 'starmie', 'staryu', 'tangela', 'voltorb', 'weezing'
    ];

    const keys = Object.keys(pokemonData);
    // Filter: Tier 1 (low/mid cost) + No Mega + Has Ability + Gen 1
    const validKeys = keys.filter((key) => {
      const p = pokemonData[key];
      return (
        GEN1_KEYS.includes(key) &&
        (p.costScale === "low" || p.costScale === "mid") &&
        !key.includes("Mega") &&
        p.ability
      );
    });

    // TAG WEIGHTING: Identify Preferred Land Types from current team
    const teamTiles = new Set();
    this.main.team.pokemon.forEach(p => {
        if (p.tiles) p.tiles.forEach(t => teamTiles.add(t));
    });

    const weightedPool = [];
    validKeys.forEach(key => {
        weightedPool.push(key); // Base chance
        const p = pokemonData[key];
        // If pokemon shares a land type with team, double its weight
        if (p.tiles && p.tiles.some(t => teamTiles.has(t))) {
             weightedPool.push(key); 
        }
    });

    const randomKey = weightedPool[Math.floor(Math.random() * weightedPool.length)];
    const spec = pokemonData[randomKey];

    const existing = this.main.team.pokemon.find(
      (p) => p.specie.id === spec.id
    );
    if (existing) {
      // DIMINISHING RETURNS DISPLAY
      let levelsToAdd = 1;
      if (existing.lvl < 4) levelsToAdd = 3;
      else if (existing.lvl < 6) levelsToAdd = 2;

      return {
        type: "upgrade",
        data: existing, // Pass the existing instance
        name: `UPGRADE: ${spec.name[this.main.lang]}`,
        desc: `Grant +${levelsToAdd} Levels instantly.`,
        subtext: `Current Lvl: ${existing.lvl} -> ${existing.lvl + levelsToAdd}`,
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
    
    // Filter for items compatible with at least one team member
    const compatibleKeys = keys.filter(key => {
        const item = itemData[key];
        // Use the scene's checkRestriction method
        return this.main.team.pokemon.some(p => this.checkRestriction(p, item));
    });

    // Use compatible pool if available, otherwise fallback to all items
    const pool = compatibleKeys.length > 0 ? compatibleKeys : keys;
    const randomKey = pool[Math.floor(Math.random() * pool.length)];

    // CLONE ITEM to prevent shared state mutation (equipedBy)
    const item = JSON.parse(JSON.stringify(itemData[randomKey]));

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
    let amount = Math.floor(300 + 20 * Math.pow(wave, 1.5));
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
      icon: "./src/assets/images/items/amulet-coin.png",
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
      // Level up existing pokemon with Diminishing Returns
      try {
          const currentLvl = reward.data.lvl;
          let levelsToAdd = 1;
          if (currentLvl < 4) levelsToAdd = 3;
          else if (currentLvl < 6) levelsToAdd = 2;
          
          for(let i=0; i<levelsToAdd; i++) reward.data.levelUp();
          
          playSound("levelUp", "ui"); 
      } catch (e) {
          console.error("Upgrade Error:", e);
      }
    } else if (reward.type === "item") {
      this.openItemAssignment(reward.data);
      return; // Do not finish selection yet
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

  // --- ITEM ASSIGNMENT LOGIC ---

  openItemAssignment(item) {
    this.cardContainer.style.display = "none";
    this.rerollBtn.style.display = "none";
    if (this.oddsText) this.oddsText.style.display = "none";
    this.title.innerHTML = "EQUIP ITEM";
    
    this.assignmentContainer.style.display = "flex";
    this.renderAssignment(item);
  }

  renderAssignment(item) {
    this.assignmentContainer.innerHTML = "";
    
    // Instructions
    new Element(this.assignmentContainer, {
        tagName: "div",
        className: "roguelike-assign-title",
        text: `Assign ${item.name[this.main.lang]}?`
    });

    const list = new Element(this.assignmentContainer, {
        className: "roguelike-assign-list"
    }).element;

    // Team Members
    this.main.team.pokemon.forEach(p => {
        const canEquip = this.checkRestriction(p, item);
        
        const btn = new Element(list, {
            className: "roguelike-assign-btn"
        }).element;
        
        // Icon
        const icon = new Element(btn, {
            image: p.sprite.base,
            className: "roguelike-assign-icon"
        }).element;
        
        // Name
        new Element(btn, {
            tagName: "div",
            text: p.alias || p.name[this.main.lang],
            className: "roguelike-assign-name"
        });

        if (canEquip) {
            btn.onclick = () => this.equipItem(p, item);
            btn.onmouseenter = () => { 
                btn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                playSound("hover1", "ui");
            };
            btn.onmouseleave = () => { 
                btn.style.backgroundColor = "transparent";
            };
        } else {
            btn.style.opacity = "0.4";
            btn.style.cursor = "not-allowed";
            btn.title = "Cannot equip this item (Restrictions applied)";
        }
    });

    // "Put in Bag" Button
    const bagBtn = new Element(this.assignmentContainer, {
        tagName: "button",
        text: "PUT IN BAG",
        className: "roguelike-bag-btn"
    }).element;
    
    bagBtn.onclick = () => {
        playSound("equip", "ui"); // Reuse equip sound
        this.main.player.obtainItem(item);
        this.finishSelection();
    };
  }

  checkRestriction(pokemon, item) {
    if (!item.restriction) return true;
    const key = Object.keys(item.restriction)[0];
    if (!key) return true;

    switch(key) {
        case 'id':
            if (item.restriction[key].includes(pokemon.id)) return true;
            break;
        case 'idForbidden':	
            if (!item.restriction[key].includes(pokemon.id)) return true;
            break;
        case 'tile': 
            if (pokemon.id == 70) return false;	
            if (item.restriction[key].some(tile => pokemon.tiles.includes(tile))) return true;
            break;
        case 'tileForbidden':
            if (pokemon.id == 70) return false;	
            if (!item.restriction[key].some(tile => pokemon.tiles.includes(tile)))  return true;
            break;
        case 'attackType':
            if (pokemon.id == 70) return false;	
            if (item.restriction[key] == pokemon.attackType) return true;
            break;
        case 'rangeType':
            if (pokemon.id == 70) return false;	
            if (item.restriction[key] == pokemon.rangeType) return true;
            break;
    }
    return false;
  }

  equipItem(pokemon, item) {
      try {
          playSound("equip", "ui");
          
          if (!this.checkRestriction(pokemon, item)) {
              console.warn("Item restriction check failed.");
              this.finishSelection();
              return;
          }

          this.main.player.obtainItem(item); // Add to global list
          pokemon.equipItem(item);
          
          this.finishSelection();
      } catch (e) {
          console.error("Equip Item Error:", e);
          this.finishSelection(); // Ensure window closes even on error
      }
  }
}
