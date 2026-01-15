import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { saveData } from '../../file/data.js';
import { playSound } from '../../file/audio.js';
import { enemyData } from '../data/enemyData.js';

const BOSS = [
	enemyData['articuno'], enemyData['zapdos'], enemyData['moltres'], 
	enemyData['raikou'], enemyData['entei'], enemyData['suicune'],
	enemyData['regirock'], enemyData['regice'], enemyData['registeel']
]

const CHALLENGES_LIST = ['lvl50', 'draft', 'noItems', 'permadeath', 'toughEnemies', 'chrono'];

export class FinalScene extends GameScene {
	constructor(main) {
		super(440, 230);
		this.main = main;
		this.boss;
		//this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.final.title[this.main.lang].toUpperCase();

		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;
		this.image = new Element(this.container, { className: 'final-scene-image' }).element;
		
		// this.acceptButton = new Element(this.container, { className: 'final-accept-button' }).element;
		// this.acceptButton.addEventListener('click', () => this.close());
		// this.acceptButton.addEventListener('mouseenter', () => { playSound('open', 'ui') });

		this.hofContainer = new Element(this.container, { className: 'final-hof-container' }).element;
		this.hof = [];

		this.info = new Element(this.container, { className: 'defeat-scene-info' }).element;

		this.challengeContainer = new Element(this.container, { className: 'final-challenge-container' }).element;
		this.challenge = [];
	}

	update() {
		this.main.game.chrono.stop()

		const routeName = this.main.area.map.name[this.main.lang];
		this.boss = BOSS[this.main.area.routeNumber];

		this.image.style.backgroundImage = `url(${this.boss.sprite.base})`;

		this.hof = [];
		this.hofContainer.innerHTML = "";
		this.main.team.pokemon.forEach((pokemon, i) => {
			this.hof[i] = new Element(this.hofContainer, { className: 'final-hof' }).element;
			this.hof[i].style.backgroundImage = `url(${pokemon.sprite.base})`
		})

		this.prompt.innerHTML = text.final.prompt[this.main.lang].toUpperCase();
		this.info.innerHTML = this.getText(this.main.lang).toUpperCase();
		//this.acceptButton.innerText = text.final.accept[this.main.lang].toUpperCase();

		this.challenge = [];
		this.challengeContainer.innerHTML = "";
		this.challengeContainer.style.display = 'none';
		if (this.main.area.inChallenge) {
			this.challengeContainer.style.display = 'revert-layer'
			this.main.area.inChallenge.forEach((chall, i) => {
				this.challenge[i] = new Element(this.challengeContainer, { className: 'final-challenge' }).element;
				this.challenge[i].innerText = text.challenge[CHALLENGES_LIST[i]].title[this.main.lang].toUpperCase();
				this.challenge[i].style.color = (chall) ? '#ebbe35' : '#666';
			})
		}
	}

	open() {
		super.open();
		this.update();
		this.main.game.stop();

		const scenes = [
			this.main.boxScene,
			this.main.mapScene,
			this.main.pokemonScene,
			this.main.shopScene,
			this.main.shopScene.displayPokemon,
			this.main.profileScene,
			this.main.challengeScene,
			this.main.menuScene,
			this.main.menuScene.deleteScene,
			this.main.menuScene.importScene,
			this.main.menuScene.exportScene,
			this.main.profileScene.deleteRecord,
		]
		
		scenes.forEach(scene => {
			if (scene.isOpen) scene.close();
		})

		playSound('results', 'ui');
	}

	close() {
		super.close();

		if (this.main.area.inChallenge) this.main.challengeScene.cancelChallenge();

		this.main.area.loadArea(this.main.area.map.id, 1, true);
		this.main.player.getHealed(14);

		this.main.UI.nextWave.style.filter = `revert-layer`;
		this.main.UI.nextWave.style.pointerEvents = 'all';

		this.main.area.autoWave = false;
		this.main.UI.autoWave.style.background = '#2c70e3';

		//this.main.UI.saveTeamButton.style.display = 'revert-layer';
		//this.main.UI.importTeamButton.style.display = 'revert-layer';
		
		this.main.UI.update();
		this.main.UI.revertUI();
		this.main.game.resume();

		playSound('obtain', 'ui');
		saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}

	getText(lang) {
		const text = [
			`You defeated ${this.boss.name[lang]} and showed who's boss, congratulations!`,
		    `Has derrotado a ${this.boss.name[lang]} y le has demostrado quién manda`,
		    `Vous avez vaincu ${this.boss.name[lang]} et montré qui est le patron,`,
		    `Você derrotou ${this.boss.name[lang]} e mostrou quem manda, parabéns!`,
		    `Hai sconfitto ${this.boss.name[lang]} e hai dimostrato chi comanda`,
		    `Du hast ${this.boss.name[lang]} besiegt und gezeigt, wer der Boss ist`,
		    `${this.boss.name[lang]}を倒してボスの座を見せつけた、祝福します！`,
		    `${this.boss.name[lang]}를 물리치고 누가 보스인지 보여줬다, 축하해!`,
		    `你击败了${this.boss.name[lang]}，向他展示了谁才是老大，恭喜！`
		]
		return text[lang];
	}
}