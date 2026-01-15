import { Element } from '../../utils/Element.js';
import { playSound } from '../../file/audio.js';
import { text } from '../../file/text.js';

export class PokemonSlot {
  constructor(parent, index, main, ui) {
    this.main = main;
    this.ui = ui;
    this.index = index;

    this.element = new Element(parent, {
      className: 'ui-pokemon',
    }).element;

    this.createElements();
    this.attachEvents();
  }

  createElements() {
    this.name = new Element(this.element, {
      className: 'ui-pokemon-name',
    }).element;
    this.sprite = new Element(this.element, {
      className: 'ui-pokemon-sprite',
    }).element;
    this.item = new Element(this.element, {
      className: 'ui-pokemon-item',
    }).element;
    this.shiny = new Element(this.element, {
      className: 'ui-pokemon-shiny',
    }).element;
    this.level = new Element(this.element, {
      className: 'ui-pokemon-level',
    }).element;
    this.info = new Element(this.element, {
      className: 'ui-pokemon-info',
    }).element;
    this.deploy = new Element(this.element, {
      className: 'ui-pokemon-deploy',
    }).element;
    this.stars = new Element(this.element, {
      className: 'ui-pokemon-stars',
    }).element;
    this.dittoBg = new Element(this.element, {
      className: 'ui-pokemon-ditto-bg',
    }).element;
  }

  attachEvents() {
    this.deploy.addEventListener('click', () => this.main.game.tryDeployUnit(this.index));
    this.info.addEventListener('click', () =>
      this.main.pokemonScene.open(this.main.team.pokemon[this.index], this.index)
    );

    this.deploy.addEventListener('mouseenter', () => playSound('hover3', 'ui'));
    this.info.addEventListener('mouseenter', () => playSound('hover3', 'ui'));

    this.sprite.addEventListener('dblclick', () => this.handleDblClick());

    this.shiny.addEventListener('mouseenter', () => playSound('hover1', 'ui'));
    this.shiny.addEventListener('click', () => this.handleShinyClick());
  }

  handleDblClick() {
    if (this.main.team.pokemon[this.index] != undefined && !this.main.area.inChallenge[1]) {
      if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();

      if (this.main.team.pokemon[this.index].isDeployed) {
        this.main.team.pokemon[this.index].isDeployed = false;

        const index = this.main.area.towers.findIndex(
          (tower) => tower.pokemon == this.main.team.pokemon[this.index]
        );
        this.ui.tilesCountNum[this.main.area.towers[index].tile.land - 1]--;
        this.main.area.towers[index].tile.tower = false;
        this.main.area.towers.splice(index, 1);
      }
      playSound('unequip', 'ui');
      this.main.box.addPokemon(this.main.team.pokemon[this.index]);
      this.main.team.removePokemon(this.main.team.pokemon[this.index]);
      this.ui.update();
    }
  }

  handleShinyClick() {
    if (this.main.team.pokemon[this.index] != undefined) {
      if (this.main.team.pokemon[this.index].isShiny) {
        this.main.team.pokemon[this.index].toggleShiny();
        this.ui.update();
        playSound('option', 'ui');
      }
    }
  }

  reset() {
    this.name.innerText = text.ui.empty[this.main.lang].toUpperCase();
    this.deploy.innerText = text.ui.deploy[this.main.lang].toUpperCase();
    this.info.innerText = text.ui.info[this.main.lang].toUpperCase();
    this.level.innerText = '';

    this.name.style.color = '#888';
    this.element.style.background = 'revert-layer';
    this.deploy.style.background = 'revert-layer';
    this.sprite.style.backgroundImage = '';
    this.deploy.style.filter = 'brightness(0.5)';
    this.info.style.filter = 'brightness(0.5)';
    this.item.style.backgroundImage = '';
    this.shiny.style.display = 'none';
    this.deploy.style.pointerEvents = 'none';
    this.info.style.pointerEvents = 'none';
    this.deploy.style.display = 'none';
    this.info.style.display = 'none';
    this.stars.style.display = 'none';
    this.dittoBg.style.display = 'none';
  }

  update(pokemon, inChallenge) {
    this.name.innerText =
      pokemon.alias != undefined
        ? pokemon.alias.toUpperCase()
        : pokemon.name[this.main.lang].toUpperCase();

    if (pokemon.id == 70) this.dittoBg.style.display = 'revert-layer';

    if (inChallenge) {
      this.level.innerText = `Lv 50`;
    } else {
      this.level.innerText = `Lv ${pokemon.lvl}`;
    }

    this.sprite.style.backgroundImage = `url("${pokemon.sprite.base}")`;
    if (pokemon.item != undefined)
      this.item.style.backgroundImage = `url("${pokemon.item.sprite}")`;
    if (pokemon.isShiny) this.shiny.style = 'revert-layer';

    if (pokemon.isDeployed) {
      this.deploy.style.background = 'var(--red)';
      this.deploy.innerText = text.ui.retire[this.main.lang].toUpperCase();
    }

    this.name.style.color = pokemon.specie.color;
    this.element.style.background = `linear-gradient(30deg, ${pokemon.specie.color}2D 0%, ${pokemon.specie.color}5D 100%)`;
    this.deploy.style.filter = 'revert-layer';
    this.info.style.filter = 'revert-layer';
    this.deploy.style.pointerEvents = 'all';
    this.info.style.pointerEvents = 'all';
    this.deploy.style.display = 'revert-layer';
    this.info.style.display = 'revert-layer';
  }

  lock(textLocked) {
    this.element.style.background = 'rgba(0, 0, 0, 0.55)';
    this.name.innerText = textLocked.toUpperCase();
    this.stars.style.display = 'revert-layer';
  }

  setStarsCost(html) {
    this.stars.innerHTML = html;
  }
}
