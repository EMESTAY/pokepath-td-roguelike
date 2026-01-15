import { playSound } from '../../file/audio.js';
import { Tower } from '../component/Tower.js';
import { saveData } from '../../file/data.js';

export class TeamManager {
	constructor(main, data) {
		this.main = main;
		//this.teams = Array.isArray(data) ? data : [[], [], [], [], [], [], [], [], []];

		this.teamA = Array.isArray(data['teamA']) ? data['teamA'] : [[], [], [], [], [], [], [], [], []];
		this.teamB = Array.isArray(data['teamB']) ? data['teamB'] : [[], [], [], [], [], [], [], [], []];
		this.teamC = Array.isArray(data['teamC']) ? data['teamC'] : [[], [], [], [], [], [], [], [], []];
		this.teamD = Array.isArray(data['teamD']) ? data['teamD'] : [[], [], [], [], [], [], [], [], []];
		this.teamE = Array.isArray(data['teamE']) ? data['teamE'] : [[], [], [], [], [], [], [], [], []];

		this.teams = [this.teamA, this.teamB, this.teamC, this.teamD, this.teamE];
		this.teamChallenge = [[], [], [], [], []];
	}

	getSaveData() {
		return {
			teamA: this.teamA,
			teamB: this.teamB,
			teamC: this.teamC,
			teamD: this.teamD,
			teamE: this.teamE,
		}
	}

	importTeam(slot, challenge = false) {
		// retirar equipo actual
		const teamCopy = [...this.main.team.pokemon];
		this.main.UI.tilesCountNum = [0, 0, 0, 0];

		for (const pokemon of teamCopy) {
			if (pokemon.isDeployed) {
				pokemon.isDeployed = false;

				const index = this.main.area.towers.findIndex(tower => tower.pokemon === pokemon);
				if (index !== -1) {
					this.main.area.towers[index].tile.tower = false;
					this.main.area.towers.splice(index, 1);
				}
			}

			this.main.box.addPokemon(pokemon);
			this.main.team.removePokemon(pokemon);
		}

		if (!challenge) {
			this.teams[slot][this.main.area.routeNumber].forEach((pokemon, i) => {
				let indx = this.main.box.pokemon.findIndex(poke => poke.id === pokemon.id);
				this.main.team.addPokemon(this.main.box.pokemon[indx]);
				this.main.box.removePokemon(this.main.box.pokemon[indx]);
				this.main.team.pokemon[i].retireItem();
				if (pokemon.item != null) {
					let indx = this.main.player.items.findIndex(item => pokemon.item.id === item.id);
					this.main.team.pokemon[i].equipItem(this.main.player.items[indx]);
				}
				//colocar torre
				if (pokemon.tilePosition != -1) {
					this.main.area.towers.push(
						new Tower(
							this.main,
							this.main.area.placementTiles[pokemon.tilePosition].position.x,
							this.main.area.placementTiles[pokemon.tilePosition].position.y,
							this.main.game.ctx,
							this.main.team.pokemon[i],
							this.main.area.placementTiles[pokemon.tilePosition]
						)
					);
					this.main.area.placementTiles[pokemon.tilePosition].tower = this.main.team.pokemon[i];
					this.main.team.pokemon[i].isDeployed = true;
					this.main.UI.tilesCountNum[this.main.area.placementTiles[pokemon.tilePosition].land -1]++;
					this.main.UI.updatePokemon();
					this.main.area.recalculateAuras();
				}
			})
		} else {
			this.teamChallenge[slot].forEach((pokemon, i) => {
				let indx = this.main.box.pokemon.findIndex(poke => poke.id === pokemon.id);
				this.main.team.addPokemon(this.main.box.pokemon[indx]);
				this.main.box.removePokemon(this.main.box.pokemon[indx]);
				this.main.team.pokemon[i].retireItem();
				if (pokemon.item != null) this.main.team.pokemon[i].equipItem(pokemon.item);
				//colocar torre
				if (pokemon.tilePosition != -1) {
					this.main.area.towers.push(
						new Tower(
							this.main,
							this.main.area.placementTiles[pokemon.tilePosition].position.x,
							this.main.area.placementTiles[pokemon.tilePosition].position.y,
							this.main.game.ctx,
							this.main.team.pokemon[i],
							this.main.area.placementTiles[pokemon.tilePosition]
						)
					);
					this.main.area.placementTiles[pokemon.tilePosition].tower = this.main.team.pokemon[i];
					this.main.team.pokemon[i].isDeployed = true;
					this.main.UI.tilesCountNum[this.main.area.placementTiles[pokemon.tilePosition].land -1]++;
					this.main.UI.updatePokemon();
					this.main.area.recalculateAuras();
				}
			})
		}

		this.main.UI.update();
		playSound('option', 'ui');

		if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	}

	saveTeam(slot, challenge = false) {	
		playSound('option', 'ui');

		if (!challenge) {
			this.teams[slot][this.main.area.routeNumber] = [];

			this.main.team.pokemon.forEach(pokemon => {
				this.teams[slot][this.main.area.routeNumber].push({
					id: pokemon.id,
					tilePosition: pokemon.tilePosition,
					item: pokemon.item
				})
			})
		} else {
			this.teamChallenge[slot] = [];

			this.main.team.pokemon.forEach(pokemon => {
				this.teamChallenge[slot].push({
					id: pokemon.id,
					tilePosition: pokemon.tilePosition,
					item: pokemon.item
				})
			})
		}

		this.main.UI.update();
		if (!this.main.area.waveActive) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}
}