export const itemData = {
	ringTarget: {
		id: 'ringTarget',
		name: ['Ring Target', 'Blanco', 'Point de Mire', 'Alvo', 'Facilsaglio', 'Zielscheibe', 'ねらいのまと', '겨냥표적', '目標環'],
		sprite: './src/assets/images/items/ring-target.png',
		price: 1,
		description: [
			'Allows Spinda to choose attack target.',
			'Permite que Spinda elija el objetivo del ataque.',
			'Permet à Spinda de choisir la cible d’attaque.',
			'Permite que Spinda escolha o alvo do ataque.',
			"Permette a Spinda di scegliere il bersaglio dell'attacco.",
			'Ermöglicht es Pandir, das Angriffsziel zu wählen.',
			'パッチールは攻撃対象を選択できる。',
			'얼루기는 공격 대상을 선택할 수 있다。',
			'使晃晃斑可以選擇攻擊目標。'
		],
		restriction: {
			id: [53]
		}
	},
	protein: { 
		id: 'protein',
		name: [
			"Protein",
			"Proteína",
			"Protéine",
			"Proteína",
			"Proteina",
			"Protein",
			"プロテイン",
			"타우린",
			"蛋白質"
		],
		sprite: './src/assets/images/items/protein.png',
		price: 9800,
		description: [
			"The holder deals +10 damage.",
			"El portador del objeto causa +10 de daño.",
			"Le porteur inflige +10 de dégâts.",
			"O portador causa +10 de dano.",
			"Il portatore infligge +10 danni.",
			"Der Träger verursacht +10 Schaden.",
			"持たせたポケモンのダメージが+10される。",
			"소지자는 피해를 +10만큼 더 줍니다.",
			"持有者造成 +10 傷害。"
		],
		restriction: {
			idForbidden: [19, 70, 83]
		},
	},
	carbos: { 
		id: 'carbos',
		name: [
			"Carbos",
			"Carburante",
			"Carbone",
			"Carbos",
			"Carbos",
			"Carbos",
			"カルボス",
			"알칼로이드",
			"速度強化劑"
		],
		sprite: './src/assets/images/items/carbos.png',
		price: 9800,
		description: [
			"Reduces recharge speed by 15%.",
			"Reduce la velocidad de recarga en un 15%.",
			"Réduit la vitesse de récupération de 15 %.",
			"Reduz a velocidade de recarga em 15%.",
			"Riduce la velocità di ricarica del 15%.",
			"Verringert die Wiederaufladegeschwindigkeit um 15%.",
			"リチャージ速度が15%低下する。",
			"재충전 속도가 15% 감소합니다.",
			"充能速度降低 15%。"
		],
		restriction: {
			idForbidden: [19, 70, 83]
		},
	},
	lifeOrb: {
		id: 'lifeOrb',
		name: [
			"Life Orb",
			"Orbe vital",
			"Orbe Vie",
			"Orbe da Vida",
			"Globo Vita",
			"Lebensorb",
			"いのちのたま",
			"생명의 구슬",
			"生命寶珠"
		],
		sprite: './src/assets/images/items/life-orb.png',
		price: 15000,
		description: [
			"Attacks no longer restore hearts. The holder gains +50% damage and -50% recharge time. Only Pokémon that restore hearts can hold it.",
			"Los ataques ya no restauran corazones. El portador gana +50% de daño y -50% de tiempo de recarga. Solo pueden llevarlo Pokémon que restauren corazones.",
			"Les attaques ne restaurent plus les cœurs. Le porteur gagne +50 % de dégâts et -50 % de temps de récupération. Seuls les Pokémon qui restaurent des cœurs peuvent le tenir.",
			"Os ataques não restauram mais corações. O portador ganha +50% de dano e -50% de tempo de recarga. Apenas Pokémon que restauram corações podem segurá-lo.",
			"Gli attacchi non ripristinano più i cuori. Il portatore ottiene +50% di danno e -50% di tempo di ricarica. Solo i Pokémon che ripristinano i cuori possono tenerlo.",
			"Angriffe stellen keine Herzen mehr wieder her. Der Träger erhält +50 % Schaden und -50 % Wiederaufladezeit. Nur Pokémon, die Herzen wiederherstellen, können es tragen.",
			"攻撃はもうハートを回復しません。持ち主はダメージ+50％、再充電時間-50％になります。ハートを回復するポケモンのみ装備可能です。",
			"공격은 더 이상 하트를 회복하지 않습니다. 장착자는 피해 +50% 및 재충전 시간 -50%를 얻습니다. 하트를 회복하는 포켓몬만 장착할 수 있습니다.",
			"攻擊不再回復愛心。持有者獲得 +50% 傷害並且充能時間 -50%。只有能回復愛心的寶可夢才能攜帶。"
		],
		restriction: {
			id: [21, 23, 27, 88]
		}
	},
	lightClay: {
		id: 'lightClay',
		name: ['Light Clay', 'Refleluz', 'Lumargile', 'Argila Luminosa', 'Creta Luce', 'Lichtlehm', 'ひかりのねんど', '빛의점토', '光之黏土'],
		sprite: './src/assets/images/items/light-clay.png',
		price: 20000,
		description: [
			"Increases the duration of stuns and slows by 10%.",
			"Incrementa la duración de los aturdimientos y ralentizaciones un 10%.",
			"Augmente la durée des étourdissements et des ralentissements de 10 %.",
			"Aumenta a duração de atordoamentos e lentidões em 10%.",
			"Aumenta la durata degli stordimenti e dei rallentamenti del 10%.",
			"Erhöht die Dauer von Betäubungen und Verlangsamungen um 10 %.",
			"スタンとスローの持続時間が10％増加します。",
			"기절 및 느려짐 지속 시간이 10% 증가합니다.",
			"暈眩與減速效果的持續時間增加 10%。"
		],
		restriction: {
			id: [54, 60, 20, 28, 42, 49, 5, 13, 15, 33, 34, 72, 80]
		}
	},
	twistedSpoon: {
		id: 'twistedSpoon',
		name: ['Twisted Spoon', 'Cuchara Torcida', 'Cuillère Tordue', 'Colher Torta', 'Cucchiaio Torto', 'Krummöffel', 'まがったスプーン', '휘어진스푼', '彎曲的湯匙'],
		sprite: './src/assets/images/items/twisted-spoon.png',
		price: 20000,
		description: [
			"The Pokémon focuses on teleporting in place, at the cost of reducing stacking damage by 75%. Can only be held by Abra, Kadabra, or Alakazam.",
			"El Pokémon se enfoca en teletransportarse en el lugar, a costa de reducir el daño por acumulación en un 75%. Solo puede ser llevado por Abra, Kadabra o Alakazam.",
			"Le porteur se concentre sur la téléportation sur place, au prix d'une réduction de 75 % des dégâts par Cuillère Tordue. Ne peut être tenue que par Abra, Kadabra ou Alakazam.",
			"O Pokémon foca-se em teletransportar-se no lugar, ao custo de reduzir o dano por acumulação em 75%. Só pode ser segurado por Abra, Kadabra ou Alakazam.",
			"Il Pokémon si concentra nel teletrasportarsi sul posto, a costo di ridurre del 75% il danno da accumulo. Può essere tenuto solo da Abra, Kadabra o Alakazam.",
			"Das Pokémon konzentriert sich darauf, sich an Ort und Stelle zu teleportieren, auf Kosten einer 75%igen Reduzierung des Schadens pro Stapel. Kann nur von Abra, Kadabra oder Simala getragen werden.",
			"このポケモンはその場でテレポートすることに専念するが、その代償として累積ダメージが75%減少する。持てるのはケーシィ、ユンゲラー、フーディンのみ。",
			"이 포켓몬은 제자리에서 텔레포트하는 데 집중하지만, 그 대가로 누적 피해가 75% 감소한다. 이 아이템은 캐이시, 윤겔라 또는 후딘만 지닐 수 있다.",
			"寶可夢專注於原地瞬間移動，但代價是累積傷害降低 75%。僅限凱西、勇基拉或胡地可攜帶。"
		],
		restriction: {
			id: [68]
		}
	},
	clefairyDoll: { 
		id: 'clefairyDoll',
		name: [
			"Clefairy Doll",
			"Muñeca de Clefairy",
			"Poupée Mélofée",
			"Boneca Clefairy",
			"Bambola Clefairy",
			"Clefairy-Puppe",
			"ピッピの人形",
			"삐삐 인형",
			"皮皮玩偶"
		],
		sprite: './src/assets/images/items/poke-doll.png',
		price: 25000,
		description: [
			"Restores 1 heart after dealing 25,000 damage, can only be held by Clefairy or Clefable.",
			"Restaura 1 corazón tras causar 25.000 de daño, solo puede ser llevado por Clefairy o Clefable.",
			"Restaure 1 cœur après avoir infligé 25 000 de dégâts, ne peut être tenu que par Mélofée ou Mélodelfe.",
			"Restaura 1 coração após causar 25.000 de dano, só pode ser segurado por Clefairy ou Clefable.",
			"Ripristina 1 cuore dopo aver inflitto 25.000 danni, può essere tenuto solo da Clefairy o Clefable.",
			"Stellt 1 Herz wieder her, nachdem 25.000 Schaden verursacht wurden. Kann nur von Piepi oder Pixi getragen werden.",
			"25,000ダメージを与えた後、ハートを1つ回復する。ピッピまたはピクシーのみが持てる。",
			"25,000의 피해를 입힌 후 하트 1개를 회복합니다. 이 아이템은 삐삐 또는 픽시만 지닐 수 있습니다.",
			"造成 25,000 傷害後回復 1 顆愛心，只能由皮皮或皮可西攜帶。"
		],
		restriction: {
			id: [62]
		}
	},
	amuletCoin: {
		id: 'amuletCoin',
		name: ['Amulet Coin', 'Moneda Amuleto', 'Pièce Rune', 'Moeda Amuleto', 'Moneta Amuleto', 'Münzamulett', 'おまもりこばん', '부적금화', '護符金幣'],
		sprite: './src/assets/images/items/amulet-coin.png',
		price: 25000,
		description: [
			"Attacks grant $ equivalent to 3% of the damage dealt in gold.",
			"Los ataques otorgan $ equivalente al 3% del oro del daño causado.",
			"Les attaques accordent des $ équivalents à 3 % des dégâts infligés en or.",
			"Os ataques concedem $ equivalente a 3% do dano causado em ouro.",
			"Gli attacchi concedono $ equivalente al 3% del danno inflitto in oro.",
			"Angriffe gewähren $ in Höhe von 3% des verursachten Schadens in Gold.",
			"攻撃は、与えたダメージの3％に相当するゴールドを付与します。",
			"공격은 입힌 피해의 3%에 해당하는 $를 부여합니다。",
			"攻击会给予相当于造成伤害的3%的金币。",
		],
		restriction: {
			attackType: 'single'
		}
	},
	fertiliser: { 
		id: 'fertiliser',
		name: [
			"Fertiliser",
			"Fertilizante",
			"Engrais",
			"Fertilizante",
			"Fertilizzante",
			"Dünger",
			"肥料",
			"비료",
			"肥料"
		],
		sprite: './src/assets/images/items/rich.png',
		price: 25000,
		description: [
			"Field terrain instead behaves as grass for the holder.",
			"El terreno de campo en su lugar se comporta como hierba para el portador.",
			"Le terrain de type champ se comporte comme de l'herbe pour le porteur.",
			"O terreno de campo passa a se comportar como grama para o portador.",
			"Il terreno di tipo campo si comporta invece come erba per il portatore.",
			"Feld-Gelände verhält sich stattdessen wie Gras-Gelände für den Träger.",
			"フィールドの地形は、持たせたポケモンにとって草地として扱われる。",
			"필드 지형이 소지한 포켓몬에게는 풀 지형처럼 작용합니다.",
			"對持有者而言，原本的場地地形會改為視作草地。"
		],
		restriction: {
			id: [1, 22, 26, 61, 76]
		}
	},
	heartScale: {
		id: 'heartScale',
		name: ["Heart Scale", "Escama Corazón", "Écaille Cœur", "Escama Coração", "Squama Cuore", "Herzschuppe", "ハートのウロコ", "하트비늘", "心之鱗片"],
		sprite: './src/assets/images/items/heart-scale.png',
		price: 50000,
		description: [
			"After recovering a heart, the Pokémon holding this item will have its recharge speed reduced by 50% for the rest of the wave.",
			"Tras recuperar un corazón, quien lleve este objeto verá reducida su velocidad de recarga un 50% por el resto de la oleada.",
			"Après avoir récupéré un cœur, le porteur verra sa vitesse de récupération réduite de 50 % pour le reste de la vague.",
			"Após recuperar um coração, o Pokémon que estiver segurando este item terá sua velocidade de recarga reduzida em 50% pelo resto da onda.",
			"Dopo aver recuperato un cuore, il Pokémon che tiene questo oggetto vedrà la sua velocità di ricarica ridotta del 50% per il resto dell'ondata.",
			"Nachdem ein Herz wiederhergestellt wurde, wird die Wiederaufladegeschwindigkeit des Pokémon, das diesen Gegenstand trägt, für den Rest der Welle um 50 % reduziert.",
			"ハートを回復した後、このアイテムを持っているポケモンはウェーブ終了まで再充電速度が50％低下します。",
			"하트를 회복한 후 이 아이템을 장착한 포켓몬은 웨이브가 끝날 때까지 재충전 속도가 50% 감소합니다.",
			"在回復 1 顆愛心後，持有此道具的寶可夢在該波次剩餘時間內，充能速度降低 50%。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		}
	},
	squirtBottle: { 
		id: 'squirtBottle',
		name: [
			"Squirt Bottle",
			"Botella pulverizadora",
			"Carapuce à O",
			"Garrafa pulverizadora",
			"Bottiglia a spruzzo",
			"Sprühflasche",
			"スプレーボトル",
			"꼬부기물뿌리개",
			"噴水瓶"
		],
		sprite: './src/assets/images/items/squirt-bottle.png',
		price: 50000,
		description: [
			"Field terrain instead behaves as water for the holder.",
			"El terreno de campo en su lugar se comporta como agua para el portador.",
			"Le terrain de type champ se comporte comme de l’eau pour le porteur.",
			"O terreno de campo passa a se comportar como água para o portador.",
			"Il terreno di tipo campo si comporta invece come acqua per il portatore.",
			"Feld-Gelände verhält sich stattdessen wie Wasser-Gelände für den Träger.",
			"フィールドの地形は、持たせたポケモンにとって水地形として扱われる。",
			"필드 지형이 소지한 포켓몬에게는 물 지형처럼 작용합니다.",
			"對持有者而言，原本的場地地形會改為視作水地形。"
		],
		restriction: {
			id: [32, 35, 48, 58, 61]
		}
	},
	wideLens: {
		id: 'wideLens',
		name: ['Wide Lens', 'Lupa', 'Loupe', 'Lente Ampla', 'Grandelente', 'Großlinse', 'こうかくレンズ', '광각렌즈', '廣角鏡'],
		sprite: './src/assets/images/items/wide-lens.png',
		price: 50000,
		description: [
			"Attack is 50% wider.",
			"El ataque es un 50% más ancho.",
			"L’attaque est 50% plus large.",
			"O ataque é 50% mais largo.",
			"L’attacco è più largo del 50%.",
			"Der Angriff ist 50% breiter.",
			"攻撃範囲が50％広くなる",
			"공격 범위가 50% 더 넓어집니다",
			"攻擊範圍增加 50%。"
		],
		restriction: {
			id: [10, 29, 34, 45, 54, 77, 15, 32, 81, 77, 85]
		}
	},
	choiceScarf: { 
		id: 'choiceScarf',
		name: ['Choice Scarf', 'Pañuelo Elegido', 'Mouchoir Choix', 'Lenço Escolha', 'Sciarpa Scelta', 'Wahlschal', 'こだわりスカーフ', '구애스카프', '拘束圍巾'],
		sprite: './src/assets/images/items/choice-scarf.png',
		price: 50000,
		description: [
			"Reduces the number of projectiles to one, but decreases recharge time by 20% for each lost projectile. Lileep and Cradily cannot hold this item.",
			"Reduce la cantidad de proyectiles a uno, pero disminuye el tiempo de recarga en 20% por cada proyectil perdido. Lileep y Cradily no pueden llevar este objeto.",
			"Réduit le nombre de projectiles à un, mais diminue le temps de récupération de 20 % pour chaque projectile perdu. Lilia et Vacylis ne peuvent pas tenir cet objet.",
			"Reduz o número de projéteis para um, mas diminui o tempo de recarga em 20% para cada projétil perdido. Lileep e Cradily não podem segurar este item.",
			"Riduce il numero di proiettili a uno, ma diminuisce il tempo di ricarica del 20% per ogni proiettile perso. Lileep e Cradily non possono tenere questo oggetto.",
			"Reduziert die Anzahl der Projektile auf eins, verringert jedoch die Wiederaufladezeit um 20 % für jedes verlorene Projektil. Liliep und Wielie können diesen Gegenstand nicht tragen.",
			"弾の数を1に減らすが、失った弾ごとに再装填時間が20%短くなる。リリーラとラクライはこのアイテムを持てない。",
			"투사체 수를 1로 줄이지만, 잃은 투사체마다 재장전 시간이 20% 감소합니다. 릴링와 릴리요는 이 아이템을 들 수 없습니다.",
			"將投射物數量減少為 1，但每失去 1 個投射物，充能時間就會縮短 20%。觸手百合與搖籃百合無法攜帶此道具。"
		],
		restriction: {
			id: [24, 37, 47, 51, 56, 59, 67, 75, 85]
		}
	},
	airBalloon: {
		id: 'airBalloon',
		name: ['Air Balloon', 'Globo Helio', 'Ballon', 'Balão de Ar', 'Palloncino', 'Luftballon', 'ふうせん', '풍선', '氣球'],
		sprite: './src/assets/images/items/air-balloon.png',
		price: 50000,
		description: [
			'This item allows Field/Grass-area Pokémon to be placed in Mountain terrain.', 
			'Este objeto permite colocar Pokémon de Campo/Hierba en terreno de Montaña.', 
			'Cet objet permet de placer des Pokémon de Champ/Herbes sur un terrain Montagne.', 
			'Este item permite que Pokémon de Campo/Relva sejam colocados em terreno de Montanha.', 
			'Questo strumento consente di posizionare Pokémon di Campo/Erba (area) su terreno Montagna.', 
			'Dieses Item ermöglicht es, Feld-/Gras-Gelände-Pokémon in Berg-Gelände platziert zu werden.', 
			'このアイテムを使うと、フィールド／草むらのポケモンを山の地形に配置できる。', 
			'이 아이템을 사용하면 필드/풀숲 지역 포켓몬을 산 지형에 배치할 수 있다.',
			'此道具可讓原本只能放置於場地／草地區域的寶可夢，改為配置在山地地形。'
		],
		restriction: {
			tileForbidden: [3, 4]
		}
	},
	oldRod: { 
		id: 'oldRod',
		name: [
			"Old Rod",
			"Caña Vieja",
			"Canne",
			"Vara Velha",
			"Vecchia Canna",
			"Alter Angel",
			"ボロのつりざお",
			"낡은 낚싯대",
			"破舊釣竿"
		],
		sprite: './src/assets/images/items/old-rod.png',
		price: 50000,
		description: [
			"Increases range by 60. Can only be held by Magikarp or Gyarados.",
			"Aumenta el alcance en 60. Solo puede ser llevado por Magikarp o Gyarados.",
			"Augmente la portée de 60. Ne peut être tenue que par Magicarpe ou Léviator.",
			"Aumenta o alcance em 60. Só pode ser segurado por Magikarp ou Gyarados.",
			"Aumenta la portata di 60. Può essere tenuto solo da Magikarp o Gyarados.",
			"Die Reichweite ist um 60 erhöht. Kann nur von Karpador oder Garados getragen werden.",
			"射程が60増加する。コイキングまたはギャラドスのみが持てる。",
			"사거리가 60 증가합니다. 잉어킹 또는 갸라도스만 이 아이템을 들 수 있습니다.",
			"射程增加 60。僅限鯉魚王或暴鯉龍攜帶。"
		],
		restriction: {
			id: [71]
		}
	},
	heatRock: {
		id: 'heatRock',
		name: [
			"Heat Rock",
			"Roca Calor",
			"Roche Chaude",
			"Rocha de Calor",
			"Roccia Solare",
			"Hitzestein",
			"ひでりのいし",
			"뜨거운바위",
			"熱岩"
		],
		sprite: './src/assets/images/items/heat-rock.png',
		price: 50000,
		description: [
			"Increases burn duration to 20 seconds. Can only be held by Torkoal.",
			"Aumenta la duración de la quemadura a 20 segundos. Solo puede ser llevado por Torkoal.",
			"Augmente la durée de brulure à 20 secondes. Ne peut être tenue que par Chartor.",
			"Aumenta a duração da queimadura para 20 segundos. Só pode ser segurado por Torkoal.",
			"Aumenta la durata della bruciatura a 20 secondi. Può essere tenuto solo da Torkoal.",
			"Erhöht die Dauer des Brandes auf 20 Sekunden. Kann nur von Qurtel getragen werden.",
			"やけどの持続時間が20秒になる。コータスのみが持てる。",
			"화상 지속 시간이 20초로 증가합니다. 코터스만 이 아이템을 들 수 있습니다.",
			"灼傷持續時間延長至 20 秒。僅限煤炭龜攜帶。"
		],
		restriction: {
			id: [52]
		}
	},
	dampMulch: { 
		id: 'dampMulch',
		name: [
			"Damp Mulch",
			"Mantillo Húmedo",
			"Fertihumide",
			"Cobertura Úmida",
			"Pacciamanto Umido",
			"Feuchtes Mulch",
			"しめりけのマルチ",
			"축축이비료",
			"濕潤覆蓋物"
		],
		sprite: './src/assets/images/items/damp.png',
		price: 50000,
		description: [
			"This item allows strictly Water Pokémon to be placed on Field.",
			"Este objeto permite colocar únicamente Pokémon de tipo Agua en el campo.",
			"Cet objet permet de placer uniquement des Pokémon de type Eau sur le terrain.",
			"Este item permite colocar apenas Pokémon do tipo Água no campo.",
			"Questo oggetto permette di piazzare solo Pokémon di tipo Acqua in campo.",
			"Dieses Item erlaubt es ausschließlich Wasser-Pokémon, auf Fel-Gelände gesetzt zu werden.",
			"このアイテムは、水タイプのポケモンのみをフィールドに出せる。",
			"이 아이템은 물타입 포켓몬만 필드에 배치할 수 있게 해줍니다.",
			"此道具只允許水屬性的寶可夢被放置在場地上。"
		],
		restriction: {
			tileForbidden: [1, 2, 4]
		}
	},
	softSand: { 
		id: 'softSand',
		name: [
			"Soft Sand",
			"Arena Fina",
			"Sable Doux",
			"Pudersand",
			"Sabbia Soffice",
			"Arena Fina",
			"やわらかいすな",
			"부드러운모래",
			"柔軟沙"
		],
		sprite: './src/assets/images/items/soft-sand.png',
		price: 50000,
		description: [
			"Increases damage dealt by 20%, but is reduced by 1% for each enemy hit. Only for area Pokémon.",
			"Aumenta el daño causado un 20%, pero se reduce un 1% por cada enemigo golpeado, solo para Pokémon de área.",
			"Augmente les dégâts infligés de 20 %, mais est réduit de 1 % pour chaque ennemi touché. Uniquement pour les Pokémon de zone.",
			"Aumenta o dano causado em 20%, mas é reduzido em 1% para cada inimigo atingido. Apenas para Pokémon de área.",
			"Aumenta il danno inflitto del 20%, ma viene ridotto dell'1% per ogni nemico colpito. Solo per Pokémon di area.",
			"Erhöht den verursachten Schaden um 20 %, wird jedoch um 1 % für jeden getroffenen Gegner reduziert. Nur für Flächen-Pokémon.",
			"与えるダメージが20%増加するが、攻撃した敵ごとに1%減少する。エリアポケモン専用。",
			"가하는 피해가 20% 증가하지만, 공격한 적마다 1% 감소합니다. 지역 포켓몬 전용.",
			"造成的傷害提高 20%，但每命中 1 名敵人便降低 1%。僅限範圍型寶可夢使用。"
		],
		restriction: {
			attackType: 'area'
		}
	},
	heavyDutyBoots: {
		id: 'heavyDutyBoots',
		name: ['Heavy-Duty Boots', 'Botas Gruesas', 'Grosses Bottes', 'Botas Grossas', 'Scarponi robusti', 'Plateauschuhe', 'あつぞこブーツ', '통굽부츠', '厚底靴'],
		sprite: './src/assets/images/items/heavy-duty-boots.png',
		price: 50000,
		description: [
			'This item allows strictly Field Pokémon to be placed on Grass.',
			'Este objeto permite que Pokémon exclusivamente de Campo sean colocados en Hierba.',
			'Cet objet permet uniquement aux Pokémon de Champ d’être placés sur l’Herbe.',
			'Este item permite que Pokémon estritamente de Campo sejam colocados em Relva.',
			'Questo oggetto permette esclusivamente ai Pokémon di Campo di essere posizionati sull’Erba.',
			'Dieses Item erlaubt ausschließlich Feld-Pokémon, auf Gras-Gelände platziert zu werden.',
			'このアイテムを持つと、フィールド専用のポケモンを草むらに配置できる。',
			'이 아이템을 사용하면 필드 전용 포켓몬을 풀 지역에 배치할 수 있다.',
			'此道具僅允許場地型寶可夢被放置於草地。'
		],
		restriction: {
			tileForbidden: [2, 3, 4]
		}
	},
	shieldBreakerBullet: { 
		id: 'shieldBreakerBullet',
		name: ['Shield Breaker Bullet', 'Bala Rompeescudos', 'Balle Perçante', 'Projétil Quebrador de Escudo', 'Proiettile Spaccascudo', 'Schildbrecher-Kugel', 'シールドブレイカーバレット', '실드 브레이커 탄환', '破盾子彈'],
		sprite: './src/assets/images/items/iron-ball.png',
		price: 50000,
		description: [
			"Deals double damage to armor, can only be held by Clauncher or Clawitzer. Increase recharge time by 2 seconds.",
			"Inflige el doble de daño a la armadura, solo puede ser sostenido por Clauncher o Clawitzer. Aumenta el tiempo de recarga en 2 segundos.",
			"Inflige le double de dégâts à l’armure, ne peut être tenu que par Flingouste ou Gamblast. Augmente le temps de récupération de 2 secondes.",
			"Causa o dobro de dano à armadura, só pode ser segurado por Clauncher ou Clawitzer. Aumenta o tempo de recarga em 2 segundos.",
			"Infligge il doppio dei danni all'armatura, può essere tenuto solo da Clauncher o Clawitzer. Aumenta il tempo di ricarica di 2 secondi.",
			"Verursacht doppelten Schaden an Rüstung, kann nur von Scampisto oder Wummer gehalten werden. Erhöht die Wiederaufladezeit um 2 Sekunden.",
			"アーマーに対して2倍のダメージを与え、ウデッポウまたはブロスターのみが装備可能です。再充電時間が2秒増加します。",
			"방어구에 두 배의 피해를 주며, 완철포 또는 블로스터만 장착할 수 있습니다. 재충전 시간이 2초 증가합니다.",
			"對護甲造成 2 倍傷害，僅限鐵臂槍蝦或鋼炮臂蝦攜帶。充能時間增加 2 秒。"
		],
		restriction: {
			id: [29]
		}
	},
	shellBell: { 
		id: 'shellBell', 
		name: ['Shell Bell', 'Cascabel Concha', 'Grelot Coque', 'Sino de Concha', 'Conchinella', 'Muschelglocke', 'かいがらのすず', '조개껍질방울', '貝殼鈴'],
		sprite: './src/assets/images/items/shell-bell.png',
		price: 50000,
		description: [
			"Once per round, restores 1 heart after dealing 50,000 damage.",
			"Una vez por ronda, regenera 1 corazón tras causar 50.000 de daño.",
			"Une fois par tour, restaure 1 cœur après avoir infligé 50 000 dégâts.",
			"Uma vez por rodada, regenera 1 coração após causar 50.000 de dano.",
			"Una volta per turno, rigenera 1 cuore dopo aver inflitto 50.000 danni.",
			"Stellt einmal pro Welle 1 Herz wieder her, nachdem 50.000 Schaden verursacht wurden.",
			"1ラウンドに1回、50,000ダメージを与えた後、ハートを1つ回復する。",
			"한 라운드에 한 번, 50,000의 피해를 입힌 후 하트 1개를 회복합니다.",
			"每回合一次，在造成 50,000 傷害後回復 1 顆愛心。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		},
	},
	stickyBarb: { 
		id: 'stickyBarb',
		name: [
			"Sticky Barb",
			"Pincho pegajoso",
			"Piquants",
			"Espinho pegajoso",
			"Aculeo appiccicoso",
			"Klebestachel",
			"スティッキーバーブ",
			"끈적끈적바늘",
			"黏黏刺"
		],
		sprite: './src/assets/images/items/sticky-barb.png',
		price: 50000,
		description: [
			"Increases damage by 15% to slowed or stunned enemies. Only for Pokémon that can be deployed in water.",
			"Aumenta un 15% el daño a enemigos sloweados o stuneados. Solo para Pokémon que puedan ser desplegados en agua.",
			"Augmente les dégâts de 15 % aux ennemis ralentis ou étourdis. Seulement pour les Pokémon pouvant être envoyés dans l'eau.",
			"Aumenta o dano em 15% aos inimigos lentos ou atordoados. Apenas para Pokémon que podem ser implantados na água.",
			"Aumenta del 15% il danno ai nemici rallentati o storditi. Solo per i Pokémon che possono essere schierati in acqua.",
			"Erhöht den Schaden um 15% an verlangsamten oder betäubten Gegnern. Nur für Pokémon, die im Wasser eingesetzt werden können.",
			"スローまたはスタン状態の敵に与えるダメージが15%増加する。水上に展開できるポケモンのみ。",
			"느려지거나 기절한 적에게 가하는 피해가 15% 증가합니다. 물에서 배치할 수 있는 포켓몬만 해당됩니다.",
			"對處於減速或暈眩狀態的敵人造成的傷害提高 15%。僅限可部署於水中的寶可夢。"
		],
		restriction: {
			tile: [3]
		}
	},
	starCandy: { 
		id: 'starCandy',
		name: ["Star Candy", "Caramelo Estrella", "Bonbon Étoile", "Doce Estrela", "Caramella Stella", "Sternbonbon", "スターキャンディ", "스타사탕공예", "星星糖果"],
		sprite: './src/assets/images/items/star-sweet.png',
		price: 50000,
		description: [
			"Gain 0.1 additional range every star, can only be held by Clefairy or Clefable.",
			"Gana 0.1 de alcance adicional por cada estrella, solo puede ser sostenido por Clefairy o Clefable.",
			"0,1 de portée supplémentaire par étoile, ne peut être tenue que par Mélofée ou Mélodelfe.",
			"Ganha 0,1 de alcance adicional por cada estrela, só pode ser segurado por Clefairy ou Clefable.",
			"Ottieni 0,1 di gittata aggiuntiva per ogni stella, può essere tenuto solo da Clefairy o Clefable.",
			"Erhält 0,1 zusätzliche Reichweite pro Stern, kann nur von Pipie oder Pixie getragen werden.",
			"星ごとに0.1の追加射程を得ることができ、ピッピまたはピクシーのみが装備可能です。",
			"별마다 0.1의 추가 사거리를 얻으며, 삐삐 또는 픽시만 장착할 수 있습니다.",
			"每獲得 1 顆星星，射程額外增加 0.1。僅限皮皮或皮可西攜帶。"
		],
		restriction: {
			id: [62]
		}
	},
	electirizer: { 
		id: 'electirizer',
		name: [
			"Electirizer",
			"Electrizador",
			"Électriseur",
			"Electrizer",
			"Elettrizzatore",
			"Elektro-Lader",
			"エレクトライザー",
			"에레키부스터",
			"電力增幅器"
		],
		sprite: './src/assets/images/items/electirizer.png',
		price: 50000,
		description: [
			"Deals 30% extra damage to stunned enemies. Only Pokémon that can cause stun can equip it.",
			"Hace 30% de daño extra a enemigos aturdidos. Solo pueden equiparlo Pokémon que causen aturdimiento.",
			"Inflige 30 % de dégâts supplémentaires aux ennemis étourdis. Seuls les Pokémon capables d'étourdir peuvent l'équiper.",
			"Causa 30% de dano extra a inimigos atordoados. Apenas Pokémon que podem causar atordoamento podem equipá-lo.",
			"Infligge il 30% di danno extra ai nemici storditi. Solo i Pokémon che possono causare stordimento possono equipaggiarlo.",
			"Verursacht 30% zusätzlichen Schaden an betäubten Gegnern. Nur Pokémon, die Betäubung verursachen können, können es tragen.",
			"スタン状態の敵に対して30%追加ダメージを与える。スタンを与えられるポケモンのみ装備可能。",
			"기절한 적에게 30% 추가 피해를 입힌다. 스턴을 일으킬 수 있는 포켓몬만 장착 가능.",
			"對陷入暈眩狀態的敵人造成額外 30% 傷害。僅限能造成暈眩的寶可夢裝備。"
		],
		restriction: {
			id: [5, 13, 15, 33, 34, 72]
		}
	},
	cellBattery: { 
		id: 'cellBattery',
		name: [
		    "Cell Battery",
		    "Batería Celular",
		    "Pile",
		    "Bateria Celular",
		    "Batteria Cellulare",
		    "Zellbatterie",
		    "セルバッテリー",
		    "충전지",
		    "電池組"
		],
		sprite: './src/assets/images/items/cell-battery.png',
		price: 50000,
		description: [
		  	"All attacks cause stun, but stun duration is reduced by 95%. Can only be held by Voltorb or Electrode.",
		  	"Todos los ataques causan aturdimiento, pero la duración del aturdimiento se reduce un 95%. Solo puede ser llevado por Voltorb o Electrode.",
		  	"Toutes les attaques étourdissent, mais la durée d'étourdissement est réduite de 95 %. Ne peut être tenue que par Voltorbe ou Électrode.",
		  	"Todos os ataques causam atordoamento, mas a duração do atordoamento é reduzida em 95%. Só pode ser segurado por Voltorb ou Electrode.",
		  	"Tutti gli attacchi provocano stordimento, ma la durata dello stordimento è ridotta del 95%. Può essere tenuto solo da Voltorb o Electrode.",
		  	"Alle Angriffe verursachen Betäubung, aber die Dauer der Betäubung wird um 95% reduziert. Kann nur von Voltobal oder Lektrobal getragen werden.",
		  	"すべての攻撃がスタンを与えるが、スタンの持続時間が95%短縮される。ビリリダマまたはマルマインのみが持てる。",
		  	"모든 공격이 스턴을 일으키지만, 스턴 지속시간이 95% 감소합니다. 찌리리공 또는 붐볼만 이 아이템을 지닐 수 있습니다.",
		  	"所有攻擊都會造成暈眩，但暈眩持續時間縮短 95%。僅限霹靂電球或頑皮雷彈攜帶。"
		],
		restriction: {
			id: [5]
		}
	},
	leek: {
		id: 'leek',
		name: ['Leek', 'Puerro', 'Poireau', 'Alho-poró', 'Porro', 'Lauch', 'ネギ', '대파', '大蔥'],
		sprite: './src/assets/images/items/leek.png',
		price: 50000,
		description: [
			"Doubles critical hit chance and critical damage, can only be held by Farfetch'd.",
			"Duplica la probabilidad de crítico y el daño crítico, solo puede ser sostenido por Farfetch'd.",
			"Double la chance de coup critique et les dégâts critiques, ne peut être tenu que par Canarticho.",
			"Duplica a chance de acerto crítico e o dano crítico, só pode ser segurado por Farfetch'd.",
			"Raddoppia la probabilità di colpo critico e il danno critico, può essere tenuto solo da Farfetch'd.",
			"Verdoppelt die Chance auf kritische Treffer und den kritischen Schaden, kann nur von Porenta gehalten werden.",
			"急所に当たる確率と急所ダメージが2倍になり、カモネギのみが装備可能です。",
			"치명타 확률과 치명타 피해가 2배가 되며, 파오리만 장착할 수 있습니다.",
			"暴擊率與暴擊傷害加倍，僅限大蔥鴨攜帶。"
		],
		restriction: { 
			id: [57]
		}
	},
	thickClub: {
		id: 'thickClub',
		name: ['Thick Club', 'Hueso Grueso', 'Masse Os', 'Osso Grosso', 'Ossospesso', 'Kampfknochen', 'ふといホネ', '굵은뼈', '粗骨頭'],
		sprite: './src/assets/images/items/thick-club.png',
		price: 75000,
		description: [
			'Increases damage dealt by 50%, can only be held by Cubone, Marowak, Lucario or Riolu.',
			'Aumenta el daño causado un 50%, solo puede llevarlo Cubone, Marowak, Lucario o Riolu.',
			'Augmente les dégâts infligés de 50 %, ne peut être portée que par Osselait, Ossatueur, Lucario ou Riolu.',
			'Aumenta o dano causado em 50%, só pode ser equipado por Cubone, Marowak, Lucario ou Riolu.',
			'Aumenta i danni inflitti del 50%, può essere indossato solo da Cubone, Marowak, Lucario o Riolu.',
			'Erhöht den verursachten Schaden um 50 %, kann nur von Tragosso, Knogga, Lucario oder Riolu getragen werden.',
			'与えるダメージが50%増加する。カラカラ、ガラガラ、ルカリオ、リオルのみが所持可能。',
			'입히는 데미지가 50% 증가한다. 탕구리, 텅구리, 루카리오 또는 리오르만 소지할 수 있습니다.',
			'造成的傷害提高 50%。仅限卡拉卡拉、嘎啦嘎啦、路卡利欧或利欧路持有。'
		],
		restriction: {
			id: [11, 45]
		}
	},
	lightBall: {
		id: 'lightBall',
		name: ["Light Ball","Bola luminosa","Balle Lumière","Bola luminosa","Palla luminosa","Lichtball","ライトボール","전기구슬","電氣球"],
		sprite: './src/assets/images/items/light-ball.png',
		price: 75000,
		description: [
			"Increases damage dealt by 50%, can only be held by Pikachu or Raichu.",
			"Aumenta el daño infligido en un 50%, solo puede ser llevado por Pikachu o Raichu.",
			"Augmente les dégâts infligés de 50 %, ne peut être tenue que par Pikachu ou Raichu.",
			"Aumenta o dano causado em 50%, só pode ser segurado por Pikachu ou Raichu.",
			"Aumenta il danno inflitto del 50%, può essere tenuto solo da Pikachu o Raichu.",
			"Erhöht den verursachten Schaden um 50%, kann nur von Pikachu oder Raichu getragen werden.",
			"与えるダメージが50%増加する。ピカチュウまたはライチュウにのみ持たせることができる。",
			"가하는 피해가 50% 증가하며, 피카츄 또는 라이츄만 지닐 수 있습니다.",
			"造成的傷害提高 50%，僅限皮卡丘或雷丘攜帶。"
		],
		restriction: {
			id: [72]
		}
	},
	nanabBerry: { 
		id: 'nanabBerry',
		name: [
			"Nanab Berry",
			"Baya Nanab",
			"Baie Nanab",
			"Baya Nanab",
			"Bacca Nanab",
			"Nanabbeere",
			"ナナのみ",
			"나나열매",
			"蕉香果"
		],
		sprite: './src/assets/images/items/nanab-berry.png',
		price: 75000,
		description: [
			"Deals 50% additional damage to armored enemies. Can only be held by Mankey or Primeape.",
			"Inflige un 50 % de daño adicional a enemigos con armadura. Solo puede ser sostenido por Mankey o Primeape.",
			"Inflige 50 % de dégâts supplémentaires aux ennemis avec armure. Ne peut être tenue que par Ferronsinge ou Collosinge .",
			"Causa 50% de dano adicional a inimigos com armadura. Só pode ser segurado por Mankey ou Primeape.",
			"Infligge il 50% di danno aggiuntivo ai nemici con armatura. Può essere tenuto solo da Mankey o Primeape.",
			"Fügt Gegnern mit Rüstung 50 % zusätzlichen Schaden zu. Kann nur von Menki oder Rasaff getragen werden.",
			"アーマーを持つ敵に対して追加で50％のダメージを与えます。ケーシィまたはユンゲラーのみが装備可能です。",
			"방어구가 있는 적에게 추가로 50% 피해를 줍니다. 망키 또는 성원숭만 장착할 수 있습니다.",
			"對有護甲的敵人造成額外 50% 傷害。僅限猴怪或火爆猴攜帶。"
		],
		restriction: {
			id: [8]
		}
	},
	bigRoot: {
		id: 'bigRoot',
		name: [
			'Big Root',
			'Raíz Grande',
			'Grosse Racine',
			'Raiz Grande',
			'Radice Grande',
			'Große Wurzel',
			'おおきなねっこ',
			'큰뿌리',
			'大根莖'
		],
		sprite: './src/assets/images/items/big-root.png',
		price: 80000,
		description: [
			'Doubles hearts restored.',
			'Duplica los corazones restaurados.',
			'Double les cœurs restaurés.',
			'Dobra os corações restaurados.',
			'Raddoppia i cuori ripristinati.',
			'Verdoppelt wiederhergestellte Herzen.',
			'回復するハートが2倍になる。',
			'회복되는 하트가 2배가 된다.',
			'回復的愛心數量加倍。'
		],
		restriction: {
			id: [21, 23, 27, 88]
		}
	},
	sprayduck: {
		id: 'sprayduck',
		name: [
			"Sprayduck",
			"Psydugadera",
			"Kwakarrosoir",
			"Sprayduck",
			"Sprayduck",
			"Enton-Kanne",
			"コダックじょうろ",
			"고라파덕물뿌리개",
			"可达鸭喷壶"
		],
		sprite: './src/assets/images/items/sprayduck.png',
		price: 100000,
		description: [
			"The projectiles explode in an area, causing half damage to nearby enemies. Can only be held by Psyduck or Golduck.",
			"Los proyectiles explotan en área, causando la mitad de daño a los enemigos cercanos. Solo puede ser llevado por Psyduck o Golduck.",
			"Les projectiles explosent en zone, infligeant la moitié des dégâts aux ennemis à proximité. Ne peut être tenu que par Psykokwak ou Akwakwak.",
			"Os projéteis explodem em área, causando metade do dano aos inimigos próximos. Só pode ser segurado por Psyduck ou Golduck.",
			"I proiettili esplodono in un'area, causando la metà del danno ai nemici vicini. Può essere tenuto solo da Psyduck o Golduck.",
			"Die Projektile explodieren in einem Bereich und verursachen die Hälfte des Schadens an nahen Gegnern. Kann nur von Enton oder Entoron getragen werden.",
			"弾が範囲で爆発し、周囲の敵に対してダメージの半分を与える。コダックまたはゴルダックのみが所持できる。",
			"투사체가 범위로 폭발하여 주변 적들에게 피해의 절반을 입힌다. 고라파덕 또는 골덕만 이 아이템을 지닐 수 있습니다.",
			"投射物会在范围内爆炸，对附近敌人造成一半伤害。仅可由可达鸭或哥达鸭携带。"
		],
		restriction: {
			id: [35]
		}
	},
	razorClaw: { 
		id: 'razorClaw',
		name: [
			"Razor Claw",
			"Garra Afilada",
			"Griffe Rasoir",
			"Garra Afiada",
			"Affilartigli",
			"Rasierkralle",
			"するどいツメ",
			"예리한손톱",
			"銳利之爪"
		],
		sprite: './src/assets/images/items/razor-claw.png',
		price: 100000,
		description: [
			"Critical hits slow the target for 0.2 seconds. Pokémon that apply any status effects cannot hold this item.",
			"Los críticos ralentizan al objetivo durante 0,2 segundos. No pueden llevarlo Pokémon que apliquen algún efecto de estado.",
			"Les coups critiques ralentissent la cible pendant 0,2 seconde. Les Pokémon qui appliquent des effets de statut ne peuvent pas tenir cet objet.",
			"Os golpes críticos desaceleram o alvo por 0,2 segundos. Pokémon que aplicam efeitos de estado não podem segurar este item.",
			"I colpi critici rallentano il bersaglio per 0,2 secondi. I Pokémon che applicano effetti di stato non possono tenere questo oggetto.",
			"Kritische Treffer verlangsamen das Ziel für 0,2 Sekunden. Pokémon, die Statusveränderungen verursachen, können diesen Gegenstand nicht tragen.",
			"クリティカルヒットは対象を0.2秒間スロー状態にする。状態異常を付与するポケモンはこのアイテムを持てない。",
			"치명타는 대상에게 0.2초 동안 둔화를 적용합니다. 상태 이상을 부여하는 포켓몬은 이 아이템을 장착할 수 없습니다.",
			"會心一擊會使目標減速 0.2 秒。可施加任何異常狀態的寶可夢無法攜帶此道具。"
		],
		restriction: {
			idForbidden: [0, 5, 6, 9, 10, 13, 14, 15, 16, 19, 20, 25, 28, 34, 42, 49, 51, 52, 54, 55, 56, 60, 64, 69, 70, 72, 80, 83, 86]
		}
	},
	spellTag: { 
		id: 'spellTag',
		name: [
			'Spell Tag',
			'Hechizo',
			'Rune Sort',
			'Talismã de Feitiço',
			'Spettrotarga',
			'Bannsticker',
			'のろいのおふだ',
			'저주의부적',
			'詛咒之符'
		],
		sprite: './src/assets/images/items/spell-tag.png',
		price: 100000,
		description: [
			'The holder deals 5% more damage for each status (Burned, Paralyzed, Slow, Poisoned) the target has.',
			'El portador hace un 5% más de daño por cada estado (Quemado, Paralizado, Lento, Envenenado) que tenga el objetivo.',
			'Le porteur inflige 5 % de dégâts supplémentaires pour chaque problème de staut (brulé, paralysé, ralenti, empoisonné) que possède la cible.',
			'O portador causa 5% a mais de dano para cada status (Queimado, Paralisado, Lento, Envenenado) que o alvo tiver.',
			'Il portatore infligge il 5% in più di danno per ogni stato (Bruciato, Paralizzato, Lento, Avvelenato) che il bersaglio ha.',
			'Der Träger verursacht 5 % mehr Schaden für jeden Zustand (Verbrannt, Gelähmt, Verlangsamt, Vergiftet), den das Ziel hat.',
			'持ち主は、対象が持っている状態（やけど、まひ、おそい、どく）ごとに5％多くダメージを与えます。',
			'소지자는 대상이 가진 상태(화상, 마비, 느림, 중독)마다 5% 더 많은 피해를 줍니다.',
			'目標每擁有一種狀態（灼傷、麻痺、緩速、中毒），攜帶者造成的傷害提高 5%。'
		],
		restriction: {
			idForbidden: [
				0, 9, 52, 14, 25, 56, 6, 13, 15, 33, 34, 5, 20, 28, 42, 49, 54, 60, 55, 70, 72, 19, 83
			]
		},
	},
	sharpBeak: {
		id: 'sharpBeak',
		name: [
			'Sharp Beak',
			'Pico Afilado',
			'Bec Pointu',
			'Bico Afiado',
			'Becco Affilato',
			'Scharfer Schnabel',
			'するどいくちばし',
			'예리한부리',
			'銳利鳥嘴'
		],
		sprite: './src/assets/images/items/sharp-beak.png',
		price: 100000,
		description: [
			'Increases damage based on how close the holder is to the target. Only activates on mountain.',
			'Aumenta el daño según la proximidad del portador al objetivo. Solo se activa en montaña.',
			'Augmente les dégâts en fonction de la proximité du porteur par rapport à la cible. Ne s\'active qu\'en montagne.',
			'Aumenta o dano com base na proximidade do portador ao alvo. Só é ativado na montanha.',
			'Aumenta il danno in base a quanto il portatore è vicino al bersaglio. Si attiva solo in montagna.',
			'Erhöht den Schaden basierend darauf, wie nah der Träger am Ziel ist. Nur in Berg-Gelände aktiv.',
			'持ち主が対象に近いほどダメージが増加します。山地でのみ発動します。',
			'소지자가 대상에 가까울수록 피해가 증가합니다. 산에서만 발동합니다.',
			'攜帶者越接近目標，造成的傷害越高。僅在山地地形中生效。'
		],
		restriction: {
			tile: [4]
		}
	},
	clawFossil: {
		id: 'clawFossil',
		name: [
		    "Claw Fossil",
		    "Fósil Garra",
		    "Fossile Griffe",
		    "Fóssil Garra",
		    "Fossilartiglio",
		    "Klauenfossil",
		    "ツメのカセキ",
		    "발톱화석",
		    "爪子化石"
		],
		sprite: './src/assets/images/items/claw.png',
		price: 100000,
		description: [
		    "Increases damage dealt by 5% for each Fossil Pokémon on the team. Can only be held by Anorith or Armaldo.",
		    "Aumenta el daño causado en un 5% por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Anorith o Armaldo.",
		    "Augmente les dégâts infligés de 5 % pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Anorith ou Armaldo.",
		    "Aumenta o dano causado em 5% para cada Pokémon Fóssil na equipe. Só pode ser segurado por Anorith ou Armaldo.",
		    "Aumenta i danni inflitti del 5% per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Anorith o Armaldo.",
		    "Erhöht den verursachten Schaden um 5 % für jedes Fossil-Pokémon im Team. Kann nur von Anorith oder Armaldo getragen werden.",
		    "チームにいる化石ポケモン1体につき、与えるダメージが5％増加します。アノプスまたはアーマルドのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 피해량이 5% 증가합니다. 아노딥스 또는 아말도가 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，造成的伤害提高5%。只能由太古羽虫或太古盔甲携带。"
		],
		restriction: {
			id: [63]
		}
	},
	sniperScope: {
		id: 'sniperScope',
		name: [
			'Sniper Scope',
			'Mira Telescópica',
			'Lunette de Visée',
			'Mira de Atirador',
			'Mirino Cecchino',
			'Scharfschützenvisier',
			'スナイパースコープ',
			'초점렌즈',
			'狙擊瞄準鏡'
		],
		sprite: './src/assets/images/items/scope-lens.png',
		price: 100000,
		description: [
			'Damage is increased by 20% if the enemy is further than 150 range, decreased by 20% if not. Only usable for projectile-based Pokémon.',
			'El daño se incrementa en un 20% si el enemigo está a más de 150 de alcance y se reduce en un 20% si no. Solo usable por Pokémon basados en proyectiles.',
			'Les dégâts sont augmentés de 20 % si l’ennemi est à plus de 150 de portée et réduits de 20 % le cas échéant. Utilisable uniquement par les Pokémon à projectiles.',
			'O dano é aumentado em 20% se o inimigo estiver a mais de 150 de alcance e reduzido em 20% se não. Utilizável apenas por Pokémon baseados em projéteis.',
			'Il danno aumenta del 20% se il nemico è oltre 150 di gittata e diminuisce del 20% altrimenti. Utilizzabile solo da Pokémon basati su proiettili.',
			'Der Schaden wird um 20 % erhöht, wenn der Gegner weiter als 150 Reichweite entfernt ist, und um 20 % reduziert, wenn nicht. Nur für projektil-basierte Pokémon verwendbar.',
			'敵が射程150以上離れている場合、ダメージが20%増加し、そうでない場合は20%減少する。投射物系ポケモンのみ使用可能。',
			'적과의 거리가 150 이상일 경우 피해가 20% 증가하고, 그렇지 않으면 20% 감소한다. 투사체 기반 포켓몬만 사용 가능.',
			'若敵人距離超過 150 射程，傷害提高 20%；否則降低 20%。僅可由投射物型寶可夢使用。'
		],
		restriction: { 
			attackType: 'single'
		}
	},
	loadedDice: { 
		id: 'loadedDice',
		name: [
			"Loaded Dice",
			"Dados Cargados",
			"Dé Pipé",
			"Dados viciados",
			"Dadi truccati",
			"Gezinkte Würfel",
			"ローデッドダイス",
			"속임수주사위",
			"作弊骰子"
		],
		sprite: './src/assets/images/items/lens-case.png',
		price: 123456,
		description: [
			"Projectiles no longer ricochet. The holder gains 50% damage for each missed ricochet.",
			"Los proyectiles ya no rebotan. El portador gana 50% de daño por cada rebote perdido.",
			"Les projectiles ne ricochent plus. Le porteur gagne 50 % de dégâts pour chaque ricochet manqué.",
			"Os projéteis não ricocheteiam mais. O portador ganha 50% de dano por cada ricochete perdido.",
			"I proiettili non rimbalzano più. Il portatore guadagna il 50% di danno per ogni rimbalzo perso.",
			"Projektile prallen nicht mehr ab. Der Träger erhält 50% Schaden für jeden verpassten Rückprall.",
			"弾はもう跳ね返らない。持たせたポケモンは失われた跳ね返りごとに50%のダメージを得る。",
			"투사체가 더 이상 튕기지 않습니다. 소지자는 놓친 튕김마다 피해가 50% 증가합니다.",
			"投射物不再反彈。每失去一次反彈，攜帶者的傷害提高 50%。"
		],
		restriction: {
			id: [2, 45, 72]
		}
	},
	quickPowder: { 
		id: 'quickPowder',
		name: [
			'Quick Powder',
			'Polvo Veloz',
			'Poudre Vite',
			'Pó Rápido',
			'Velopolvere',
			'Flottstaub',
			'スピードパウダー',
			'스피드파우더',
			'速度粉末'
		],
		sprite: './src/assets/images/items/quick-powder.png',
		price: 150000,
		description: [
			'Reduces damage by 50% and recharge time by 25%. Only Ditto can use this item.',
			'Reduce el daño en un 50% y el tiempo de recarga en un 25%. Solo Ditto puede usar este objeto.',
			'Réduit les dégâts de 50 % et le temps de récupération de 25 %. Seul Métamorph peut utiliser cet objet.',
			'Reduz o dano em 50% e o tempo de recarga em 25%. Apenas Ditto pode usar este item.',
			'Riduce il danno del 50% e il tempo di ricarica del 25%. Solo Ditto può usare questo oggetto.',
			'Reduziert den Schaden um 50% und die Wiederaufladezeit um 25%. Nur Ditto kann diesen Gegenstand nutzen.',
			'ダメージを50%軽減し、リチャージ時間を25%短縮する。このアイテムを使えるのはメタモンのみ。',
			'피해를 50% 감소시키고 재충전 시간을 25% 증가합니다. 이 아이템은 메타몽만 사용할 수 있습니다.',
			'傷害降低 50%，並將再充填時間縮短 25%。僅百變怪可使用此道具。'
		],
		restriction: {
			id: [70]
		}
	},
	metalPowder: { 
		id: 'metalPowder',
		name: [
			'Metal Powder',
			'Polvo Metálico',
			'Poudre Métal',
			'Pó Metálico',
			'Metalpolvere',
			'Metallstaub',
			'メタルパウダー',
			'금속파우더',
			'金屬粉末'
		],
		sprite: './src/assets/images/items/metal-powder.png',
		price: 150000,
		description: [
			'Increase damage by 50% and recharge time by 25%. Only Ditto can use this item.',
			'Aumenta el daño en un 50% y el tiempo de recarga en un 25%. Solo Ditto puede usar este objeto.',
			'Augmente les dégâts de 50 % et le temps de récupération de 25 %. Seul Métamorph peut utiliser cet objet.',
			'Aumenta o dano em 50% e o tempo de recarga em 25%. Apenas Ditto pode usar este item.',
			'Aumenta il danno del 50% e il tempo di ricarica del 25%. Solo Ditto può usare questo oggetto.',
			'Erhöht den Schaden um 50% und die Wiederaufladezeit um 25%. Nur Ditto kann diesen Gegenstand nutzen.',
			'ダメージが50%増加し、リチャージ時間が25%短縮される。このアイテムを使えるのはメタモンのみ。',
			'피해가 50% 증가하고 재충전 시간이 25% 증가됩니다. 이 아이템은 메타몽만 사용할 수 있습니다.',
			'傷害提高 50%，再充填時間增加 25%。僅百變怪可使用此道具。'
		],
		restriction: {
			id: [70]
		}
	},
	hardStone: { 
		id: 'hardStone',
		name: [
			'Hard Stone',
			'Piedra Dura',
			'Pierre Dure',
			'Pedra Dura',
			'Pietradura',
			'Granitstein',
			'かたいいし',
			'딱딱한돌',
			'堅硬石頭'
		],
		sprite: './src/assets/images/items/hard-stone.png',
		price: 150000,
		description: [
			'Increases damage dealt by 20%. Only Fossils can hold it.',
			'Aumenta el daño causado en un 20%. Solo pueden llevarlo Fósiles.',
			'Augmente les dégâts infligés de 20 %. Seuls les Fossiles peuvent la tenir.',
			'Aumenta o dano causado em 20%. Apenas Fósseis podem segurá-lo.',
			'Aumenta il danno inflitto del 20%. Solo i Fossili possono portarlo.',
			'Erhöht den verursachten Schaden um 20%. Nur Fossil-Pokemon können ihn tragen.',
			'与えるダメージが20%増加する。化石ポケモンだけが持てる。',
			'가하는 피해가 20% 증가합니다. 화석 포켓몬만 지닐 수 있습니다.',
			'造成的傷害提高 20%。僅化石寶可夢可攜帶。'
		],
		restriction: {
			id: [58, 59, 63, 64, 65, 66]
		}
	},
	domeFossil: {
		id: 'domeFossil',
		name: [
		    "Dome Fossil",
		    "Fósil Domo",
		    "Fossile Dôme",
		    "Fóssil Domo",
		    "Fossile Domo",
		    "Kuppelfossil",
		    "とげのカセキ",
		    "껍질화석",
		    "圆顶化石"
		],
		sprite: './src/assets/images/items/dome.png',
		price: 150000,
		description: [
		    "Increases critical by 5% for each Fossil Pokémon on the team. Can only be held by Kabuto or Kabutops.",
		    "Aumenta la probabilidad de crítico en un 5% por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Kabuto o Kabutops.",
		    "Augmente les chances de coup critique de 5 % pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Kabuto ou Kabutops.",
		    "Aumenta a chance de crítico em 5% para cada Pokémon Fóssil na equipe. Só pode ser segurado por Kabuto ou Kabutops.",
		    "Aumenta la probabilità di colpo critico del 5% per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Kabuto o Kabutops.",
		    "Erhöht die kritische Trefferchance um 5 % für jedes Fossil-Pokémon im Team. Kann nur von Kabuto oder Kabutops getragen werden.",
		    "チームにいる化石ポケモン1体につき、クリティカル率が5％増加します。カブトまたはカブトプスのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 치명타 확률이 5% 증가합니다. 투구 또는 투구푸스만 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，暴击率提高5%。只能由化石盔甲或化石盔甲携带。"
		],
		restriction: {
			id: [59]
		}
	},
	starPiece: { 
		id: 'starPiece',
		name: [
			'Star Piece',
			'Fragmento Estrella',
			'Morceau d’Étoile',
			'Fragmento Estrela',
			'Pezzo Stella',
			'Sternstück',
			'ほしのかけら',
			'별의조각',
			'星之碎片'
		],
		sprite: './src/assets/images/items/star-piece.png',
		price: 150000,
		description: [
			'Converts 4-direction attacks into 8-direction attacks.',
			'Convierte ataques de 4 direcciones en ataques en 8 direcciones.',
			'Transforme les attaques à 4 directions en attaques à 8 directions.',
			'Converte ataques de 4 direções em ataques de 8 direções.',
			'Converte gli attacchi a 4 direzioni in attacchi a 8 direzioni.',
			'Wandelt 4-Richtungs-Angriffe in 8-Richtungs-Angriffe um.',
			'4方向の攻撃を8方向の攻撃に変換します。',
			'4방향 공격을 8방향 공격으로 변환합니다.',
			'將 4 方向攻擊轉換為 8 方向攻擊。'
		],
		restriction: {
			id: [10, 29, 34, 45, 54, 77, 15, 32, 81, 77, 85]
		}
	},
	rockyHelmet: {
		id: 'rockyHelmet',
		name: [
			'Rocky Helmet',
			'Casco Dentado',
			'Casque Brut',
			'Capacete Pedregoso',
			'Elmo Roccioso',
			'Felshelm',
			'いしのヘルメット',
			'울퉁불퉁멧',
			'岩石頭盔'
		],
		sprite: './src/assets/images/items/rocky-helmet.png',
		price: 150000,
		description: [
			"Doubles Rampardos damage boost from 5% per missing heart to 10% per missing heart.",
			'Duplica el aumento de daño de Rampardos de 5% por corazón perdido a 10% por corazón perdido.',
			'Double le bonus de dégâts de Charkos de 5 % à 10 % par cœur manquant.',
			'Dobra o aumento de dano de Rampardos de 5% por coração perdido para 10% por coração perdido.',
			'Raddoppia il bonus di danno di Rampardos da 5% per cuore mancante a 10% per cuore mancante.',
			'Verdoppelt Rameidons Schadensbonus von 5 % pro fehlendem Herz auf 10 % pro fehlendem Herz.',
			'ラムパルドの失ったハート1つごとのダメージ上昇が5%から10%に倍増する。',
			'램펄드의 잃은 하트 1개당 데미지 증가가 5%에서 10%로 두 배가 된다.',
			'將戰槌龍每失去 1 顆愛心的傷害加成由 5% 提高至 10%。'
		],
		restriction: {
			id: [66],
		}
	},
	berryJuice: { 
		id: 'berryJuice',
		name: [
			"Berry Juice",
			"Jugo de Bayas",
			"Jus de Baie",
			"Suco de Baya",
			"Succo di Bacca",
			"Beeren-Saft",
			"ベリージュース",
			"나무열매쥬스",
			"树果汁"
		],
		sprite: './src/assets/images/items/berry-juice.png',
		price: 150000,
		description: [
			"Slowing is 50% stronger. Only Shuckle can hold it.",
			"La ralentización es un 50% más potente. Solo Shuckle puede llevarlo.",
			"Le ralentissement est 50 % plus puissant. Seul Caratroc peut le porter.",
			"A lentidão é 50% mais potente. Apenas Shuckle pode segurá-lo.",
			"Il rallentamento è più potente del 50%. Solo Shuckle può portarlo.",
			"Die Verlangsamung ist 50% stärker. Nur Pottrott kann ihn tragen.",
			"遅延効果が50%強くなる。持てるのはツボツボのみ。",
			"느려짐 효과가 50% 더 강해집니다. 이 아이템은 단단지만 지닐 수 있습니다.",
			"减速效果提高 50%。只有壶壶可以携带。"
		],
		restriction: {
			id: [42]
		}
	},
	blueBandana: { 
		id: 'blueBandana',
		name: [
			"Blue Bandana",
			"Bandana azul",
			"Bandana Bleu",
			"Bandana azul",
			"Bandana blu",
			"Blaue Bandana",
			"青いバンダナ",
			"파랑밴드",
			"藍色頭巾"
		],
		sprite: './src/assets/images/items/blue.png',
		price: 175000,
		description: [
			"The holder can no longer deal critical hits. Increases damage by 0.75% for every 1% critical.",
			"El portador ya no puede ocasionar Críticos. Aumenta el daño un 0,75% por cada 1% de crítico.",
			"Le porteur ne peut plus infliger de coups critiques. Augmente les dégâts de 0,75 % pour chaque 1 % de critique.",
			"O portador não pode mais causar críticos. Aumenta o dano em 0,75% para cada 1% de crítico.",
			"Il portatore non può più infliggere colpi critici. Aumenta il danno dell'0,75% per ogni 1% di critico.",
			"Der Träger kann keine kritischen Treffer mehr verursachen. Erhöht den Schaden um 0,75% für jeden 1% Kritisch.",
			"持たせたポケモンはもうクリティカルを発生させられない。クリティカル1%ごとにダメージが0.75%増加する。",
			"소지자는 더 이상 크리티컬을 일으킬 수 없습니다. 크리티컬 1%마다 피해가 0.75% 증가합니다.",
			"持有者將無法再造成要害攻擊。每擁有 1% 要害率，傷害提高 0.75%。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		}
	},
	adrenalineOrb: { 
		id: 'adrenalineOrb',
		name: [
			'Adrenaline Orb',
			'Nerviosfera',
			'Orbe Frousse',
			'Orbe de Adrenalina',
			'Fifasfera',
			'Zitterorb',
			'ビビリだま',
			'주눅구슬',
			'膽怯球'
		],
		sprite: './src/assets/images/items/adrenaline-orb.png',
		price: 200000,
		description: [
			"Reduces recharge time by 25% when Hearts are 7 or less.",
			"Reduce el tiempo de recarga un 25% cuando los Corazones son 7 o menos.",
			"Réduit le temps de récupération de 25 % lorsque les cœurs sont à 7 ou moins.",
			"Reduz o tempo de recarga em 25% quando os Corações estão em 7 ou menos.",
			"Riduce il tempo di ricarica del 25% quando i Cuori sono 7 o meno.",
			"Reduziert die Wiederaufladezeit um 25%, wenn die Herzen 7 oder weniger betragen.",
			"ハートが7以下のとき、リチャージ時間が25%短縮される。",
			"하트가 7개 이하일 때 재충전 시간이 25% 감소합니다.",
			"當愛心數為 7 或以下時，充能時間縮短 25%。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		},
	},
	zoomLens: {
		id: 'zoomLens',
		name: [
			'Zoom Lens',
			'Telescopio',
			'Lentille Zoom',
			'Lente de Zoom',
			'Zoomlente',
			'Zoomlinse',
			'フォーカスレンズ',
			'멀티렌즈',
			'變焦鏡片'
		],
		sprite: './src/assets/images/items/zoom-lens.png',
		price: 200000,
		description: [
			'The holder can fire projectiles at one additional target, but their damage is reduced by 50%.',
			'El portador puede lanzar proyectiles a un objetivo adicional, pero su daño se reduce en un 50%.',
			'Le porteur peut lancer des projectiles sur une cible supplémentaire, mais leurs dégâts sont réduits de 50 %.',
			'O portador pode disparar projéteis em um alvo adicional, mas seu dano é reduzido em 50%.',
			'Il portatore può lanciare proiettili su un bersaglio aggiuntivo, ma il loro danno è ridotto del 50%.',
			'Der Träger kann Projektile auf ein zusätzliches Ziel abfeuern, aber ihr Schaden wird um 50 % reduziert.',
			'持たせたポケモンは追加の1体に向かって投射物を放てるが、ダメージは50%減少する。',
			'소지자는 추가 목표 하나에 투사체를 발사할 수 있지만, 피해량은 50% 감소한다.',
			'持有者可向額外一個目標發射投射物，但傷害降低 50%。'
		],
		restriction: {
			idForbidden: [13, 14, 19, 24, 26, 33, 37, 41, 42, 44, 47, 49, 51, 52, 53, 56, 58, 59, 64, 65, 67, 70, 74, 75, 80, 83, 85]
		}
	},
	metronome: {
		id: 'metronome',
		name: [
			'Metronome',
			'Metrónomo',
			'Métronome',
			'Metrônomo',
			'Plessimetro',
			'Metronom',
			'メトロノーム',
			'메트로놈',
			'節拍器'
		],
		sprite: './src/assets/images/items/metronome.png',
		price: 200000,
		description: [
			'Increases the damage of ricochets by 15%.',
			'Aumenta el daño de los rebotes en un 15%.',
			'Augmente les dégâts des ricochets de 15 %.',
			'Aumenta o dano dos ricochetes em 15%.',
			'Aumenta i danni dei rimbalzi del 15%.',
			'Erhöht den Schaden von Abprallern um 15 %.',
			'はね返り攻撃のダメージを15%増加させる。',
			'리코쳇 공격의 피해를 15% 증가시킨다.',
			'使反彈攻擊造成的傷害提高 15%。'
		],
		restriction: {
			id: [2, 45, 63, 72]
		}
	},
	strangeIdol: {
		id: 'strangeIdol',
		name: [
			'Strange Idol',
			'Ídolo Extraño',
			'Idole Étrange',
			'Ídolo Estranho',
			'Idolo Strano',
			'Seltsamer Götze',
			'ふしぎなオブジェ',
			'이상한장식품',
			'奇異神像'
		],
		sprite: './src/assets/images/items/strange-idol.png',
		price: 200000,
		description: [
			'Deals +10% damage to cursed enemies.',
			'Causa +10% de daño a enemigos malditos.',
			'Inflige +10 % de dégâts aux ennemis maudits.',
			'Causa +10% de dano em inimigos amaldiçoados.',
			'Infligge +10% di danno ai nemici maledetti.',
			'Verursacht +10% Schaden an verfluchten Gegnern.',
			'のろい状態の敵に与えるダメージが10%増加する。',
			'저주 상태인 적에게 입히는 피해가 10% 증가한다.',
			'對處於詛咒狀態的敵人造成的傷害提高 10%。'
		],
		restriction: {
			id: [10, 16, 51, 73, 86]
		}
	},
	helixFossil: { 
		id: 'helixFossil',
		name: [
		    "Helix Fossil",
		    "Fósil Helix",
		    "Fossile Nautile",
		    "Fóssil Hélix",
		    "Fossile Helix",
		    "Helixfossil",
		    "かいのカセキ",
		    "조개화석",
		    "螺旋化石"
		],
		sprite: './src/assets/images/items/helix.png',
		price: 250000,
		description: [
		    "Increases range by 10 for each Fossil Pokémon on the team. Can only be held by Omanyte or Omastar.",
		    "Aumenta el alcance en 10 por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Omanyte u Omastar.",
		    "Augmente la portée de 10 pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Amonita ou Amonistar.",
		    "Aumenta o alcance em 10 para cada Pokémon Fóssil na equipe. Só pode ser segurado por Omanyte ou Omastar.",
		    "Aumenta la gittata di 10 per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Omanyte o Omastar.",
		    "Erhöht die Reichweite um 10 für jedes Fossil-Pokémon im Team. Kann nur von Amonitas oder Amoroso getragen werden.",
		    "チームにいる化石ポケモン1体につき、射程が10増加します。オムナイトまたはオムスターのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 사거리가 10 증가합니다. 암나이트 또는 암스타만 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，射程提高10。只能由小菊石或多刺菊石携带。"
		],
		restriction: {
			id: [58]
		}
	},
	spindaCocktail: { 
		id: 'spindaCocktail',
		name: [
			'Spinda Cocktail',
			'Cóctel de Spinda',
			'Cocktail Spinda',
			'Coquetel de Spinda',
			'Cocktail di Spinda',
			'Spinda-Cocktail',
			'パッチールカクテル',
			'얼루기칵테일',
			'晃晃斑雞尾酒'
		],
		sprite: './src/assets/images/items/spinda-cocktail.png',
		price: 250000,
		description: [
			'Increases the attacker’s range by 25% but makes the user target random enemies, only for single-target Pokémon.',
			'Aumenta el alcance del atacante en un 25% pero hace que el usuario apunte a enemigos aleatorios, solo para Pokémon de objetivo único.',
			'Augmente la portée de l’attaquant de 25 % mais fait que le lanceur cible des ennemis aléatoires. Uniquement pour les Pokémon à cible unique.',
			'Aumenta o alcance do atacante em 25% mas faz com que o usuário mire em inimigos aleatórios, apenas para Pokémon de alvo único.',
			'Aumenta la portata dell’attaccante del 25% ma fa sì che l’utilizzatore bersagli nemici casuali, solo per Pokémon a bersaglio singolo.',
			'Erhöht die Reichweite des Angreifers um 25 %, aber lässt den Benutzer zufällige Gegner anvisieren, nur für Einzelziel-Pokémon.',
			'攻撃者の射程が25%増加するが、対象はランダムな敵になる。単体対象のポケモンのみ使用可能。',
			'공격자의 사거리가 25% 증가하지만, 대상은 무작위 적이 된다. 단일 대상 포켓몬만 사용 가능.',
			'使攻擊者的射程提高 25%，但會隨機鎖定敵人。僅限單體目標的寶可夢使用。'
		],
		restriction: {
			idForbidden: [13, 14, 24, 26, 33, 37, 41, 42, 44, 47, 49, 51, 52, 53, 56, 58, 59, 64, 65, 67, 70, 74, 80, 85, 19, 83]
		}
	},
	dragonFang: { 
		id: 'dragonFang',
		name: [
			"Dragon Fang",
			"Colmillo Dragón",
			"Croc Dragon",
			"Presa de Dragão",
			"Zanna del Drago",
			"Drachenzahn",
			"りゅうのキバ",
			"용의이빨",
			"龍之牙"
		],
		sprite: './src/assets/images/items/dragon-fang.png',
		price: 250000,
		description: [
			"Increases the projectile impact area by 100%. Can only be held by Druddigon.",
			"Aumenta el área de impacto de los proyectiles en un 100%. Solo puede ser llevado por Druddigon.",
			"Augmente la zone d'impact des projectiles de 100 %. Ne peut être tenue que par Drakkarmin.",
			"Aumenta a área de impacto dos projéteis em 100%. Só pode ser segurado por Druddigon.",
			"Aumenta l'area d'impatto dei proiettili del 100%. Può essere tenuto solo da Druddigon.",
			"Erhöht den Einschlagsbereich von Projektilen um 100%. Kann nur von Shardrago getragen werden.",
			"弾の衝撃範囲が100%増加する。持てるのはクリムガンのみ。",
			"투사체의 충돌 범위가 100% 증가합니다. 크리만만 이 아이템을 지닐 수 있습니다.",
			"使投射物的衝擊範圍提高 100%。僅限赤面龍可持有。"
		],
		restriction: {
			id: [17]
		}
	},
	ejectButton: { 
		id: 'ejectButton',
		name: [
			"Eject Button",
			"Botón de Expulsión",
			"Bouton Fuite",
			"Botão de Ejeção",
			"Pulsante di Espulsione",
			"Auswurfknopf",
			"イジェクトボタン",
			"탈출버튼",
			"逃脫按鈕"
		],
		sprite: './src/assets/images/items/eject-button.png',
		price: 300000,
		description: [
			"Halves the teleportation cooldown. Can only be held by Abra, Kadabra, or Alakazam.",
			"Reduce la duración de enfriamiento de la teleportación a la mitad. Solo puede ser llevado por Abra, Kadabra o Alakazam.",
			"Réduit de moitié le temps de récupération de la téléportation. Ne peut être tenu que par Abra, Kadabra ou Alakazam.",
			"Reduz pela metade o tempo de recarga do teletransporte. Só pode ser segurado por Abra, Kadabra ou Alakazam.",
			"Riduce della metà il tempo di ricarica della teletrasportazione. Può essere tenuto solo da Abra, Kadabra o Alakazam.",
			"Halbiert die Abklingzeit der Teleportation. Kann nur von Abra, Kadabra oder Simsala getragen werden.",
			"テレポートのクールダウンが半分になる。ケーシィ、ユンゲラー、フーディンのみが持てる。",
			"텔레포트의 재사용 대기시간이 절반으로 줄어듭니다. 캐이시, 윤겔라 또는 후딘만 이 아이템을 지닐 수 있습니다.",
			"將瞬間移動的冷卻時間減半。僅限凱西、勇基拉或胡地可持有。"
		],
		restriction: {
			id: [68]
		}
	},
	nightmareCloth: {
		id: 'nightmareCloth',
		name: [
			"Nightmare Cloth",
			"Tela Pesadilla",
			"Tissu Cauchemar",
			"Tecido Pesadelo",
			"Tessuto Incubo",
			"Alptraumstoff",
			"ナイトメアクロス",
			"악몽의 천",
			"惡夢之布"
		],
		sprite: './src/assets/images/items/nightmare-cloth.png',
		price: 300000,
		description: [
			"Allows Gardevoir to spread nightmares.",
			"Permite a Gardevoir propagar pesadillas.",
			"Permet à Gardevoir de propager des cauchemars.",
			"Permite que Gardevoir propague pesadelos.",
			"Permette a Gardevoir di diffondere incubi.",
			"Ermöglicht es Guardevoir, Albtraum zu verbreiten.",
			"サーナイトは悪夢を広げることができる。",
			"가디안은 악몽을 퍼뜨릴 수 있다.",
			"使沙奈朵可以擴散惡夢。"
		],
		restriction: {
			id: [55]
		}
	},
	poisonBarb: { 
		id: 'poisonBarb',
		name: [
			"Poison Barb",
			"Púa venenosa",
			"Pic Venin",
			"Espinho venenoso",
			"Aculeo velenoso",
			"Giftstachel",
			"どくのトゲ",
			"독바늘",
			"毒刺"
		],
		sprite: './src/assets/images/items/poison-barb.png',
		price: 400000,
		description: [
			"The holder reduces recharge time by 20% and has a 50% chance to apply an additional poison stack with each attack.",
			"El portador reduce el tiempo de recarga en un 20% y tiene un 50% de probabilidad de aplicar una acumulación de veneno adicional con cada ataque.",
			"Le porteur réduit le temps de récupération de 20 % et a 50 % de chance d'appliquer du poison supplémentaire à chaque attaque.",
			"O portador reduz o tempo de recarga em 20% e tem 50% de chance de aplicar uma pilha de veneno adicional a cada ataque.",
			"Il portatore riduce il tempo di ricarica del 20% e ha il 50% di probabilità di applicare uno stack di veleno aggiuntivo con ogni attacco.",
			"Der Träger reduziert die Wiederaufladezeit um 20 % und hat eine 50% Chance, bei jedem Angriff einen zusätzlichen Giftstapel zuzufügen.",
			"持たせたポケモンはリチャージ時間が20%短縮され、攻撃ごとに50%の確率で追加のどくスタックを付与する。",
			"소지자는 재충전 시간을 20% 증가하며, 공격마다 50% 확률로 추가 독 스택을 적용합니다.",
			"持有者的冷卻時間減少20%，且每次攻擊有50%的機率施加額外一層中毒。"
		],
		restriction: {
			id: [6, 14, 25, 56]
		}
	},
	silphScope: {
		id: 'silphScope',
		name: [
			'Silph Scope',
			'Visor Silph',
			'Scope Sylphe',
			'Silph Scope',
			'Scope Silph',
			'Silph-Scope',
			'シルフスコープ',
			'실프스코프',
			'西爾佛斯可普'
		],
		sprite: './src/assets/images/items/silph-scope.png',
		price: 500000,
		description: [
			'Reveals invisible enemies, must be carried by a Pokémon that fires projectiles.', 
			'Revela a enemigos invisibles, debe llevarlo un Pokémon que lance proyectiles.', 
			'Révèle les ennemis invisibles, doit être porté par un Pokémon qui lance des projectiles.', 
			'Revela inimigos invisíveis, deve ser equipado por um Pokémon que dispare projéteis.', 
			'Rivela i nemici invisibili, deve essere equipaggiato da un Pokémon che lancia proiettili.', 
			'Enthüllt unsichtbare Gegner, muss von einem Pokémon getragen werden, das Projektile abfeuert.', 
			'透明な敵を明らかにする。投射物を放つポケモンが持つ必要がある。', 
			'보이지 않는 적을 드러낸다. 투사체를 발사하는 포켓몬이 착용해야 한다.',
			'揭露隱形的敵人，必須由發射投射物的寶可夢攜帶。'
		],
		restriction: {
			attackType: 'single'
		}
	},
	quickClaw: {
		id: 'quickClaw',
		name: [
			'Quick Claw',
			'Garra Rápida',
			'Vive Griffe',
			'Garra Rápida',
			'Artiglio Rapido',
			'Schnellklaue',
			'クイッククロウ',
			'선제공격손톱',
			'先制之爪'
		],
		sprite: './src/assets/images/items/quick-claw.png',
		price: 500000,
		description: [
			"Reduces damage by 50% and recharge time by 50%. The focus automatically targets the fastest enemy.",
			"Reduce el daño en un 50% y el tiempo de recarga en un 50%. El enfoque apunta automáticamente al enemigo más rápido.",
			"Réduit les dégâts de 50 % et le temps de récupération de 50 %. Cible automatiquement l'ennemi le plus rapide.",
			"Reduz o dano em 50% e o tempo de recarga em 50%. O foco automaticamente mira o inimigo mais rápido.",
			"Riduce il danno del 50% e il tempo di ricarica del 50%. Il focus mira automaticamente il nemico più veloce.",
			"Reduziert den Schaden um 50% und die Wiederaufladezeit um 50%. Zielt automatisch auf den schnellsten Gegner.",
			"ダメージが50%減少し、リチャージ時間が50%減少する。フォーカスは自動的に最も速い敵を狙う。",
			"피해가 50% 감소하고 재충전 시간이 50% 감소합니다. 포커스는 자동으로 가장 빠른 적을 목표로 합니다.",
			"傷害降低50%，再充能時間縮短50%。鎖定會自動以速度最快的敵人為目標。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		},
	},
	revelationAroma: { 
		id: 'revelationAroma',
		name: [
			"Revelation Aroma",
			"Aroma de la Revelación",
			"Arôme Révélateur",
			"Aroma da Revelação",
			"Aroma della Rivelazione",
			"Offenbarungsaroma",
			"リベレーションアロマ",
			"향기로운 꽃",
			"啟示之香"
		],
		sprite: './src/assets/images/items/flower-sweet.png',
		price: 500000,
		description: [
			"Increases range by 25. Can only be held by Sunkern, Sunflora, or Comfey.",
			"Aumenta el alcance en 25. Solo puede ser llevado por Sunkern, Sunflora o Comfey.",
			"Augmente la portée de 25. Ne peut être tenu que par Tournegrin, Héliatronc ou Guérilande.",
			"Aumenta o alcance em 25. Só pode ser segurado por Sunkern, Sunflora ou Comfey.",
			"Aumenta la gittata di 25. Può essere tenuto solo da Sunkern, Sunflora o Comfey.",
			"Erhöht die Reichweite um 25. Kann nur von Sonnkern, Sonnflora oder Curelei gehalten werden.",
			"射程が25増加します。ヒマナッツ、キマワリ、またはキュワワーのみが装備可能です。",
			"사거리가 25 증가합니다. 해너츠, 해루미, 또는 큐아링만 장착할 수 있습니다.",
			"射程增加25。僅可由向日種子、向日花怪或花療環環持有。"
		],
		restriction: {
			id: [19, 83]
		}
	},
	falmeOrb: {
		id: 'falmeOrb',
		name: [
			'Flame Orb',
			'Llamasfera',
			'Orbe Flamme',
			'Orbe de Chama',
			'Fiammosfera',
			'Flammenkugel',
			'かえんだま',
			'화염구슬',
			'火焰寶珠'
		],
		sprite: './src/assets/images/items/flame-orb.png',
		price: 600000,
		description: [
			'Increases damage dealt by burn by 25%.',
			'Incrementa el daño causado por la quemadura un 25%.',
			'Augmente les dégâts des brulure de 25 %.',
			'Aumenta o dano causado por queimadura em 25%.',
			'Aumenta il danno inflitto dal bruciamento del 25%.',
			'Erhöht den durch Verbrennung verursachten Schaden um 25%.',
			'やけどによるダメージが25%増加する。',
			'화상으로 입히는 피해가 25% 증가합니다.',
			'由灼傷造成的傷害提高25%。'
		],
		restriction: { 
			id: [0, 9, 52, 73]
		}
	},
	badgeOfHonor: { 
		id: 'badgeOfHonor',
		name: [
			"Badge Of Honor",
			"Placa de Honor",
			"Badge Honorifique",
			"Distintivo de Honra",
			"Distintivo d'Onore",
			"Abzeichen der Ehre",
			"名誉のバッジ",
			"명예의 배지",
			"榮譽徽章"
		],
		sprite: './src/assets/images/items/honor-of-kalos.png',
		price: 900000,
		description: [
			"Increases the holder's damage by 1% for every 30 stars acquired.",
			"Aumenta el daño del portador en un 1% por cada 30 estrellas obtenidas.",
			"Augmente les dégâts du porteur de 1 % toutes 30 étoiles.",
			"Aumenta o dano do portador em 1% para cada 30 estrelas adquiridas.",
			"Aumenta il danno del portatore del 1% per ogni 30 stelle ottenute.",
			"Erhöht den Schaden des Trägers um 1% für jeweils 30 gesammelte Sterne.",
			"所持者のダメージが、獲得した星30個ごとに1%増加する。",
			"소지자의 피해가 획득한 별 30개마다 1% 증가합니다.",
			"所持者每獲得30顆星星，造成的傷害提高1%。"
		],
		restriction: {
			idForbidden: [70, 19, 83]
		},
	},
	toxicOrb: { 
		id: 'toxicOrb',
		name: [
			'Toxic Orb',
			'Toxisfera',
			'Orbe Toxique',
			'Orbe Tóxico',
			'Tossicsfera',
			'Toxik-Orb',
			'どくどくだま',
			'맹독구슬',
			'劇毒寶珠'
		],
		sprite: './src/assets/images/items/toxic-orb.png',
		price: 1000000,
		description: [
			'The holder inflicts double the amount of poison stacks with each attack.',
			'El portador inflige el doble de acumulaciones de veneno con cada ataque.',
			'Le porteur inflige le double de poison à chaque attaque.',
			'O portador inflige o dobro de acúmulos de veneno a cada ataque.',
			'Il portatore infligge il doppio delle pile di veleno con ogni attacco.',
			'Der Träger fügt mit jedem Angriff die doppelte Anzahl an Giftstapel zu.',
			'持たせたポケモンは、攻撃ごとに毒の蓄積を2倍にする。',
			'소지자는 공격할 때마다 독 중첩 수가 두 배로 증가한다.',
			'所持者每次攻擊施加的中毒層數加倍。'
		],
		restriction: {
			id: [6, 14, 25, 56]
		}
	},	
	shinyCharm: {
		id: 'shinyCharm',
		name: ["Shiny Charm","Amuleto iris","Charme Chroma","Amuleto Brilhante","Cromamuleto","Schillerpin","ひかるおまもり","빛나는부적","闪耀护符"],
		sprite: './src/assets/images/items/shiny-charm.png',
		price: 1000000000,
		description: [
		    "Triples the chances of turning a Pokémon Shiny. Must be held by Smeargle.",
		    "Triplica las probabilidades de convertir un Pokémon en Shiny. Debe llevarlo Smeargle.",
		    "Triple les chances de rendre un Pokémon chromatique. Doit être tenu par Queulorior.",
		    "Triplica as chances de tornar um Pokémon Brilhante. Deve ser segurado por Smeargle.",
		    "Triplica le probabilità di rendere un Pokémon Cromatico. Deve essere tenuto da Smeargle.",
		    "Verdreifacht die Chancen, ein Pokémon schillernd zu machen. Muss von Farbeagle getragen werden.",
		    "ポケモンが色違いになる確率が3倍になります。ムーランドが持っている必要があります。",
		    "포켓몬이 색이 다른 이로치가 될 확률이 3배가 됩니다. 루브도가 장착해야 합니다.",
		    "将宝可梦变为闪光的概率提高三倍。必须由奇鲁莉安携带。"
		],
		restriction: {
			id: [84]
		}
	},
	bicycle: {
		id: 'bicycle',
		name: [
			"Segmental's Bicycle",
			"Bicicleta de Segmental",
			"Vélo de Segmental",
			"Bicicleta do Segmental",
			"Bicicletta di Segmental",
			"Segmentals Fahrrad",
			"自転車", 
			"자전거", 
			'的自行車'
		],
		sprite: './src/assets/images/items/bicycle.png',
		price: 1000000000,
		description: [
			'Ding ding.', 
			'Ding ding.', 
			'Ding ding.', 
			'Tin tin.', 
			'Din don.', 
			'Klingeling.', 
			'チリンチリン。', 
			'딩딩.', 
			'叮鈴叮鈴。'
		],
		restriction: {
			attackType: 'single'
		}
	},
	
}

export const itemListData = [ 
	'protein', 'carbos', 'lifeOrb', 'lightClay', 'twistedSpoon', 'clefairyDoll', 
	'amuletCoin', 'fertiliser', 'heartScale', 'squirtBottle', 'wideLens', 'choiceScarf', 'airBalloon', 
	'oldRod', 'heatRock', 'dampMulch', 'softSand', 'heavyDutyBoots', 'shieldBreakerBullet', 'shellBell', 
	'stickyBarb', 'starCandy', 'electirizer', 'cellBattery', 'leek', 'thickClub', 'lightBall', 
	'nanabBerry', 'bigRoot', 'sprayduck', 'razorClaw', 'ringTarget', 'spellTag', 'sharpBeak', 'clawFossil',
	'sniperScope', 'loadedDice', 'quickPowder', 'metalPowder', 'hardStone', 'domeFossil', 'starPiece', 'rockyHelmet', 
	'berryJuice', 'blueBandana', 'adrenalineOrb', 'zoomLens', 'metronome', 'strangeIdol', 'helixFossil', 'spindaCocktail', 'dragonFang', 
	'ejectButton', 'nightmareCloth', 'poisonBarb', 'silphScope', 'quickClaw', 'revelationAroma', 'falmeOrb', 
	'badgeOfHonor', 'toxicOrb', 'shinyCharm', 'bicycle', 
]

