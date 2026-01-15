export class SpatialGrid {
  constructor(width, height, cellSize) {
    this.cellSize = cellSize;
    this.cols = Math.ceil(width / cellSize);
    this.rows = Math.ceil(height / cellSize);
    this.buckets = new Array(this.cols * this.rows).fill(null).map(() => []);
    this.entities = [];
  }

  clear() {
    this.buckets.forEach((bucket) => {
      bucket.length = 0; // optimized clear
    });
    this.entities = [];
  }

  register(entity) {
    // Assume entity has {x, y, width, height} or {center: {x, y}}
    // For enemies: center.x, center.y
    this.entities.push(entity);

    // Simple point registration for now (center point)
    // For more accuracy with large enemies, we might register in multiple buckets
    const col = Math.floor(entity.center.x / this.cellSize);
    const row = Math.floor(entity.center.y / this.cellSize);

    if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
      this.buckets[row * this.cols + col].push(entity);
    }
  }

  // Returns array of entities in the buckets covering the range circle
  query(x, y, radius) {
    const found = [];

    const startCol = Math.floor((x - radius) / this.cellSize);
    const endCol = Math.floor((x + radius) / this.cellSize);
    const startRow = Math.floor((y - radius) / this.cellSize);
    const endRow = Math.floor((y + radius) / this.cellSize);

    const minCol = Math.max(0, startCol);
    const maxCol = Math.min(this.cols - 1, endCol);
    const minRow = Math.max(0, startRow);
    const maxRow = Math.min(this.rows - 1, endRow);

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        const bucket = this.buckets[r * this.cols + c];
        for (let i = 0; i < bucket.length; i++) {
          const ent = bucket[i];
          // Avoid duplicates if entity spans multiple buckets (not applicable for point reg but good practice)
          // Since we use point registration, duplicates shouldn't happen unless we register twice
          found.push(ent);
        }
      }
    }
    return found;
  }
}
