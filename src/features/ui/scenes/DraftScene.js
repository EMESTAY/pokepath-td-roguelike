import { GameScene } from '../../../core/utils/GameScene.js';
import { Element } from '../Element.js';
import { text } from '../../../data/static/text.js';
import { playSound, playMusic } from '../../../core/AudioSystem.js';
import { pokemonData } from '../../../data/static/pokemonData.js';
import { Pokemon } from '../../combat/entities/Pokemon.js';

export class DraftScene extends GameScene {
  constructor(main) {
    super(400, 170);
    this.main = main;
    this.round = 0;
    this.maxRounds = 10;
    this.isNewGame = false;

    this.pool;
    this.picks = [];
    this.header.removeChild(this.closeButton);
    this.render();
  }

  render() {
    this.title.innerHTML = text.challenge.draft.title[this.main.lang].toUpperCase();

    this.roundLabel = new Element(this.container, {
      className: 'tutorial-scene-title',
    }).element;
    this.pokemonContainer = new Element(this.container, {
      className: 'draft-scene-pokemon-container',
    }).element;
    this.pokemon = [];

    this.dataButtonContainer = new Element(this.container, {
      className: 'draft-scene-data-button-container',
    }).element;
    this.dataButton = [];

    for (let i = 0; i < 3; i++) {
      this.pokemon[i] = new Element(this.pokemonContainer, {
        className: 'draft-scene-pokemon',
      }).element;
      this.pokemon[i].label = new Element(this.pokemon[i], {
        className: 'draft-scene-pokemon-label stroke',
      }).element;
      this.pokemon[i].addEventListener('click', () => {
        this.selectPick(i);
      });
      this.pokemon[i].addEventListener('mouseenter', () => {
        playSound('hover1', 'ui');
      });

      this.dataButton[i] = new Element(this.dataButtonContainer, {
        className: 'draft-scene-pokemon-data',
      }).element;
      this.dataButton[i].addEventListener('click', () => {
        this.main.pokemonScene.open(this.currentPicks[i], null, null, true);
      });
      this.dataButton[i].addEventListener('mouseenter', () => {
        playSound('hover3', 'ui');
      });
    }
  }

  update() {
    this.roundLabel.innerHTML = `${text.challenge.draft.round[
      this.main.lang
    ].toUpperCase()} ${this.round + 1}/${this.maxRounds}`;
    this.dataButton.forEach((btn) => (btn.innerHTML = text.ui.info[this.main.lang].toUpperCase()));
    this.generatePicks();
  }

  generatePicks() {
    if (!this.pool || this.pool.length === 0) return;

    for (let i = this.pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.pool[i], this.pool[j]] = [this.pool[j], this.pool[i]];
    }

    let guaranteedPick = null;

    if (this.round === 0) {
      const guaranteedIds = [36, 4, 3];
      guaranteedPick = this.pool.find((p) => guaranteedIds.includes(p.id)) || null;
    }

    let picks = [];

    if (guaranteedPick) {
      picks.push(guaranteedPick);
      picks.push(...this.pool.filter((p) => p !== guaranteedPick).slice(0, 2));
    } else {
      picks = this.pool.slice(0, 3);
    }

    this.currentPicks = picks;

    for (let i = 0; i < this.pokemon.length; i++) {
      if (this.currentPicks[i]) {
        this.pokemon[i].style.backgroundImage = `url("${this.currentPicks[i].sprite.base}")`;

        this.pokemon[i].label.innerHTML =
          this.currentPicks[i].alias !== undefined
            ? this.currentPicks[i].alias.toUpperCase()
            : this.currentPicks[i].name[this.main.lang].toUpperCase();
      } else {
        this.pokemon[i].style.backgroundImage = '';
        this.pokemon[i].label.innerHTML = '';
      }
    }
  }

  selectPick(i) {
    playSound('select', 'ui');
    let pickedPokemon = this.currentPicks[i];
    if (!pickedPokemon) return;

    if (this.isNewGame) {
      // Create new Pokemon instance for new game
      pickedPokemon = new Pokemon(pickedPokemon, 1, null, this.main);
      this.main.team.addPokemon(pickedPokemon);
    } else {
      this.main.team.addPokemon(pickedPokemon);
      this.main.box.removePokemon(pickedPokemon);
    }

    this.main.UI.update();
    const indexInPool = this.pool.indexOf(this.currentPicks[i]); // Use original reference for pool removal
    if (indexInPool !== -1) this.pool.splice(indexInPool, 1);

    this.round++;
    if (this.round === this.maxRounds) this.close();
    else this.update();
  }

  open(isNewGame = false) {
    super.open();
    this.isNewGame = isNewGame;
    this.round = 0;

    if (this.isNewGame) {
      this.maxRounds = 6;
      // Filter valid pokemon from data (ids 1-151 for example, or just everything in pokemonData)
      // Assuming pokemonData is keyed by name, we need an array
      this.pool = Object.values(pokemonData).filter((p) => p.sprite);
    } else {
      this.maxRounds = 10;
      this.pool = [...this.main.team.pokemon, ...this.main.box.pokemon];
    }

    this.picks = [];
    this.update();
  }

  close() {
    super.close();
    if (this.isNewGame) {
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
  }
}
