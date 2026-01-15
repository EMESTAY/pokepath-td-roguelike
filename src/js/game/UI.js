import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';
import { GameScene } from '../utils/GameScene.js';
import { pokemonData } from './data/pokemonData.js';
import { Pokemon } from './component/Pokemon.js';
import { PokemonSlot } from './component/PokemonSlot.js';
import { saveData } from '../file/data.js';

const SECTIONS = ['profile', 'box', 'shop', 'map', 'challenge', 'damageDealt', 'menu'];

export class UI {
  constructor(main, events) {
    this.main = main;
    this.events = events;
    this.render();

    this.damageDealtDisplay = false;
    this.enemyPositionDisplay = 0;

    this.tileTerrainHover = null;

    // Subscribe to events
    this.events.on('goldChange', (gold) => {
      this.playerGold.innerText = `$${this.main.utility.numberDot(gold)}`;
    });
  }

  render() {
    this.topBar = new Element(this.main.scene, {
      className: 'ui-top-bar',
    }).element;

    this.saveTeamButtonContainer = new Element(this.topBar, {
      className: 'ui-save-team-button-container',
    }).element;

    this.saveTeamButton = [];
    for (let i = 0; i < 5; i++) {
      this.saveTeamButton[i] = new Element(this.saveTeamButtonContainer, {
        className: 'ui-save-team-button',
        text: `#${i + 1}`,
      }).element;
      this.saveTeamButton[i].addEventListener('mouseenter', () => {
        playSound('open', 'ui');
      });
      this.saveTeamButton[i].addEventListener('click', () => {
        this.saveTeamButtonHandle(i);
      });
    }

    this.importTeamButtonContainer = new Element(this.topBar, {
      className: 'ui-import-team-button-container',
    }).element;

    this.importTeamButton = [];
    for (let i = 0; i < 5; i++) {
      this.importTeamButton[i] = new Element(this.importTeamButtonContainer, {
        className: 'ui-import-team-button',
        text: `#${i + 1}`,
      }).element;
      this.importTeamButton[i].addEventListener('mouseenter', () => {
        playSound('open', 'ui');
      });
      this.importTeamButton[i].addEventListener('click', () => {
        this.importTeamButtonHandle(i);
      });
    }

    this.mapRoutCointainer = new Element(this.topBar, {
      className: 'ui-map-route-container',
    }).element;
    this.mapRoute = new Element(this.mapRoutCointainer, {
      className: 'ui-map-route',
    }).element;
    this.mapRecord = new Element(this.mapRoutCointainer, {
      className: 'ui-map-record',
    }).element;

    this.bottomBar = new Element(this.main.scene, {
      className: 'ui-bottom-bar',
    }).element;
    this.challenge = new Element(this.bottomBar, {
      className: 'ui-challenge',
    }).element;
    this.chrono = new Element(this.bottomBar, { id: 'ui-chrono' }).element;

    this.waveSelectorContainer = new Element(this.bottomBar, {
      className: 'ui-wave-selector-container',
    }).element;

    this.waveSelectorTenLess = new Element(this.waveSelectorContainer, {
      className: 'ui-wave-selector',
      text: '<<',
    }).element;
    this.waveSelectorOneLess = new Element(this.waveSelectorContainer, {
      className: 'ui-wave-selector',
      text: '<',
    }).element;
    this.waveSelectorLabel = new Element(this.waveSelectorContainer, {
      className: 'ui-wave-selector-label stroke',
      text: 'WAVE MANAGER',
    }).element;
    this.waveSelectorOneMore = new Element(this.waveSelectorContainer, {
      className: 'ui-wave-selector',
      text: '>',
    }).element;
    this.waveSelectorTenMore = new Element(this.waveSelectorContainer, {
      className: 'ui-wave-selector',
      text: '>>',
    }).element;
    //this.waveSelectorBlock = new Element(this.waveSelectorContainer, { className: 'ui-wave-selector', text: 'R' }).element;

    this.waveSelectorTenLess.addEventListener('click', () => {
      this.main.area.changeWave(-10);
    });
    this.waveSelectorOneLess.addEventListener('click', () => {
      this.main.area.changeWave(-1);
    });
    this.waveSelectorOneMore.addEventListener('click', () => {
      this.main.area.changeWave(1);
    });
    this.waveSelectorTenMore.addEventListener('click', () => {
      this.main.area.changeWave(10);
    });

    this.waveSelectorTenLess.addEventListener('mouseenter', () => {
      playSound('hover1', 'ui');
    });
    this.waveSelectorOneLess.addEventListener('mouseenter', () => {
      playSound('hover1', 'ui');
    });
    this.waveSelectorOneMore.addEventListener('mouseenter', () => {
      playSound('hover1', 'ui');
    });
    this.waveSelectorTenMore.addEventListener('mouseenter', () => {
      playSound('hover1', 'ui');
    });

    this.tilesCountContainer = new Element(this.bottomBar, {
      className: 'ui-tiles-count-container',
    }).element;
    this.tilesCount = [];
    this.tilesCountNum = [0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
      this.tilesCount[i] = new Element(this.tilesCountContainer, {
        className: 'ui-tiles-count',
      }).element;
      this.tilesCount[i].addEventListener('mouseenter', () => {
        this.tileTerrainHover = i + 1;
      });
      this.tilesCount[i].addEventListener('mouseleave', () => {
        this.tileTerrainHover = null;
      });
    }

    this.dittoButton = new Element(this.bottomBar, {
      className: 'ui-ditto-button',
    }).element;
    this.dittoButton.addEventListener('click', () => {
      this.dittoButtonHandle();
    });

    this.playerPanel = new Element(this.main.scene, {
      className: 'ui-player-panel',
    }).element;
    this.playerPortrait = new Element(this.playerPanel, {
      className: 'ui-player-portrait',
    }).element;
    this.playerName = new Element(this.playerPanel, {
      className: 'ui-player-name',
    }).element;
    this.playerHealth = new Element(this.playerPanel, {
      className: 'ui-player-health',
    }).element;
    this.hearts = [];
    this.playerGold = new Element(this.playerPanel, {
      className: 'ui-player-gold',
    }).element;
    this.playerStars = new Element(this.playerPanel, {
      className: 'ui-player-stars',
    }).element;

    this.playerLimitLine = new Element(this.playerPanel, {
      className: 'ui-player-limit-line',
    }).element;

    this.pokemonContainer = new Element(this.playerPanel, {
      className: 'ui-pokemon-container',
    }).element;

    this.pokemonSlots = [];
    for (let i = 0; i < 10; i++) {
      this.pokemonSlots[i] = new PokemonSlot(this.pokemonContainer, i, this.main, this);
    }

    this.pokemonSlots[6].setStarsCost(
      `<span class="lock">🔒</span><br><span class="msrre">⭐</span>40`
    );
    this.pokemonSlots[7].setStarsCost(
      `<span class="lock">🔒</span><br><span class="msrre">⭐</span>160`
    );
    this.pokemonSlots[8].setStarsCost(
      `<span class="lock">🔒</span><br><span class="msrre">⭐</span>320`
    );
    this.pokemonSlots[9].setStarsCost(
      `<span class="lock">🔒</span><br><span class="msrre">⭐</span>540`
    );

    this.mapPanel = new Element(this.main.scene, {
      className: 'ui-map-panel',
    }).element;

    this.sectionContainer = new Element(this.mapPanel, {
      className: 'ui-section-container',
    }).element;
    this.section = [];

    SECTIONS.forEach((section) => {
      this.section[section] = new Element(this.sectionContainer, {
        className: 'ui-section',
      }).element;
      this.section[section].img = new Element(this.section[section], {
        className: 'ui-section-img',
        image: `./src/assets/images/icons/${section}.png`,
      }).element;
      this.section[section].addEventListener('mouseenter', () => {
        playSound('hover1', 'ui');
      });
    });

    this.section['profile'].addEventListener('click', () => {
      this.main.profileScene.open();
    });
    this.section['box'].addEventListener('click', () => {
      this.main.boxScene.open();
    });
    this.section['shop'].addEventListener('click', () => {
      this.main.shopScene.open();
    });
    this.section['map'].addEventListener('click', () => {
      this.main.mapScene.open();
    });
    this.section['challenge'].addEventListener('click', () => {
      this.main.challengeScene.open();
    });
    this.section['damageDealt'].addEventListener('click', () => {
      this.damageDealtSwitch();
    });
    this.section['menu'].addEventListener('click', () => {
      this.main.menuScene.open();
    });

    // this.mapName = new Element(this.mapPanel, { className: 'ui-map-name' }).element;
    // this.mapWave = new Element(this.mapPanel, { className: 'ui-map-wave' }).element;

    this.mapPanelBackground = new Element(this.mapPanel, {
      className: 'ui-map-panel-background',
    }).element;
    this.mapWavePokemonContainer = new Element(this.mapPanelBackground, {
      className: 'ui-map-wave-pokemon-container',
    }).element;
    this.mapWavePokemon = [];

    this.infoContainer = new Element(this.mapPanelBackground, {
      className: 'ui-info-container',
    }).element;
    this.infoName = new Element(this.infoContainer, {
      className: 'ui-info-name',
    }).element;
    this.infoStatContainer = new Element(this.infoContainer, {
      className: 'ui-info-stat-container',
    }).element;
    this.infoHealth = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoArmor = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoSpeed = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoPower = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoRegen = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoStun = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoSlow = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoBurn = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoPoison = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoInvisible = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;
    this.infoGold = new Element(this.infoStatContainer, {
      className: 'ui-info-stat',
    }).element;

    this.waveButtonBackground = new Element(this.mapPanel, {
      className: 'ui-wave-button-background',
    }).element;

    this.nextWave = new Element(this.mapPanel, {
      className: 'ui-next-wave',
    }).element;
    this.nextWave.addEventListener('mouseenter', () => {
      playSound('open', 'ui');
    });
    this.nextWave.addEventListener('click', () => this.main.area.newWave());

    this.autoWave = new Element(this.mapPanel, {
      className: 'ui-auto-wave',
    }).element;
    this.autoWave.addEventListener('mouseenter', () => {
      playSound('open', 'ui');
    });
    this.autoWave.addEventListener('click', () => this.main.area.switchAutoWave());

    this.speedWave = new Element(this.mapPanel, {
      className: 'ui-speed-wave',
      text: '🚀',
    }).element;
    this.speedWave.addEventListener('mouseenter', () => {
      playSound('open', 'ui');
    });
    this.speedWave.addEventListener('click', () => {
      this.main.game.toggleSpeed();
    });

    this.damageDealtContainer = new Element(this.mapPanel, {
      className: 'ui-damage-dealt-container',
    }).element;
    this.damageDealtUnit = [];

    for (let i = 0; i < 10; i++) {
      this.damageDealtUnit[i] = new Element(this.damageDealtContainer, {
        className: 'ui-damage-dealt-unit',
      }).element;
      this.damageDealtUnit[i].sprite = new Element(this.damageDealtUnit[i], {
        className: 'ui-damage-dealt-unit-sprite',
      }).element;
      this.damageDealtUnit[i].number = new Element(this.damageDealtUnit[i], {
        className: 'ui-damage-dealt-unit-number',
      }).element;
      this.damageDealtUnit[i].barContainer = new Element(this.damageDealtUnit[i], {
        className: 'ui-damage-dealt-unit-bar-container',
      }).element;
      this.damageDealtUnit[i].barPrevious = new Element(this.damageDealtUnit[i].barContainer, {
        className: 'ui-damage-dealt-unit-bar-previous',
      }).element;
      this.damageDealtUnit[i].bar = new Element(this.damageDealtUnit[i].barContainer, {
        className: 'ui-damage-dealt-unit-bar',
      }).element;
    }

    this.secretCacnea = new Element(this.main.scene, {
      className: 'secret-cacnea',
    }).element;
    this.secretCacnea.addEventListener('click', () => {
      this.secretCacnea.style.pointerEvents = 'none';
      this.main.player.secrets.cacnea = true;
      this.getSecret('cacnea');
    });
    this.secretGreavard = new Element(this.main.scene, {
      className: 'secret-greavard',
    }).element;
    this.secretGreavard.addEventListener('click', () => {
      this.secretGreavard.style.pointerEvents = 'none';
      this.main.player.secrets.greavard = true;
      this.getSecret('greavard');
    });
    // this.secretAipom = new Element(this.main.scene, { className: 'secret-aipom' }).element;
    // this.secretAipom.addEventListener('click', () => {
    // 	this.secretAipom.style.pointerEvents = 'none';
    // 	this.main.player.secrets.greavard = true;
    // 	this.getSecret('aipom');
    // });
  }

  update() {
    this.updatePlayer();
    this.updatePokemon();
    this.updateMap();

    const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;
    this.displayEnemyInfo(wavePreview[this.enemyPositionDisplay], this.enemyPositionDisplay);

    this.waveSelectorContainer.style.display = 'none';
    if (
      !this.main.area.inChallenge &&
      this.main.player.records[this.main.area.map.id] === 100 &&
      this.main.player.hasBike
    )
      this.waveSelectorContainer.style.display = 'revert-layer';

    this.mapRoute.innerHTML = `${this.main.area.map.name[
      this.main.lang
    ].toUpperCase()} <br>${text.map.wave[this.main.lang].toUpperCase()} ${
      this.main.area.waveNumber
    }`;
    this.tilesCount.forEach((tc, i) => {
      tc.innerHTML = `${this.tilesCountNum[i]}/${this.main.area.map.tilesNum[i]}`;
    });

    if (this.main.area.inChallenge) {
      this.challenge.style.display = 'revert-layer';
      this.section['map'].style.opacity = 0.4;
      this.section['map'].style.pointerEvents = 'none';

      this.section['box'].style.opacity = this.main.area.inChallenge[1] ? 0.4 : 1;
      this.section['box'].style.pointerEvents = this.main.area.inChallenge[1]
        ? 'none'
        : 'revert-layer';

      if (this.main.area.inChallenge[5]) this.chrono.style.display = 'revert-layer';
      this.challenge.innerText = text.challenge.label[this.main.lang].toUpperCase();
      //this.chrono.innerText = '00:00:00';
    } else {
      this.challenge.style.display = 'none';
      this.chrono.style.display = 'none';
      this.section['map'].style.opacity = 1;
      this.section['map'].style.pointerEvents = 'revert-layer';
      this.section['box'].style.opacity = 1;
      this.section['box'].style.pointerEvents = 'revert-layer';
    }

    let isDitto = this.main.team.pokemon.find((p) => p.id === 70);
    this.dittoButton.style.display = isDitto ? 'revert-layer' : 'none';
    this.dittoButton.style.filter = isDitto?.isDeployed ? 'grayscale(100%)' : 'revert-layer';
    // this.saveTeamButton.innerHTML = text.ui.save[this.main.lang].toUpperCase();
    // this.importTeamButton.innerHTML = text.ui.import[this.main.lang].toUpperCase();

    // if ([0, 6, 7].includes(this.main.lang)) {
    // 	this.importTeamButton.style.fontSize = '10px';
    // 	this.saveTeamButton.style.fontSize = '10px';
    // } else {
    // 	this.importTeamButton.style.fontSize = '8px';
    // 	this.saveTeamButton.style.fontSize = '8px';
    // }

    if (!this.main.area.inChallenge) {
      this.main.teamManager.teams.forEach((team, i) => {
        if (team[this.main.area.routeNumber].length == 0) {
          this.importTeamButton[i].style.pointerEvents = 'none';
          this.importTeamButton[i].style.filter = 'brightness(0.7)';
        } else {
          this.importTeamButton[i].style.pointerEvents = 'revert-layer';
          this.importTeamButton[i].style.filter = 'revert-layer';
        }
      });
    } else {
      this.main.teamManager.teamChallenge.forEach((team, i) => {
        if (team.length == 0) {
          this.importTeamButton[i].style.pointerEvents = 'none';
          this.importTeamButton[i].style.filter = 'brightness(0.7)';
        } else {
          this.importTeamButton[i].style.pointerEvents = 'revert-layer';
          this.importTeamButton[i].style.filter = 'revert-layer';
        }
      });
    }

    if (
      this.main.area.routeNumber == 4 &&
      //!this.main.area.waveActive &&
      !this.main.area.inChallenge &&
      !this.main.player.secrets.cacnea
    ) {
      this.secretCacnea.style.pointerEvents = 'revert-layer';
    } else {
      this.secretCacnea.style.pointerEvents = 'none';
    }

    if (
      this.main.area.routeNumber == 2 &&
      //!this.main.area.waveActive &&
      !this.main.area.inChallenge &&
      !this.main.player.secrets.greavard
    ) {
      this.secretGreavard.style.pointerEvents = 'revert-layer';
    } else {
      this.secretGreavard.style.pointerEvents = 'none';
    }
  }

  updatePlayer() {
    this.playerPortrait.style.backgroundImage = `url("./src/assets/images/portraits/${this.main.player.portrait}.png")`;
    this.playerName.innerText = this.main.player.name.toUpperCase();
    this.playerGold.innerText = `$${this.main.utility.numberDot(this.main.player.gold)}`;
    this.playerStars.innerHTML = `<span class="msrre">⭐</span>${Math.min(
      900,
      this.main.player.stars
    )}`;
    this.playerHealth.innerHTML = '';
    this.hearts = [];
    for (let i = 0; i < 14; i++) {
      if (this.main.player.health[this.main.area.map.id] > i)
        this.hearts[i] = new Element(this.playerHealth, {
          className: 'ui-player-heart-on',
        }).element;
      else
        this.hearts[i] = new Element(this.playerHealth, {
          className: 'ui-player-heart-off',
        }).element;
    }
  }

  updatePokemon() {
    for (let i = 0; i < 10; i++) {
      this.pokemonSlots[i].reset();

      this.damageDealtUnit[i].sprite.style.display = 'none';
      this.damageDealtUnit[i].number.style.display = 'none';
      this.damageDealtUnit[i].barContainer.style.display = 'none';
      this.damageDealtUnit[i].bar.style.display = 'none';
    }

    this.main.team.pokemon.forEach((pokemon, i) => {
      this.pokemonSlots[i].update(pokemon, this.main.area.inChallenge[0]);

      this.damageDealtUnit[i].sprite.style.display = 'revert-layer';
      this.damageDealtUnit[i].number.style.display = 'revert-layer';
      this.damageDealtUnit[i].barContainer.style.display = 'revert-layer';
      this.damageDealtUnit[i].bar.style.display = 'revert-layer';

      this.damageDealtUnit[i].sprite.style.backgroundImage = `url("${pokemon.sprite.base}")`;
      this.damageDealtUnit[i].bar.style.backgroundColor = pokemon.specie.color;
      this.damageDealtUnit[i].barPrevious.style.backgroundColor = `${pokemon.specie.color}4D`;
    });

    for (let i = 9; i > this.main.player.teamSlots - 1; i--) {
      this.pokemonSlots[i].lock(text.ui.locked[this.main.lang]);
    }
  }

  displayEnemyInfo(enemy, pos) {
    if (pos >= this.mapWavePokemon.length) {
      const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;
      enemy = wavePreview[0];
      pos = 0;
    }

    this.mapWavePokemon.forEach((pokemon, i) => {
      pokemon.style.filter = `brightness(0.8)`;
      if (pos === i) pokemon.style.filter = `brightness(1) drop-shadow(0 0 1px white)`;
    });

    const bonusSteps = Math.floor((this.main.area.waveNumber - 1) / 5);

    let hp = enemy.hp;
    let armor = enemy.armor;
    let gold = enemy.gold + this.main.player.extraGold;

    if (bonusSteps > 0) {
      hp = Math.floor(enemy.hp * (1 + 0.02 * bonusSteps));
      armor = Math.floor(enemy.armor * (1 + 0.01 * bonusSteps));
      gold = Math.floor(gold * (1 + 0.15 * bonusSteps));
    }

    if (this.main.area.inChallenge[4]) {
      hp = Math.floor(hp * 1.5);
      armor = Math.floor(armor * 1.5);
    }

    this.infoName.innerHTML = enemy.name[this.main.lang].toUpperCase();
    this.infoHealth.innerHTML = `${text.ui.health[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${hp}</span>`;
    this.infoArmor.innerHTML = `${text.ui.armor[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${armor || 0}</span>`;
    this.infoSpeed.innerHTML = `${text.ui.speed[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${enemy.speed}</span>`;
    this.infoPower.innerHTML = `${text.ui.power[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${enemy.power}</span>`;
    this.infoRegen.innerHTML = `${text.ui.regen[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${enemy.regeneration}/s</span>`;
    this.infoStun.innerHTML = `${text.ui.stun[this.main.lang].toUpperCase()}`;
    this.infoSlow.innerHTML = `${text.ui.slow[this.main.lang].toUpperCase()}`;
    this.infoBurn.innerHTML = `${text.ui.burn[this.main.lang].toUpperCase()}`;
    this.infoPoison.innerHTML = `${text.ui.poison[this.main.lang].toUpperCase()}`;
    this.infoInvisible.innerHTML = `${text.ui.invisible[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">${
      enemy.invisible
        ? text.ui.yes[this.main.lang].toUpperCase()
        : text.ui.no[this.main.lang].toUpperCase()
    }</span>`;
    this.infoGold.innerHTML = `${text.ui.gold[
      this.main.lang
    ].toUpperCase()} <span class="pos-right">$${gold}</span>`;

    this.infoStun.innerHTML += enemy.canStun
      ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>`
      : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`;
    this.infoSlow.innerHTML += enemy.canSlow
      ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>`
      : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`;
    this.infoBurn.innerHTML += enemy.canBurn
      ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>`
      : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`;
    this.infoPoison.innerHTML += enemy.canPoison
      ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>`
      : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`;

    this.enemyPositionDisplay = pos;
  }

  updateMap() {
    // this.mapName.innerText = this.main.area.map.name[this.main.lang].toUpperCase();
    // this.mapWave.innerText = `${text.map.wave[this.main.lang].toUpperCase()} ${this.main.area.waveNumber}`;
    this.mapRecord.innerHTML = `<span class="msrre">⭐</span>${Math.min(
      100,
      this.main.player.records[this.main.area.map.id]
    )}`;

    // if (this.main.area.inChallenge != undefined) {
    // 	switch (this.main.area.inChallenge) {
    // 		case 0:
    // 			this.mapRecord.innerHTML = `00:00:00`;
    // 			break;
    // 		case 1:
    // 			this.mapRecord.innerHTML = text.challenge.lvl50.title[this.main.lang].toUpperCase();
    // 			break;
    // 		case 2:
    // 			this.mapRecord.innerHTML = text.challenge.lockedTeam.title[this.main.lang].toUpperCase();
    // 			break;
    // 		case 3:
    // 			this.mapRecord.innerHTML = text.challenge.noDitto.title[this.main.lang].toUpperCase();
    // 			break;
    // 	}
    // }

    const pokemonCount = this.countPokemon(this.main.area.waves[this.main.area.waveNumber]);
    const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;

    this.mapWavePokemonContainer.innerHTML = '';
    this.mapWavePokemon = [];
    wavePreview.forEach((pokemon, i) => {
      this.mapWavePokemon[i] = new Element(this.mapWavePokemonContainer, {
        className: 'ui-map-wave-pokemon',
        image: pokemon.sprite.base,
      }).element;
      this.mapWavePokemon[i].addEventListener('click', () => {
        playSound('click1', 'ui');
        this.displayEnemyInfo(pokemon, i);
      });
      this.mapWavePokemon[i].addEventListener('mouseenter', () => {
        playSound('hover1', 'ui');
      });
      this.mapWavePokemon[i].count = new Element(this.mapWavePokemon[i], {
        className: 'stroke',
        text: `x${pokemonCount[i] - 1}`,
      }).element;
      this.mapWavePokemon[i].count.style.position = 'absolute';
      this.mapWavePokemon[i].count.style.color = 'var(--white)';
      this.mapWavePokemon[i].count.style.width = '100%';
      this.mapWavePokemon[i].count.style.textAlign = 'center';
      this.mapWavePokemon[i].count.style.fontSize = '8px';
      this.mapWavePokemon[i].count.style.bottom = '-5px';
    });

    this.autoWave.innerHTML = text.ui.autoWave[this.main.lang].toUpperCase();
    this.nextWave.innerText = text.ui.nextWave[this.main.lang].toUpperCase();

    this.autoWave.style.filter = `revert-layer`;
    this.autoWave.style.pointerEvents = `revert-layer`;
    this.speedWave.style.filter = `revert-layer`;
    this.speedWave.style.pointerEvents = `revert-layer`;

    if (this.main.area.waveActive) {
      this.nextWave.style.filter = `brightness(0.8)`;
      this.nextWave.style.pointerEvents = 'none';
    } else {
      this.nextWave.style.filter = `revert-layer`;
      this.nextWave.style.pointerEvents = 'all';
    }
  }

  countPokemon(grupo) {
    const res = {};

    const arrayCount = (arr) => {
      arr.forEach((pokemon) => {
        if (pokemon !== null) {
          const id = pokemon.id;
          res[id] = (res[id] || 0) + 1;
        }
      });
    };

    arrayCount(grupo.preview);
    arrayCount(grupo.wave);

    return grupo.preview.map((pokemon) => res[pokemon.id]);
  }

  updateDamageDealt() {
    this.main.team.pokemon.forEach((pokemon, i) => {
      if (pokemon.damageDealt > 0) {
        const per = Math.ceil((pokemon.damageDealt / this.main.area.totalDamageDealt) * 100);
        this.damageDealtUnit[i].number.innerHTML = `
					${this.main.utility.numberDot(pokemon.damageDealt, this.main.lang)} 
					<span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(${per}%)</span>
				`;
        this.damageDealtUnit[i].bar.style.width = `${per}%`;
      } else {
        this.damageDealtUnit[i].number.innerHTML =
          `0 <span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(0%)</span>`;
        this.damageDealtUnit[i].bar.style.width = '0%';
      }
      if (pokemon.id == 19 || pokemon.id == 83) {
        this.damageDealtUnit[i].number.innerHTML = `${
          text.ui.helping[this.main.lang]
        } <span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">:)</span>`;
      }
    });
  }

  refreshDamageDealt(force = false) {
    for (let i = 0; i < 10; i++) {
      if (this.main.team.pokemon[i]) this.main.team.pokemon[i].damageDealt = 0;
      this.damageDealtUnit[i].number.innerHTML =
        `0 <span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(0%)</span>`;
      this.damageDealtUnit[i].barPrevious.style.width = force
        ? '0%'
        : this.damageDealtUnit[i].bar.style.width;
      this.damageDealtUnit[i].bar.style.width = '0%';
    }
  }

  damageDealtSwitch() {
    playSound('option', 'ui');
    this.damageDealtDisplay = !this.damageDealtDisplay;
    if (this.damageDealtDisplay) this.damageDealtContainer.style.display = 'block';
    else this.damageDealtContainer.style.display = 'none';
  }

  blockRightUI() {
    this.mapPanel.style.pointerEvents = 'none';
    this.mapPanel.style.filter = 'brightness(0.8)';
    this.nextWave.style.pointerEvents = 'none';
    this.mapWavePokemonContainer.style.pointerEvents = 'all';
  }

  blockLeftUI() {
    this.playerPanel.style.pointerEvents = 'none';
    this.playerPanel.style.filter = 'brightness(0.8)';
    this.playerPanel.querySelectorAll('*').forEach((el) => (el.style.pointerEvents = 'none'));
  }

  blockAllUI() {
    this.blockRightUI();
    this.blockLeftUI();
  }

  blockMenuUI() {
    SECTIONS.forEach((section) => {
      this.section[section].style.pointerEvents = 'none';
      this.section[section].img.style.backgroundSize = '17px';
      this.section[section].img.style.opacity = '0.8';
    });
  }

  revertUI() {
    this.mapPanel.style.pointerEvents = 'all';
    this.playerPanel.style.pointerEvents = 'all';
    this.mapPanel.style.filter = 'revert-layer';
    this.playerPanel.style.filter = 'revert-layer';
    this.nextWave.style.pointerEvents = 'all';

    SECTIONS.forEach((section) => {
      this.section[section].style.pointerEvents = 'all';
      this.section[section].img.style.backgroundSize = 'revert-layer';
      this.section[section].img.style.opacity = 'revert-layer';
    });
  }

  getSecret(poke) {
    const pokemon = pokemonData[poke];

    if (this.main.team.pokemon.length < this.main.player.teamSlots) {
      this.main.team.addPokemon(new Pokemon(pokemon, 1, null, this.main));
      this.main.shopScene.displayPokemon.open(this.main.team.pokemon.at(-1));
    } else {
      this.main.box.addPokemon(new Pokemon(pokemon, 1, null, this.main));
      this.main.shopScene.displayPokemon.open(this.main.box.pokemon.at(-1));
    }

    this.main.player.stats.pokemonOwned++;
    this.main.player.stats.totalPokemonLevel++;
    this.main.player.achievementProgress.evolutionCount++;

    if (this.main.player.achievementProgress.evolutionCount === 180)
      this.main.player.unlockAchievement(1);

    saveData(
      this.main.player,
      this.main.team,
      this.main.box,
      this.main.area,
      this.main.shop,
      this.main.teamManager
    );
    this.main.UI.update();
  }

  dittoButtonHandle() {
    const pokemon = this.main.team.pokemon[0];
    const ditto = this.main.team.pokemon.find((p) => p.id === 70);

    if (!ditto.isDeployed) {
      playSound('teleport', 'effect');

      this.main.team.pokemon.splice(0, 1);
      this.main.team.pokemon.push(pokemon);

      if ([58, 59, 63, 64, 65, 66].includes(ditto.adn.id)) this.main.player.fossilInTeam--;
      ditto.adn = this.main.team.pokemon[0].specie;
      if ([58, 59, 63, 64, 65, 66].includes(ditto.adn.id)) this.main.player.fossilInTeam++;
      ditto.transformADN();
      this.main.UI.updatePokemon();
      this.update();
    } else playSound('pop0', 'ui');
  }

  importTeamButtonHandle(i) {
    if (
      !this.main.area.inChallenge &&
      this.main.teamManager.teams[i][this.main.area.routeNumber].length == 0
    )
      return;
    if (this.main.area.inChallenge && this.main.teamManager.teamChallenge[i].length == 0) return;

    const msg = new Element(this.main.scene, {
      className: 'team-saved-message',
      text: text.ui.loadTeam[this.main.lang].toUpperCase(),
    }).element;

    msg.style.opacity = 0;
    setTimeout(() => {
      msg.style.opacity = 1;
    }, 0);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 500);
    }, 1500);

    if (this.main.area.inChallenge) this.main.teamManager.importTeam(i, true);
    else this.main.teamManager.importTeam(i);
  }

  saveTeamButtonHandle(i) {
    const msg = new Element(this.main.scene, {
      className: 'team-saved-message',
      text: text.ui.savedTeam[this.main.lang].toUpperCase(),
    }).element;

    msg.style.opacity = 0;
    setTimeout(() => {
      msg.style.opacity = 1;
    }, 0);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 500);
    }, 1500);

    if (this.main.area.inChallenge) this.main.teamManager.saveTeam(i, true);
    else this.main.teamManager.saveTeam(i);
  }
}
