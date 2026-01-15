export class Sprite {
	constructor(x, y, ctx, sprite, frames, rows = 1, direction = 0, hold = 5) {
		this.position = { x, y };
		this.ctx = ctx;
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.frames = {
			max: frames,
			current: 0,
			elapsed: 0,
			hold: hold,
			rows: rows,
			direction: direction
		}

		this.width = this.sprite.width / this.frames.max;
		this.height = this.sprite.height / this.frames.rows;

		this.loaded = false;
		this.sprite.onload = () => {
			this.width = this.sprite.width / this.frames.max;
			this.height = this.sprite.height / this.frames.rows;
			this.loaded = true;
		};

		this.sprite.src = sprite;
	}

	draw() {
		if (!this.loaded) return; // evita dibujar antes de tiempo

		const crop = {
			position: {
				x: this.width * this.frames.current,
				y: this.height * this.frames.direction
			},
			width: this.width,
			height: this.height
		}

		this.ctx.drawImage(
			this.sprite,
			crop.position.x, 
			crop.position.y, 
			crop.width, 
			crop.height,
			this.position.x,
			this.position.y,
			crop.width,
			crop.height
		)

		this.frames.elapsed++;
		if (this.frames.elapsed % this.frames.hold === 0) {
			this.frames.current++;
			if (this.frames.current >= this.frames.max) this.frames.current = 0;
		}
		
	}
}
