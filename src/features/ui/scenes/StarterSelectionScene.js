import { GameScene } from '../../../core/utils/GameScene.js';
import { Element } from '../Element.js';
import { playSound } from '../../../core/AudioSystem.js';
import { pokemonData } from '../../../data/static/pokemonData.js';
import { Pokemon } from '../../combat/entities/Pokemon.js';

export class StarterSelectionScene extends GameScene {
  constructor(main) {
    super(850, 400); // Widen window for 4 cards
    this.main = main;
    // Verified Available Un-evolved Gen 1 Pokemon (from resultgen1.md)
    this.starterPool = [
      'charmander',
      'pikachu',
      'psyduck',
      'machop',
      'mankey',
      'abra',
      'clefairy',
      'cubone',
      'ekans',
      'gastly',
      'kabuto',
      'koffing',
      'magikarp',
      'meowth',
      'omanyte',
      'pidgey',
      'sandshrew',
      'seel',
      'staryu',
      'tangela',
      'voltorb',
    ];
    this.render();
  }

  render() {
    this.title.innerHTML = 'SELECT YOUR STARTER';
    this.container.classList.add('starter-scene-container'); // Reuse or create new CSS

    // Container for the cards
    this.cardContainer = new Element(this.container, {
      className: 'roguelike-card-container', // Reuse existing styles
    }).element;

    // Hide close button to force selection
    this.closeButton.style.display = 'none';
  }

  open() {
    super.open();
    this.generateChoices();
  }

  generateChoices() {
    this.cardContainer.innerHTML = '';

    // Shuffle and pick 4
    const shuffled = [...this.starterPool].sort(() => 0.5 - Math.random());
    const selectedKeys = shuffled.slice(0, 4);

    selectedKeys.forEach((key) => {
      if (pokemonData[key]) {
        this.createCard(pokemonData[key]);
      }
    });
  }

  createCard(data) {
    const card = new Element(this.cardContainer, {
      className: 'roguelike-card rare', // Force rare style for starters
    }).element;

    // Title
    new Element(card, {
      tagName: 'div',
      text: data.name[this.main.lang].toUpperCase(),
      className: 'roguelike-card-title',
    });

    // Icon Container
    const imgCont = new Element(card, {
      className: 'roguelike-card-img-container',
    }).element;

    // Sprite
    const sprite = new Element(imgCont, {
      image: data.sprite.base,
      className: 'roguelike-card-icon',
    }).element;
    // Manual styling to ensure visibility
    sprite.style.width = '80%';
    sprite.style.height = '80%';
    sprite.style.backgroundSize = 'contain';
    sprite.style.backgroundRepeat = 'no-repeat';
    sprite.style.backgroundPosition = 'center';

    // Description Container
    const descCont = new Element(card, {
      className: 'roguelike-card-desc-container',
    }).element;

    // Ability Text
    let abilityName = 'Unknown';
    if (data.ability && data.ability.name) {
      abilityName = data.ability.name[this.main.lang];
    }

    new Element(descCont, {
      text: `Ability: ${abilityName}`,
      className: 'roguelike-card-subtext',
    });

    // Click Event
    card.style.cursor = 'pointer';
    card.onclick = () => this.selectStarter(data);
    card.onmouseenter = () => playSound('hover1', 'ui');
  }

  selectStarter(data) {
    playSound('equip', 'ui');

    // Add to team
    const newPokemon = new Pokemon(data, 1, null, this.main);
    this.main.team.addPokemon(newPokemon);

    // CRITICAL: Update UI and Save
    this.main.UI.update();

    this.main.dataManager.saveGame(
      this.main.player,
      this.main.team,
      this.main.box,
      this.main.area,
      this.main.shop,
      this.main.teamManager
    );

    this.close();
  }
}
