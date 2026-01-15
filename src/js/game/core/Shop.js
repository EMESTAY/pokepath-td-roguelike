import { Pokemon } from '../component/Pokemon.js';
import { saveData } from '../../file/data.js';
import { itemData, itemListData } from '../data/itemData.js';
import { pokemonData } from '../data/pokemonData.js';
import { playSound } from '../../file/audio.js';

export class Shop {
	constructor(main, shopData) {
		this.main = main;
		this.eggPrice = shopData.eggPrice;
		this.eggList = shopData.eggList;

		this.itemList = shopData.itemList ?? itemListData;
		this.itemStock = shopData.itemStock ?? [];
		this.generateStock();

		if (this.eggList.length == 0) this.main.player.unlockAchievement(0);
	}

	getSaveData() {
		return {
			eggPrice: this.eggPrice,
			eggList: this.eggList,
			itemList: this.itemList,
			itemStock: this.itemStock
		};
	}

	buyEgg() {
		if (this.eggList.length <= 0 || this.main.player.gold < Math.min(50000, this.eggPrice)) return;

		playSound('purchase', 'ui');

		let index = Math.floor(Math.random() * this.eggList.length);

		if (this.eggList.length == 83) index = Math.floor(Math.random() * 3) + 2;
		
		let egg = this.eggList[index];
		let pokemon;
		
		if (typeof egg === "string" || egg instanceof String) pokemon = pokemonData[egg];
		else pokemon = egg;

		if (this.main.team.pokemon.length < this.main.player.teamSlots) {
			this.main.team.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.team.pokemon.at(-1))
		} else {
			this.main.box.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.box.pokemon.at(-1))
		}

		this.main.player.stats.pokemonOwned++;

		this.main.player.stats.totalPokemonLevel++;
		this.main.player.achievementProgress.evolutionCount++;

		this.main.player.changeGold(-Math.min(50000, this.eggPrice));
		this.eggList.splice(index, 1);
		this.eggPrice = Math.min(50000, Math.ceil(this.eggPrice * 1.12 + 35));
		this.main.shopScene.update();
		this.main.UI.update();	
		
		if (this.eggList.length === 0) this.main.player.unlockAchievement(0);
		if (this.main.player.achievementProgress.evolutionCount === 180) this.main.player.unlockAchievement(1);

		if (!this.main.area.waveActive) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}

	buyItem(i) {
	    const itemBought = this.itemStock[i];
	    if (!itemBought || this.main.player.gold < itemBought.price) return;

	    playSound('purchase', 'ui');
	    this.main.player.changeGold(-itemBought.price);
	    this.main.player.obtainItem(itemBought);

	    // Reemplazar solo si hay items en la lista
	    this.itemStock[i] = this.itemList.length > 0 ? itemData[this.itemList.shift()] : null;

	    this.main.shopScene.update();
	    this.main.tooltip.hide();
	    this.main.player.itemAmount++;
	    if (itemBought.id == 'bicycle') {
	    	this.main.player.hasBike = true;
	    	this.main.UI.update();
	    }
	}

	generateStock() {
	    for (let i = 0; i < 5; i++) {
	        if (!this.itemStock[i]) { 
	            if (this.itemList.length > 0) {
	                this.itemStock[i] = itemData[this.itemList.shift()];
	            } else {
	                this.itemStock[i] = null;
	            }
	        }
	    }
	}
}