import { projectileData } from './projectileData.js';
import { abilityData } from './abilityData.js';

export const pokemonData = {
	charmander: {
		id: 0,
		key: 'charmander',
		name: ['charmander', 'charmander', 'Salamèche', 'charmander', 'charmander', 'glumanda', 'ヒトカゲ', '파이리', '小火龍'],
		color: '#ff8463',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charmander.png',
			image: './src/assets/images/pokemon/towers/charmander-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: 0
		},
		power: {
			base: 13,
			scale: 2,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charmeleon',
			level: 16
		},	
	},
	charmeleon: {
		id: 0,
		key: 'charmeleon',
		name: ['charmeleon', 'charmeleon', 'Reptincel', 'charmeleon', 'charmeleon', 'glutexo', 'リザード', '리자드', '火恐龍'],
		color: '#d63900',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charmeleon.png',
			image: './src/assets/images/pokemon/towers/charmeleon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -2
		},
		power: {
			base: 25,
			scale: 2.4,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charizard',
			level: 36
		},	
	},
	charizard: {
		id: 0,
		key: 'charizard',
		name: ['charizard', 'charizard', 'Dracaufeu', 'charizard', 'charizard', 'glurak', 'リザードン', '리자몽', '噴火龍'],
		color: '#d63801',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charizard.png',
			image: './src/assets/images/pokemon/towers/charizard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 940,
			scale: -2
		},
		power: {
			base: 55,
			scale: 4.3,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	},
	treecko: {
		id: 1,
		key: 'treecko',
		name: ['treecko', 'treecko', 'Arcko', 'treecko', 'treecko', 'geckarbor', 'キモリ', '나무지기', '木守宮'],
		color: '#b7d667',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/treecko.png',
			image: './src/assets/images/pokemon/towers/treecko-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grovyle',
			level: 16,
		},	
	},
	grovyle: {
		id: 1,
		key: 'grovyle',
		name: ['grovyle', 'grovyle', 'Massko', 'grovyle', 'grovyle', 'reptain', 'ジュプトル', '나무돌이', '森林蜥蜴'],
		color: '#368f0e',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/grovyle.png',
			image: './src/assets/images/pokemon/towers/grovyle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 27,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sceptile',
			level: 36,
		},	
	},
	sceptile: {
		id: 1,
		key: 'sceptile',
		name: ['sceptile', 'sceptile', 'Jungko', 'sceptile', 'sceptile', 'gewaldro', 'ジュカイン', '나무킹', '蜥蜴王'],
		color: '#9fcf6f',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sceptile.png',
			image: './src/assets/images/pokemon/towers/sceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 50,
			scale: 4.9,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	froaki: {
		id: 2,
		key: 'froaki',
		name: ['froakie', 'froakie', 'Grenousse', 'froakie', 'froakie', 'groxy', 'ケロマツ', '개구마르', '呱呱泡蛙'],
		color: '#20adbc',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/froaki.png',
			image: './src/assets/images/pokemon/towers/froaki-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'frogadier',
			level: 16,
		},	
	},
	frogadier: {
		id: 2,
		key: 'frogadier',
		name: ['frogadier', 'frogadier', 'Croâporal', 'frogadier', 'frogadier', 'amphizel', 'ゲコガシラ', '개굴반장', '呱頭蛙'],
		color: '#4366b7',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/frogadier.png',
			image: './src/assets/images/pokemon/towers/frogadier-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1.2,
		},
		critical: {
			base: 1.5,
			scale: 0.2
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'greninja',
			level: 36,
		},	
	},
	greninja: {
		id: 2,
		key: 'greninja',
		name: ['greninja', 'greninja', 'Amphinobi', 'greninja', 'greninja', 'quajutsu', 'ゲッコウガ', '개굴닌자', '甲賀忍蛙'],
		color: '#2657ba',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 5,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/greninja.png',
			image: './src/assets/images/pokemon/towers/greninja-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -5
		},
		power: {
			base: 10,
			scale: 1.55,
		},
		critical: {
			base: 5,
			scale: 0.4
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	spoink: {
		id: 3,
		key: 'spoink',
		name: ['spoink', 'spoink', 'Spoink', 'spoink', 'spoink', 'spoink', 'バネブー', '피그점프', '哭哭面具'],
		color: '#aeb6bf',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spoink.png',
			image: './src/assets/images/pokemon/towers/spoink-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 30,
			scale: 3,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'grumpig',
			level: 32
		},	
	},
	grumpig: {
		id: 3,
		key: 'grumpig',
		name: ['grumpig', 'grumpig', 'Groret', 'grumpig', 'grumpig', 'groink', 'ブーピッグ', '피그킹', '胖彈豬'],
		color: '#c797de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/grumpig.png',
			image: './src/assets/images/pokemon/towers/grumpig-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -5
		},
		power: {
			base: 70,
			scale: 6.2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],	
	},
	natu: {
		id: 4,
		key: 'natu',
		name: ['natu', 'natu', 'Natu', 'natu', 'natu', 'natu', 'ネイティ', '네이티', '小果然鳥'],
		color: '#9fcf6f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/natu.png',
			image: './src/assets/images/pokemon/towers/natu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -3
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'xatu',
			level: 25
		},	
	},
	xatu: {
		id: 4,
		key: 'xatu',
		name: ['xatu', 'xatu', 'Xatu', 'xatu', 'xatu', 'xatu', 'ネイティオ', '네이티오', '奇異鳥'],
		color: '#5fb727',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/xatu.png',
			image: './src/assets/images/pokemon/towers/xatu-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5.5
		},
		power: {
			base: 35,
			scale: 4,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	voltorb: {
		id: 5,
		key: 'voltorb',
		name: ['voltorb', 'voltorb', 'Voltorbe', 'voltorb', 'voltorb', 'voltobal', 'ビリリダマ', '찌리리공', '電球'],
		color: '#d63901',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/voltorb.png',
			image: './src/assets/images/pokemon/towers/voltorb-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'electrode',
			level: 30
		},	
	},
	electrode: {
		id: 5,
		key: 'electrode',
		name: ['electrode', 'electrode', 'Électrode', 'electrode', 'electrode', 'lektrobal', 'マルマイン', '붐볼', '電擊球'],
		color: '#adb4bc',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/electrode.png',
			image: './src/assets/images/pokemon/towers/electrode-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -3
		},
		power: {
			base: 20,
			scale: 1.2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],	
	},
	ekans: {
		id: 6,
		key: 'ekans',
		name: ['ekans', 'ekans', 'Abo', 'ekans', 'ekans', 'rettan', 'アーボ', '아보', '阿柏蛇'],
		color: '#b594df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ekans.png',
			image: './src/assets/images/pokemon/towers/ekans-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1],
		evolution: {
			pokemon: 'arbok',
			level: 22
		},	
	},
	arbok: {
		id: 6,
		key: 'arbok',
		name: ['arbok', 'arbok', 'Arbok', 'arbok', 'arbok', 'arbok', 'アーボック', '아보크', '阿柏怪'],
		color: '#8c62bc',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/arbok.png',
			image: './src/assets/images/pokemon/towers/arbok-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -3
		},
		power: {
			base: 70,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1],	
	},
	machop: {
		id: 7,
		key: 'machop',
		name: ['machop', 'machop', 'Machoc', 'machop', 'machop', 'machollo', 'ワンリキー', '알통몬', '腕力'],
		color: '#8cacb5',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machop.png',
			image: './src/assets/images/pokemon/towers/machop-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -1
		},
		power: {
			base: 9,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machoke',
			level: 28
		},	
	},
	machoke: {
		id: 7,
		key: 'machoke',
		name: ['machoke', 'machoke', 'Machopeur', 'machoke', 'machoke', 'maschock', 'ゴーリキー', '근육몬', '豪力'],
		color: '#b595de',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machoke.png',
			image: './src/assets/images/pokemon/towers/machoke-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 30,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machamp',
			level: 42
		},	
	},
	machamp: {
		id: 7,
		key: 'machamp',
		name: ['machamp', 'machamp', 'Mackogneur', 'machamp', 'machamp', 'machomei', 'カイリキー', '괴력몬', '怪力'],
		color: '#d7e6df',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machamp.png',
			image: './src/assets/images/pokemon/towers/machamp-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 70,
			scale: 17.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	mankey: {
		id: 8,
		key: 'mankey',
		name: ['mankey', 'mankey', 'Férosinge', 'mankey', 'mankey', 'menki', 'マンキー', '망키', '猴怪'],
		color: '#fff79c',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/mankey.png',
			image: './src/assets/images/pokemon/towers/mankey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'primeape',
			level: 28
		},	
	},
	primeape: {
		id: 8,
		key: 'primeape',
		name: ['primeape', 'primeape', 'Colossinge', 'primeape', 'primeape', 'rasaff', 'オコリザル', '성원숭', '火爆猴'],
		color: '#fe845a',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/primeape.png',
			image: './src/assets/images/pokemon/towers/primeape-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	chimchar: {
		id: 9,
		key: 'chimchar',
		name: ['chimchar', 'chimchar', 'Ouisticram', 'chimchar', 'chimchar', 'panflam', 'ヒコザル', '불꽃숭이', '小火焰猴'],
		color: '#df771e',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/chimchar.png',
			image: './src/assets/images/pokemon/towers/chimchar-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 1.4,
			scale: 0.2
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'monferno',
			level: 16,
		},	
	},
	monferno: {
		id: 9,
		key: 'monferno',
		name: ['monferno', 'monferno', 'Chimpenfeu', 'monferno', 'monferno', 'panpyro', 'モウカザル', '파이숭이', '猛火猴'],
		color: '#ff962f',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/monferno.png',
			image: './src/assets/images/pokemon/towers/monferno-idle.png',
			frames: 11,
			hold: 7
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 25,
			scale: 2.2,
		},
		critical: {
			base: 2,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'infernape',
			level: 36,
		},	
	},
	infernape: {
		id: 9,
		key: 'infernape',
		name: ['infernape', 'infernape', 'Simiabraz', 'infernape', 'infernape', 'panferno', 'ゴウカザル', '초염몽', '烈焰猴'],
		color: '#df8626',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/infernape.png',
			image: './src/assets/images/pokemon/towers/infernape-idle.png',
			frames: 15,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 60,
			scale: 3,
		},
		critical: {
			base: 2.5,
			scale: 0.4
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	yamask: {
		id: 10,
		key: 'yamask',
		name: ['yamask', 'yamask', 'Tutafeh', 'yamask', 'yamask', 'makabaja', 'デスマス', '데스마스', '哭哭面具'],
		color: '#708088',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/yamask.png',
			image: './src/assets/images/pokemon/towers/yamask-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 2770,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'cofagrigus',
			level: 34
		},	
	},
	cofagrigus: {
		id: 10,
		key: 'cofagrigus',
		name: ['cofagrigus', 'cofagrigus', 'Tutankafer', 'cofagrigus', 'cofagrigus', 'echnatoll', 'デスカーン', '데스니칸', '魂胸棺'],
		color: '#ffef47',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cofagrigus.png',
			image: './src/assets/images/pokemon/towers/cofagrigus-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -6
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	riolu: {
		id: 11,
		key: 'riolu',
		name: ['riolu', 'riolu', 'Riolu', 'riolu', 'riolu', 'riolu', 'リオル', '리오르', '利歐路'],
		color: '#1e9ee6',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/riolu.png',
			image: './src/assets/images/pokemon/towers/riolu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 7,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'lucario',
			level: 20
		},	
	},
	lucario: {
		id: 11,
		key: 'lucario',
		name: ['lucario', 'lucario', 'Lucario', 'lucario', 'lucario', 'lucario', 'ルカリオ', '루카리오', '路卡利歐'],
		color: '#1fa7e7',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lucario.png',
			image: './src/assets/images/pokemon/towers/lucario-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 20,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	mareep: {
		id: 13,
		key: 'mareep',
		name: ['mareep', 'mareep', 'Wattouat', 'mareep', 'mareep', 'voltilamm', 'メリープ', '메리프', '咩利羊'],
		color: '#ffe69e',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/mareep.png',
			image: './src/assets/images/pokemon/towers/mareep-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3945,
			scale: -1
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'flaaffy',
			level: 15
		},	
	},
	flaaffy: {
		id: 13,
		key: 'flaaffy',
		name: ['flaaffy', 'flaaffy', 'Lainergie', 'flaaffy', 'flaaffy', 'waaty', 'モココ', '보송송', '麦蛙'],
		color: '#fe8faf',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/flaaffy.png',
			image: './src/assets/images/pokemon/towers/flaaffy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -1
		},
		power: {
			base: 8,
			scale: 2.2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'ampharos',
			level: 30
		},	
	},
	ampharos: {
		id: 13,
		key: 'ampharos',
		name: ['ampharos', 'ampharos', 'Pharamp', 'ampharos', 'ampharos', 'ampharos', 'デンリュウ', '전룡', '電龍'],
		color: '#fff600',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ampharos.png',
			image: './src/assets/images/pokemon/towers/ampharos-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -1
		},
		power: {
			base: 15,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 185,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	gulpin: {
		id: 14,
		key: 'gulpin',
		name: ['gulpin', 'gulpin', 'Gloupti', 'gulpin', 'gulpin', 'schluppuck', 'ゴクリン', '꼴깍몬', '嘟嘟利'],
		color: '#8fff67',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gulpin.png',
			image: './src/assets/images/pokemon/towers/gulpin-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -10
		},
		power: {
			base: 13,
			scale: 0.5,
		},
		critical: {
			base: 0.5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'swalot',
			level: 26
		},	
	},
	swalot: {
		id: 14,
		key: 'swalot',
		name: ['swalot', 'swalot', 'Avaltout', 'swalot', 'swalot', 'schlukwech', 'マルノーム', '꿀꺽몬', '吞食獸'],
		color: '#b796df',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/swalot.png',
			image: './src/assets/images/pokemon/towers/swalot-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -18
		},
		power: {
			base: 20,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	cryogonal: {
		id: 15,
		key: 'cryogonal',
		name: ['cryogonal', 'cryogonal', 'Hexagel', 'cryogonal', 'cryogonal', 'frigometri', 'フリージオ', '프리지오', '冰雪巨龍'],
		color: '#607dcb',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cryogonal.png',
			image: './src/assets/images/pokemon/towers/cryogonal-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -5
		},
		power: {
			base: 28,
			scale: 11.8,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 148,
			scale: 2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],	
	},
	sableye: {
		id: 16,
		key: 'sableye',
		name: ['sableye', 'sableye', 'Ténéfix', 'sableye', 'sableye', 'zobiris', 'ヤミラミ', '깜까미', '勾魂眼'],
		color: '#8e67bf',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sableye.png',
			image: './src/assets/images/pokemon/towers/sableye-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3850,
			scale: -31
		},
		power: {
			base: 15,
			scale: 1.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	drudiggon: {
		id: 17,
		key: 'drudiggon',
		name: ['Druddigon', 'Druddigon', 'Drakkarmin', 'Druddigon', 'Druddigon', 'shardrago', 'クリムガン', '크리만', '龍頭地鼠'],
		color: '#a42530',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/drudiggon.png',
			image: './src/assets/images/pokemon/towers/drudiggon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -10
		},
		power: {
			base: 2,
			scale: 9,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 100,
			scale: 1.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],	
	},
	meowth: {
		id: 18,
		key: 'meowth',
		name: ['meowth', 'meowth', 'Miaouss', 'meowth', 'meowth', 'mauzi', 'ニャース', '나옹', '喵喵'],
		color: '#d6bd62',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/meowth.png',
			image: './src/assets/images/pokemon/towers/meowth-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 1700,
			scale: -5
		},
		power: {
			base: 18,
			scale: 1.4,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'persian',
			level: 28
		},	
	},
	persian: {
		id: 18,
		key: 'persian',
		name: ['persian', 'persian', 'Persian', 'persian', 'persian', 'snobilikat', 'ペルシアン', '페르시온', '貓老大'],
		color: '#fff79d',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/persian.png',
			image: './src/assets/images/pokemon/towers/persian-idle.png',
			frames: 1,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -10
		},
		power: {
			base: 35,
			scale: 2.7,
		},
		critical: {
			base: 25,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	sunkern: {
		id: 19,
		key: 'sunkern',
		name: ['sunkern', 'sunkern', 'Tournegrin', 'sunkern', 'sunkern', 'sonnkern', 'ヒマナッツ', '해너츠', '向日種子'],
		color: '#fff700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sunkern.png',
			image: './src/assets/images/pokemon/towers/sunkern-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sunflora',
			level: 25,
		},	
	},
	sunflora: {
		id: 19,
		key: 'sunflora',
		name: ['sunflora', 'sunflora', 'Héliatronc', 'sunflora', 'sunflora', 'sonnflora', 'キマワリ', '해루미', '向日花怪'],
		color: '#dfb700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sunflora.png',
			image: './src/assets/images/pokemon/towers/sunflora-idle.png',
			frames: 16,
			hold: 4
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.7,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tangela: {
		id: 20,
		key: 'tangela',
		name: ['tangela', 'tangela', 'Saquedeneu', 'tangela', 'tangela', 'tangela', 'モンジャラ', '덩쿠리', '猜藤'],
		color: '#6285ac',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/tangela.png',
			image: './src/assets/images/pokemon/towers/tangela-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'tangrowth',
			level: 36,
		},	
	},
	tangrowth: {
		id: 20,
		key: 'tangrowth',
		name: ['tangrowth', 'tangrowth', 'Bouldeneu', 'tangrowth', 'tangrowth', 'tangoloss', 'モジャンボ', '덩쿠림보', '叢林藤王'],
		color: '#679fef',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/tangrowth.png',
			image: './src/assets/images/pokemon/towers/tangrowth-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: -2
		},
		power: {
			base: 100,
			scale: 9.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	chikorita: {
		id: 21,
		key: 'chikorita',
		name: ['chikorita', 'chikorita', 'Germignon', 'chikorita', 'chikorita', 'endivie', 'チコリータ', '치코리타', '菊草葉'],
		color: '#d7efa6',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/chikorita.png',
			image: './src/assets/images/pokemon/towers/chikorita-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2.1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'bayleef',
			level: 16,
		},	
	},
	bayleef: {
		id: 21,
		key: 'bayleef',
		name: ['bayleef', 'bayleef', 'Macronium', 'bayleef', 'bayleef', 'lorblatt', 'ベイリーフ', '베이리프', '月桂葉'],
		color: '#fff700',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/bayleef.png',
			image: './src/assets/images/pokemon/towers/bayleef-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2300,
			scale: -3
		},
		power: {
			base: 40,
			scale: 5,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'meganium',
			level: 32,
		},	
	},
	meganium: {
		id: 21,
		key: 'meganium',
		name: ['meganium', 'meganium', 'Méganium', 'meganium', 'meganium', 'meganie', 'メガニウム', '메가니움', '大菊花'],
		color: '#d7efa7',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/meganium.png',
			image: './src/assets/images/pokemon/towers/meganium-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 90,
			scale: 8.4,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	hoppip: {
		id: 22,
		key: 'hoppip',
		name: ['hoppip', 'hoppip', 'Granivol', 'hoppip', 'hoppip', 'hoppspross', 'ハネッコ', '두코', '風鈴鈴'],
		color: '#e73f67',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/hoppip.png',
			image: './src/assets/images/pokemon/towers/hoppip-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 15,
			scale: 1.3,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'skiploom',
			level: 18,
		},	
	},
	skiploom: {
		id: 22,
		key: 'skiploom',
		name: ['skiploom', 'skiploom', 'Floravol', 'skiploom', 'skiploom', 'hubelupf', 'ポポッコ', '두코리', '風鈴奈'],
		color: '#5fb627',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/skiploom.png',
			image: './src/assets/images/pokemon/towers/skiploom-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -1
		},
		power: {
			base: 20,
			scale: 1.5,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'jumpluff',
			level: 27,
		},	
	},
	jumpluff: {
		id: 22,
		key: 'jumpluff',
		name: ['jumpluff', 'jumpluff', 'Cotovol', 'jumpluff', 'jumpluff', 'papungha', 'ワタッコ', '솜솜코', '風鈴花'],
		color: '#4f9ed6',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/jumpluff.png',
			image: './src/assets/images/pokemon/towers/jumpluff-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 600,
			scale: -1
		},
		power: {
			base: 50,
			scale: 1.8,
		},
		critical: {
			base: 8,
			scale: 0.1
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	cottonee: {
		id: 23,
		key: 'cottonee',
		name: ['cottonee', 'cottonee', 'Doudouvet', 'cottonee', 'cottonee', 'waumboll', 'モンメン', '소미안', '棉花怪'],
		color: '#bee293',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cottonee.png',
			image: './src/assets/images/pokemon/towers/cottonee-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -5
		},
		power: {
			base: 11,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'whimsicott',
			level: 28,
		},	
	},
	whimsicott: {
		id: 23,
		key: 'whimsicott',
		name: ['whimsicott', 'whimsicott', 'Farfaduvet', 'whimsicott', 'whimsicott', 'elfun', 'エルフーン', '엘풍', '風妖精'],
		color: '#b7d667',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/whimsicott.png',
			image: './src/assets/images/pokemon/towers/whimsicott-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1190,
			scale: -6
		},
		power: {
			base: 25,
			scale: 2,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	petilil: {
		id: 24,
		key: 'petilil',
		name: ['petilil', 'petilil', 'Chlorobule', 'petilil', 'petilil', 'lilminip', 'チュリネ', '치릴리', '小肥花'],
		color: '#aed162',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/petilil.png',
			image: './src/assets/images/pokemon/towers/petilil-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'lilligant',
			level: 28,
		},	
	},
	lilligant: {
		id: 24,
		key: 'lilligant',
		name: ['lilligant', 'lilligant', 'Fragilady', 'lilligant', 'lilligant', 'dressella', 'ドレディア', '드레디어', '美麗花'],
		color: '#fe6b39',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lilligant.png',
			image: './src/assets/images/pokemon/towers/lilligant-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 1,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	spinarak: {
		id: 25,
		key: 'spinarak',
		name: ['spinarak', 'spinarak', 'Mimigal', 'spinarak', 'spinarak', 'webarak', 'イトマル', '페이검', '小蜘蛛'],
		color: '#9fce6f',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spinarak.png',
			image: './src/assets/images/pokemon/towers/spinarak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1.5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ariados',
			level: 22,
		},	
	},
	ariados: {
		id: 25,
		key: 'ariados',
		name: ['ariados', 'ariados', 'Migalos', 'ariados', 'ariados', 'ariados', 'アリアドス', '아리아도스', '阿利多斯'],
		color: '#d73f01',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ariados.png',
			image: './src/assets/images/pokemon/towers/ariados-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1150,
			scale: -4
		},
		power: {
			base: 13,
			scale: 2.7,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	maractus: {
		id: 26,
		key: 'maractus',
		name: ['maractus', 'maractus', 'Maracachi', 'maractus', 'maractus', 'maracamba', 'マラカッチ', '마라카치', '鬥蓮草'],
		color: '#5ff051',
		ability: abilityData['ambusher'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/maractus.png',
			image: './src/assets/images/pokemon/towers/maractus-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3450,
			scale: -21
		},
		power: {
			base: 6,
			scale: 2.9,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	shroomish: {
		id: 27,
		key: 'shroomish',
		name: ['shroomish', 'shroomish', 'Balignon', 'shroomish', 'shroomish', 'knilz', 'キノココ', '버섯꼬', '小菇菇'],
		color: '#fee79f',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shroomish.png',
			image: './src/assets/images/pokemon/towers/shroomish-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1930,
			scale: -2
		},
		power: {
			base: 12,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'breloom',
			level: 23
		},	
	},
	breloom: {
		id: 27,
		key: 'breloom',
		name: ['breloom', 'breloom', 'Chapignon', 'breloom', 'breloom', 'kapilz', 'キノガッサ', '버섯모', '蘑菇拳師'],
		color: '#8fff67',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/breloom.png',
			image: './src/assets/images/pokemon/towers/breloom-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -3
		},
		power: {
			base: 55,
			scale: 8,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	barboach: {
		id: 28,
		key: 'barboach',
		name: ['barboach', 'barboach', 'Barloche', 'barboach', 'barboach', 'schmerbe', 'ドジョッチ', '미꾸리', '泥魚子'],
		color: '#1f9ee7',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/barboach.png',
			image: './src/assets/images/pokemon/towers/barboach-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 27,
			scale: 3.1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'whiscash',
			level: 30
		},	
	},
	whiscash: {
		id: 28,
		key: 'whiscash',
		name: ['whiscash', 'whiscash', 'Barbicha', 'whiscash', 'whiscash', 'welsar', 'ナマズン', '메깅', '泥巴魚'],
		color: '#4f5f97',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/whiscash.png',
			image: './src/assets/images/pokemon/towers/whiscash-idle.png',
			frames: 10,
			hold: 5
		},
		speed: {
			base: 2800,
			scale: -4
		},
		power: {
			base: 53,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	clauncher: {
		id: 29,
		key: 'clauncher',
		name: ['clauncher', 'clauncher', 'Flingouste', 'clauncher', 'clauncher', 'scampisto', 'ウデッポウ', '완철포', '砲嘴巴'],
		color: '#81e1ff',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clauncher.png',
			image: './src/assets/images/pokemon/towers/clauncher-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 50,
			scale: 25,
		},
		critical: {
			base: 25,
			scale: 0
		},
		range: {
			base: 265,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'clawitzer',
			level: 37
		},	
	},
	clawitzer: {
		id: 29,
		key: 'clawitzer',
		name: ['clawitzer', 'clawitzer', 'Gamblast', 'clawitzer', 'clawitzer', 'wummer', 'ブロスター', '블로스터', '砲爪龍蝦'],
		color: '#4090f9',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clawitzer.png',
			image: './src/assets/images/pokemon/towers/clawitzer-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 100,
			scale: 50,
		},
		critical: {
			base: 50,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	remoraid: {
		id: 30,
		key: 'remoraid',
		name: ['remoraid', 'remoraid', 'Rémoraid', 'remoraid', 'remoraid', 'remoraid', 'テッポウオ', '총어', '小小海'],
		color: '#afb7bf',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/remoraid.png',
			image: './src/assets/images/pokemon/towers/remoraid-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 3600,
			scale: -1
		},
		power: {
			base: 23,
			scale: 2.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'octillery',
			level: 25
		},	
	},
	octillery: {
		id: 30,
		key: 'octillery',
		name: ['octillery', 'octillery', 'Octillery', 'octillery', 'octillery', 'octillery', 'オクタン', '대포무노', '大力海獅'],
		color: '#fe875e',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 10,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/octillery.png',
			image: './src/assets/images/pokemon/towers/octillery-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3100,
			scale: -6
		},
		power: {
			base: 150,
			scale: 7.1
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 280,
			scale: 2,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	oshawott: {
		id: 31,
		key: 'oshawott',
		name: ['oshawott', 'oshawott', 'Moustillon', 'oshawott', 'oshawott', 'ottaro', 'ミジュマル', '수댕이', '水水獺'],
		color: '#70d8f0',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/oshawott.png',
			image: './src/assets/images/pokemon/towers/oshawott-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -1
		},
		power: {
			base: 12,
			scale: 2.5,
		},
		critical: {
			base: 1.5,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewott',
			level: 17,
		},	
	},
	dewott: {
		id: 31,
		key: 'dewott',
		name: ['dewott', 'dewott', 'Mateloutre', 'dewott', 'dewott', 'zwottronin', 'フタチマル', '쌍검자비', '洗澡獺'],
		color: '#84d6ee',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dewott.png',
			image: './src/assets/images/pokemon/towers/dewott-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 2,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'samurott',
			level: 36,
		},	
	},
	samurott: {
		id: 31,
		key: 'samurott',
		name: ['samurott', 'samurott', 'Clamiral', 'samurott', 'samurott', 'admurai', 'ダイケンキ', '대검귀', '武裝獺'],
		color: '#20adbc',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/samurott.png',
			image: './src/assets/images/pokemon/towers/samurott-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 840,
			scale: -3
		},
		power: {
			base: 80,
			scale: 4.5,
		},
		critical: {
			base: 3,
			scale: 0.3
		},
		range: {
			base: 140,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	staryu: {
		id: 32,
		key: 'staryu',
		name: ['staryu', 'staryu', 'Stari', 'staryu', 'staryu', 'sterndu', 'ヒトデマン', '별가사리', '海星星'],
		color: '#de7318',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staryu.png',
			image: './src/assets/images/pokemon/towers/staryu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -2
		},
		power: {
			base: 13,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 165,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'starmie',
			level: 33,
		},	
	},
	starmie: {
		id: 32,
		key: 'starmie',
		name: ['starmie', 'starmie', 'Staross', 'starmie', 'starmie', 'starmie', 'スターミー', '아쿠스타', '宝石海星'],
		color: '#8d62bd',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/starmie.png',
			image: './src/assets/images/pokemon/towers/starmie-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 700,
			scale: -2
		},
		power: {
			base: 55,
			scale: 3,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	lapras: {
		id: 33,
		key: 'lapras',
		name: ['lapras', 'lapras', 'Lokhlass', 'lapras', 'lapras', 'lapras', 'ラプラス', '라프라스', '拉普拉斯'],
		color: '#7acfff',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lapras.png',
			image: './src/assets/images/pokemon/towers/lapras-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6300,
			scale: -6.5
		},
		power: {
			base: 10,
			scale: 6.6,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3],
	},
	seel: {
		id: 34,
		key: 'seel',
		name: ['seel', 'seel', 'Otaria', 'seel', 'seel', 'jurob', 'パウワウ', '쥬쥬', '小海獅'],
		color: '#d7dfde',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/seel.png',
			image: './src/assets/images/pokemon/towers/seel-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 15,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 260,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewgong',
			level: 34,
		},	
	},
	dewgong: {
		id: 34,
		key: 'dewgong',
		name: ['dewgong', 'dewgong', 'Lamantine', 'dewgong', 'dewgong', 'jugong', 'ジュゴン', '쥬레곤', '白海獅'],
		color: '#adb4bd',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dewgong.png',
			image: './src/assets/images/pokemon/towers/dewgong-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -2
		},
		power: {
			base: 60,
			scale: 7.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 400,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
	},
	psyduck: {
		id: 35,
		key: 'psyduck',
		name: ['psyduck', 'psyduck', 'Psykokwak', 'psyduck', 'psyduck', 'enton', 'コダック', '고라파덕', '可達鴨'],
		color: '#dfb501',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/psyduck.png',
			image: './src/assets/images/pokemon/towers/psyduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'golduck',
			level: 33,
		},	
	},
	golduck: {
		id: 35,
		key: 'golduck',
		name: ['golduck', 'golduck', 'Akwakwak', 'golduck', 'golduck', 'entoron', 'ゴルダック', '골덕', '哥達鴨'],
		color: '#199de7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/golduck.png',
			image: './src/assets/images/pokemon/towers/golduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5
		},
		power: {
			base: 42,
			scale: 3.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	murkrow: {
		id: 36,
		key: 'murkrow',
		name: ['murkrow', 'murkrow', 'Cornèbre', 'murkrow', 'murkrow', 'kramurx', 'ヤミカラス', '니로우', '長翅鴉'],
		color: '#deb600',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/murkrow.png',
			image: './src/assets/images/pokemon/towers/murkrow-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'honchkrow',
			level: 40,
		},	
	},
	honchkrow: {
		id: 36,
		key: 'honchkrow',
		name: ['honchkrow', 'honchkrow', 'Corboss', 'honchkrow', 'honchkrow', 'kramshef', 'ドンカラス', '돈크로우', '烏鴉頭領'],
		color: '#d7d7de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/honchkrow.png',
			image: './src/assets/images/pokemon/towers/honchkrow-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 890,
			scale: -2
		},
		power: {
			base: 35,
			scale: 3.3,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 190,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandshrew: {
		id: 37,
		key: 'sandshrew',
		name: ['sandshrew', 'sandshrew', 'Sabelette', 'sandshrew', 'sandshrew', 'sandan', 'サンド', '모래두지', '穿山鼠'],
		color: '#dfb500',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sandshrew.png',
			image: './src/assets/images/pokemon/towers/sandshrew-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 8,
			scale: 4,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 105,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sandslash',
			level: 22,
		},	
	},
	sandslash: {
		id: 37,
		key: 'sandslash',
		name: ['sandslash', 'sandslash', 'Sablaireau', 'sandslash', 'sandslash', 'sandamer', 'サンドパン', '고지', '穿山王'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sandslash.png',
			image: './src/assets/images/pokemon/towers/sandslash-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1050,
			scale: -1
		},
		power: {
			base: 30,
			scale: 5.7,
		},
		critical: {
			base: 15,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	trapinch: {
		id: 38,
		key: 'trapinch',
		name: ['trapinch', 'trapinch', 'Kraknoix', 'trapinch', 'trapinch', 'knacklion', 'ナックラー', '톱치', '圈圈蟲'],
		color: '#ff9746',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/trapinch.png',
			image: './src/assets/images/pokemon/towers/trapinch-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'vibrava',
			level: 35,
		},	
	},
	vibrava: {
		id: 38,
		key: 'vibrava',
		name: ['vibrava', 'vibrava', 'Vibraninf', 'vibrava', 'vibrava', 'vibrava', 'ビブラーバ', '비브라바', '沙漠蜻蜓'],
		color: '#deb700',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/vibrava.png',
			image: './src/assets/images/pokemon/towers/vibrava-idle.png',
			frames: 9,
			hold: 11
		},
		speed: {
			base: 1700,
			scale: -1
		},
		power: {
			base: 50,
			scale: 3.6,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'flygon',
			level: 45,
		},	
	},
	flygon: {
		id: 38,
		key: 'flygon',
		name: ['flygon', 'flygon', 'Libégon', 'flygon', 'flygon', 'libelldra', 'フライゴン', '플라이곤', '翔龍'],
		color: '#5fb726',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/flygon.png',
			image: './src/assets/images/pokemon/towers/flygon-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1320,
			scale: -3.2
		},
		power: {
			base: 55,
			scale: 7,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	noibat: {
		id: 39,
		key: 'noibat',
		name: ['noibat', 'noibat', 'Sonistrelle', 'noibat', 'noibat', 'em', 'オンバット', '음뱃', '吼吶蝠'],
		color: '#863f86',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/noibat.png',
			image: './src/assets/images/pokemon/towers/noibat-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1850,
			scale: 0
		},
		power: {
			base: 14,
			scale: 3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.5,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noivern',
			level: 48
		},	
	},
	noivern: {
		id: 39,
		key: 'noivern',
		name: ['noivern', 'noivern', 'Bruyverne', 'noivern', 'noivern', 'uhafnir', 'オンバーン', '음번', '吼吶王'],
		color: '#6cc5bb',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/noivern.png',
			image: './src/assets/images/pokemon/towers/noivern-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1600,
			scale: -1.8
		},
		power: {
			base: 60,
			scale: 11.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 300,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sneasel: {
		id: 40,
		key: 'sneasel',
		name: ['sneasel', 'sneasel', 'Farfuret', 'sneasel', 'sneasel', 'sniebel', 'ニューラ', '포푸니', '黑眼貂'],
		color: '#4f5f96',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sneasel.png',
			image: './src/assets/images/pokemon/towers/sneasel-idle.png',
			frames: 7,
			hold: 13
		},
		speed: {
			base: 900,
			scale: -3
		},
		power: {
			base: 7,
			scale: 1.8,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weavile',
			level: 25
		},	
	},
	weavile: {
		id: 40,
		key: 'weavile',
		name: ['weavile', 'weavile', 'Dimoret', 'weavile', 'weavile', 'snibunna', 'マニューラ', '포푸니라', '瑪狃拉'],
		color: '#d73f01',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/weavile.png',
			image: './src/assets/images/pokemon/towers/weavile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0.8
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	drilbur: {
		id: 41,
		key: 'drilbur',
		name: ['drilbur', 'drilbur', 'Rototaupe', 'drilbur', 'drilbur', 'rotomurf', 'モグリュー', '두더류', '掘地鼠'],
		color: '#8d7b6d',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/drilbur.png',
			image: './src/assets/images/pokemon/towers/drilbur-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'excadrill',
			level: 31
		},	
	},
	excadrill: {
		id: 41,
		key: 'excadrill',
		name: ['excadrill', 'excadrill', 'Minotaupe', 'excadrill', 'excadrill', 'stalobor', 'ドリュウズ', '몰드류', '長鼻鐵'],
		color: '#bc4342',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/excadrill.png',
			image: './src/assets/images/pokemon/towers/excadrill-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -6
		},
		power: {
			base: 20,
			scale: 1.6,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	shuckle: {
		id: 42,
		key: 'shuckle',
		name: ['shuckle', 'shuckle', 'Caratroc', 'shuckle', 'shuckle', 'pottrott', 'ツボツボ', '단단지', '盾甲蛹'],
		color: '#d73f00',
		ability: abilityData['slow'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shuckle.png',
			image: './src/assets/images/pokemon/towers/shuckle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7000,
			scale: -50
		},
		power: {
			base: 50,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hawlucha: {
		id: 43,
		key: 'hawlucha',
		name: ['hawlucha', 'hawlucha', 'Brutalibré', 'hawlucha', 'hawlucha', 'resladero', 'ルチャブル', '루차불', '鬥雞鷹'],
		color: '#01bd93',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/hawlucha.png',
			image: './src/assets/images/pokemon/towers/hawlucha-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1630,
			scale: -8
		},
		power: {
			base: 12,
			scale: 6.3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 135,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	aron: {
		id: 44,
		key: 'aron',
		name: ['aron', 'aron', 'Galekid', 'aron', 'aron', 'stollunior', 'ココドラ', '가보리', '可撓鋼'],
		color: '#afb6bf',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/aron.png',
			image: './src/assets/images/pokemon/towers/aron-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: 0
		},
		power: {
			base: 14,
			scale: 0.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'lairon',
			level: 32,
		},	
	},
	lairon: {
		id: 44,
		key: 'lairon',
		name: ['lairon', 'lairon', 'Galegon', 'lairon', 'lairon', 'stollrak', 'コドラ', '갱도라', '可拉鋼'],
		color: '#7f8e97',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lairon.png',
			image: './src/assets/images/pokemon/towers/lairon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: 0
		},
		power: {
			base: 18,
			scale: 1.7,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aggron',
			level: 42,
		},	
	},
	aggron: {
		id: 44,
		key: 'aggron',
		name: ['aggron', 'aggron', 'Galeking', 'aggron', 'aggron', 'stolloss', 'ボスゴドラ', '보스로라', '銀甲怪'],
		color: '#c7cfd2',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/aggron.png',
			image: './src/assets/images/pokemon/towers/aggron-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2250,
			scale: 0
		},
		power: {
			base: 35,
			scale: 3.3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	cubone: {
		id: 45,
		key: 'cubone',
		name: ['cubone', 'cubone', 'Osselait', 'cubone', 'cubone', 'tragosso', 'カラカラ', '탕구리', '卡拉卡拉'],
		color: '#ac6218',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cubone.png',
			image: './src/assets/images/pokemon/towers/cubone-idle.png',
			frames: 6,
			hold: 13
		},
		speed: {
			base: 2700,
			scale: -1
		},
		power: {
			base: 18,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 270,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'marowak',
			level: 28,
		},	
	},
	marowak: {
		id: 45,
		key: 'marowak',
		name: ['marowak', 'marowak', 'Ossatueur', 'marowak', 'marowak', 'knogga', 'ガラガラ', '텅구리', '嘎拉嘎拉'],
		color: '#de7319',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/marowak.png',
			image: './src/assets/images/pokemon/towers/marowak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -11
		},
		power: {
			base: 60,
			scale: 5.7,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 350,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	pidgey: {
		id: 46,
		key: 'pidgey',
		name: ['pidgey', 'pidgey', 'Roucool', 'pidgey', 'pidgey', 'taubsi', 'ポッポ', '구구', '波波'],
		color: '#e63963',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgey.png',
			image: './src/assets/images/pokemon/towers/pidgey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 9,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeotto',
			level: 18,
		},	
	},
	pidgeotto: {
		id: 46,
		key: 'pidgeotto',
		name: ['pidgeotto', 'pidgeotto', 'Roucoups', 'pidgeotto', 'pidgeotto', 'tauboga', 'ピジョン', '피죤', '比比鳥'],
		color: '#fe8dad',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgeotto.png',
			image: './src/assets/images/pokemon/towers/pidgeotto-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 28,
			scale: 2.1,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeot',
			level: 36,
		},	
	},
	pidgeot: {
		id: 46,
		key: 'pidgeot',
		name: ['pidgeot', 'pidgeot', 'Roucarnage', 'pidgeot', 'pidgeot', 'tauboss', 'ピジョット', '피죤투', '大比鳥'],
		color: '#fe9542',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgeot.png',
			image: './src/assets/images/pokemon/towers/pidgeot-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3
		},
		power: {
			base: 60,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	binacle: {
		id: 47,
		key: 'binacle',
		name: ['binacle', 'binacle', 'Opermine', 'binacle', 'binacle', 'bithora', 'カメテテ', '거북손손', '雙殼盔'],
		color: '#9b7547',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/binacle.png',
			image: './src/assets/images/pokemon/towers/binacle-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -4
		},
		power: {
			base: 13,
			scale: 2.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'barbaracle',
			level: 39,
		},	
	},
	barbaracle: {
		id: 47,
		key: 'barbaracle',
		name: ['barbaracle', 'barbaracle', 'Golgopathe', 'barbaracle', 'barbaracle', 'thanathora', 'ガメノデス', '거북손데스', '獨島殼王'],
		color: '#c8cbda',
		ability: abilityData['quadraShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/barbaracle.png',
			image: './src/assets/images/pokemon/towers/barbaracle-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 2300,
			scale: -5.7
		},
		power: {
			base: 20,
			scale: 4.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	surskit: {
		id: 48,
		key: 'surskit',
		name: ['surskit', 'surskit', 'Arakdo', 'surskit', 'surskit', 'gehweiher', 'アメタマ', '비구술', '水蛛'],
		color: '#1e9ee7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/surskit.png',
			image: './src/assets/images/pokemon/towers/surskit-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'masquerain',
			level: 22,
		},	
	},
	masquerain: {
		id: 48,
		key: 'masquerain',
		name: ['masquerain', 'masquerain', 'Maskadra', 'masquerain', 'masquerain', 'maskeregen', 'アメモース', '비나방', '虛擬蝶'],
		color: '#ff875f',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/masquerain.png',
			image: './src/assets/images/pokemon/towers/masquerain-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -6.3
		},
		power: {
			base: 20,
			scale: 1.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
	},
	ferroseed: {
		id: 49,
		key: 'ferroseed',
		name: ['ferroseed', 'ferroseed', 'Grindur', 'ferroseed', 'ferroseed', 'kastadur', 'テッシード', '철시드', '鐵炮子'],
		color: '#5eb727',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ferroseed.png',
			image: './src/assets/images/pokemon/towers/ferroseed-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 9,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'ferrothorn',
			level: 40,
		},	
	},
	ferrothorn: {
		id: 49,
		key: 'ferrothorn',
		name: ['ferrothorn', 'ferrothorn', 'Noacier', 'ferrothorn', 'ferrothorn', 'tentantel', 'ナットレイ', '너트령', '鐵刺球'],
		color: '#208c52',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ferrothorn.png',
			image: './src/assets/images/pokemon/towers/ferrothorn-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2450,
			scale: -2.3
		},
		power: {
			base: 12,
			scale: 3,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	absol: {
		id: 50,
		key: 'absol',
		name: ['absol', 'absol', 'Absol', 'absol', 'absol', 'absol', 'アブソル', '앱솔', '阿勃梭魯'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/absol.png',
			image: './src/assets/images/pokemon/towers/absol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -9
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 0,
			scale: 1
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	// NEW
	girafarig: {
		id: 51,
		key: 'girafarig',
		name: ['girafarig', 'girafarig', 'Girafarig', 'girafarig', 'girafarig', 'girafarig', 'キリンリキ', '키링키', '長頸鹿背反'],
		color: '#dfb700',
		ability: abilityData['curseDoubleShot'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/girafarig.png',
			image: './src/assets/images/pokemon/towers/girafarig-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2050,
			scale: -2
		},
		power: {
			base: 3,
			scale: 1.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.35,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	torkoal: {
		id: 52,
		key: 'torkoal',
		name: ['torkoal', 'torkoal', 'Chartor', 'torkoal', 'torkoal', 'qurtel', 'コータス', '코터스', '煤炭龜'],
		color: '#df761e',
		ability: abilityData['burnNerf'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/torkoal.png',
			image: './src/assets/images/pokemon/towers/torkoal-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -22
		},
		power: {
			base: 7,
			scale: 6.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	spinda: {
		id: 53,
		key: 'spinda',
		name: ['spinda', 'spinda', 'Spinda', 'spinda', 'spinda', 'pandir', 'パッチール', '스핀다', '圓圓斑'],
		color: '#ff875f',
		ability: abilityData['spinda'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spinda.png',
			image: './src/assets/images/pokemon/towers/spinda-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 200,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 300,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	dunsparce: {
		id: 54,
		key: 'dunsparce',
		name: ['dunsparce', 'dunsparce', 'Insolourdo', 'dunsparce', 'dunsparce', 'dummisel', 'ノコッチ', '노고치', '土龍弟弟'],
		color: '#1f9fe7',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dunsparce.png',
			image: './src/assets/images/pokemon/towers/dunsparce-idle.png',
			frames: 2,
			hold: 5
		},
		speed: {
			base: 2900,
			scale: -12
		},
		power: {
			base: 15,
			scale: 7,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	ralts: {
		id: 55,
		key: 'ralts',
		name: ['ralts', 'ralts', 'Tarsal', 'ralts', 'ralts', 'trasla', 'ラルトス', '랄토스', '拉魯拉絲'],
		color: '#5ec636',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ralts.png',
			image: './src/assets/images/pokemon/towers/ralts-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'kirlia',
			level: 20,
		},
	},
	kirlia: {
		id: 55,
		key: 'kirlia',
		name: ['kirlia', 'kirlia', 'Kirlia', 'kirlia', 'kirlia', 'kirlia', 'キルリア', '킬리아', '奇魯莉安'],
		color: '#e63f67',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kirlia.png',
			image: './src/assets/images/pokemon/towers/kirlia-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'gardevoir',
			level: 30,
		},
	},
	gardevoir: {
		id: 55,
		key: 'gardevoir',
		name: ['gardevoir', 'gardevoir', 'Gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'サーナイト', '가디안', '沙奈朵'],
		color: '#8fff66',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gardevoir.png',
			image: './src/assets/images/pokemon/towers/gardevoir-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -6
		},
		power: {
			base: 40,
			scale: 8.6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	koffing: {
		id: 56,
		key: 'koffing',
		name: ['koffing', 'koffing', 'Smogo', 'koffing', 'koffing', 'smogon', 'ドガース', '또가스', '臭臭泥'],
		color: '#b595df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/koffing.png',
			image: './src/assets/images/pokemon/towers/koffing-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weezing',
			level: 35,
		},
	},
	weezing: {
		id: 56,
		key: 'weezing',
		name: ['weezing', 'weezing', 'Smogogo', 'weezing', 'weezing', 'smogmog', 'マタドガス', '또도가스', '瓦斯彈王'],
		color: '#ad6bb4',
		ability: abilityData['poisonDoubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/weezing.png',
			image: './src/assets/images/pokemon/towers/weezing-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -5
		},
		power: {
			base: 50,
			scale: 8.1,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	farfetchd: {
		id: 57,
		key: 'farfetchd',
		name: ['farfetch’d', 'farfetch’d', 'Canarticho', 'farfetch’d', 'farfetch’d', 'porenta', 'カモネギ', '파오리', '大蔥鴨'],
		color: '#ad621b',
		ability: abilityData['criticalAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/farfetchd.png',
			image: './src/assets/images/pokemon/towers/farfetchd-idle.png',
			frames: 4,
			hold: 14
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 7,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	omanyte: {
		id: 58,
		key: 'omanyte',
		name: ['omanyte', 'omanyte', 'Amonita', 'omanyte', 'omanyte', 'amonitas', 'オムナイト', '암나이트', '化石盔'],
		color: '#8cdffe',
		ability: abilityData['swimmer'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/omanyte.png',
			image: './src/assets/images/pokemon/towers/omanyte-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5700,
			scale: -10
		},
		power: {
			base: 26,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'omastar',
			level: 40,
		},
	},
	omastar: {
		id: 58,
		key: 'omastar',
		name: ['omastar', 'omastar', 'Amonistar', 'omastar', 'omastar', 'amoroso', 'オムスター', '암스타', '菊石獸'],
		color: '#189ce6',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/omastar.png',
			image: './src/assets/images/pokemon/towers/omastar-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -10
		},
		power: {
			base: 40,
			scale: 8.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	kabuto: {
		id: 59,
		key: 'kabuto',
		name: ['kabuto', 'kabuto', 'Kabuto', 'kabuto', 'kabuto', 'kabuto', 'カブト', '투구', '化石盔'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kabuto.png',
			image: './src/assets/images/pokemon/towers/kabuto-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'kabutops',
			level: 40,
		},
	},
	kabutops: {
		id: 59,
		key: 'kabutops',
		name: ['kabutops', 'kabutops', 'Kabutops', 'kabutops', 'kabutops', 'kabutops', 'カブトプス', '투구푸스', '盔甲刀龍'],
		color: '#a55b19',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kabutops.png',
			image: './src/assets/images/pokemon/towers/kabutops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1120,
			scale: -4
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 5,
			scale: 0.6
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	corsola: {
		id: 60,
		key: 'corsola',
		name: ['corsola', 'corsola', 'Corayon', 'corsola', 'corsola', 'corasonn', 'サニーゴ', '코산호', '珊瑚獸'],
		color: '#ff8faf',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/corsola.png',
			image: './src/assets/images/pokemon/towers/corsola-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 4.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	castform: {
		id: 61,
		key: 'castform',
		name: ['castform', 'castform', 'Morphéo', 'castform', 'castform', 'formeo', 'ポワルン', '캐스퐁', '變化怪'],
		color: '#aeb7bf',
		ability: abilityData['castform'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		projectileGrass: projectileData['red1'],
		projectileWater: projectileData['blue5'],
		projectileMountain: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/castform.png',
			image: './src/assets/images/pokemon/towers/castform-idle.png',
			imageGrass: './src/assets/images/pokemon/towers/castform-grass-idle.png',
			imageWater: './src/assets/images/pokemon/towers/castform-water-idle.png',
			imageMountain: './src/assets/images/pokemon/towers/castform-mountain-idle.png',
			frames: 6,
			framesGrass: 9,
			framesWater: 8,
			framesMountain: 4,
			hold: 14
		},
		speed: {
			base: 2100,
			scale: -12
		},
		power: {
			base: 1,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3, 4],
	},
	clefairy: {
		id: 62,
		key: 'clefairy',
		name: ['clefairy', 'clefairy', 'Mélofée', 'clefairy', 'clefairy', 'Piepi', 'ピッピ', '삐삐', '皮皮'],
		color: '#ffc7d7',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clefairy.png',
			image: './src/assets/images/pokemon/towers/clefairy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'clefable',
			level: 25,
		},
	},
	clefable: {
		id: 62,
		key: 'clefable',
		name: ['clefable', 'clefable', 'Mélodelfe', 'clefable', 'clefable', 'Pixi', 'ピクシー', '픽시', '皮可西'],
		color: '#fe8dad',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clefable.png',
			image: './src/assets/images/pokemon/towers/clefable-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	anorith: {
		id: 63,
		key: 'anorith',
		name: ['anorith', 'anorith', 'Anorith', 'anorith', 'anorith', 'anorith', 'アノプス', '아노딥스', '始祖小獸'],
		color: '#47676f',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/anorith.png',
			image: './src/assets/images/pokemon/towers/anorith-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2,
		},
		critical: {
			base: 25,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
		evolution: {
			pokemon: 'armaldo',
			level: 40,
		},
	},
	armaldo: {
		id: 63,
		key: 'armaldo',
		name: ['armaldo', 'armaldo', 'Armaldo', 'armaldo', 'armaldo', 'armaldo', 'アーマルド', '아말도', '甲冑龍'],
		color: '#1f9fe7',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/armaldo.png',
			image: './src/assets/images/pokemon/towers/armaldo-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -7
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 50,
			scale: 0.2
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	lileep: {
		id: 64,
		key: 'lileep',
		name: ['lileep', 'lileep', 'Lilia', 'lileep', 'lileep', 'liliep', 'リリーラ', '릴링', '始祖小草'],
		color: '#c697de',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lileep.png',
			image: './src/assets/images/pokemon/towers/lileep-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cradily',
			level: 40,
		},
	},
	cradily: {
		id: 64,
		key: 'cradily',
		name: ['cradily', 'cradily', 'Vacilys', 'cradily', 'cradily', 'wielie', 'ユレイドル', '릴리요', '始祖大草'],
		color: '#a75e67',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cradily.png',
			image: './src/assets/images/pokemon/towers/cradily-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -4
		},
		power: {
			base: 55,
			scale: 3.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	shieldon: {
		id: 65,
		key: 'shieldon',
		name: ['shieldon', 'shieldon', 'Dinoclier', 'shieldon', 'shieldon', 'schilterus', 'タテトプス', '방패톱스', '盾甲龍'],
		color: '#efbe36',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shieldon.png',
			image: './src/assets/images/pokemon/towers/shieldon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -10
		},
		power: {
			base: 50,
			scale: 5,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bastiodon',
			level: 30,
		},
	},
	bastiodon: {
		id: 65,
		key: 'bastiodon',
		name: ['bastiodon', 'bastiodon', 'Bastiodon', 'bastiodon', 'bastiodon', 'bollterus', 'トリデプス', '바리톱스', '盔甲龍王'],
		color: '#c7971f',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/bastiodon.png',
			image: './src/assets/images/pokemon/towers/bastiodon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 8000,
			scale: -15
		},
		power: {
			base: 300,
			scale: 15,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	cranidos: {
		id: 66,
		key: 'cranidos',
		name: ['cranidos', 'cranidos', 'Kranidos', 'cranidos', 'cranidos', 'koknodon', 'ズガイドス', '두개도스', '頭蓋獸'],
		color: '#1f9fe7',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cranidos.png',
			image: './src/assets/images/pokemon/towers/cranidos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 10,
			scale: 5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'rampardos',
			level: 30,
		},
	},
	rampardos: {
		id: 66,
		key: 'rampardos',
		name: ['rampardos', 'rampardos', 'Charkos', 'rampardos', 'rampardos', 'rameidon', 'ラムパルド', '램펄드', '頭蓋巨獸'],
		color: '#d72701',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/rampardos.png',
			image: './src/assets/images/pokemon/towers/rampardos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -7
		},
		power: {
			base: 50,
			scale: 12.4,
		},
		critical: {
			base: 5,
			scale: 0.15
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	starly: {
		id: 67,
		key: 'starly',
		name: ['starly', 'starly', 'Étourmi', 'starly', 'starly', 'staralili', 'ムックル', '찌르꼬', '小星雀'],
		color: '#7e6f6e',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/starly.png',
			image: './src/assets/images/pokemon/towers/starly-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 175,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staravia',
			level: 14,
		},
	},
	staravia: {
		id: 67,
		key: 'staravia',
		name: ['staravia', 'staravia', 'Étourvol', 'staravia', 'staravia', 'staravia', 'ムクバード', '찌르버드', '星羽鳥'],
		color: '#b7bfc7',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staravia.png',
			image: './src/assets/images/pokemon/towers/staravia-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 210,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staraptor',
			level: 31,
		},
	},
	staraptor: {
		id: 67,
		key: 'staraptor',
		name: ['staraptor', 'staraptor', 'Étouraptor', 'staraptor', 'staraptor', 'staraptor', 'ムクホーク', '찌르호크', '蓮蓬鳥'],
		color: '#df6c56',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staraptor.png',
			image: './src/assets/images/pokemon/towers/staraptor-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3
		},
		power: {
			base: 45,
			scale: 2.2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	abra: {
		id: 68,
		key: 'abra',
		name: ['abra', 'abra', 'Abra', 'abra', 'abra', 'abra', 'ケーシィ', '캐이시', '凱西'],
		color: '#deb500',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/abra.png',
			image: './src/assets/images/pokemon/towers/abra-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 850,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'kadabra',
			level: 16,
		},
	},
	kadabra: {
		id: 68,
		key: 'kadabra',
		name: ['kadabra', 'kadabra', 'Kadabra', 'kadabra', 'kadabra', 'kadabra', 'ユンゲラー', '윤겔라', '勇基拉'],
		color: '#a55a19',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kadabra.png',
			image: './src/assets/images/pokemon/towers/kadabra-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 800,
			scale: 0
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'alakazam',
			level: 50,
		},
	},
	alakazam: {
		id: 68,
		key: 'alakazam',
		name: ['alakazam', 'alakazam', 'Alakazam', 'alakazam', 'alakazam', 'simsala', 'フーディン', '후딘', '胡地'],
		color: '#dfb401',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/alakazam.png',
			image: './src/assets/images/pokemon/towers/alakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700,
			scale: 0
		},
		power: {
			base: 30,
			scale: 4,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	gastly: {
		id: 69,
		key: 'gastly',
		name: ['gastly', 'gastly', 'Fantominus', 'gastly', 'gastly', 'nebulak', 'ゴース', '고오스', '鬼斯'],
		color: '#b595de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gastly.png',
			image: './src/assets/images/pokemon/towers/gastly-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'haunter',
			level: 25,
		},
	},
	haunter: {
		id: 69,
		key: 'haunter',
		name: ['haunter', 'haunter', 'Spectrum', 'haunter', 'haunter', 'alpollo', 'ゴースト', '고우스트', '鬼斯通'],
		color: '#8c62bc',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/haunter.png',
			image: './src/assets/images/pokemon/towers/haunter-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -4
		},
		power: {
			base: 30,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'gengar',
			level: 50,
		},
	},
	gengar: {
		id: 69,
		key: 'gengar',
		name: ['gengar', 'gengar', 'Ectoplasma', 'gengar', 'gengar', 'gengar', 'ゲンガー', '팬텀', '耿鬼'],
		color: '#b494de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gengar.png',
			image: './src/assets/images/pokemon/towers/gengar-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -8
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
	},
	ditto: {
		id: 70,
		key: 'ditto',
		name: ['ditto', 'ditto', 'Métamorph', 'ditto', 'ditto', 'ditto', 'メタモン', '메타몽', '變隻'],
		color: '#d794de',
		ability: abilityData['transform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ditto.png',
			image: './src/assets/images/pokemon/towers/ditto-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'veryHigh',
		tiles: [1, 2],
	},
	magikarp: {
		id: 71,
		key: 'magikarp',
		name: ['Magikarp', 'Magikarp', 'Magicarpe', 'Magikarp', 'Magikarp', 'Karpador', 'コイキング', '잉어킹', '鲤鱼王'],
		color: '#d63801',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/magikarp.png',
			image: './src/assets/images/pokemon/towers/magikarp-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 1,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 210,
			scale: 0,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
		evolution: {
			pokemon: 'gyarados',
			level: 20,
		},
	},
	gyarados: {
		id: 71,
		key: 'gyarados',
		name: ['Gyarados', 'Gyarados', 'Léviator', 'Gyarados', 'Gyarados', 'Garados', 'ギャラドス', '갸라도스', '暴鲤龙'],
		color: '#189ce7',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gyarados.png',
			image: './src/assets/images/pokemon/towers/gyarados-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3920,
			scale: -2
		},
		power: {
			base: 50,
			scale: 21.8,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 230,
			scale: 0.4,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
	},
	pikachu: {
		id: 72,
		key: 'pikachu',
		name: ['Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'ピカチュウ', '피카츄', '皮卡丘'],
		color: '#fef800',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pikachu.png',
			image: './src/assets/images/pokemon/towers/pikachu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1450,
			scale: -2
		},
		power: {
			base: 8,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'raichu',
			level: 30,
		},
	},
	raichu: {
		id: 72,
		key: 'raichu',
		name: ['Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'ライチュウ', '라이츄', '雷丘'],
		color: '#ff9443',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/raichu.png',
			image: './src/assets/images/pokemon/towers/raichu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1245,
			scale: -4.7
		},
		power: {
			base: 45,
			scale: 2.6,
		},
		critical: {
			base: 10,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	fuecoco: {
		id: 73,
		key: 'fuecoco',
		name: ['Fuecoco', 'Fuecoco', 'Chochodile', 'Fuecoco', 'Fuecoco', 'Fuecoco', 'フエココ', '뜨아거', '呆火鳄'],
		color: '#b81000',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/fuecoco.png',
			image: './src/assets/images/pokemon/towers/fuecoco-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3220,
			scale: -2
		},
		power: {
			base: 10,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'crocalor',
			level: 16,
		},	
	},
	crocalor: {
		id: 73,
		key: 'crocalor',
		name: ['Crocalor', 'Crocalor', 'Crocogril', 'Crocalor', 'Crocalor', 'Crocalor', 'クロカロール', '악뜨거', '炙烫鳄'],
		color: '#de3b2e',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/crocalor.png',
			image: './src/assets/images/pokemon/towers/crocalor-idle.png',
			frames: 2,
			hold: 7
		},
		speed: {
			base: 3150,
			scale: -3
		},
		power: {
			base: 20,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'skeledirge',
			level: 36,
		},	
	},
	skeledirge: {
		id: 73,
		key: 'skeledirge',
		name: ['Skeledirge', 'Skeledirge', 'Flâmigator', 'Skeledirge', 'Skeledirge', 'Skeledirge', 'スケルディルガ', '라우드본', '骨纹巨声鳄'],
		color: '#d74e40',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/skeledirge.png',
			image: './src/assets/images/pokemon/towers/skeledirge-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2810,
			scale: -4
		},
		power: {
			base: 35,
			scale: 7.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	larvesta: {
		id: 74,
		key: 'larvesta',
		name: ['Larvesta', 'Larvesta', 'Pyronille', 'Larvesta', 'Larvesta', 'Ignivor', 'モノズ', '모노즈', '燃烧虫'],
		color: '#df9d00',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/larvesta.png',
			image: './src/assets/images/pokemon/towers/larvesta-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 4150,
			scale: -27
		},
		power: {
			base: 5,
			scale: 1.1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
		evolution: {
			pokemon: 'volcarona',
			level: 59,
		}
	},
	volcarona: {
		id: 74,
		key: 'volcarona',
		name: ['Volcarona', 'Volcarona', 'Pyrax', 'Volcarona', 'Volcarona', 'Ramoth', 'ウルガモス', '불카모스', '火神蛾'],
		color: '#e32929',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/volcarona.png',
			image: './src/assets/images/pokemon/towers/volcarona-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 4150,
			scale: -27
		},
		power: {
			base: 25,
			scale: 2.2,
		},
		critical: {
			base: 8,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	cherubi: {
		id: 75,
		key: 'cherubi',
		name: ['Cherubi', 'Cherubi', 'Ceribou', 'Cherubi', 'Cherubi', 'Cherubi', 'チェリンボ', '체리버', '樱花宝'],
		color: '#fc5492',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cherubi.png',
			image: './src/assets/images/pokemon/towers/cherubi-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'cherrim',
			level: 25,
		},
	},
	cherrim: {
		id: 75,
		key: 'cherrim',
		name: ['Cherrim', 'Cherrim', 'Ceriflor', 'Cherrim', 'Cherrim', 'Cherrim', 'チェリム', '체리꼬', '樱花儿'],
		color: '#9e5fc6',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cherrim1.png',
			image: './src/assets/images/pokemon/towers/cherrim1-idle.png',
			transform: './src/assets/images/pokemon/towers/cherrim2-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -8
		},
		power: {
			base: 40,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	rockruff: {
		id: 76,
		key: 'rockruff',
		name: ['Rockruff', 'Rockruff', 'Rocabot', 'Rockruff', 'Rockruff', 'Rockruff', 'イワンコ', '암멍이', '岩狗狗'],
		color: '#ab6a5a',
		ability: abilityData['toughClaws'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/rockruff.png',
			image: './src/assets/images/pokemon/towers/rockruff-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'lycanrocDay',
			level: 25,
		},
	},
	lycanrocDay: {
		id: 76,
		key: 'lycanrocDay',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人'],
		color: '#a17e6f',
		ability: abilityData['toughClawsDay'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lycanroc1.png',
			image: './src/assets/images/pokemon/towers/lycanroc1-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 20,
			scale: 9.8,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	lycanrocNight: {
		id: 76,
		key: 'lycanrocNight',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人'],
		color: '#c42f00',
		ability: abilityData['toughClawsNight'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lycanroc2.png',
			image: './src/assets/images/pokemon/towers/lycanroc2-idle.png',
			frames: 2,
			hold: 30
		},
		speed: {
			base: 2000,
			scale: -15
		},
		power: {
			base: 20,
			scale: 4.8,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 105,
			scale: 0.05,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	pawniard: {
		id: 77,
		key: 'pawniard',
		name: ['Pawniard', 'Pawniard', 'Scalpion', 'Pawniard', 'Pawniard', 'Gladiantri', 'コマタナ', '자망칼', '驹刀小兵'],
		color: '#ad4042',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pawniard.png',
			image: './src/assets/images/pokemon/towers/pawniard-idle.png',
			frames: 3,
			hold: 20
		},
		speed: {
			base: 3400,
			scale: -8
		},
		power: {
			base: 18,
			scale: 2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bisharp',
			level: 52,
		},
	},
	bisharp: {
		id: 77,
		key: 'bisharp',
		name: ['Bisharp', 'Bisharp', 'Scalproie', 'Bisharp', 'Bisharp', 'Caesurio', 'キリキザン', '절각참', '劈斩司令'],
		color: '#a13f2b',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/bisharp.png',
			image: './src/assets/images/pokemon/towers/bisharp-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3150,
			scale: -13
		},
		power: {
			base: 70,
			scale: 8.4,
		},
		critical: {
			base: 23,
			scale: 0.17
		},
		range: {
			base: 195,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandile: {
		id: 78,
		key: 'sandile',
		name: ['Sandile', 'Sandile', 'Mascaïman', 'Sandile', 'Sandile', 'Ganovil', 'メグロコ', '깜눈크', '黑眼鳄'],
		color: '#9c865b',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sandile.png',
			image: './src/assets/images/pokemon/towers/sandile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krokorok',
			level: 29,
		},
	},
	krokorok: {
		id: 78,
		key: 'krokorok',
		name: ['Krokorok', 'Krokorok', 'Escroco', 'Krokorok', 'Krokorok', 'Rokkaiman', 'ワルビル', '악비르', '混混鳄'],
		color: '#99673e',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/krokorok.png',
			image: './src/assets/images/pokemon/towers/krokorok-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 7,
			scale: 0.15
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krookodile',
			level: 40,
		},
	},
	krookodile: {
		id: 78,
		key: 'krookodile',
		name: ['Krookodile', 'Krookodile', 'Crocorible', 'Krookodile', 'Krookodile', 'Rabigator', 'ワルビアル', '악비아르', '流氓鳄'],
		color: '#954350',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/krookodile.png',
			image: './src/assets/images/pokemon/towers/krookodile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -4.5
		},
		power: {
			base: 50,
			scale: 8.5,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	wimpod: {
		id: 79,
		key: 'wimpod',
		name: ['Wimpod', 'Wimpod', 'Sovkipou', 'Wimpod', 'Wimpod', 'Reißlaus', 'コソクムシ', '꼬시레', '胆小虫'],
		color: '#a48ba7',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/wimpod.png',
			image: './src/assets/images/pokemon/towers/wimpod-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 20,
			scale: 3.6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'golisopod',
			level: 30,
		},
	},
	golisopod: {
		id: 79,
		key: 'golisopod',
		name: ['Golisopod', 'Golisopod', 'Sarmuraï', 'Golisopod', 'Golisopod', 'Tectass', 'グソクムシャ', '갑주무사', '具甲武者'],
		color: '#8855ab',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/golisopod.png',
			image: './src/assets/images/pokemon/towers/golisopod-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -4
		},
		power: {
			base: 45,
			scale: 8.3,
		},
		critical: {
			base: 0,
			scale: 0.12
		},
		range: {
			base: 95,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
	},
	honedge: {
		id: 80,
		key: 'honedge',
		name: ['Honedge', 'Honedge', 'Monorpale', 'Honedge', 'Honedge', 'Gramokles', 'ヒトツキ', '단칼빙', '独剑鞘'],
		color: '#2e7596',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/honedge.png',
			image: './src/assets/images/pokemon/towers/honedge-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'doublade',
			level: 35,
		},
	},
	doublade: {
		id: 80,
		key: 'doublade',
		name: ['Doublade', 'Doublade', 'Dimoclès', 'Doublade', 'Doublade', 'Duokles', 'ニダンギル', '쌍검킬', '双剑鞘'],
		color: '#af4a8d',
		ability: abilityData['armorBreakDoubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/doublade.png',
			image: './src/assets/images/pokemon/towers/doublade-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aegislash',
			level: 60,
		},
	},
	aegislash: {
		id: 80,
		key: 'aegislash',
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪'],
		color: '#967bd2',
		ability: abilityData['stanceChange'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/aegislashSword.png',
			image: './src/assets/images/pokemon/towers/aegislashSword-idle.png',
			shield: './src/assets/images/pokemon/towers/aegislashShield-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 50,
			scale: 5,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	sobble: {
		id: 81,
		key: 'sobble',
		name: ['Sobble', 'Sobble', 'Larméléon', 'Sobble', 'Sobble', 'Memmeon', 'メッソン', '울머기', '泪眼蜥'],
		color: '#84d4fd',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sobble.png',
			image: './src/assets/images/pokemon/towers/sobble-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -3
		},
		power: {
			base: 10,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 150,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'drizzile',
			level: 16,
		},	
	},
	drizzile: {
		id: 81,
		key: 'drizzile',
		name: ['Drizzile', 'Drizzile', 'Arrozard', 'Drizzile', 'Drizzile', 'Phlegleon', 'ジメレオン', '누겔레온', '变涩蜥'],
		color: '#a2cdec',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/drizzile.png',
			image: './src/assets/images/pokemon/towers/drizzile-idle.png',
			frames: 5,
			hold: 7
		},
		speed: {
			base: 4500,
			scale: -4
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 150,
			scale: 2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'inteleon',
			level: 36,
		},	
	},
	inteleon: {
		id: 81,
		key: 'inteleon',
		name: ['Inteleon', 'Inteleon', 'Lézargus', 'Inteleon', 'Inteleon', 'Intelleon', 'インテレオン', '인텔리레온', '千面避役'],
		color: '#216ea0',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/inteleon.png',
			image: './src/assets/images/pokemon/towers/inteleon-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -5
		},
		power: {
			base: 20,
			scale: 2.8,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 5,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	rowlet: {
		id: 82,
		key: 'rowlet',
		name: ['Rowlet', 'Rowlet', 'Brindibou', 'Rowlet', 'Rowlet', 'Bauz', 'モクロー', '나몰빼미', '木木枭'],
		color: '#c9703b',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/rowlet.png',
			image: './src/assets/images/pokemon/towers/rowlet-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 230,
			scale: 0.2,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'dartrix',
			level: 17,
		},	
	},
	dartrix: {
		id: 82,
		key: 'dartrix',
		name: ['Dartrix', 'Dartrix', 'Efflèche', 'Dartrix', 'Dartrix', 'Arboretoss', 'フクスロー', '빼미스로우', '投羽枭'],
		color: '#8be060',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dartrix.png',
			image: './src/assets/images/pokemon/towers/dartrix-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 850,
			scale: -2
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.12
		},
		range: {
			base: 230,
			scale: 0.5,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'decidueye',
			level: 34,
		},	
	},
	decidueye: {
		id: 82,
		key: 'decidueye',
		name: ['Decidueye', 'Decidueye', 'Archéduc', 'Decidueye', 'Decidueye', 'Silvarro', 'ジュナイパー', '모크나이퍼', '狙射树枭'],
		color: '#0b7f52',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/decidueye.png',
			image: './src/assets/images/pokemon/towers/decidueye-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 8,
			scale: 0.14
		},
		range: {
			base: 230,
			scale: 0.7,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	comfey: {
		id: 83,
		key: 'comfey',
		name: ['Comfey', 'Comfey', 'Guérilande', 'Comfey', 'Comfey', 'Curelei', 'キュワワー', '큐아링', '花疗环环'],
		color: '#a7af4e',
		ability: abilityData['triage'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/comfey.png',
			image: './src/assets/images/pokemon/towers/comfey-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 80,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2],
	},
	smeargle: {
		id: 84,
		key: 'smeargle',
		name: ['Smeargle', 'Smeargle', 'Queulorior', 'Smeargle', 'Smeargle', 'Farbeagle', 'ドーブル', '루브도', '图图犬'],
		color: '#c2c3b6',
		ability: abilityData['scheme'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/smeargle.png',
			image: './src/assets/images/pokemon/towers/smeargle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -30
		},
		power: {
			base: 5,
			scale: 3.45,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	cacnea: {
		id: 85,
		key: 'cacnea',
		name: ['Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Tuska', 'サボネア', '선인왕', '刺球仙人掌'],
		color: '#a4d276',
		ability: abilityData['doubleShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cacnea.png',
			image: './src/assets/images/pokemon/towers/cacnea-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -3
		},
		power: {
			base: 8,
			scale: 3.1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cacturne',
			level: 32,
		},
	},
	cacturne: {
		id: 85,
		key: 'cacturne',
		name: ['Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Noktuska', 'ノクタス', '다탱구', '梦歌仙人掌'],
		color: '#4ea51c',
		ability: abilityData['quadraShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cacturne.png',
			image: './src/assets/images/pokemon/towers/cacturne-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -6
		},
		power: {
			base: 25,
			scale: 3.9,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.6,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	greavard: {
		id: 86,
		key: 'greavard',
		name: ['Greavard', 'Greavard', 'Toutombe', 'Greavard', 'Greavard', 'Gruff', 'ボチ', '망망이', '墓仔狗'],
		color: '#aabacb',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/greavard.png',
			image: './src/assets/images/pokemon/towers/greavard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 16,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'houndstone',
			level: 30,
		},
	},
	houndstone: {
		id: 86,
		key: 'houndstone',
		name: ['Houndstone', 'Houndstone', 'Tomberro', 'Houndstone', 'Houndstone', 'Friedwuff', 'ハカドッグ', '묘두기', '墓扬犬'],
		color: '#7c759f',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/houndstone.png',
			image: './src/assets/images/pokemon/towers/houndstone-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3200,
			scale: -8
		},
		power: {
			base: 60,
			scale: 5.65,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	stakataka: {
		id: 87,
		key: 'stakataka',
		name: ['Stakataka', 'Stakataka', 'Ama-Ama', 'Stakataka', 'Stakataka', 'Muramura', 'ストリンダー', '스트린더', '垒磊石'],
		color: '#5fa8b5',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/stakataka.png',
			image: './src/assets/images/pokemon/towers/stakataka-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -15
		},
		power: {
			base: 200,
			scale: 33,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 180,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	luvdisc: {
		id: 88,
		key: 'luvdisc',
		name: ['Luvdisc', 'Luvdisc', 'Lovdisc', 'Luvdisc', 'Luvdisc', 'Liebiskus', 'ラブカス', '러브카스', '爱心鱼'],
		color: '#fe8faf',
		ability: abilityData['heal'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/luvdisc.png',
			image: './src/assets/images/pokemon/towers/luvdisc-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 710,
			scale: -0.9
		},
		power: {
			base: 5,
			scale: 3.28,
		},
		critical: {
			base: 3.3,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	chatot: {
		id: 89,
		key: 'chatot',
		name: ['Chatot', 'Chatot', 'Pijako', 'Chatot', 'Chatot', 'Plaudagei', 'ペラップ', '페라페', '聒噪鸟'],
		color: '#dfb701',
		ability: abilityData['chatter'],
		projectileSound: 'chatot',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/chatot.png',
			image: './src/assets/images/pokemon/towers/chatot-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 4710,
			scale: -3
		},
		power: {
			base: 21,
			scale: 4.2,
		},
		critical: {
			base: 4.4,
			scale: 0
		},
		range: {
			base: 101,
			scale: 3.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	carvanha: {
		id: 90,
		key: 'carvanha',
		name: ['Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Kanivanha', 'キバニア', '샤프니아', '利牙鱼'],
		color: '#fe865f',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/carvanha.png',
			image: './src/assets/images/pokemon/towers/carvanha-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -1
		},
		power: {
			base: 7,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 125,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'sharpedo',
			level: 30,
		},
	},
	sharpedo: {
		id: 90,
		key: 'sharpedo',
		name: ['Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Tohaido', 'サメハダー', '샤크니아', '巨牙鲨'],
		color: '#6687ae',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sharpedo.png',
			image: './src/assets/images/pokemon/towers/sharpedo-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -2
		},
		power: {
			base: 55,
			scale: 11.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 135,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
}

export const eggListData = [
	'charmander', 'treecko', 'froaki', 

	'natu', 'spoink', 'murkrow',
	'voltorb', 'machop', 'mankey', 'chimchar', 
	'yamask', 'cryogonal', 'sableye', 'meowth', 'tangela', 'chikorita', 
	'spinarak', 'shroomish', 'barboach', 'drudiggon', 'remoraid', 'clauncher', 
	'seel', 'staryu', 'psyduck', 'gulpin', 'lapras', 
	'ferroseed', 'shuckle', 'maractus', 'sunkern', 'aron', 'hawlucha', 
	'cubone', 'binacle', 'absol', 'oshawott', 'sandshrew', 'sneasel', 
	'trapinch', 'pidgey', 'noibat', 'riolu', 'mareep', 'surskit', 
	'cottonee', 'petilil', 'hoppip', 'drilbur', 'ekans',
	'girafarig', 'torkoal', 'spinda', 'dunsparce', 'ralts', 'koffing', 
	'farfetchd', 'omanyte', 'kabuto', 'corsola', 
	'castform', 'clefairy', 'anorith', 'lileep', 'shieldon', 'cranidos', 
	'starly', 'abra', 'gastly', 'ditto', 

	'magikarp', 'pikachu', 'fuecoco', 'larvesta', 'cherubi',
	'rockruff', 'pawniard', 'sandile', 'wimpod', 'honedge', 
	'sobble', 'rowlet', 'comfey', 'smeargle', 'carvanha', 
]

export const eggListDataUpdate = [
	'magikarp', 'pikachu', 'fuecoco', 'larvesta', 'cherubi',
	'rockruff', 'pawniard', 'sandile', 'wimpod', 'honedge', 
	'sobble', 'rowlet', 'comfey', 'smeargle', 'carvanha', 
]

export const pokemonDataById = {};
for (const key in pokemonData) {
    const specie = pokemonData[key];
    pokemonDataById[specie.id] = specie;
}