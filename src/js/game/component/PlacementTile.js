export class PlacementTile {
	constructor(main, x, y, ctx, land, id) {
		this.main = main;

		this.land = land;
		this.position = { x, y };
		this.size = 24;
		this.center = { x: this.position.x + 12, y: this.position.y + 12 };
		this.color = 'rgba(255, 255, 255, 0.5)';
		this.tower = false;

		this.ctx = ctx;
		this.id = id;
	}

	draw() {
		if (this.main.game.deployingUnit && !this.tower) {
			if (
				!this.main.game.deployingUnit.tiles.includes(this.land) &&
				!(this.main.game.deployingUnit?.item?.id == 'airBalloon' && this.land == 4) &&
				!(this.main.game.deployingUnit?.item?.id == 'heavyDutyBoots' && this.land == 2) &&
				!(this.main.game.deployingUnit?.item?.id == 'dampMulch' && this.land == 1)
			) {
				this.color = 'rgba(255, 50, 50, 0.5)';
			}
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

			this.ctx.strokeStyle = '#333';
			this.ctx.lineWidth = 1;
			this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
		} else if (this.main.UI.tileTerrainHover != null) {
			if (this.main.UI.tileTerrainHover === this.land) {
				this.ctx.fillStyle = this.color;
				this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

				this.ctx.strokeStyle = '#333';
				this.ctx.lineWidth = 1;
				this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
			}
		}
	}

	update(mouse) {
		this.draw();
		if (
			mouse.x > this.position.x && 
			mouse.x < this.position.x + this.size &&
			mouse.y > this.position.y && 
			mouse.y < this.position.y + this.size	
		) {
			if (this.main.game.deployingUnit) {
				if ((
					!this.main.game.deployingUnit.tiles.includes(this.land) &&
					!(this.main.game.deployingUnit?.item?.id == 'airBalloon' && this.land == 4) &&
					!(this.main.game.deployingUnit?.item?.id == 'heavyDutyBoots' && this.land == 2) &&
					!(this.main.game.deployingUnit?.item?.id == 'dampMulch' && this.land == 1)
				) || this.tower) return;
				this.color = 'white';

				const pokemon = this.main.game.deployingUnit;

				this.drawRange(pokemon.range, pokemon.rangeType, pokemon.innerRange, pokemon.ability, pokemon?.item);
			}
			else if (this.tower) {
				this.drawRange(this.tower.range, this.tower.rangeType, this.tower.innerRange, this.tower.ability, this.tower?.item);
			}	
		} else {
			this.color = 'rgba(255, 255, 255, 0.5)';
		}
	}

	drawRange(range, rangeType, innerRange, ability, item = null, color = false) {
		this.ctx.save();
		this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
		this.ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)';

		if (color) {
			switch(ability.id) {
				case 'burn':
				case 'burnNerf':
				case 'willOWisp':
					this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
				break;
				case 'poison':
				case 'poisonDoubleShot':
					this.ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
				break;
				case 'nightmare':
					this.ctx.fillStyle = 'rgba(160, 60, 200, 0.2)';
					this.ctx.strokeStyle = 'rgba(160, 60, 200, 0.4)';
				break;
				case 'curse':
				case 'curseDoubleShot':
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
				break;
				case 'stun':
				case 'stunMono':
				case 'stunMonoNerf':
				case 'stunArea':
				case 'static':
					this.ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
				break;
				case 'slow':
				case 'slowSplash':
				case 'cradily':
					this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
				break;
				case 'powerAura':
				case 'triage':
				case 'criticalAura':
					this.ctx.fillStyle = 'rgba(100, 180, 255, 0.2)';
					this.ctx.strokeStyle = 'rgba(100, 180, 255, 0.4)';
				break;
				default:
					this.ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 0, 200, 0.4)';
	                break;
			} 
		}

		if (this.land === 4 && (ability.id === 'vigilant' || ability.id === 'castform')) range *= 2;
		if ([3,4,5].includes(this.main.area.routeNumber) && (ability.id === 'doubleShotSand' || ability.id === 'quadraShotSand')) range *= 2;
		if (item?.id == 'spindaCocktail') range *= 1.25;
		if (item?.id == 'starCandy') range += (this.main.player.stars * 0.1);
		if (item?.id == 'oldRod') range += 60;
		if (item?.id == 'helixFossil') range += this.main.player.fossilInTeam * 10;
		if (item?.id == 'revelationAroma') range += 25;

		switch (rangeType) {
			case 'circle':
				this.ctx.beginPath();
				this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'donut':
				this.ctx.beginPath();
				this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				this.ctx.arc(this.center.x, this.center.y, innerRange, 0, Math.PI * 2, true);
				this.ctx.fill('evenodd');
				this.ctx.stroke();
				break;
			case 'cross':
				this.ctx.beginPath();
				if (item?.id == 'starPiece') {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
					
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);

					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				} else if (item?.id == 'wideLens') {
					this.ctx.rect(this.center.x - 36, this.center.y - range, 72, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 36, range * 2, 72);
				} else {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				}
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'horizontalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'verticalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'xShape':
				this.ctx.save();
				this.ctx.beginPath();
				if (item?.id == 'starPiece') {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
					
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);

					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				} else if (item?.id == 'wideLens') {
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);
					this.ctx.rect(-36, -range, 72, range * 2);
					this.ctx.rect(-range, -36, range * 2, 72);
				} else {
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);
					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				}			
				this.ctx.fill();
				this.ctx.stroke();
				break;
		}

		this.ctx.restore();
	}
}

