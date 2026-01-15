import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { routeData } from '../data/routeData.js';
import { saveData } from '../../file/data.js';
import { playSound } from '../../file/audio.js';

//const TAB_CONTENT = ['baseTab', 'hardTab', 'anomaliesTab']

export class MapScene extends GameScene {
	constructor(main) {
		super(480, 464);
		this.main = main;
		this.render();

		this.tabSelected = 0;
	}

	render() {
		this.title.innerHTML = text.map.title[this.main.lang].toUpperCase();

		//this.select = new Element(this.container, { className: 'maps-scene-select' }).element;
		this.routeContainer = new Element(this.container, { className: 'maps-scene-route-container' }).element;
		this.routes = [];

		for (let i = 0; i < 9; i++) {
			this.routes[i] = new Element(this.routeContainer, { className: 'maps-scene-route', image: routeData[i].background }).element;

			this.routes[i].name = new Element(this.routes[i], { className: 'maps-scene-route-name', text: routeData[i].name[this.main.lang].toUpperCase() }).element;
			this.routes[i].recordContainer = new Element(this.routes[i], { className: 'maps-scene-route-record-container' }).element;
			this.routes[i].record = new Element(this.routes[i], { className: 'maps-scene-route-record' }).element;
			this.routes[i].requires = new Element(this.routes[i], { className: 'maps-scene-route-requires' }).element;
			this.routes[i].addEventListener('click', () => { this.changeMap(i) });
			this.routes[i].addEventListener('mouseenter', () => { playSound('hover2', 'ui') });
		}

		// this.tabContainer = new Element(this.container, { className: 'maps-scene-tab-container' }).element;
		// this.tabs = [];

		// for (let i = 0; i < TAB_CONTENT.length; i++) {
		// 	this.tabs[i] = new Element(this.tabContainer, { className: 'maps-scene-tab' }).element;
		// 	this.tabs[i].addEventListener('click', () => this.chanegTab(i))
		// 	this.tabs[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
		// }

		this.background.addEventListener('click', (e) => { if (e.target == this.background) this.close() })
	}

	update() {
		this.title.innerHTML = text.map.title[this.main.lang].toUpperCase();
		//this.select.innerText = text.map.select[this.main.lang].toUpperCase();

		this.displayBaseRoutes();
		// this.tabs.forEach((tab, i) => {
		// 	tab.innerHTML = text.map[TAB_CONTENT[i]][this.main.lang].toUpperCase();
		// })

		// if (this.tabSelected == 0) this.displayBaseRoutes();
		// else if (this.tabSelected == 1) this.displayHardRoutes();
	}

	chanegTab(i) {
		playSound('option', 'ui');
		this.tabSelected = i;
		this.update();
	}

	changeMap(pos) {
		if (pos === this.main.area.routeNumber) return;
		this.main.area.loadArea(pos);
		this.main.UI.update();
		saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
		this.main.UI.displayEnemyInfo(this.main.area.waves[this.main.area.waveNumber].preview[0], 0);
		this.close();
		playSound('step', 'ui');
	}

	displayBaseRoutes() {
		for (let i = 0; i < 9; i++) {
				if (this.main.area.routeNumber === i) { 
					this.routes[i].style.borderColor = 'var(--red)';
					this.routes[i].recordContainer.style.backgroundColor = 'var(--red)';
				} else {
					if (this.main.player.records[i] >= 100) {
						this.routes[i].style.borderColor = '#2d70e3';
						this.routes[i].recordContainer.style.backgroundColor = '#2d70e3';
					} else {
						this.routes[i].style.borderColor = 'revert-layer';
						this.routes[i].recordContainer.style.backgroundColor = 'revert-layer';
					}
				}

				if (this.main.player.stars >= routeData[i].unlock) {
					this.routes[i].requires.innerHTML = ``;
					if (!this.main.area.waveActive) {
						this.routes[i].style.filter = `revert-layer`;
						this.routes[i].style.pointerEvents = `all`;
					} else {
						this.routes[i].style.filter = `brightness(0.8)`;
						this.routes[i].style.pointerEvents = `none`;
					}	
				} else {
					this.routes[i].style.filter = `brightness(0.5)`;
					this.routes[i].style.pointerEvents = `none`;
					this.routes[i].requires.innerHTML = `<span class="msrre">⭐</span>${routeData[i].unlock}`;
				}

				if (this.main.area.routeNumber === i) this.routes[i].style.pointerEvents = `none`;
				this.routes[i].name.innerText = routeData[i].name[this.main.lang].toUpperCase();
				this.routes[i].record.innerHTML = `<span class="msrre">⭐</span>${Math.min(100, this.main.player.records[i])}`;
			}	
	}

	displayHardRoutes() {
		for (let i = 9; i < 48; i++) {
				if (this.main.area.routeNumber === i) { 
					this.routes[i].style.borderColor = 'var(--red)';
					this.routes[i].recordContainer.style.backgroundColor = 'var(--red)';
				} else {
					if (this.main.player.records[i] >= 100) {
						this.routes[i].style.borderColor = '#2d70e3';
						this.routes[i].recordContainer.style.backgroundColor = '#2d70e3';
					} else {
						this.routes[i].style.borderColor = 'revert-layer';
						this.routes[i].recordContainer.style.backgroundColor = 'revert-layer';
					}
				}

				if (this.main.player.stars >= routeData[i].unlock) {
					this.routes[i].requires.innerHTML = ``;
					if (!this.main.area.waveActive) {
						this.routes[i].style.filter = `revert-layer`;
						this.routes[i].style.pointerEvents = `all`;
					} else {
						this.routes[i].style.filter = `brightness(0.8)`;
						this.routes[i].style.pointerEvents = `none`;
					}	
				} else {
					this.routes[i].style.filter = `brightness(0.5)`;
					this.routes[i].style.pointerEvents = `none`;
					this.routes[i].requires.innerHTML = `<span class="msrre">⭐</span>${routeData[i].unlock}`;
				}

				if (this.main.area.routeNumber === i) this.routes[i].style.pointerEvents = `none`;
				this.routes[i].name.innerText = routeData[i].name[this.main.lang].toUpperCase();
				this.routes[i].record.innerHTML = `<span class="msrre">⭐</span>${Math.min(100, this.main.player.records[i])}`;
			}	
	}

	open() {
		if (this.main.area.inChallenge) return;
		super.open();
		this.update();
	}
}