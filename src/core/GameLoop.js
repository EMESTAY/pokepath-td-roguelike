import { Tower } from '../features/combat/entities/Tower.js';
import { InputSystem } from './InputSystem.js';
import { RenderSystem } from './RenderSystem.js';
import { text } from '../data/static/text.js';
import { playSound } from './AudioSystem.js';
import { GAME_CONFIG, COLORS } from '../data/static/Config.js';

export class Game {
  constructor(main) {
    this.main = main;
    this.renderSystem = new RenderSystem(main);

    // Aliases to avoid refactoring everything at once
    this.canvas = this.renderSystem.canvas;
    this.ctx = this.renderSystem.ctx;
    // this.canvasBackground/Effect are now in RenderSystem, but Game loop accessed them for assignment?
    // The Area.js assigns src to main.game.canvasBackground.Src
    // We need to proxy or update Area.js.
    // For now, let's keep backward compat setters or update Area.js later?
    // The cleanest way is to just let Game expose them from RenderSystem.

    this.deployingUnit = undefined;
    this.stopped = false;
    this.activeTile = undefined;

    this.FPS = GAME_CONFIG.FPS;
    this.frameDuration = 1000 / this.FPS;
    this.lastTime = 0;

    this.loopId = null;
    this.animate = this.animate.bind(this);

    this.ranges = false;
    this.speedFactor = GAME_CONFIG.SPEED_FACTORS.NORMAL;
    this.chrono;
  }

  // getters for backward compatibility with Area.js
  get canvasBackground() {
    return this.renderSystem.canvasBackground;
  }
  get canvasEffect() {
    return this.renderSystem.canvasEffect;
  }
  get effectEnabled() {
    return this.renderSystem.effectEnabled;
  }
  set effectEnabled(val) {
    this.renderSystem.effectEnabled = val;
  }

  load() {
    this.stopped = false;
    this.lastTime = performance.now();
    // Cancel any existing loop to avoid duplicates
    if (this.loopId) cancelAnimationFrame(this.loopId);
    this.animate(this.lastTime);
    this.inputSystem = new InputSystem(this.main, this.canvas);
    this.setupInputEvents();
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

    // render background
    this.renderSystem.drawBackground();

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
      tiles[i].update(this.inputSystem.mouse);
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

    // render effect
    this.renderSystem.drawEffect(scaledDelta);
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
      this.main.UI.pokemonSlots[pos].deploy.innerText =
        text.ui.deploying[this.main.lang].toUpperCase();
      this.main.UI.pokemonSlots[pos].deploy.style.background = 'var(--orange)';

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
    if (!this.deployingUnit || !this.inputSystem.activeTile) return;
    const activeTile = this.inputSystem.activeTile;
    if (
      !this.deployingUnit.tiles.includes(activeTile.land) &&
      !(this.deployingUnit?.item?.id == 'airBalloon' && activeTile.land == 4) &&
      !(this.deployingUnit?.item?.id == 'heavyDutyBoots' && activeTile.land == 2) &&
      !(this.deployingUnit?.item?.id == 'dampMulch' && activeTile.land == 1)
    )
      return;

    playSound('equip', 'ui');
    this.deployingUnit.isDeployed = true;

    // ADD TOWER
    this.main.area.towers.push(
      new Tower(
        this.main,
        activeTile.position.x,
        activeTile.position.y,
        this.ctx,
        this.deployingUnit,
        activeTile
      )
    );
    activeTile.tower = this.deployingUnit;
    this.deployingUnit = undefined;

    this.main.UI.updatePokemon();
    this.main.area.recalculateAuras();
    if (!this.main.area.waveActive) {
      this.main.UI.revertUI();
      this.main.UI.nextWave.style.filter = `revert-layer`;
      this.main.UI.nextWave.style.pointerEvents = 'revert-layer';
    }
    this.main.events.emit('tileChange', {
      landIndex: activeTile.land - 1,
      change: 1,
    });
  }

  retireUnit() {
    if (!this.deployingUnit) return;
    this.deployingUnit.isDeployed = false;
    playSound('unequip', 'ui');

    const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this.deployingUnit);
    if (index !== -1) {
      this.main.events.emit('tileChange', {
        landIndex: this.main.area.towers[index].tile.land - 1,
        change: -1,
      });
      this.main.area.towers[index].tile.tower = false;
      this.main.area.towers[index].pokemon.tilePosition = -1;
      this.main.area.towers.splice(index, 1);
    }
    this.deployingUnit = undefined;

    // this.main.UI.update();
    this.main.area.recalculateAuras();
  }

  setupInputEvents() {
    this.main.events.on('canvasClick', (data) => {
      const { tile } = data;
      if (tile && !tile.tower && this.deployingUnit) {
        // We need to set activeTile in InputSystem, but here we receive it.
        // However, deployUnit uses this.inputSystem.activeTile.
        // InputSystem updates activeTile on mousemove, so it should be current.
        this.deployUnit();
      } else if (tile?.tower) {
        const index = this.main.team.pokemon.findIndex((pokemon) => tile.tower === pokemon);
        this.tryDeployUnit(index);
        this.tryDeployUnit(index);
      }
    });

    this.main.events.on('canvasRightClick', (data) => {
      const { tile } = data;
      if (tile?.tower) {
        const index = this.main.team.pokemon.findIndex((pokemon) => tile.tower === pokemon);
        this.main.pokemonScene.open(tile.tower, index);
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
