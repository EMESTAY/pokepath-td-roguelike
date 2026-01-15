import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { routeData } from '../data/routeData.js';
import { saveData } from '../../file/data.js';
import { playSound } from '../../file/audio.js';

const CHALLENGES_LIST = ['lvl50', 'draft', 'noItems', 'permadeath', 'toughEnemies', 'chrono'];

export class ChallengeScene extends GameScene {
	constructor(main) {
		super(480, 400);
		this.main = main;
		this.render();
		this.challengeSelected = 0;
		this.challenges = [false, false, false, false, false, false];
	}

	render() {
		this.title.innerHTML = text.challenge.title[this.main.lang].toUpperCase();
		this.routeName = new Element(this.container, { className: 'challenge-scene-route-name' }).element;

		this.challengeRow = [];
		this.challengeListContainer = new Element(this.container, { className: 'challenge-scene-list-container' }).element;

		CHALLENGES_LIST.forEach((label, i) => {
			this.challengeRow[i] = new Element(this.challengeListContainer, { className: 'challenge-scene-list-row' }).element;
			this.challengeRow[i].label = new Element(this.challengeRow[i], { className: 'challenge-scene-list-row-label' }).element;
			this.challengeRow[i].result = new Element(this.challengeRow[i], { className: 'challenge-scene-list-row-result' }).element;
			this.challengeRow[i].addEventListener('mouseenter', () => this.selectChallenge(i))
			this.challengeRow[i].addEventListener('click', () => this.addChallange(i))
		})

		this.challengeInfoContainer = new Element(this.container, { className: 'challenge-scene-info-container' }).element;
		this.challengeInfoText = new Element(this.challengeInfoContainer, { className: 'challenge-scene-info-text' }).element;

		this.challengeStartButton = new Element(this.container, { className: 'challenge-scene-start-button' }).element;
		this.challengeStartButton.addEventListener('click', () => { this.startChallenge() })

		this.challengeWarning = new Element(this.container, { className: 'challenge-scene-warning' }).element;
		this.background.addEventListener('click', (e) => { if (e.target == this.background) this.close() })
	}

	update() {
		this.title.innerHTML = text.challenge.title[this.main.lang].toUpperCase();
		this.routeName.innerHTML = this.main.area.map.name[this.main.lang].toUpperCase()
		this.challengeStartButton.innerHTML = text.challenge.start[this.main.lang].toUpperCase();

		this.challenges.forEach((chall, i) => {
			this.challengeRow[i].label.innerHTML = text.challenge[CHALLENGES_LIST[i]].title[this.main.lang].toUpperCase();
			this.challengeRow[i].result.innerHTML = (this.challenges[i]) ? text.challenge.on[this.main.lang].toUpperCase() : text.challenge.off[this.main.lang].toUpperCase();
			this.challengeRow[i].result.style.color = (this.challenges[i])  ? `var(--green)` : `var(--red)`
		})

		this.challengeInfoText.innerHTML = text.challenge[CHALLENGES_LIST[this.challengeSelected]].description[this.main.lang].toUpperCase();
		this.challengeWarning.innerHTML = text.challenge.warning[this.main.lang];

		if (this.main.player.stars < 900 || this.main.box.pokemon.length < 30) {
			this.challengeStartButton.style.filter = 'brightness(0.8)';
			this.challengeStartButton.style.pointerEvents = 'none';
		} else {
			this.challengeStartButton.style.color = `var(--white)`;
			if (this.challenges.some(chall => chall === true)) {
				this.challengeStartButton.style.filter = 'revert-layer';
				this.challengeStartButton.style.pointerEvents = 'revert-layer';
			} else {
				this.challengeStartButton.style.filter = 'brightness(0.8)';
				this.challengeStartButton.style.pointerEvents = 'none';
			}
			if (this.main.area.inChallenge) {
				this.challengeStartButton.innerHTML = text.challenge.surrender[this.main.lang].toUpperCase();
			}
		}
	}

	selectChallenge(i) {
		playSound('hover1', 'ui');
		this.challengeSelected = i;
		this.update();
	}

	addChallange(i) {
		if (this.main.area.inChallenge) {
			playSound('pop0', 'ui');
			return;
		}
		playSound('option', 'ui');
		this.challenges[i] = !this.challenges[i];
		this.update();
	}

	startChallenge() {
		if (this.main.area.inChallenge) return this.surrender();
		this.main.boxScene.removeAllItems();
		this.main.boxScene.removeAllButton();
		if (this.challenges[0]) {
			const pokemon = [...this.main.team.pokemon, ...this.main.box.pokemon]
			pokemon.forEach(poke => poke.setStatsLevel(50))
		}
		if (this.challenges[5]) {
			this.main.game.chrono.restart();
			this.main.UI.chrono.innerHTML = '00:00:00.00'
		}

		this.main.area.loadArea(this.main.area.routeNumber, 1, false, this.challenges);
		this.main.UI.update();
		this.main.player.getHealed(14);
		this.main.teamManager.teamChallenge = [[], [], [], [], []];
		saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
		this.main.UI.displayEnemyInfo(this.main.area.waves[this.main.area.waveNumber].preview[0], 0);
		this.close();
		playSound('step', 'ui');
	}

	surrender() {
		playSound('results', 'ui');
		this.cancelChallenge();
		this.close();
	}

	cancelChallenge() {
		this.main.game.chrono.stop();
		const pokemon = [...this.main.team.pokemon, ...this.main.box.pokemon];
		pokemon.forEach(poke => poke.updateStats());
		this.main.boxScene.removeAllItems();
		this.main.boxScene.removeAllButton();
		this.main.area.inChallenge = false;
		this.main.UI.update();
	}

	open() {
		super.open();
		this.selectChallenge(0);
	}
}

