import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import { pokemonData } from '../data/pokemonData.js';
import { Input } from '../../utils/Input.js';
import { ChangePokemonName } from './ChangePokemonName.js';

const DATA = [
	'power', 'speed', 'critical', 'range', 'rangeType', 'terrain', 'attackType'
]

const TERRAINS = {
	1: ['Field', 'Campo', 'Champ', 'Campo', 'Campo', 'Feld', '野原', '들판', '野原'],
	2: ['Grass', 'Hierba', 'Herbe', 'Grama', 'Erba', 'Gras', '草', '풀', '草'],
	3: ['Water', 'Agua', 'Eau', 'Água', 'Acqua', 'Wasser', '水', '물', '水'],
	4: ['Mountain', 'Montaña', 'Montagne', 'Montanha', 'Montagna', 'Berg', '山', '산', '山'],
	5: ['All', 'Todo', 'Tout', 'Tudo', 'Tutto', 'Alle', 'すべて', '모두', '全部']
}

const TARGET_MODES = [
	'first', 'last', 'highHP', 'lowHP', 'highArmor', 'noArmor', 'faster', 'slower', 'poisoned', 'notPoisoned', 
	'burned', 'notBurned', 'stuned', 'notStuned', 'slowed', 'notSlowed', 'cursed', 'curseable', 'nightmared', 'random', 'invisible'
]

const TARGET_MODES_TRADUCTIONS = {
	area: ['Area', 'Área', 'Zone', 'Área', 'Area', 'Fläche', 'エリア', '지역', '区域'],
	aura: ['Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'オーラ', '오라', '气场'],
	allies: ['Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'オーラ', '오라', '气场'],
	available: ['Available', 'Disponibles', 'Disponibles', 'Disponíveis', 'Disponibili', 'Verfügbar', '利用可能', '이용 가능', '可用'],

	first: ['First', 'Primero', 'Premier', 'Primeiro', 'Primo', 'Erster', '最初', '첫 번째', '第一个'],
	last: ['Last', 'Último', 'Dernier', 'Último', 'Ultimo', 'Letzter', '最後', '마지막', '最后一个'],

	faster: ['Faster', 'Más rápido', 'Plus rapide', 'Mais rápido', 'Più veloce', 'Schneller', 'より速い', '더 빠름', '更快'],
	slower: ['Slower', 'Más lento', 'Plus lent', 'Mais lento', 'Più lento', 'Langsamer', 'より遅い', '더 느림', '更慢'],

	highArmor: ['High Armor', 'Más armadura', 'Haute armure', 'Mais armadura', 'Alta armatura', 'Hohe Rüstung', '高防御', '높은 방어', '高护甲'],
	noArmor: ['No Armor', 'Sin armadura', 'Pas d’armure', 'Sem armadura', 'Senza armatura', 'Keine Rüstung', '無防御', '방어 없음', '无护甲'],

	highHP: ['High HP', 'Mas PS', 'Le plus de PV', 'HP alto', 'Alta salute', 'Hohe KP', '高HP', '높은 HP', '高生命值'],
	lowHP: ['Low HP', 'Menos PS', 'Le moins de PV', 'HP baixo', 'Bassa salute', 'Niedrige KP', '低HP', '낮은 HP', '低生命值'],

	poisoned: ['Poisoned', 'Envenenado', 'Empoisonné', 'Envenenado', 'Avvelenato', 'Vergiftet', '毒状態', '독 중독', '中毒'],
	notPoisoned: ['Not Poisoned', 'No envenenado', 'Non empoisonné', 'Não envenenado', 'Non avvelenato', 'Nicht vergiftet', '未毒', '비중독', '未中毒'],

	burned: ['Burned', 'Quemado', 'Brulé', 'Queimado', 'Scottato', 'Verbrannt', '火傷', '화상', '灼伤'],
	notBurned: ['Not Burned', 'No quemado', 'Non brulé', 'Não queimado', 'Non scottato', 'Nicht verbrannt', '未火傷', '비화상', '未灼伤'],

	stuned: ['Stunned', 'Aturdido', 'Étourdi', 'Atordoado', 'Stordito', 'Betäubt', '気絶', '기절', '眩晕'],
	notStuned: ['Not Stunned', 'No aturdido', 'Non étourdí', 'Não atordoado', 'Non stordito', 'Nicht betäubt', '未気絶', '비기절', '未眩晕'],

	slowed: ['Slowed', 'Ralentizado', 'Ralenti', 'Lento', 'Rallentato', 'Verlangsamt', '減速', '감속', '减速'],
	notSlowed: ['Not Slowed', 'No ralentizado', 'Non ralenti', 'Não lento', 'Non rallentato', 'Nicht verlangsamt', '未減速', '비감속', '未减速'],

	cursed: ["Cursed", "Maldito", "Maudit", "Amaldiçoado", "Maledetto", "Verflucht", "呪われた", "저주받은", "被诅咒的"],
	curseable: ['Curseable', 'Maldecible', 'Maudissable', 'Amaldiçoável', 'Maledicibile', 'Verfluchbar', '呪われ得る', '저주 가능', '可被诅咒'],

	nightmared: ["Nightmare'd", "Con pesadilla", "Cauchemarde", "Com pesadelo", "Con incubo", "Mit Albtraum", "悪夢を伴う", "악몽을 동반한", "带着噩梦的"],

	random: ['Random', 'Aleatorio', 'Aléatoire', 'Aleatório', 'Casuale', 'Zufällig', 'ランダム', '무작위', '随机'],
	invisible: ['Invisible', 'Invisible', 'Invisible', 'Invisível', 'Invisibile', 'Unsichtbar', '透明', '투명', '隐形']
}

export class PokemonScene extends GameScene {
	constructor(main) {
		super(560, 550);
		this.main = main;

		this.pos;
		this.pokemon;
		this.boxArray;

		this.render();
		this.nameChange = new ChangePokemonName(this.main);
		this.itemWindow = new ItemWindow(this.main);
		this.isBlocked = false;
	}

	setBlocked(flag) {
		this.isBlocked = !!flag;

		if (this.container) {
			this.container.style.pointerEvents = this.isBlocked ? 'none' : 'revert-layer';
			this.container.style.filter = this.isBlocked ? 'grayscale(60%) brightness(0.95)' : 'revert-layer';
			this.container.querySelectorAll('button, a, [tabindex], input, [role="button"]').forEach(el => {
				if (this.isBlocked) {
					if (el.hasAttribute('tabindex')) el.setAttribute('data-prev-tabindex', el.getAttribute('tabindex'));
					el.setAttribute('tabindex', '-1');
				} else {
					if (el.hasAttribute('data-prev-tabindex')) {
						el.setAttribute('tabindex', el.getAttribute('data-prev-tabindex'));
						el.removeAttribute('data-prev-tabindex');
					} else {
						el.removeAttribute('tabindex');
					}
				}
			});
		}

		if (this.background) this.background.style.pointerEvents = 'revert-layer';
		if (this.closeButton) {
			this.closeButton.style.pointerEvents = 'revert-layer';
			this.closeButton.style.filter = 'revert-layer';
		}
	}

	render() {
		this.title.innerHTML = text.pokemon.title[this.main.lang].toUpperCase();

		this.name = new Element(this.container, { className: 'pokemon-scene-name' }).element;
		this.name.addEventListener('click', () => { this.nameChange.open(this.pokemon); })

		this.arrowPrev = new Element(this.container, { className: 'pokemon-scene-arrow-prev', text: '<' }).element;
		this.arrowNext = new Element(this.container, { className: 'pokemon-scene-arrow-next', text: '>' }).element;

		this.arrowPrev.addEventListener('click', () => { this.changePokemon(-1) })
		this.arrowNext.addEventListener('click', () => { this.changePokemon(1) })
		this.arrowPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.arrowNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.dataContainer = new Element(this.container, { className: 'pokemon-scene-data-container' }).element;
		this.data = [];

		DATA.forEach(data => {
			this.data[data] = new Element(this.dataContainer, { className: 'pokemon-scene-data' }).element;
			this.data[data].label = new Element(this.data[data], { className: 'pokemon-scene-data-label', text: text.pokemon[data][this.main.lang] }).element;
			if (data != 'attackType') this.data[data].value = new Element(this.data[data], { className: 'pokemon-scene-data-value' }).element;
			else {
				this.data[data].left = new Element(this.data[data], { className: 'pokemon-scene-data-arrow-at', text: '<' }).element;
				this.data[data].value = new Element(this.data[data], { className: 'pokemon-scene-data-value-at' }).element;
				this.data[data].right = new Element(this.data[data], { className: 'pokemon-scene-data-arrow-at', text: '>' }).element;

				this.data[data].left.addEventListener('click', () => { this.changeAttackType(-1) })
				this.data[data].right.addEventListener('click', () => { this.changeAttackType(1) })
				this.data[data].left.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
				this.data[data].right.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			}
		})

		this.abilityContainer = new Element(this.container, { className: 'pokemon-scene-ability-container' }).element;
		this.abilityName = new Element(this.abilityContainer, { className: 'pokemon-scene-ability-name' }).element;
		this.abilityDescription = new Element(this.abilityContainer, { className: 'pokemon-scene-ability-description' }).element;

		this.itemContainer = new Element(this.container, { className: 'pokemon-scene-item-container' }).element;
		this.itemName = new Element(this.itemContainer, { className: 'pokemon-scene-item-name' }).element;
		this.itemDescription = new Element(this.itemContainer, { className: 'pokemon-scene-item-description' }).element;
		this.itemIcon = new Element(this.itemContainer, { className: 'pokemon-scene-item-icon' }).element;
		this.itemIcon.addEventListener('click' , () => { if (!this.isBlocked) this.itemWindow.open(this.pokemon); });

		this.levelUpContainer = new Element(this.container, { className: 'pokemon-scene-level-up-container' }).element;
		this.levelUp = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;
		this.levelUp.addEventListener('click', () => {
			if (this.pokemon.lvl < 100 && this.main.player.gold >= this.pokemon.cost) {
				this.main.player.changeGold(-this.pokemon.cost);
				this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect();
				playSound('obtain', 'ui');
				if (this.main.boxScene.isOpen) this.main.boxScene.update();
			}
		})

		this.levelUpFive = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;
		this.levelUpFive.addEventListener('click', () => {
			if (this.pokemon.lvl < 96 && this.main.player.gold >= this.pokemon.checkCost(5)) {
				this.main.player.changeGold(-this.pokemon.checkCost(5));
				for (let i = 0; i < 5; i++) this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect(5);
				if (this.main.boxScene.isOpen) this.main.boxScene.update();
				playSound('obtain', 'ui');
			}
		})

		this.levelUpTen = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;
		this.levelUpTen.addEventListener('click', () => {
			if (this.pokemon.lvl < 91 && this.main.player.gold >= this.pokemon.checkCost(10)) {
				this.main.player.changeGold(-this.pokemon.checkCost(10));
				for (let i = 0; i < 10; i++) this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect(10);
				if (this.main.boxScene.isOpen) this.main.boxScene.update();
				playSound('obtain', 'ui');
			}
		})

		this.levelUp.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect()
		})

		this.levelUpFive.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect(5)
		})

		this.levelUpTen.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect(10)
		})

		this.levelUp.addEventListener('mouseleave', () => { this.update(); })
		this.levelUpFive.addEventListener('mouseleave', () => { this.update(); })
		this.levelUpTen.addEventListener('mouseleave', () => { this.update(); })

		this.buttonDNA = new Element(this.container, { className: 'pokemon-scene-button-dna' }).element;
		this.buttonDNA.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.buttonDNA.addEventListener('click', () => {
			const pokemon = this.main.team.pokemon[0];
			if (!this.pokemon.isDeployed) {
				playSound('teleport', 'effect')

				this.main.team.pokemon.splice(0, 1);
				this.main.team.pokemon.push(pokemon);

				if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam--;
				this.pokemon.adn = this.main.team.pokemon[0].specie;
				if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam++;
				this.pokemon.transformADN();
				this.main.UI.updatePokemon();
				this.update();
			}
			// else {
			// const team = this.main.team.pokemon;

			// const nextIndex = team.slice(1).findIndex(p =>
			// 	p.id !== 70 &&
			// 	p.tiles.includes(
			// 		this.main.area.placementTiles[this.pokemon.tilePosition].land
			// 	)
			// ) + 1;

			// if (nextIndex > 0) {
			// 	playSound('teleport', 'effect');

			// 	const head = team.slice(0, nextIndex);
			// 	const tail = team.slice(nextIndex);
			// 	const newOrder = tail.concat(head);
			// 	team.splice(0, team.length, ...newOrder);

			// 	if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam--;
			// 	this.pokemon.adn = team[0].specie;
			// 	if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam++;
			// 		this.pokemon.transformADN();
			// 		this.main.UI.updatePokemon();
			// 		this.update();
			// 	} else {
			// 		playSound('pop0', 'ui');
			// 	}
			// }
		})

		this.buttonChangeForm = new Element(this.container, { className: 'pokemon-scene-button-dna' }).element;
		this.buttonChangeForm.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.buttonChangeForm.addEventListener('click', () => {
			playSound('teleport', 'effect')
			
			if (this.pokemon.ability.id == "toughClawsDay") this.pokemon.updateSpecie('lycanrocNight');
			else this.pokemon.updateSpecie('lycanrocDay');

			this.main.UI.updatePokemon();
			this.update();
		})
		
		this.evolutionSprite = new Element(this.container, { className: 'pokemon-scene-evolution-sprite' }).element;
		this.evolutionLevel = new Element(this.evolutionSprite, { className: 'pokemon-scene-evolution-level' }).element;

		this.background.addEventListener('click', (e) => { if (e.target == this.background)this.close() })
	}

	update() {
		this.setBlocked(this.isBlocked);
		DATA.forEach(data => { this.data[data].label.innerText = text.pokemon[data][this.main.lang] });

		this.title.innerHTML = text.pokemon.title[this.main.lang].toUpperCase();
		
		if (!this.main.area.inChallenge[0]) this.name.innerHTML = (this.pokemon.alias != undefined) ? `${this.pokemon.alias.toUpperCase()} [${this.pokemon.lvl}]` : `${this.pokemon.name[this.main.lang].toUpperCase()} [${this.pokemon.lvl}]`;
		else this.name.innerHTML = (this.pokemon.alias != undefined) ? `${this.pokemon.alias.toUpperCase()} [50]` : `${this.pokemon.name[this.main.lang].toUpperCase()} [50]`;

		this.data['power'].value.innerHTML = `${this.pokemon.power}`;
		this.data['speed'].value.innerHTML = `${(this.pokemon.speed / 1000).toFixed(2)}s`;
		this.data['critical'].value.innerHTML = `${this.pokemon.critical.toFixed(1)}%`;
		this.data['range'].value.innerHTML = `${this.pokemon.range}`;
		this.data['rangeType'].value.innerHTML = `${text.pokemon[this.pokemon.rangeType][this.main.lang]}`;
		this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		this.abilityName.innerHTML = this.pokemon.ability.name[this.main.lang].toUpperCase();
		this.abilityDescription.innerHTML = this.pokemon.ability.description[this.main.lang];

		if (this.pokemon.id == 64 || this.pokemon?.adn?.id == 64) {
			this.abilityDescription.innerHTML += `<br><br> * ${text.pokemon.current[this.main.lang]} +${this.main.player.fossilInTeam} ${text.pokemon.projectiles[this.main.lang]}`;
		} else if (
			this.pokemon.id == 2 || this.pokemon?.adn?.id == 2 || 
			this.pokemon.id == 45 || this.pokemon?.adn?.id == 45 ||
			this.pokemon.id == 72 || this.pokemon?.adn?.id == 72) {
			this.abilityDescription.innerHTML += `<br><br> * ${this.pokemon.ricochet} ${text.pokemon.ricochets[this.main.lang]}`;
		} else if (this.pokemon?.adn?.id == 19 || this.pokemon?.adn?.id == 57) {
			this.abilityDescription.innerHTML += `<br><br> * ${text.pokemon.notStack[this.main.lang]}`;
		}

		this.data['terrain'].value.innerHTML = "";
		if (this.pokemon.tiles.length == 4) this.data['terrain'].value.innerHTML = TERRAINS[5][this.main.lang];
		else {
			this.pokemon.tiles.forEach((tile, i) => {
				this.data['terrain'].value.innerHTML += `${TERRAINS[tile][this.main.lang]}`
				if (this.pokemon.tiles.length > i + 1) this.data['terrain'].value.innerHTML += `, `
			})
		}

		this.name.style.borderColor = this.pokemon.specie.color;
		this.name.style.color = this.pokemon.specie.color;
		this.abilityDescription.style.color = this.pokemon.specie.color;
		this.arrowPrev.style.color = this.pokemon.specie.color;
		this.arrowNext.style.color = this.pokemon.specie.color;

		this.updateLevelButton();

		if (this.pokemon.targetMode == 'area' || this.pokemon.targetMode == 'aura' || 
			this.pokemon.targetMode == 'allies' || this.pokemon.targetMode == 'available' || 
			(this.pokemon.ability.id == 'spinda' && this.pokemon?.item?.id != 'ringTarget')
		) {
			this.data['attackType'].style.pointerEvents = 'none';
			this.data['attackType'].style.opacity = '80%';
		} else {
			this.data['attackType'].style.pointerEvents = 'revert-layer';
			this.data['attackType'].style.opacity = 'revert-layer';
		}

		if (
			(this.pokemon.ability.id == 'spinda' && this.pokemon?.item?.id != 'ringTarget') ||
			(this.pokemon?.item?.id == 'spindaCocktail' && this.pokemon.ability.id != 'defiant')
		) {
			this.data['attackType'].style.pointerEvents = 'none';
			this.data['attackType'].style.opacity = '80%';
			this.pokemon.changeTargetMode(TARGET_MODES[19]);
			this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		}

		if (
			this.pokemon?.item?.id == 'silphScope' && this.pokemon.id != 53
		) {
			this.pokemon.changeTargetMode(TARGET_MODES[20]);
			this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		} else if (
			this.pokemon?.item?.id != 'silphScope' && this.pokemon.targetMode == 'invisible' && this.pokemon.ability.id != 'frisk'
		) {
			this.pokemon.changeTargetMode(TARGET_MODES[0]);
			this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		}

		if (this.pokemon?.item?.id == 'quickClaw' && this.pokemon?.attackType != 'area') {
			this.data['attackType'].style.pointerEvents = 'none';
			this.data['attackType'].style.opacity = '80%';
			this.pokemon.changeTargetMode(TARGET_MODES[6]);
			this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		}

		if (this.pokemon.specie.evolution != undefined && this.pokemon.id != 70) {
			this.evolutionSprite.style.display = 'block';
			if (this.pokemon.id != 76) this.evolutionSprite.style.backgroundImage = `url("${pokemonData[this.pokemon.specie.evolution.pokemon].sprite.base}")`;
			else {
				if (this.main.utility.isBetweenHours(8, 18)) this.evolutionSprite.style.backgroundImage = `url("${pokemonData['lycanrocDay'].sprite.base}")`;
				else this.evolutionSprite.style.backgroundImage = `url("${pokemonData['lycanrocNight'].sprite.base}")`;
			}
			this.evolutionLevel.innerHTML = `Lv ${this.pokemon.specie.evolution.level}`;
		} else this.evolutionSprite.style.display = 'none';

		if (this.pokemon.id == 70 && !this.main.boxScene.isOpen) {
			this.buttonDNA.style.display = 'block';
			this.buttonDNA.style.backgroundImage = `url("${this.pokemon.adn.sprite.base}")`;
			if (this.pokemon.isDeployed) {
				this.buttonDNA.style.pointerEvents = 'none';
				this.buttonDNA.style.filter = 'brightness(0.8)';
			} else {
				this.buttonDNA.style.pointerEvents = 'revert-layer';
				this.buttonDNA.style.filter = 'revert-layer';
			}
		} else this.buttonDNA.style.display = 'none';

		if (this.pokemon.id == 76 && this.pokemon.lvl == 100) {
			this.buttonChangeForm.style.display = 'block';
			if (this.pokemon.ability.id == "toughClawsDay") this.buttonChangeForm.style.backgroundImage = `url("${pokemonData['lycanrocNight'].sprite.base}")`;
			else this.buttonChangeForm.style.backgroundImage = `url("${pokemonData['lycanrocDay'].sprite.base}")`;
			if (this.pokemon.isDeployed) {
				this.buttonChangeForm.style.pointerEvents = 'none';
				this.buttonChangeForm.style.filter = 'brightness(0.8)';
			} else {
				this.buttonChangeForm.style.pointerEvents = 'revert-layer';
				this.buttonChangeForm.style.filter = 'revert-layer';
			}
		} else this.buttonChangeForm.style.display = 'none';

		if (this.itemWindow.isOpen) this.itemWindow.close();
		this.updateItem();
		this.updateStatsChanges();
	}

	updateItem() {
		if (this.pokemon.item == undefined) {
			this.itemName.innerHTML = text.pokemon.noItem[this.main.lang].toUpperCase();
			this.itemDescription.innerHTML = text.pokemon.noItemDescription[this.main.lang];
			this.itemIcon.innerHTML = '+';
			this.itemIcon.style.backgroundImage = "";
		} else {
			this.itemName.innerHTML = this.pokemon.item.name[this.main.lang].toUpperCase();
			this.itemDescription.innerHTML = this.pokemon.item.description[this.main.lang];
			this.itemIcon.innerHTML = '';
			this.itemIcon.style.backgroundImage = `url("${this.pokemon.item.sprite}")`
		}

		if (this.pokemon.isDeployed) {
			this.itemIcon.style.pointerEvents = 'none';
			this.itemIcon.style.outline = "0px";
			this.itemIcon.innerHTML = '';
		} else {
			this.itemIcon.style.pointerEvents = 'all';
			this.itemIcon.style.outline = 'revert-layer';
		}
	}

	changeAttackType(dir) {
		let index = TARGET_MODES.findIndex((targetMode) => targetMode == this.pokemon.targetMode);
		let indexMax = (this.pokemon.ability.id == 'frisk' || this.pokemon?.item?.id == 'silphScope') ? 20 : 19;
		let indexMin = 0;

		index += dir;
		if (index > indexMax) index = indexMin;
		else if (index < indexMin) index = indexMax;
		this.pokemon.changeTargetMode(TARGET_MODES[index]);
		this.update();
		playSound('option', 'ui');
	}

	updateLevelButton() {
		if (this.main.area.inChallenge[0]) {
			this.levelUp.innerHTML = `-`;
			this.levelUp.style.filter = 'brightness(0.8)';
			this.levelUp.style.pointerEvents = 'none';
			this.levelUp.style.lineHeight = '28px';

			this.levelUpFive.innerHTML = `-`;
			this.levelUpFive.style.filter = 'brightness(0.8)';
			this.levelUpFive.style.pointerEvents = 'none';
			this.levelUpFive.style.lineHeight = '28px';

			this.levelUpTen.innerHTML = `-`;
			this.levelUpTen.style.filter = 'brightness(0.8)';
			this.levelUpTen.style.pointerEvents = 'none';
			this.levelUpTen.style.lineHeight = '28px';
			return;
		}

		if (this.pokemon.lvl === 100) {
			this.levelUp.innerHTML = `MAX`;
			this.levelUp.style.filter = 'brightness(0.8)';
			this.levelUp.style.pointerEvents = 'none';
			this.levelUp.style.lineHeight = '28px';
		} else {
			this.levelUp.style.lineHeight = 'revert-layer';
			this.levelUp.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} <br>($${this.main.utility.numberDot(this.pokemon.cost, this.main.lang)})`;
			this.levelUp.style.pointerEvents = 'all';
			if (this.main.player.gold < this.pokemon.cost) {
				this.levelUp.style.filter = 'brightness(0.8)';
			} else {
				this.levelUp.style.filter = 'revert-layer';
			}		
		}

		if (this.pokemon.lvl > 95) {
			this.levelUpFive.innerHTML = `MAX`;
			this.levelUpFive.style.filter = 'brightness(0.8)';
			this.levelUpFive.style.pointerEvents = 'none';
			this.levelUpFive.style.lineHeight = '28px';
		} else {
			this.levelUpFive.style.lineHeight = 'revert-layer';
			this.levelUpFive.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} x5 <br>($${this.main.utility.numberDot(this.pokemon.checkCost(5), this.main.lang)})`;
			this.levelUpFive.style.pointerEvents = 'all';
			if (this.main.player.gold < this.pokemon.checkCost(5)) {
				this.levelUpFive.style.filter = 'brightness(0.8)';
			} else {
				this.levelUpFive.style.filter = 'revert-layer';			
			}		
		}

		if (this.pokemon.lvl > 90) {
			this.levelUpTen.innerHTML = `MAX`;
			this.levelUpTen.style.filter = 'brightness(0.8)';
			this.levelUpTen.style.pointerEvents = 'none';
			this.levelUpTen.style.lineHeight = '28px';
		} else {
			this.levelUpTen.style.lineHeight = 'revert-layer';
			this.levelUpTen.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} x10 <br>($${this.main.utility.numberDot(this.pokemon.checkCost(10), this.main.lang)})`;
			this.levelUpTen.style.pointerEvents = 'all';
			if (this.main.player.gold < this.pokemon.checkCost(10)) {
				this.levelUpTen.style.filter = 'brightness(0.8)';
			} else {
				this.levelUpTen.style.filter = 'revert-layer';			
			}		
		}
	}

	changePokemon(dir) {
		this.pos += dir;
		if (this.main.boxScene.isOpen) {
			if (this.pos >= this.boxArray.length) this.pos = 0;
			else if (this.pos < 0) this.pos = this.boxArray.length - 1;
			this.pokemon = this.boxArray[this.pos];
		} else {
			if (this.pos >= this.main.team.pokemon.length) this.pos = 0;
			else if (this.pos < 0) this.pos = this.main.team.pokemon.length - 1;
			this.pokemon = this.main.team.pokemon[this.pos];
		}
		playSound('option', 'ui');
		this.update();
	}

	open(pokemon, pos, boxArray = [], isBlocked = false) {
		super.open();
		this.background.style.backgroundColor = (this.main.boxScene.isOpen) ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.6)'
		this.isBlocked = isBlocked;
		this.setBlocked(this.isBlocked);
		this.pokemon = pokemon;
		this.pos = pos;
		this.boxArray = boxArray;
		this.update();
	}

	close() {
		super.close();
		this.setBlocked(false);
		if (this.itemWindow.isOpen) this.itemWindow.close();
	}

	showLevelUpEffect(levels = 1) {
		const specie = (this.pokemon.specie.evolution != undefined && (this.pokemon.lvl >= this.pokemon.specie.evolution.level - levels)) ? pokemonData[this.pokemon.specie.evolution.pokemon] : this.pokemon.specie;

		const newPower = Math.floor(specie.power.base + (specie.power.scale * (this.pokemon.lvl + levels)));
		const newSpeed = Math.floor(specie.speed.base + (specie.speed.scale * (this.pokemon.lvl + levels)));
		const newCritical = specie.critical.base + (specie.critical.scale * (this.pokemon.lvl + levels));
		const newRange = Math.floor(specie.range.base + (specie.range.scale * (this.pokemon.lvl + levels)));
		
		const powerDiff = newPower - this.pokemon.power;
		const speedDiff = Math.abs((newSpeed / 1000).toFixed(2) - (this.pokemon.speed / 1000).toFixed(2)).toFixed(2);
		const criticalDiff = (newCritical.toFixed(1) - this.pokemon.critical.toFixed(1)).toFixed(1);
		const rangeDiff = newRange - this.pokemon.range;

		if (powerDiff > 0) {
			this.data['power'].value.innerHTML = `${this.pokemon.power} <span style="color:var(--green)">(+${powerDiff})</span>`;
		}
		if (speedDiff > 0) {
			this.data['speed'].value.innerHTML = `${(this.pokemon.speed / 1000).toFixed(2)}s <span style="color:var(--green)">(-${(speedDiff)}s)</span>`;
		} 
		if (criticalDiff > 0) {
			this.data['critical'].value.innerHTML = `${this.pokemon.critical.toFixed(1)}% <span style="color:var(--green)">(+${criticalDiff}%)</span>`;
		}
		if (rangeDiff > 0) {
			this.data['range'].value.innerHTML = `${this.pokemon.range} <span style="color:var(--green)">(+${rangeDiff})</span>`;
		}
	}

	updateStatsChanges() { 
	    let flatPower = 0;
	    let flatSpeed = 0;
	    let flatCritical = 0;
	    let flatRange = 0;

	    let mulPower = 1;
	    let mulSpeed = 1;
	    let mulCritical = 1;
	    let mulRange = 1;

	    const basePower = this.pokemon.power;
	    const baseSpeed = this.pokemon.speed;
	    const baseCritical = this.pokemon.critical;
	    const baseRange = this.pokemon.range;

	    if (this.pokemon.id == 65 || this.pokemon?.adn?.id == 65) {
	        flatSpeed -= this.main.player.fossilInTeam * 500;
	    }

	    if (this.pokemon.isDeployed) {
	        let tower = this.main.area.towers.find(t => t.pokemon === this.pokemon);

	        if (
	            (tower.tile && (tower.tile.land === 2 || (tower.tile.land == 1 && tower.pokemon?.item?.id == 'fertiliser')) && (tower.pokemon.ability.id === 'toughClawsNight')) ||
	            (tower.tile && (tower.tile.land === 4 && (tower.pokemon.ability.id === 'toughClawsDay' || tower.pokemon.ability.id === 'toughClaws')))
	        ) flatCritical = 100 - baseCritical;
	    }

	    switch (this.pokemon?.item?.id) {
	        case 'protein':
	            flatPower += 10; 
	            break;

	        case 'carbos':
	            mulSpeed *= 1 - 0.15
	            break;

	        case 'lifeOrb':
	            mulPower *= 1 + 0.5;
	            mulSpeed *= 1 - 0.5;
	            break;

	        case 'choiceScarf':
	            if (this.pokemon.ability.id === 'quadraShot' || this.pokemon.ability.id === 'quadraShotSand') mulSpeed *= 1 - 0.6;
	            else if (this.pokemon.ability.id === 'tripleShot') mulSpeed *= 1 - 0.4;
	            else mulSpeed *= 1 - 0.2;
	            break;

	        case 'oldRod':
	            flatRange += 60;
	            break;

	        case 'softSand':
	        case 'hardStone':
	            mulPower *= 1 + 0.2;
	            break;

	        case 'starCandy':
	            flatRange += 0.1 * this.main.player.stars;
	            break;

	        case 'leek':
	            mulCritical *= 2;
	            break;

	        case 'thickClub':
	        case 'lightBall':
	            mulPower *= 1 + 0.5; 
	            break;

	        case 'clawFossil':
	            flatPower += Math.ceil(basePower * 0.05 * this.main.player.fossilInTeam);
	            break;

	        case 'loadedDice':
	            mulPower *= 1 + 0.5 * (this.pokemon.ricochet || 0);
	            break;

	        case 'quickPowder':
	            mulSpeed *= 1 - 0.25;
            	if (this.pokemon.ability.id === 'defiant') mulPower *= 1 + 0.5;
            	else mulPower *= 1 - 0.5;
            	break;

	        case 'metalPowder':
	            mulPower *= 1 + 0.5;
	            if (this.pokemon.ability.id === 'defiant') mulSpeed *= 1 - 0.25;
				else mulSpeed *= 1 + 0.25;
	            break;

	        case 'domeFossil':
	            flatCritical += (5 * this.main.player.fossilInTeam);
	            break;

	        case 'adrenalineOrb':
	            if (this.main.player.health[this.main.area.routeNumber] <= 7) mulSpeed *= 1 - 0.25;
	            break;

	        case 'zoomLens':
	            if (this.pokemon.ability.id === 'defiant')  mulPower *= 1 + 0.5;
	            else mulPower *= 1 - 0.5;
	            break;

	        case 'quickClaw':
				mulSpeed *= 1 - 0.5;
	            if (this.pokemon.ability.id === 'defiant') mulPower *= 1 + 0.5;
	            else mulPower *= 1 - 0.5;
				break;

			case 'revelationAroma':
				flatRange += 25;
				break;

	        case 'blueBandana': 
				const critPercent = baseCritical + flatCritical;
   				mulPower *= 1 + (critPercent * 0.0075);
				break;
			
			case 'helixFossil': 
				flatRange += 10 * this.main.player.fossilInTeam;
				break;

			case 'spindaCocktail': 
				mulRange *= 1 + 0.25;
				break;

			case 'poisonBarb': 
				mulSpeed *= 1 - 0.2;
				break;

			case 'badgeOfHonor': 
				const bonusPercent = (this.main.player.stars * 0.01 / 30);
    			mulPower *= 1 + bonusPercent;
				break;

	        default:
	            break;
	    }

	    if (this.pokemon.id == 66) {
	        const currentHp = this.main.player.health[this.main.area.routeNumber] || 0;
	        const missingHp = Math.max(0, 14 - currentHp); 
	        const rate = (this.pokemon?.item?.id === 'rockyHelmet') ? 0.10 : 0.05;
	        mulPower *= 1 + missingHp * rate;
	    }

	    if (this.pokemon.isDeployed) {
	        const tower = this.main.area.towers.find(t => t.pokemon === this.pokemon);
	        if (tower) {

	            if (this.pokemon.ability.id === 'speedBoost') {
	                flatSpeed -= (tower.speedBoost || 0) * 300;
	            }

	            const tile = tower.tile;
	            const towerAbility = tower.pokemon?.ability?.id;

	            if (
	                tile &&
	                (tile.land === 2 || (tile.land === 1 && tower.pokemon?.item?.id === 'fertiliser')) &&
	                (towerAbility === 'ambusher' || towerAbility === 'castform')
	            ) {
	                mulPower *= 2; 
	            }

	            if (
	                tile &&
	                (tile.land === 2 || (tile.land === 1 && tower.pokemon?.item?.id === 'fertiliser')) &&
	                towerAbility === 'toughClawsNight'
	            ) {
	                mulPower *= 1.5;
	            }

	            if (tile && tile.land === 4 && (towerAbility === 'toughClawsDay' || towerAbility === 'toughClaws')) {
	                mulPower *= 1.5;
	            }

	            if (tile && tile.land === 4 && (towerAbility === 'vigilant' || towerAbility === 'castform')) {
	                mulRange *= 2;
	            }

	            if ([3,4,5].includes(this.main.area.routeNumber) && (towerAbility === 'doubleShotSand' || towerAbility === 'quadraShotSand')) {
	                mulRange *= 2;
	            }

	            if (
	                tile &&
	                (tile.land === 3 || (tile.land === 1 && tower.pokemon?.item?.id === 'squirtBottle')) &&
	                (towerAbility === 'swimmer' || towerAbility === 'castform')
	            ) mulSpeed *= 0.5;
	            

	            if (this.pokemon.ability.id === 'moxie') {
	                const stacks = tower.moxieBuff || 0;
	                mulPower *= 1 + stacks * 0.03;
	            }

	            if (tower.powerAura) {
	                mulPower *= 1 + 0.2;
	            }

	            if (tower.triageAura) {
	                mulSpeed *= 1 - 0.25;
	            }
	        }
	    }

	    const powerAfterFlats = (basePower + flatPower) * mulPower;
	    const speedAfterFlats = (baseSpeed + flatSpeed) * mulSpeed;
	    const criticalAfterFlats = (baseCritical + flatCritical) * mulCritical;
	    const rangeAfterFlats = (baseRange + flatRange) * mulRange;

	    const powerGains = Math.round(powerAfterFlats - basePower);
	    const speedGains = Math.round(speedAfterFlats - baseSpeed);
	    const criticalGains = Math.round(criticalAfterFlats - baseCritical);
	    const rangeGains = Math.round(rangeAfterFlats - baseRange);

    	if (powerGains != 0) {
			this.data['power'].value.innerHTML += (powerGains > 0) ? 
			` <span style="color: var(--green)"> (+${powerGains})<span>` : 
			` <span style="color: var(--red)"> (${powerGains})</span>`;
		}
		if (speedGains !== 0) {
	        const speedSec = (Math.abs(speedGains) / 1000).toFixed(2);
	        this.data['speed'].value.innerHTML += (speedGains < 0) ?
	            ` <span style="color: var(--green)">(-${speedSec}s)</span>` :
	            ` <span style="color: var(--red)">(+${speedSec}s)</span>`;
	    }
		if (criticalGains != 0) {
			this.data['critical'].value.innerHTML += (criticalGains > 0) ? 
			` <span style="color:var(--green")> (+${criticalGains}%)<span>` :
			` <span style="color:var(--red")> (${criticalGains}%)</span>`;
		}
		if (rangeGains != 0) {
			this.data['range'].value.innerHTML += (rangeGains > 0) ? 
			` <span style="color:var(--green")> (+${rangeGains})<span>` : 
			` <span style="color:var(--red")> (${rangeGains})</span>`;
		}
	}
}

class ItemWindow {
	constructor(main) {
		this.main = main;
		this.isOpen = false;
		this.render(); 

		this.pokemon;
	}

	render() {
		this.window = document.createElement('div');
		this.window.className = 'item-scene-window';

        this.container = new Element(this.window, { className: 'item-scene-container' }).element;
        this.slot = [];

        for (let i = 0; i < 63; i++) {
        	this.slot[i] = new Element(this.container, { className: 'item-scene-slot' }).element;
        	this.slot[i].addEventListener('click', () => { this.equipItem(i) })
        	this.slot[i].equiped = new Element(this.slot[i], { className: 'item-scene-slot-equiped stroke', text: 'E' }).element;
        }

        this.removeItem = new Element(this.container, { className: 'item-scene-slot item-scene-slot-x', text: 'X' }).element;
        this.removeItem.addEventListener('click', () => { 
        	this.pokemon.retireItem();
        	this.main.UI.update();
			this.main.pokemonScene.update();
			playSound('equip', 'ui');
        })
	}

	open(pokemon) {
		if (this.main.area.inChallenge[2]) {
			playSound('pop0', 'ui')
			return;
		}
        if (!this.isOpen) {
            playSound('open', 'ui');
        	this.isOpen = true;
        	this.pokemon = pokemon;

        	this.main.pokemonScene.window.appendChild(this.window)
        	this.window.style.display = 'block';
        	this.update();

        } else {
        	this.close();
        }
    }

    close() {
        this.isOpen = false;
        playSound('close', 'ui');
        this.window.style.display = 'none';
        this.main.tooltip.hide();
    }

	update() {
		this.slot.forEach(slot => {
			slot.style.backgroundImage = "";
			slot.style.pointerEvents = 'none';
			slot.equiped.innerHTML = "";
		});

		this.main.player.items.forEach((item, i) => {
			this.slot[i].style.backgroundImage = `url(${item.sprite})`;
			this.slot[i].style.pointerEvents = 'revert-layer';
			this.main.tooltip.bindTo(this.slot[i], item, 'item');

			let able = this.checkRestriction(item);

			if (item.equipedBy != undefined) { this.slot[i].equiped.innerHTML = 'E'; }

			if (!able) this.slot[i].style.filter = 'brightness(0)';
			else if (item.equipedBy != undefined) this.slot[i].style.filter = 'drop-shadow(0 0 2px var(--yellow)) ';
			else this.slot[i].style.filter = 'drop-shadow(0 0 2px var(--white))';
		})
	}

	checkRestriction(item) {
		const key = Object.keys(item.restriction)[0];
		switch(key) {
			case 'id':
				if (item.restriction[key].includes(this.pokemon.id)) return true;
				break;
			case 'idForbidden':	
				if (!item.restriction[key].includes(this.pokemon.id)) return true;
				break;
			case 'tile': 
				if (this.pokemon.id == 70) return false;	
				if (item.restriction[key].some(tile => this.pokemon.tiles.includes(tile))) return true;
				break;
			case 'tileForbidden':
				if (this.pokemon.id == 70) return false;	
				if (!item.restriction[key].some(tile => this.pokemon.tiles.includes(tile)))  return true;
				break;
			case 'attackType':
				if (this.pokemon.id == 70) return false;	
				if (item.restriction[key] == this.pokemon.attackType) return true;
				break;
			case 'rangeType':
				if (this.pokemon.id == 70) return false;	
				if (item.restriction[key] == this.pokemon.rangeType) return true;
				break;
		}
		return false;
	}

	equipItem(pos) {
		let able = this.checkRestriction(this.main.player.items[pos])
		if (!able) return;
		this.pokemon.equipItem(this.main.player.items[pos]);
		this.main.UI.update();
		this.main.pokemonScene.update();
	}
}
	
