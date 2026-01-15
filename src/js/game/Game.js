import { Tower } from './component/Tower.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';
import { GAME_CONFIG, COLORS } from './Config.js';

export class Game {
  constructor(main) {
    this.main = main;

    this.canvas = document.createElement('canvas');
    this.canvas.width = GAME_CONFIG.CANVAS.WIDTH;
    this.canvas.height = GAME_CONFIG.CANVAS.HEIGHT;
    this.ctx = this.canvas.getContext('2d');
    this.canvasBackground = new Image();
    this.canvasEffect = new Image();
    this.effectEnabled = false;
    this.effectTime = 0;
    document.getElementById('screen').appendChild(this.canvas);

    this.deployingUnit = undefined;
    this.stopped = false;
    this.activeTile = undefined;
    this.mouse = { x: undefined, y: undefined };

    this.FPS = GAME_CONFIG.FPS;
    this.frameDuration = 1000 / this.FPS;
    this.lastTime = 0;

    this.loopId = null;
    this.animate = this.animate.bind(this);

    this.ranges = false;
    this.speedFactor = GAME_CONFIG.SPEED_FACTORS.NORMAL;
    this.chrono;
  }

  load() {
    this.stopped = false;
    this.lastTime = performance.now();
    // Cancel any existing loop to avoid duplicates
    if (this.loopId) cancelAnimationFrame(this.loopId);
    this.animate(this.lastTime);
    this.setEvents();
    this.chrono = this.main.utility.chrono(1);
  }

  animate(time) {
    // Schedule next frame immediately
    this.loopId = requestAnimationFrame(this.animate);

    if (this.stopped) return;

    // Calculate delta time in milliseconds
    const delta = time - this.lastTime;
    // Cap max delta to prevent huge jumps if tab was inactive
    if (delta > GAME_CONFIG.MAX_DELTA_TIME) {
      this.lastTime = time;
      return;
    }

    if (delta < this.frameDuration) {
      return;
    }

    this.lastTime = time - (delta % this.frameDuration);

    // render
    if (this.ctx) {
      if (this.canvasBackground.complete && this.canvasBackground.naturalWidth !== 0) {
        this.ctx.drawImage(this.canvasBackground, 0, 0, this.canvas.width, this.canvas.height);
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }

    // --- calculate scaled delta ONCE ---
    const scaledDelta = this.frameDuration * this.speedFactor; // ms scaled by speedFactor

    // PERFORMANCE OPTIMIZATION: Cache references and use FOR loops
    const area = this.main.area;
    const enemies = area.enemies;
    const tiles = area.placementTiles;
    const towers = area.towers;

    // update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];

      enemy.update(scaledDelta);

      if (enemies.indexOf(enemy) === -1) continue;

      if (enemy.waypoints.length === enemy.waypointIndex + 1) {
        if (
          enemy.position.x > this.canvas.width ||
          enemy.position.x < 0 ||
          enemy.position.y - GAME_CONFIG.ENEMY_BOUNDS_MARGIN > this.canvas.height ||
          enemy.position.y < -GAME_CONFIG.ENEMY_BOUNDS_MARGIN
        ) {
          playSound('hit2', 'effect');
          this.main.player.getDamaged(enemy.power);
          const idx = enemies.indexOf(enemy);
          if (idx !== -1) enemies.splice(idx, 1);
          continue;
        }
      }
    }

    this.main.UI.updateDamageDealt();

    // update tiles
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].update(this.mouse);
    }

    // update towers
    for (let i = 0; i < towers.length; i++) {
      towers[i].update(enemies, scaledDelta);
    }

    // end of wave
    if (area.waveActive && enemies.length === 0) {
      area.endWave();
    }

    // draw damage texts
    if (this.main.showDamage) {
      for (let i = 0; i < enemies.length; i++) {
        enemies[i].drawFloatingTexts();
      }
    }

    if (this.ranges) {
      for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        if (tile.tower) {
          tile.drawRange(
            tile.tower.range,
            tile.tower.rangeType,
            tile.tower.innerRange,
            tile.tower.ability,
            tile.tower.item,
            true
          );
        }
      }
    }

    if (this.effectEnabled) {
      this.effectTime += scaledDelta;
      const alpha = 0.85 + 0.15 * Math.sin(this.effectTime * 0.005);

      this.ctx.save();
      this.ctx.globalAlpha = 0.85 + 0.15 * Math.sin(this.effectTime * 0.002);
      this.ctx.drawImage(this.canvasEffect, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    }
  }

  stop() {
    this.stopped = true;
    if (this.loopId) {
      cancelAnimationFrame(this.loopId);
      this.loopId = null;
    }
    // this.main.notification.display(text.notification.pause[this.main.lang]);
  }

  resume() {
    if (!this.stopped) return;
    this.stopped = false;
    this.lastTime = performance.now();
    if (this.loopId) cancelAnimationFrame(this.loopId);
    this.animate(this.lastTime);
  }

  tryDeployUnit(pos) {
    if (this.deployingUnit != undefined) return this.cancelDeployUnit();
    this.deployingUnit = this.main.team.pokemon[pos];
    if (this.deployingUnit.isDeployed) this.retireUnit();
    else {
      playSound('click1', 'ui');
      // this.main.notification.display(text.notification.deploy[this.main.lang]);
      this.main.UI.pokemon[pos].deploy.innerText = text.ui.deploying[this.main.lang].toUpperCase();
      this.main.UI.pokemon[pos].deploy.style.background = 'var(--orange)';

      this.main.UI.nextWave.style.filter = `brightness(0.8)`;
      this.main.UI.nextWave.style.pointerEvents = 'none';
    }
  }

  cancelDeployUnit() {
    playSound('pop0', 'ui');
    this.deployingUnit = undefined;

    this.main.UI.updatePokemon();
    if (!this.main.area.waveActive) {
      this.main.UI.revertUI();
      this.main.UI.nextWave.style.filter = `revert-layer`;
      this.main.UI.nextWave.style.pointerEvents = 'revert-layer';
    }
  }

  deployUnit() {
    if (!this.deployingUnit || !this.activeTile) return;
    if (
      !this.deployingUnit.tiles.includes(this.activeTile.land) &&
      !(this.deployingUnit?.item?.id == 'airBalloon' && this.activeTile.land == 4) &&
      !(this.deployingUnit?.item?.id == 'heavyDutyBoots' && this.activeTile.land == 2) &&
      !(this.deployingUnit?.item?.id == 'dampMulch' && this.activeTile.land == 1)
    )
      return;

    playSound('equip', 'ui');
    this.deployingUnit.isDeployed = true;

    // ADD TOWER
    this.main.area.towers.push(
      new Tower(
        this.main,
        this.activeTile.position.x,
        this.activeTile.position.y,
        this.ctx,
        this.deployingUnit,
        this.activeTile
      )
    );
    this.activeTile.tower = this.deployingUnit;
    this.deployingUnit = undefined;

    this.main.UI.updatePokemon();
    this.main.area.recalculateAuras();
    if (!this.main.area.waveActive) {
      this.main.UI.revertUI();
      this.main.UI.nextWave.style.filter = `revert-layer`;
      this.main.UI.nextWave.style.pointerEvents = 'revert-layer';
    }
    this.main.UI.tilesCountNum[this.activeTile.land - 1]++;
    this.main.UI.update();
  }

  retireUnit() {
    if (!this.deployingUnit) return;
    this.deployingUnit.isDeployed = false;
    playSound('unequip', 'ui');

    const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this.deployingUnit);
    if (index !== -1) {
      this.main.UI.tilesCountNum[this.main.area.towers[index].tile.land - 1]--;
      this.main.area.towers[index].tile.tower = false;
      this.main.area.towers[index].pokemon.tilePosition = -1;
      this.main.area.towers.splice(index, 1);
    }
    this.deployingUnit = undefined;

    this.main.UI.update();
    this.main.area.recalculateAuras();
  }

  setEvents() {
    this.canvas.addEventListener('mousemove', (event) => {
      this.mouse.x = event.offsetX;
      this.mouse.y = event.offsetY;

      this.activeTile = null;

      for (let i = 0; i < this.main.area.placementTiles.length; i++) {
        const tile = this.main.area.placementTiles[i];
        if (
          this.mouse.x > tile.position.x &&
          this.mouse.x < tile.position.x + tile.size &&
          this.mouse.y > tile.position.y &&
          this.mouse.y < tile.position.y + tile.size
        ) {
          this.activeTile = tile;
          break;
        }
      }
    });

    this.canvas.addEventListener('click', (event) => {
      if (this.activeTile && !this.activeTile.tower && this.deployingUnit) {
        this.deployUnit();
      } else if (this.activeTile?.tower) {
        const index = this.main.team.pokemon.findIndex(
          (pokemon) => this.activeTile.tower === pokemon
        );
        this.tryDeployUnit(index);
        this.tryDeployUnit(index); // not wrong, it's 2 times to redeploy lol
        //this.main.pokemonScene.open(this.activeTile.tower, index);
      }
    });

    this.canvas.addEventListener('contextmenu', (event) => {
      if (this.activeTile?.tower) {
        const index = this.main.team.pokemon.findIndex(
          (pokemon) => this.activeTile.tower === pokemon
        );
        this.main.pokemonScene.open(this.activeTile.tower, index);
      }
    });
  }

  toggleSpeed() {
    playSound('option', 'ui');
    if (this.speedFactor === GAME_CONFIG.SPEED_FACTORS.NORMAL) {
      this.speedFactor = GAME_CONFIG.SPEED_FACTORS.FAST;
      this.main.UI.speedWave.style.background = COLORS.SPEED_FAST;
    } else if (this.speedFactor === GAME_CONFIG.SPEED_FACTORS.FAST) {
      this.speedFactor = GAME_CONFIG.SPEED_FACTORS.SUPER_FAST;
      this.main.UI.speedWave.style.background = COLORS.SPEED_SUPER_FAST;
    } else {
      this.speedFactor = GAME_CONFIG.SPEED_FACTORS.NORMAL;
      this.main.UI.speedWave.style.background = COLORS.SPEED_NORMAL;
    }
  }

  toggleRanges() {
    this.ranges = !this.ranges;
  }

  restoreSpeed() {
    this.speedFactor = GAME_CONFIG.SPEED_FACTORS.NORMAL;
    this.main.UI.speedWave.style.background = COLORS.SPEED_NORMAL;
  }
}
