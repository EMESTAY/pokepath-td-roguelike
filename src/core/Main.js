import { Element } from '../features/ui/Element.js';
import { Utility } from './utils/Utility.js';
import { KeyController } from './utils/KeyController.js';
import { Tooltip } from '../features/ui/Tooltip.js';
import { Notification } from '../features/ui/Notification.js';
import { UI } from '../features/ui/UIManager.js';
import { Game } from './GameLoop.js';
import { GAME_CONFIG } from '../data/static/Config.js';

import { BoxScene } from '../features/ui/scenes/BoxScene.js';
import { MapScene } from '../features/ui/scenes/MapScene.js';
import { PokemonScene } from '../features/ui/scenes/PokemonScene.js';
import { ShopScene } from '../features/ui/scenes/ShopScene.js';
import { MenuScene } from '../features/ui/scenes/MenuScene.js';
import { ChallengeScene } from '../features/ui/scenes/ChallengeScene.js';
import { ProfileScene } from '../features/ui/scenes/ProfileScene.js';
import { DefeatScene } from '../features/ui/scenes/DefeatScene.js';
import { NewGameScene } from '../features/ui/scenes/NewGameScene.js';
import { TutorialScene } from '../features/ui/scenes/TutorialScene.js';
import { BanetteScene } from '../features/ui/scenes/BanetteScene.js';
import { FinalScene } from '../features/ui/scenes/FinalScene.js';
import { DraftScene } from '../features/ui/scenes/DraftScene.js';
import { RoguelikeScene } from '../features/ui/scenes/RoguelikeScene.js';
import { RoguelikeStarterScene } from '../features/ui/scenes/RoguelikeStarterScene.js';

import { Player } from '../features/player/Player.js';
import { Team } from '../features/player/Team.js';
import { Box } from '../features/player/Box.js';
import { Area } from '../features/map/Area.js';
import { Shop } from '../features/economy/Shop.js';
import { TeamManager } from '../features/player/TeamManager.js';

import { pokemonData, eggListDataUpdate } from '../data/static/pokemonData.js';

import { EventManager } from './EventBus.js';
import { ObjectPool } from './utils/ObjectPool.js';
import { Projectile } from '../features/combat/entities/Projectile.js';

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
