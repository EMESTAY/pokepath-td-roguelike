import { itemData } from '../data/itemData.js';

export class Player {
  constructor(main, events, playerData) {
    this.main = main;
    this.events = events;
    this.lang = main.lang;

    this.update = playerData.update ?? undefined;
    this.name = playerData.name;
    this.portrait = playerData.portrait;
    this.gold = playerData.gold;
    this.health = playerData.health;

    this.records = playerData.records;
    this.stars = playerData.stars;
    this.teamSlots = playerData.teamSlots;
    this.extraGold = playerData.extraGold;

    this.achievements = playerData.achievements;
    this.achievementProgress = playerData.achievementProgress;

    this.stats = playerData.stats;
    this.stats.defeatedSpecies = new Set(
      Array.isArray(playerData.stats.defeatedSpecies) ? playerData.stats.defeatedSpecies : []
    );

    if (this.stats.maxGoldPerWave == undefined) this.stats.maxGoldPerWave = [0, null];
    if (this.stats.maxGoldPerTime == undefined) this.stats.maxGoldPerTime = [0, null];

    // this.challenges = playerData.challenges ?? {
    // 	0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
    // }

    this.sortedBox = playerData.sortedBox ?? 0;
    this.fossilInTeam = playerData.fossilInTeam ?? 0;
    this.itemAmount = 0;
    this.shinyAmount = 0;
    this.hasBike = false;

    this.items = playerData.items ?? [];
    this.updateItems();

    this.secrets = playerData.secrets ?? {
      cacnea: false,
      greavard: false,
      stakataka: false,
      luvdisc: false,
      chatot: false,
    };

    this.forceStarCount();
  }

  getSaveData() {
    return {
      update: this.update,
      name: this.name,
      portrait: this.portrait,
      gold: this.gold,
      health: this.health,
      records: this.records,
      stars: this.stars,
      teamSlots: this.teamSlots,
      extraGold: this.extraGold,
      achievements: this.achievements,
      achievementProgress: this.achievementProgress,
      stats: {
        ...this.stats,
        defeatedSpecies: Array.from(this.stats.defeatedSpecies),
      },
      //challenges: this.challenges,
      sortedBox: this.sortedBox,
      fossilInTeam: this.fossilInTeam,
      items: this.items,
      secrets: this.secrets,
    };
  }

  getDamaged(amount) {
    if (!this.main.area.waveActive) return;
    this.health[this.main.area.map.id] -= amount;
    this.main.UI.updatePlayer();
    if (this.health[this.main.area.map.id] <= 0) {
      this.health[this.main.area.map.id] = 0;
      if (this.main.area.inChallenge[3]) {
        this.main.defeatScene.open(true);
        this.main.challengeScene.cancelChallenge();
      } else this.main.defeatScene.open();
    }
  }

  getHealed(amount) {
    this.health[this.main.area.map.id] += amount;
    if (this.health[this.main.area.map.id] > 14) this.health[this.main.area.map.id] = 14;
    this.main.UI.updatePlayer();
  }

  changeGold(amount) {
    this.gold += amount;
    if (amount > 0) this.stats.totalGold += amount;

    if (this.gold >= 1000000) this.unlockAchievement(3);
    if (this.gold >= 99999999999) this.gold = 99999999999;

    this.events.emit('goldChange', this.gold);
  }

  obtainStar() {
    this.stars++;
    if (this.stars == 40 || this.stars == 160 || this.stars == 320 || this.stars == 540)
      this.unlockTeamSlot();
    if (this.stars == 600) this.unlockAchievement(4);
    if (this.stars == 900) this.unlockAchievement(5);
    if (this.stars % 25 == 0) this.extraGold += 1;
    if (this.stars % 100 == 0) this.extraGold += 2;
    if (this.stars % 300 == 0) this.extraGold += 3;
    if (this.stars % 400 == 0) this.extraGold += 4;
    if (this.stars % 450 == 0) this.extraGold += 5;
    if (this.stars % 800 == 0) this.extraGold += 10;
    if (this.stars % 850 == 0) this.extraGold += 20;
    if (this.stars % 875 == 0) this.extraGold += 20;
  }

  unlockTeamSlot() {
    this.teamSlots++;
    this.main.UI.updatePokemon();
  }

  unlockAchievement(pos) {
    if (!this.achievements[pos].status) {
      this.extraGold += 2;
      this.achievements[pos].status = true;
      this.achievementProgress.count++;
      if (this.achievementProgress.count === 31) this.unlockAchievement(31);
      if (this.main.profileScene.isOpen) this.main.profileScene.update();
    }
  }

  forceStarCount() {
    let totalStars = 0;
    this.records.forEach((num) => {
      totalStars += num;
    });

    if (this.stars != totalStars) this.stars = totalStars;
    if (this.stars >= 40 && this.teamSlots < 7) this.teamSlots++;
    if (this.stars >= 160 && this.teamSlots < 8) this.teamSlots++;
    if (this.stars >= 320 && this.teamSlots < 9) this.teamSlots++;
    if (this.stars >= 540 && this.teamSlots < 10) this.teamSlots++;

    if (this.stars >= 600) this.unlockAchievement(4);
    if (this.stars == 900) this.unlockAchievement(5);
  }

  updateItems() {
    this.items.forEach((item, i) => {
      this.items[i].name = itemData[item.id].name;
      this.items[i].description = itemData[item.id].description;
      this.items[i].restriction = itemData[item.id].restriction;
      this.itemAmount++;
      if (item.id == 'bicycle') this.hasBike = true;
    });
  }

  obtainItem(item) {
    this.items.push(item);
  }
}
