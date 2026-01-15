import { GameScene } from '../../../core/utils/GameScene.js';
import { Element } from '../Element.js';
import { text } from '../../../data/static/text.js';
import { playSound } from '../../../core/AudioSystem.js';
import { InputComponent } from '../InputComponent.js';

export class ChangePokemonName extends GameScene {
  constructor(main) {
    super(400, 130);
    this.main = main;

    this.pokemon;
    this.header.removeChild(this.closeButton);
    this.render();
  }

  render() {
    this.title.innerHTML = text.changeName.title[this.main.lang].toUpperCase();

    this.name = new InputComponent(this.container, 'text', {
      className: 'name-change-name',
      maxlength: 10,
    });

    this.acceptButton = new Element(this.container, {
      className: 'name-change-accept-button',
    }).element;

    this.acceptButton.addEventListener('mouseenter', () => {
      playSound('hover2', 'ui');
    });

    this.acceptButton.addEventListener('click', () => {
      if (this.name.value.value.trim() !== '') this.pokemon.alias = this.name.value.value;
      if (this.main.pokemonScene.isOpen) this.main.pokemonScene.update();
      //this.main.boxScene.update();
      this.main.UI.update();
      this.close();
    });

    this.background.addEventListener('click', (e) => {
      if (e.target == this.background) this.close();
    });
  }

  update() {
    this.name.value.placeholder =
      this.pokemon.alias ?? this.pokemon.name[this.main.lang].toUpperCase();
    this.acceptButton.innerText = text.changeName.rename[this.main.lang].toUpperCase();
  }

  open(pokemon) {
    super.open();
    this.name.value.value = '';
    this.pokemon = pokemon;
    this.update();
  }
}
