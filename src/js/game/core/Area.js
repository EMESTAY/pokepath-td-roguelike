import { routeData } from "../data/routeData.js";
import { PlacementTile } from "../component/PlacementTile.js";
import { Element } from "../../utils/Element.js";
import { Enemy } from "../component/Enemy.js";
import { text } from "../../file/text.js";
import { saveData } from "../../file/data.js";
import { playMusic, playSound } from "../../file/audio.js";
import { enemyData as e } from "../data/enemyData.js";

export class Area {
  constructor(main, areaData) {
    this.main = main;
    this.map;

    this.autoWave = false;
    this.routeNumber = areaData.routeNumber;
    this.routeWaves = areaData.routeWaves;

    this.waveNumber;
    this.waveActive;

    this.enemies = [];
    this.waves = [];
    this.waypoints = [];
    this.placementTiles = [];
    this.placementTile2D = [];
    this.towers = [];

    this.totalDamageDealt = 0;
    this.shellBellWaveUsed = false;
    this.clefairyDollUsed = false;
    this.heartScale = false;
    this.inChallenge = false;

    this.loadArea(areaData.routeNumber);
    this.goldWave = 0;

    this.waveStartTime = null;
    this.waveElapsedTime = 0;
  }

  getSaveData() {
    return {
      routeNumber: this.routeNumber,
      routeWaves: this.routeWaves,
    };
  }

  loadArea(
    routeNumber,
    wave,
    keepTowers = false,
    challenge = false,
    challengeRetry = false
  ) {
    this.autoWave = false;
    this.main.UI.autoWave.style.background = "revert-layer";
    if (!challengeRetry) {
      if (this.inChallenge) this.main.challengeScene.cancelChallenge();

      if (challenge) {
        this.inChallenge = challenge;
        if (challenge[1]) this.main.draftScene.open();
      } else this.inChallenge = false;
    }

    if (!keepTowers) {
      this.main.UI.tilesCountNum = [0, 0, 0, 0];
      const teamCopy = [...this.main.team.pokemon];

      for (const pokemon of teamCopy) {
        if (pokemon.isDeployed) {
          pokemon.isDeployed = false;
          pokemon.tilePosition = -1;
          // retirar torre
          const index = this.main.area.towers.findIndex(
            (tower) => tower.pokemon === pokemon
          );
          if (index !== -1) {
            this.main.area.towers[index].tile.tower = false;
            this.main.area.towers.splice(index, 1);
          }
        }
      }
    }

    if (wave != undefined) this.routeWaves[routeNumber] = wave;

    this.routeNumber = routeNumber;
    this.map = routeData[routeNumber];
    this.waveNumber = this.routeWaves[routeNumber];
    this.waveActive = false;

    if (!keepTowers) {
      this.placementTiles = [];
      this.placementTile2D = [];

      this.waves = this.map.waves;
      this.waypoints = this.map.waypoints;

      for (let i = 0; i < this.map.placementTile.length; i += 30) {
        this.placementTile2D.push(this.map.placementTile.slice(i, i + 30));
      }

      let counter = 0;
      this.placementTile2D.forEach((row, y) => {
        row.forEach((symbol, x) => {
          if (symbol !== 0) {
            this.placementTiles.push(
              new PlacementTile(
                this.main,
                x * 24,
                y * 24,
                this.main.game.ctx,
                symbol,
                counter
              )
            );
            counter++;
          }
        });
      });
    }

    this.enemies = [];
    this.main.game.canvasBackground.src = this.map.background;

    if (this.map.effect != null) {
      this.main.game.canvasEffect.src = this.map.effect;
      this.main.game.effectEnabled = true;
    } else {
      this.main.game.effectEnabled = false;
    }

    this.totalDamageDealt = 0;
    this.shellBellWaveUsed = false;
    this.clefairyDollUsed = false;
    this.heartScale = false;
    this.main.UI.refreshDamageDealt(true);
    playMusic(this.map.music);
  }

  newWave() {
    if (this.main.area.waveActive) return;
    this.goldWave = 0;
    playSound("select", "ui");

    this.totalDamageDealt = 0;
    this.shellBellWaveUsed = false;
    this.clefairyDollUsed = false;
    this.heartScale = false;
    this.main.UI.refreshDamageDealt();

    this.waveStartTime = performance.now();
    this.waveElapsedTime = 0;

    this.waveActive = true;
    this.spawnEnemies();
    this.main.UI.update();

    this.towers.forEach((t) => {
      t.moxieBuff = 0;
      t.speedBoost = 0;
    });
    //this.main.UI.saveTeamButton.style.display = 'none';
    //this.main.UI.importTeamButton.style.display = 'none';

    if (this.inChallenge[5]) {
      this.main.game.chrono.start();
    }
  }

  endWave() {
    if (this.main.player.health[this.routeNumber] <= 0) return;

    if (this.waveStartTime !== null) {
      this.waveElapsedTime = Math.floor(
        (performance.now() - this.waveStartTime) / 1000
      );
      this.waveStartTime = null;
    }

    this.main.player.stats.wavesCompleted++;
    let bonusGold = Math.floor(
      (5 * (this.routeNumber + 1) * this.waveNumber +
        Math.pow(this.waveNumber, 1.4)) /
        2
    );
    if (this.main.player.stars > 150)
      bonusGold = Math.floor(bonusGold * (this.main.player.stars / 150));

    if (this.main.player.records[this.routeNumber] < this.waveNumber) {
      this.main.player.records[this.routeNumber] = Math.min(
        100,
        this.waveNumber
      );

      if (this.main.player.stars > 50) {
        this.main.player.changeGold(bonusGold);
        this.goldWave += bonusGold;
      }
      this.main.player.obtainStar();
    }

    this.towers.forEach((t) => {
      t.moxieBuff = 0;
      t.speedBoost = 0;
      if (t.ability.id == "triage" && Math.random() < 0.05) {
        this.main.player.getHealed(1);
        this.main.player.achievementProgress.heartRestore += 1;
        if (this.main.player.achievementProgress.heartRestore > 10)
          this.main.player.unlockAchievement(19);
      }
    });

    this.main.player.changeGold(bonusGold);
    this.goldWave += bonusGold;
    if (this.goldWave > this.main.player.stats.maxGoldPerWave[0]) {
      this.main.player.stats.maxGoldPerWave[0] = this.goldWave;
      this.main.player.stats.maxGoldPerWave[1] = this.getRouteTag(
        this.routeNumber,
        this.waveNumber
      );
    }

    let goldPerSecond =
      this.waveElapsedTime > 0
        ? Math.round((this.goldWave / this.waveElapsedTime) * 100) / 100
        : 0;
    if (goldPerSecond > this.main.player.stats.maxGoldPerTime[0]) {
      this.main.player.stats.maxGoldPerTime[0] = goldPerSecond;
      this.main.player.stats.maxGoldPerTime[1] = this.getRouteTag(
        this.routeNumber,
        this.waveNumber
      );
    }

    this.goldWave = 0;

    this.waveActive = false;
    if (this.main.player.health[this.routeNumber] === 1)
      this.main.player.unlockAchievement(12);

    // ROGUELIKE MODE HOOK
    if (this.main.gameMode === 1) {
      // Scaling Interest: 10% of current gold
      const interest = Math.floor(this.main.player.gold * 0.1);
      if (interest > 0) {
        this.main.player.changeGold(interest);
        // Optional: Display floating text for interest?
        this.main.notification.display(`Interest: +${interest}g`);
        setTimeout(() => this.main.notification.hide(), 2000);
      }

      this.main.roguelikeScene.open();
      return; // Stop here, scene closing will resume/nextWave
    }

    this.endWaveContinue();
  }

  switchAutoWave() {
    this.autoWave = !this.autoWave;
    if (this.autoWave) {
      this.main.UI.autoWave.style.background =
        "linear-gradient(39deg,rgba(112, 172, 76, 1) 0%, rgba(102, 145, 77, 1) 100%)";
      if (!this.waveActive) this.newWave();
    } else {
      this.main.UI.autoWave.style.background = "revert-layer";
    }
  }

  spawnEnemies() {
    let falseWaveNumber = ((this.waveNumber - 1) % 100) + 1;

    const wave = this.waves[falseWaveNumber].wave;
    const waveOffset = this.waves[this.waveNumber].offSet || 50;

    wave.forEach((enemy, i) => {
      const xOffset = (i + 1) * waveOffset;
      const waypointEnemy =
        this.waypoints[Math.floor(Math.random() * this.waypoints.length)];
      if (enemy) {
        this.enemies.push(
          new Enemy(
            waypointEnemy[0].x - xOffset,
            waypointEnemy[0].y,
            enemy,
            waypointEnemy,
            this.main,
            this.main.game.ctx
          )
        );
      }
    });
  }

  recalculateAuras() {
    // Reinicia poder base
    this.towers.forEach((t) => {
      t.power = t.basePower;
      t.projectile.power = t.basePower;
      t.auraBuffActive = false;
      t.waterSynergyActive = false;
    });

    // Water Synergy (Route 1)
    if (this.routeNumber === 0) {
      const waterTiles = this.placementTiles.filter((t) => t.land === 3);
      const activeWaterTowers = waterTiles.filter(
        (t) => t.tower && t.tower.pokemon.specie.tiles.includes(3)
      );

      if (
        waterTiles.length > 0 &&
        waterTiles.length === activeWaterTowers.length
      ) {
        activeWaterTowers.forEach((t) => {
          t.tower.waterSynergyActive = true;
          t.tower.power = Math.floor(t.tower.power * 1.1);
          t.tower.speed = t.tower.speed * 0.9;
          t.tower.projectile.power = t.tower.power;
        });
        // Optional: Notification once? No, continuous effect.
      }
    }

    // Reaplica auras activas
    this.towers.forEach((auraTower) => {
      if (!auraTower.ability || auraTower.ability.id !== "powerAura") return;
      const auraRange = auraTower.range;

      this.towers.forEach((tower) => {
        if (tower === auraTower) return;
        const dx = tower.center.x - auraTower.center.x;
        const dy = tower.center.y - auraTower.center.y;
        const distance = Math.hypot(dx, dy);

        if (distance <= auraRange) {
          tower.auraBuffActive = true;
          tower.power = Math.ceil(tower.basePower * 1.2);
          tower.projectile.power = tower.power;
        }
      });
    });
  }

  getRouteTag(route, wave) {
    const r1 = Math.floor(route / 3) + 1;
    const r2 = (route % 3) + 1;
    return `R${r1}-${r2} W${wave}`;
  }

  changeWave(i) {
    if (this.waveActive) return playSound("pop0", "ui");
    playSound("option", "ui");

    let nextWave = this.waveNumber + i;
    if (nextWave <= 0) nextWave = 100;
    else if (nextWave >= 101) nextWave = 1;

    this.waveStartTime = null;
    this.goldWave = 0;

    this.towers.forEach((t) => {
      t.moxieBuff = 0;
      t.speedBoost = 0;
    });

    this.waveNumber = nextWave;
    this.routeWaves[this.routeNumber] = nextWave;
    this.main.UI.update();
    this.main.UI.revertUI();
    this.waveActive = false;
    this.enemies = [];

    this.main.UI.displayEnemyInfo(this.waves[this.waveNumber].preview[0], 0);

    this.totalDamageDealt = 0;
    this.shellBellWaveUsed = false;
    this.clefairyDollUsed = false;
    this.heartScale = false;

    this.main.UI.update();
  }
  endWaveContinue() {
    if (this.waveNumber < 100) {
      this.waveNumber++;
      this.routeWaves[this.routeNumber]++;
      this.main.UI.update();
      this.main.UI.revertUI();

      saveData(
        this.main.player,
        this.main.team,
        this.main.box,
        this.main.area,
        this.main.shop,
        this.main.teamManager
      );

      const msg = new Element(this.main.scene, {
        className: "wave-completed",
        text: text.map.waveCompleted[this.main.lang].toUpperCase(),
      }).element;

      msg.style.opacity = 0;
      setTimeout(() => {
        msg.style.opacity = 1;
      }, 0);

      setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => msg.remove(), 500);
      }, 1500);

      playSound("end", "ui");
      this.main.UI.displayEnemyInfo(this.waves[this.waveNumber].preview[0], 0);

      const futureWave = this.waves[((this.waveNumber - 1) % 100) + 1].preview;
      const invisibles = [
        e.kecleon,
        e.ninjask,
        e.zoroark,
        e.suicune,
        e.dusclops,
        e.dusknoir,
        e.spiritomb,
      ];

      if (
        this.autoWave &&
        this.main.autoStop &&
        futureWave.some((poke) => invisibles.includes(poke))
      ) {
        this.switchAutoWave();
      }

      if (this.autoWave && this.main.autoStopBoss && this.waveNumber == 100) {
        this.switchAutoWave();
      }

      if (this.autoWave) return this.newWave();

      if (this.main.mapScene.isOpen) this.main.mapScene.update();
      if (this.main.shopScene.isOpen) this.main.shopScene.update();
    } else {
      if (this.main.team.pokemon.some((p) => p.specie.name[0] == "shuckle"))
        this.main.player.unlockAchievement(6);
      if (this.main.player.health[this.routeNumber] >= 10)
        this.main.player.unlockAchievement(7);
      if (this.routeNumber == 0) this.main.player.unlockAchievement(22);
      if (this.routeNumber == 1) this.main.player.unlockAchievement(23);
      if (this.routeNumber == 2) this.main.player.unlockAchievement(24);
      if (this.routeNumber == 3) this.main.player.unlockAchievement(25);
      if (this.routeNumber == 4) this.main.player.unlockAchievement(26);
      if (this.routeNumber == 5) this.main.player.unlockAchievement(27);
      if (this.routeNumber == 6) this.main.player.unlockAchievement(28);
      if (this.routeNumber == 7) this.main.player.unlockAchievement(29);
      if (this.routeNumber == 8) this.main.player.unlockAchievement(30);
      this.main.finalScene.open();
    }
  }
}
