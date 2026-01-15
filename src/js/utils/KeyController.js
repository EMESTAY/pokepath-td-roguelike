import { saveData } from '../file/data.js';

const stakatakaSequence = ["5", "6", "7", "5"];
let stakatakaPosition = 0;

export class KeyController {
	constructor(main) {
		this.main = main;
		this.keyHandler = this.keyHandler.bind(this);
		this.listen();
	}

	listen() {
		window.addEventListener('keydown', this.keyHandler);
	}

	keyHandler(e) {
		const keyMap = {
			'en': { profile: 'q', box: 'e', shop: 's', map: 'w', damageDealt: 'z', leftA: 'a', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'},
			'fr': { profile: 'a', box: 'e', shop: 's', map: 'z', damageDealt: 'w', leftA: 'q', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'}
		};

		const langKeys = (this.main.lang == 2) ? keyMap['fr'] : keyMap['en'];

		const scenes = {
			newPokemon: this.main.shopScene.displayPokemon,
			pokemon: this.main.pokemonScene,
			profile: this.main.profileScene,
			box: this.main.boxScene,
			menu: this.main.menuScene,
			shop: this.main.shopScene,
			map: this.main.mapScene,
			challenge: this.main.challengeScene,
			damageDealt: this.main.UI.damageDealtDisplay,
			draft: this.main.draftScene
		};
		
		const allScenes = Object.values(scenes);
		const anySceneOpen = (except = null) =>
			allScenes.some(s => s.isOpen && s !== except);

		const gameLocked = () =>
			this.main.defeatScene.isOpen ||  this.main.newGameScene.isOpen ||  this.main.tutorialScene.isOpen ||  this.main.draftScene.isOpen ||this.main.finalScene.isOpen;

		const gameplayLocked = () =>
			gameLocked() || this.main.game.deployingUnit;

		if (e.ctrlKey && /^[1-5]$/.test(e.key)) {
		    e.preventDefault(); 
		    if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;

		    const i = parseInt(e.key) - 1;
		    this.main.UI.saveTeamButtonHandle(i);
		    return;
		}

		switch (e.key) {
			case 'Escape':
				if (gameLocked()) return;
				if (this.main.game.deployingUnit) return  this.main.game.cancelDeployUnit();
				if (this.main.boxScene.nameChange.isOpen) return this.main.boxScene.nameChange.close();
				if (this.main.pokemonScene.nameChange.isOpen) return this.main.pokemonScene.nameChange.close();
				if (this.main.menuScene.deleteScene.isOpen) return this.main.menuScene.deleteScene.close();
				if (this.main.menuScene.importScene.isOpen) return this.main.menuScene.importScene.close();
				if (this.main.menuScene.exportScene.isOpen) return this.main.menuScene.exportScene.close();
				if (this.main.profileScene.deleteRecord.isOpen) return this.main.profileScene.deleteRecord.close();
				const opened = allScenes.find(s => s.isOpen);
				if (opened) opened.close();
				else this.main.menuScene.open();
				break;
				
			case 'x':
				this.main.game.toggleRanges();
				break;

			case langKeys.leftA:
			case langKeys.leftArrow:
				if (this.main.pokemonScene.isOpen && !this.main.pokemonScene.nameChange.isOpen) this.main.pokemonScene.changePokemon(-1)
				break;
			case langKeys.rightD:
			case langKeys.rightArrow:
				if (this.main.pokemonScene.isOpen && !this.main.pokemonScene.nameChange.isOpen) this.main.pokemonScene.changePokemon(1)
				break;


			case langKeys.damageDealt:
				this.main.UI.damageDealtSwitch();
				break;

			case langKeys.profile:
				if (gameplayLocked() || anySceneOpen(scenes.profile)) return;
				scenes.profile.isOpen ? scenes.profile.close() : scenes.profile.open();
				break;

			case langKeys.box:
				if (gameplayLocked() || anySceneOpen(scenes.box)) return;
				if (!scenes.box.isOpen) scenes.box.open();
				break;

			case langKeys.shop:
				if (gameplayLocked() || anySceneOpen(scenes.shop)) return;
				scenes.shop.isOpen ? scenes.shop.close() : scenes.shop.open();
				break;

			case langKeys.map:
				if (gameplayLocked() || anySceneOpen(scenes.map)) return;
				scenes.map.isOpen ? scenes.map.close() : scenes.map.open();
				break;

			case ' ':
				if (gameLocked() || anySceneOpen()) return;
				if (! this.main.area.waveActive && ! this.main.game.deployingUnit) this.main.area.newWave();
				break;

			case 'Shift':
				if (gameLocked()) return;
				this.main.game.toggleSpeed();
				break;

			case 'F11':
				e.preventDefault();
				window.electronAPI.toggleFullscreen();
				break;

			case 'F1':
				e.preventDefault(); 
		    	if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
		    	this.main.UI.importTeamButtonHandle(0);
				break;
			case 'F2':
				e.preventDefault(); 
		    	if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
		    	this.main.UI.importTeamButtonHandle(1);
				break;
			case 'F3':
				e.preventDefault(); 
		    	if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
		    	this.main.UI.importTeamButtonHandle(2);
				break;
			case 'F4':
				e.preventDefault(); 
		    	if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
		    	this.main.UI.importTeamButtonHandle(3);
				break;
			case 'F5':
				e.preventDefault(); 
		    	if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
		    	this.main.UI.importTeamButtonHandle(4);
				break;

			//

			default:
				if (/^[1-9]$/.test(e.key)) {
					if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
					const i = parseInt(e.key) - 1;
					if (this.main.game.deployingUnit) this.main.game.cancelDeployUnit();
					else if (this.main.team.pokemon.length > i) this.main.game.tryDeployUnit(i);
				} else if (e.key === "0") {
			        if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
			        if (this.main.team.pokemon.length === 10) {
			            this.main.game.tryDeployUnit(9);
			        }
			    }
				break;
		}

		if (
			this.main.area.routeNumber == 8 && 
			!this.main.player.secrets.stakataka &&
			//!this.main.area.waveActive &&
			!this.main.area.inChallenge 
		) {
			const key = event.key;
		    if (key === stakatakaSequence[stakatakaPosition]) {
		        stakatakaPosition++;
		        if (stakatakaPosition === stakatakaSequence.length) {
		        	stakatakaPosition = 0; 
		        	this.main.player.secrets.stakataka = true;
					this.main.UI.getSecret('stakataka');
		        }
		    } else {
		        stakatakaPosition = 0; 
		    }
		}
	}

	remove() {
		window.removeEventListener('keydown', this.keyHandler);
	}
}
