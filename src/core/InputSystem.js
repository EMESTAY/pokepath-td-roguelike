export class InputSystem {
  constructor(main, canvas) {
    this.main = main;
    this.canvas = canvas;
    this.mouse = { x: 0, y: 0 };
    this.activeTile = null;

    this.init();
  }

  init() {
    this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
    this.canvas.addEventListener('click', (event) => this.onClick(event));
    this.canvas.addEventListener('contextmenu', (event) => this.onContextMenu(event));
  }

  onMouseMove(event) {
    this.mouse.x = event.offsetX;
    this.mouse.y = event.offsetY;

    this.activeTile = null;

    if (this.main.area && this.main.area.placementTiles) {
      // Optimization: Spatial Grid or check only if mouse inside canvas?
      // For now, keep existing logic but encapsulated here.
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
    }
  }

  onClick(event) {
    this.main.events.emit('canvasClick', {
      x: this.mouse.x,
      y: this.mouse.y,
      tile: this.activeTile,
      originalEvent: event,
    });
  }

  onContextMenu(event) {
    this.main.events.emit('canvasRightClick', {
      x: this.mouse.x,
      y: this.mouse.y,
      tile: this.activeTile,
      originalEvent: event,
    });
  }
}
