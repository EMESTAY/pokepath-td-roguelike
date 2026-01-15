import { GAME_CONFIG } from '../data/static/Config.js';

export class RenderSystem {
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
  }

  render(deltaTime, speedFactor) {
    if (!this.ctx) return;

    // 1. Draw Background
    this.drawBackground();

    // 2. Draw Effect (if enabled, under units?) - Wait, original order was:
    // Background -> Enemies -> Tiles -> Towers -> Damage Texts -> Ranges -> Foreground Effect

    // For now, let's keep the exact order from GameLoop.js

    // Original:
    // 1. Background (drawImage or clearRect)
    // 2. [Game Logic Update - Enemies]
    // 3. [Game Logic Update - Tiles]
    // 4. [Game Logic Update - Towers]
    // Wait, the update loops in GameLoop usually also DRAW.
    // Enemy.update() -> draws?
    // Tile.update() -> draws?
    // Tower.update() -> draws?

    // Checking GameLoop.js:
    // It calls `enemy.update()`, `tile.update()`, `tower.update()`.
    // We need to check if these update methods ALSO draw.
    // If they do, then "Rendering" is coupled with "Updating".
    // A true decoupling would mean splitting Update() and Draw().
    // For this refactor step, we might just be moving the "Clear + Background + Global Effect" logic.
    // OR we change the loop to:
    //    updateAll();
    //    drawAll();

    // Let's start by extracting the main canvas management.
    // And determining if we can split Draw from Update.
  }

  drawBackground() {
    if (this.canvasBackground.complete && this.canvasBackground.naturalWidth !== 0) {
      this.ctx.drawImage(this.canvasBackground, 0, 0, this.canvas.width, this.canvas.height);
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  drawEffect(scaledDelta) {
    if (this.effectEnabled) {
      this.effectTime += scaledDelta;
      // const alpha = 0.85 + 0.15 * Math.sin(this.effectTime * 0.005); // Unused in original?

      this.ctx.save();
      this.ctx.globalAlpha = 0.85 + 0.15 * Math.sin(this.effectTime * 0.002);
      this.ctx.drawImage(this.canvasEffect, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    }
  }
}
