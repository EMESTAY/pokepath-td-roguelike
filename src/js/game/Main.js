import { Element } from '../utils/Element.js';
import { Utility } from '../utils/Utility.js';
import { KeyController } from '../utils/KeyController.js';
import { Tooltip } from '../utils/Tooltip.js';
import { Notification } from '../utils/Notification.js';
import { UI } from './UI.js';
import { Game } from './Game.js';
import { GAME_CONFIG } from './Config.js';

import { BoxScene } from './scenes/BoxScene.js';
import { MapScene } from './scenes/MapScene.js';
import { PokemonScene } from './scenes/PokemonScene.js';
import { ShopScene } from './scenes/ShopScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { ChallengeScene } from './scenes/ChallengeScene.js';
import { ProfileScene } from './scenes/ProfileScene.js';
import { DefeatScene } from './scenes/DefeatScene.js';
import { NewGameScene } from './scenes/NewGameScene.js';
import { TutorialScene } from './scenes/TutorialScene.js';
import { BanetteScene } from './scenes/BanetteScene.js';
import { FinalScene } from './scenes/FinalScene.js';
import { DraftScene } from './scenes/DraftScene.js';
import { RoguelikeScene } from './scenes/RoguelikeScene.js';
import { RoguelikeStarterScene } from './scenes/RoguelikeStarterScene.js';

import { Player } from './core/Player.js';
import { Team } from './core/Team.js';
import { Box } from './core/Box.js';
import { Area } from './core/Area.js';
import { Shop } from './core/Shop.js';
import { TeamManager } from './core/TeamManager.js';

import { pokemonData, eggListDataUpdate } from './data/pokemonData.js';

import { EventManager } from './core/EventManager.js';
import { ObjectPool } from '../utils/ObjectPool.js';
import { Projectile } from './component/Projectile.js';

export class Main {
  constructor(dataManager) {
    this.events = new EventManager();
    this.dataManager = dataManager;

    this.projectilePool = new ObjectPool(
      () => new Projectile(0, 0, null, null, { sprite: { image: '', frames: 1 } }, null),
      (proj, x, y, enemy, ctx, projectile, tower) => proj.reset(x, y, enemy, ctx, projectile, tower)
    );

    this.lang = dataManager.config.language;
    this.showDamage = dataManager.config.showDamage;
    //this.showRoute = dataManager.config.showRoute ?? 0;
    this.autoReset = dataManager.config.autoReset ?? 0;
    this.autoStop = dataManager.config.autoStop ?? 0;
    this.autoStopBoss = dataManager.config.autoStopBoss ?? 0;
    this.displayHealth = dataManager.config.displayHealth ?? 0;
    //this.showTC = dataManager.config.showTC ?? 0;
    this.data = dataManager.save;
    this.gameMode = this.data.gameMode || 0;

    // SCENES
    this.scene = new Element(document.getElementById('screen'), {
      id: 'game-scene',
    }).element;
    this.UI = new UI(this, this.events);
    this.game = new Game(this);
    this.boxScene = new BoxScene(this);
    this.mapScene = new MapScene(this);
    this.challengeScene = new ChallengeScene(this);
    this.pokemonScene = new PokemonScene(this);
    this.shopScene = new ShopScene(this);
    this.profileScene = new ProfileScene(this);
    this.menuScene = new MenuScene(this);
    this.defeatScene = new DefeatScene(this);
    this.newGameScene = new NewGameScene(this);
    this.tutorialScene = new TutorialScene(this);
    this.banetteScene = new BanetteScene(this);
    this.finalScene = new FinalScene(this);
    this.draftScene = new DraftScene(this);
    this.roguelikeScene = new RoguelikeScene(this);
    this.roguelikeStarterScene = new RoguelikeStarterScene(this);

    // CORE
    this.player = new Player(this, this.events, this.data.player);
    this.team = new Team(this, this.data.team);
    this.box = new Box(this, this.data.box);
    this.area = new Area(this, this.data.area);
    this.shop = new Shop(this, this.data.shop);
    this.teamManager = new TeamManager(this, this.data.teamManager);

    // MISC
    this.utility = new Utility();
    this.notification = new Notification();
    this.tooltip = new Tooltip(this);
    this.keys = new KeyController(this);

    this.checkUpdates();
    this.load();
  }

  load() {
    try {
      this.UI.update();
      this.game.load();
      if (this.data.new) this.newGameScene.open();
      if (this.data.autoReset == undefined) this.data.autoReset = 0;
      //if (this.data.showRoute == undefined) this.data.showRoute = 0;
      if (this.data.autoStop == undefined) this.data.autoStop = 0;
      if (this.data.autoStopBoss == undefined) this.data.autoStopBoss = 0;
      if (this.data.displayHealth == undefined) this.data.displayHealth = 0;
      //if (this.data.showTC == undefined) this.data.showTC = 0;

      setInterval(() => {
        this.player.stats.timePlayed++;
      }, 60000);
    } catch (error) {
      console.error('Critical error loading the game:', error);
      // Optional: Display a user-friendly error notification
      // this.notification.display("Error loading game resources.");
    }
  }

  checkUpdates() {
    if (this.player.update == undefined) {
      this.player.update = 1;
      const newPokemons = eggListDataUpdate;
      this.shop.eggList.push(...newPokemons);
    }
  }

  updateLanguage() {
    this.UI.update();
  }
}

function resize() {
  const BASE_WIDTH = GAME_CONFIG.WINDOW.BASE_WIDTH;
  const BASE_HEIGHT = GAME_CONFIG.WINDOW.BASE_HEIGHT;

  const scale = Math.min(window.innerWidth / BASE_WIDTH, window.innerHeight / BASE_HEIGHT);

  const root = document.getElementById('screen-root');
  root.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', resize);
resize();
