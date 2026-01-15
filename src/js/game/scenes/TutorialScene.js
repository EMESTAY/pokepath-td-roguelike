import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound, playMusic } from '../../file/audio.js';

const TUTORIAL_TITLE_PAGE = {
  0: ['UNITS', 'UNIDADES', 'UNITÉS', 'UNIDADES', 'UNITÀ', 'EINHEITEN', 'ユニット', '유닛', '单位'],
  1: ['SHOP', 'TIENDA', 'BOUTIQUE', 'LOJA', 'NEGOZIO', 'LADEN', 'ショップ', '상점', '商店'],
  2: [
    'POKÉMON STORAGE',
    'CAJA POKÉMON',
    'STOCKAGE POKÉMON',
    'CAIXA POKÉMON',
    'BOX POKÉMON',
    'POKÉMON-BOX',
    'ポケモンボックス',
    '포켓몬 박스',
    '宝可梦存储',
  ],
  3: ['MAP', 'MAPAS', 'CARTE', 'MAPA', 'MAPPHE', 'KARTE', 'マップ', '맵', '地图'],
  4: ['ENEMIES', 'ENEMIGOS', 'ENNEMIS', 'INIMIGOS', 'NEMICI', 'GEGNER', '敵', '적', '敌人'],
  5: [
    'PROFILE',
    'PERFIL',
    'PROFIL',
    'PERFIL',
    'PROFILO',
    'PROFIL',
    'プロフィール',
    '프로필',
    '个人资料',
  ],
  6: [
    'AUTOSAVE',
    'AUTOGUARDADO',
    'SAUVEGARDE AUTO',
    'AUTOSAVE',
    'SALVATAGGIO AUTO',
    'AUTOSPEICHERN',
    'オートセーブ',
    '자동 저장',
    '自动保存',
  ],
  7: [
    'GOOD LUCK!',
    '¡BUENA SUERTE!',
    'BONNE CHANCE !',
    'BOA SORTE!',
    'BUONA FORTUNA!',
    'VIEL GLÜCK!',
    'がんばって！',
    '행운을 빕니다!',
    '祝你好运！',
  ],
};

const TUTORIAL_TEXT_PAGE = {
  0: [
    'Defend the Route with your Pokémon! Each one has unique stats and a special ability. Level them up to make them stronger and evolve them.',
    '¡Defiende la Ruta con tus Pokémon! Cada uno tiene atributos únicos y una pasiva especial. Sube su nivel para fortalecerlos y hacerlos evolucionar.',
    'Défends la Route avec tes Pokémon ! Chacun a ses stats uniques et une capacité spéciale. Fais-les monter de niveau pour les rendre plus forts.',
    'Defende a Rota com seus Pokémon! Cada um tem atributos únicos e uma habilidade especial. Aumente o nível deles para fortalecê-los e evoluí-los.',
    'Difendi la rotta con i tuoi Pokémon! Ognuno ha statistiche uniche e un’abilità speciale. Falli salire di livello per renderli più forti e farli evolvere.',
    'Verteidige die Route mit deinen Pokémon! Jedes hat einzigartige Werte und eine spezielle Fähigkeit. Steigere ihr Level, um sie Stärker zu machen und zu entwickeln.',
    'ポケモンたちとルートを守ろう！それぞれが特別な能力と個性を持っている。レベルを上げて進化させよう！',
    '포켓몬으로 루트를 방어하세요! 각 포켓몬은 고유한 능력과 스킬을 가지고 있습니다. 레벨을 올려 강하게 만들고 진화시키세요!',
    '用你的宝可梦守卫路线！每个宝可梦都有独特的属性和特殊技能。提升等级以增强它们并让它们进化。',
  ],
  1: [
    'You can buy new Pokémon in the Shop. Each time you purchase one, its price will increase.',
    'Puedes comprar nuevos Pokémon en la Tienda. Cada vez que adquieras uno, su precio aumentará.',
    'Tu peux acheter de nouveaux Pokémon dans la boutique. À chaque achat, leur prix augmentera.',
    'Você pode comprar novos Pokémon na Loja. Cada vez que comprar um, o preço aumentará.',
    'Puoi comprare nuovi Pokémon nel Negozio. Ogni volta che ne acquisti uno, il prezzo aumenterà.',
    'Du kannst neue Pokémon im Laden kaufen. Mit jedem Kauf steigt der Preis.',
    'ショップで新しいポケモンを購入できます。買うたびに価格が上がります。',
    '상점에서 새로운 포켓몬을 구매할 수 있습니다. 구매할 때마다 가격이 상승합니다.',
    '你可以在商店购买新的宝可梦。每购买一次，其价格都会上涨。',
  ],
  2: [
    'You can have up to 10 active Pokémon in your team. The rest will be stored in the Box.',
    'Puedes tener hasta 10 Pokémon activos en tu equipo. Los demás se almacenarán en la Caja.',
    'Tu peux avoir jusqu’à 10 Pokémon actifs dans ton équipe. Les autres seront stockés dans le PC.',
    'Você pode ter até 10 Pokémon ativos em sua equipe. Os demais ficarão guardados na Caixa.',
    'Puoi avere fino a 10 Pokémon attivi nella tua squadra. Gli altri verranno salvati nel Box.',
    'Du kannst bis zu 10 aktive Pokémon in deinem Team haben. Die Übrigen werden in der Box gespeichert.',
    'チームには最大10匹のポケモンを配置できます。残りはボックスに保管されます。',
    '팀에는 최대 10마리의 포켓몬을 배치할 수 있습니다. 나머지는 박스에 저장됩니다.',
    '你的队伍最多可配置10只出战宝可梦，其余的会存放在盒子里。',
  ],
  3: [
    'You can switch routes at any time without losing progress! If a wave is too hard, visit another map to train your Pokémon and come back later.',
    '¡Puedes cambiar de ruta en cualquier momento sin perder tu progreso! Si una oleada es demasiado difícil, visita otro mapa para mejorar tu equipo y vuelve más tarde.',
    'Tu peux changer de route à tout moment sans perdre ta progression ! Si une vague est trop difficile, entraine-toi ailleurs et reviens plus tard.',
    'Você pode mudar de rota a qualquer momento sem perder o progresso! Se uma onda for difícil demais, treine em outro mapa e volte depois.',
    'Puoi cambiare percorso in qualsiasi momento senza perdere i progressi! Se un’ondata è troppo difficile, allena i tuoi Pokémon e torna più tardi.',
    'Du kannst jederzeit die Route wechseln, ohne deinen Fortschritt zu verlieren! Wenn eine Welle zu schwer ist, trainiere woanders und kehre später zurück.',
    '進行状況を失わずにいつでもルートを変更できます！難しいウェーブなら別のマップで育成してから戻ろう。',
    '진행 상황을 잃지 않고 언제든 경로를 변경할 수 있습니다! 너무 어려운 웨이브라면 다른 맵에서 훈련 후 돌아오세요.',
    '你可以随时切换路线而不会丢失进度！如果某个波次太难，可以去其他地图训练宝可梦，随后再回来。',
  ],
  4: [
    'Each enemy has unique traits! Before starting the wave, check which enemies will appear and adjust your team.',
    '¡Cada enemigo tiene sus propias características! Antes de iniciar la oleada, observa qué enemigos aparecerán y ajusta tu equipo.',
    'Chaque ennemi a ses propres caractéristiques ! Avant de commencer la vague, vérifie quels ennemis apparaitront et réorganise ton équipe.',
    'Cada inimigo tem as suas próprias características! Antes de iniciar a onda, vê quais inimigos vão aparecer e refaz a tua equipa.',
    'Ogni nemico ha caratteristiche uniche! Prima di iniziare l’ondata, controlla quali nemici appariranno e riorganizza la tua squadra.',
    'Jeder Gegner hat seine eigenen Eigenschaften! Sieh dir vor Beginn der Welle an, welche Gegner erscheinen, und passe dein Team dementsprechend an.',
    '敵はそれぞれ異なる特徴を持っています！ウェーブを始める前に出現する敵を確認し、チームを組み直しましょう。',
    '각 적은 고유한 특성을 가지고 있습니다! 웨이브를 시작하기 전에 어떤 적이 나타나는지 확인하고 팀을 재구성하세요.',
    '每个敌人都有独特的特点！在开始波次前查看将出现的敌人并调整你的队伍。',
  ],
  5: [
    'You can change your name and avatar from your profile, and view your achievements and stats.',
    'Puedes cambiar tu nombre y avatar desde tu perfil, además de consultar tus logros y estadísticas.',
    'Tu peux changer ton nom et ton avatar dans ton profil, et consulter tes succès et statistiques.',
    'Você pode alterar seu nome e avatar no perfil, além de ver suas conquistas e estatísticas.',
    'Puoi cambiare nome e avatar dal profilo e controllare i tuoi trofei e statistiche.',
    'Du kannst deinen Namen und Avatar im Profil ändern und deine Erfolge und Statistiken einsehen.',
    'プロフィールから名前とアバターを変更でき、実績やステータスも確認できます。',
    '프로필에서 이름과 아바타를 변경하고 업적 및 통계를 확인할 수 있습니다.',
    '你可以在个人资料中更改姓名和头像，并查看成就与统计数据。',
  ],
  6: [
    'The game autosaves when changing maps or finishing a wave.',
    'El progreso se guarda automáticamente al cambiar de mapa o al finalizar una oleada.',
    'Le jeu se sauvegarde automatiquement en changeant de carte ou après une vague.',
    'O jogo é salvo automaticamente ao mudar de mapa ou terminar uma onda.',
    'Il gioco salva automaticamente quando cambi mappa o completi un’ondata.',
    'Das Spiel speichert automatisch beim Kartenwechsel oder nach einer Welle.',
    'マップを変更するかウェーブをクリアすると自動的にセーブされます。',
    '맵을 변경하거나 웨이브를 완료하면 자동으로 저장됩니다.',
    '在切换地图或完成波次时，游戏会自动保存。',
  ],
  7: [
    'That’s all! You start your adventure with $50, use it wisely!',
    '¡Eso es todo! Empiezas tu aventura con $50 iniciales, ¡úsalos con sabiduría!',
    'C’est tout ! Tu commences ton aventure avec 50 $, utilise-les bien !',
    'É isso! Você começa sua aventura com $50, use com sabedoria!',
    'Tutto qui! Inizi la tua avventura con $50, usali con saggezza!',
    'Das war’s! Du startest dein Abenteuer mit 50 $. Setze sie klug ein!',
    'これでチュートリアルは完了！最初の所持金は50ドル。賢く使おう！',
    '이것으로 튜토리얼이 끝입니다! 시작 자금 $50을 현명하게 사용하세요!',
    '就是这些！你将以 $50 开始冒险，请明智使用！',
  ],
};

const ROGUE_TITLE = {
  0: [
    'ROGUELIKE MODE',
    'MODO ROGUELIKE',
    'MODE ROGUELIKE',
    'MODO ROGUELIKE',
    'MODALITÀ ROGUELIKE',
    'ROGUELIKE-MODUS',
    'ローグライクモード',
    '로그라이크 모드',
    '肉鸽模式',
  ],
  1: [
    'REWARDS',
    'RECOMPENSAS',
    'RÉCOMPENSES',
    'RECOMPENSAS',
    'RICOMPENSE',
    'BELOHNUNGEN',
    '報酬',
    '보상',
    '奖励',
  ],
  2: [
    'UPGRADES',
    'MEJORAS',
    'AMÉLIORATIONS',
    'MELHORIAS',
    'MIGLIORAMENTI',
    'UPGRADES',
    'アップグレード',
    '강화',
    '升级',
  ],
  3: ['INTEREST', 'INTERÉS', 'INTÉRÊTS', 'JUROS', 'INTERESSI', 'ZINSEN', '利子', '이자', '利息'],
  4: [
    'SYNERGY',
    'SINERGIA',
    'SYNERGIE',
    'SINERGIA',
    'SINERGIA',
    'SYNERGIE',
    'シナジー',
    '시너지',
    '协同',
  ],
  5: ['REROLL', 'REROLL', 'RELANCE', 'REROLL', 'REROLL', 'REROLL', 'リロール', '리롤', '重随'],
  6: ['TEAM', 'EQUIPO', 'ÉQUIPE', 'EQUIPE', 'SQUADRA', 'TEAM', 'チーム', '팀', '队伍'],
  7: [
    'SURVIVE',
    'SOBREVIVE',
    'SURVIVRE',
    'SOBREVIVA',
    'SOPRAVVIVI',
    'ÜBERLEBE',
    '生き残れ',
    '생존',
    '生存',
  ],
};

const ROGUE_TEXT = {
  0: [
    'Welcome to Roguelike Mode! You start with a random Pokémon. Games are permadeath.',
    '¡Bienvenido al modo Roguelike! Comienzas con un Pokémon aleatorio. ¡Es muerte permanente!',
    'Bienvenue dans le mode Roguelike ! Tu commences avec un Pokémon aléatoire. La mort est définitive !',
    'Bem-vindo ao Modo Roguelike! Você começa com um Pokémon aleatório. Permadeath ativo!',
    'Benvenuto nella modalità Roguelike! Inizi con un Pokémon casuale. Morte permanente!',
    'Willkommen im Roguelike-Modus! Du startest mit einem zufälligen Pokémon. Permadeath!',
    'ローグライクモードへようこそ！ランダムなポケモンで開始します。パーマデスあり！',
    '로그라이크 모드에 오신 것을 환영합니다! 무작위 포켓몬으로 시작합니다. 영구 사망!',
    '欢迎来到肉鸽模式！你以一只随机宝可梦开始。永久死亡！',
  ],
  1: [
    'After each wave, you MUST choose 1 of 3 rewards. You cannot skip. Choose wisely!',
    'Tras cada oleada, DEBES elegir 1 de 3 recompensas. No puedes saltar. ¡Elige bien!',
    'Après chaque vague, tu DOIS choisir 1 récompense sur 3. Impossible de passer. Choisis bien !',
    'Após cada onda, você DEVE escolher 1 de 3 recompensas. Não pode pular. Escolha bem!',
    'Dopo ogni ondata, DEVI scegliere 1 delle 3 ricompense. Non puoi saltare. Scegli saggiamente!',
    'Nach jeder Welle MUSST du 1 von 3 Belohnungen wählen. Kein Überspringen. Wähle weise!',
    '各ウェーブ後、3つの報酬から1つ選ばなければなりません。スキップ不可。慎重に選ぼう！',
    '각 웨이브 후에 3가지 보상 중 하나를 반드시 선택해야 합니다. 건너뛸 수 없습니다. 신중하게 선택하세요!',
    '每波之后，你必须选择3个奖励中的1个。无法跳过。明智选择！',
  ],
  2: [
    'Choosing a Pokémon you own grants an Upgrade (+3 Levels). Build a strong team!',
    'Elegir un Pokémon que ya tienes lo mejora (+3 Niveles). ¡Crea un equipo fuerte!',
    'Choisir un Pokémon que tu as déjà l’améliore (+3 Niveaux). Construis une équipe forte !',
    'Escolher um Pokémon que já tem concede Melhoria (+3 Níveis). Monte um time forte!',
    'Scegliere un Pokémon che possiedi lo potenzia (+3 Livelli). Crea una squadra forte!',
    'Wähle ein Pokémon, das du besitzt, für ein Upgrade (+3 Level). Baue ein starkes Team!',
    '所持しているポケモンを選ぶとアップグレード（+3レベル）されます。強いチームを作ろう！',
    '이미 보유한 포켓몬을 선택하면 강화(+3 레벨)됩니다. 강력한 팀을 만드세요!',
    '选择已拥有的宝可梦会给予升级（+3级）。打造一支强力队伍！',
  ],
  3: [
    'Unspent Gold generates +10% Interest after every wave. Save up to become rich!',
    'El oro no gastado genera +10% de interés tras cada oleada. ¡Ahorra para ser rico!',
    'L’or non dépensé génère +10 % d’intérêts après chaque vague. Économise pour t’enrichir !',
    'Ouro não gasto gera +10% de Juros após cada onda. Economize para ficar rico!',
    'L’oro non speso genera +10% di interessi dopo ogni ondata. Risparmia per arricchirti!',
    'Ungunutztes Gold bringt +10 % Zinsen nach jeder Welle. Spare, um reich zu werden!',
    '未使用のゴールドはウェーブごとに+10%の利子を生みます。貯金して金持ちになろう！',
    '사용하지 않은 골드는 매 웨이브 후 +10%의 이자를 생성합니다. 저축하여 부자가 되세요!',
    '未花费的金币每波后产生+10%的利息。存钱致富！',
  ],
  4: [
    'Route 1 Pond boosts Water types (+10% Stats). Look for elemental synergies in your rewards!',
    'El estanque de la Ruta 1 mejora a los de Agua (+10% Estad.). ¡Busca sinergias!',
    'L’étang de la Route 1 booste les types Eau (+10 % Stats). Cherche les synergies !',
    'O lago da Rota 1 melhora tipos Água (+10% Status). Busque sinergias!',
    'Il lago del Percorso 1 potenzia i tipi Acqua (+10% Stat). Cerca sinergie!',
    'Der Teich auf Route 1 stärkt Wasser-Typen (+10 % Werte). Suche nach Synergien!',
    'ルート1の池は水タイプを強化（+10% ステータス）します。シナジーを探そう！',
    '1번 루트 연못은 물 타입을 강화(+10% 능력치)합니다. 시너지를 찾으세요!',
    '1号路池塘增强水属性（+10%属性）。寻找奖励中的协同效应！',
  ],
  5: [
    'Don’t like the rewards? Reroll them! Cost starts at 500g and increases per use. Resets daily.',
    '¿No te gustan las recompensas? ¡Haz Reroll! Cuesta 500g y sube por uso. Se reinicia.',
    'Les récompenses ne te plaisent pas ? Relance ! Coût : 500g, augmente par usage. Réinitialisé.',
    'Não gostou? Reroll! Custo começa em 500g e aumenta com o uso. Reseta por onda.',
    "Non ti piacciono? Reroll! Costa 500g e aumenta con l'uso. Si resetta.",
    'Belohnungen gefallen nicht? Reroll! Kosten ab 500g, steigen pro Nutzung. Reset pro Welle.',
    '報酬が気に入らない？リロールしよう！500gから始まり、使うたびに増加します。',
    '보상이 마음에 안 드시나요? 리롤하세요! 500g부터 시작하며 사용 시 증가합니다.',
    '不喜欢奖励？重随！费用从500g开始，随使用增加。每日重置。',
  ],
  6: [
    'Max 10 units in team. Excess units go to the Box. Manage your team wisely.',
    'Máx 10 unidades en el equipo. El exceso va a la Caja. Gestiona bien tu equipo.',
    'Max 10 unités dans l’équipe. Le surplus va dans le PC. Gère ton équipe !',
    'Máx 10 unidades na equipe. Excesso vai para a Caixa. Gerencie bem!',
    "Max 10 unità in squadra. L'eccesso va nel Box. Gestisci saggiamente la squadra.",
    'Max 10 Einheiten im Team. Überschuss geht in die Box. Manage dein Team klug.',
    'チームは最大10体。超過分はボックスへ。賢く管理しよう。',
    '팀 최대 10유닛. 초과 유닛은 박스로 갑니다. 현명하게 관리하세요.',
    '队伍最多10个单位。多余的去盒子。明智管理你的队伍。',
  ],
  7: [
    'Good luck! How far can you go? Survive infinite waves!',
    '¡Buena suerte! ¿Hasta dónde llegarás? ¡Sobrevive oleadas infinitas!',
    'Bonne chance ! Jusqu’où iras-tu ? Survivez à des vagues infinies !',
    'Boa sorte! Quão longe você vai? Sobreviva a ondas infinitas!',
    'Buona fortuna! Quanto lontano arriverai? Sopravvivi a ondate infinite!',
    'Viel Glück! Wie weit kommst du? Überlebe unendliche Wellen!',
    'がんばって！どこまで行けるかな？無限のウェーブを生き残れ！',
    '행운을 빕니다! 어디까지 갈 수 있을까요? 끝없는 웨이브에서 살아남으세요!',
    '祝你好运！你能走多远？在无限波次中生存！',
  ],
};

export class TutorialScene extends GameScene {
  constructor(main) {
    super(400, 450);
    this.main = main;
    this.pageNumber = 0;

    this.header.removeChild(this.closeButton);
    this.render();
  }

  render() {
    this.title.innerHTML = text.tutorial.title[this.main.lang].toUpperCase();

    this.tutorialTitle = new Element(this.container, {
      className: 'tutorial-scene-title',
    }).element;
    this.tutorialImage = new Element(this.container, {
      className: 'tutorial-scene-image',
    }).element;
    this.tutorialText = new Element(this.container, {
      className: 'tutorial-scene-text',
    }).element;

    this.buttonPrev = new Element(this.container, {
      className: 'tutorial-scene-prev',
    }).element;
    this.buttonNext = new Element(this.container, {
      className: 'tutorial-scene-next',
    }).element;

    this.tutorialIndex = new Element(this.container, {
      className: 'tutorial-scene-index',
    }).element;

    this.buttonPrev.addEventListener('click', () => {
      this.changePage(-1);
    });
    this.buttonNext.addEventListener('click', () => {
      this.changePage(1);
    });
    this.buttonPrev.addEventListener('mouseenter', () => {
      playSound('open', 'ui');
    });
    this.buttonNext.addEventListener('mouseenter', () => {
      playSound('open', 'ui');
    });
  }

  update() {
    const isRoguelike = this.main.gameMode === 1;
    const titles = isRoguelike ? ROGUE_TITLE : TUTORIAL_TITLE_PAGE;
    const texts = isRoguelike ? ROGUE_TEXT : TUTORIAL_TEXT_PAGE;

    this.tutorialTitle.innerHTML = titles[this.pageNumber][this.main.lang];
    this.tutorialText.innerHTML = texts[this.pageNumber][this.main.lang];

    this.buttonPrev.innerHTML = text.tutorial.back[this.main.lang].toUpperCase();
    this.buttonNext.innerHTML = text.tutorial.next[this.main.lang].toUpperCase();

    // Use existing icons or generic ones. Assuming tutorial images 0-7 exist.
    // Roguelike might mismatch images, but text is what matters most for now.
    this.tutorialImage.style.backgroundImage = `url("./src/assets/images/icons/tutorial${this.pageNumber}.png")`;

    if (this.pageNumber == 7) {
      this.buttonNext.innerHTML = text.tutorial.end[this.main.lang].toUpperCase();
    } else if (this.pageNumber == 0) {
      this.buttonPrev.style.filter = 'brightness(0.8)';
      this.buttonPrev.style.pointerEvents = 'none';
    } else {
      this.buttonPrev.style.filter = 'brightness(1)';
      this.buttonPrev.style.pointerEvents = 'all';
    }

    this.tutorialIndex.innerHTML = `- ${this.pageNumber + 1}/8 -`;
  }

  changePage(pos) {
    playSound('button2', 'ui');
    this.pageNumber += pos;
    if (this.pageNumber > 7) this.close();
    else this.update();
  }

  open() {
    super.open();
    this.update();
  }

  close() {
    super.close();
    playMusic('route1');
  }
}
