import { Sprite } from '../../utils/Sprite.js';
import { playSound } from '../../file/audio.js';

export class Projectile extends Sprite {
  constructor(x, y, enemy, ctx, projectile, tower) {
    super(x, y, ctx, projectile.sprite.image, projectile.sprite.frames);
    this.reset(x, y, enemy, ctx, projectile, tower);
  }

  reset(x, y, enemy, ctx, projectile, tower) {
    // Init properties
    this.position = { x: x, y: y };

    // Update sprite/frames from new projectile data
    if (this.sprite && projectile.sprite) {
      this.sprite.src = projectile.sprite.image;
      this.frames.max = projectile.sprite.frames;
    }

    // Safety check for sprite dimensions
    if (this.sprite && this.sprite.complete && this.sprite.width > 0) {
      this.width = this.sprite.width / this.frames.max;
      this.height = this.sprite.height;
    } else {
      this.width = 0;
      this.height = 0;
    }

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    const rawSpeed = projectile.speed ?? 5;
    this.speed = rawSpeed <= 30 ? rawSpeed * 60 : rawSpeed;

    this.velocity = { x: 0, y: 0 };
    this.enemy = enemy;
    this.ctx = ctx;
    this.tower = tower;

    this.power = projectile.power ?? 1;
    this.critical = tower?.critical ?? 0;
    this.ricochetsLeft = projectile.ricochetsLeft ?? 0;

    this.markedForDeletion = false;

    this.lifeTime = 5000;
    this.age = 0;

    this.pulse = {
      active: false,
      x: 0,
      y: 0,
      radius: 0,
      alpha: 0,
      maxRadius: 0,
      speed: 0,
      color: '#ffffff',
    };
    this.impacting = false;
  }

  update(deltaTime = 1000 / 60) {
    const simDelta = deltaTime;
    const frameFactor = simDelta / (1000 / 60);
    const secs = simDelta / 1000;

    // si no hay objetivo  buscar uno
    if ((!this.enemy || this.enemy.hp <= 0) && this.tower) {
      const fallbackSource = {
        center: this.position || {
          x: this.position?.x ?? 0,
          y: this.position?.y ?? 0,
        },
      };
      const newTarget = this.tower.findClosestEnemy(fallbackSource, 200);
      if (newTarget) {
        this.enemy = newTarget;
      } else {
        this.markedForDeletion = true;
        return;
      }
    }

    if (!this.enemy || this.enemy.hp <= 0) {
      this.markedForDeletion = true;
      return;
    }

    this.age += simDelta;
    if (this.age >= this.lifeTime) {
      this.markedForDeletion = true;
      return;
    }

    // Si ya impactó animar y dibujar el pulso desde el propio proyectil
    if (this.impacting) {
      if (!this.ctx) {
        this.markedForDeletion = true;
        return;
      }

      const sp = this.pulse;
      if (!sp || !sp.active) {
        this.markedForDeletion = true;
        return;
      }

      this.ctx.beginPath();
      this.ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);

      const hex = (sp.color || '#ffffff').replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16) || 255;
      const g = parseInt(hex.substring(2, 4), 16) || 255;
      const b = parseInt(hex.substring(4, 6), 16) || 255;

      this.ctx.fillStyle = `rgba(${r},${g},${b},${sp.alpha})`;
      this.ctx.fill();

      sp.radius += sp.speed * frameFactor;
      sp.alpha -= 0.04 * frameFactor;

      if (sp.radius >= sp.maxRadius || sp.alpha <= 0) {
        this.markedForDeletion = true;
      }
      return; // no mover ni comprobar colisiones mientras animamos la pulse
    }

    const angle = Math.atan2(
      this.enemy.center.y - this.position.y,
      this.enemy.center.x - this.position.x
    );

    // movement: en px/sec (constructor lo normaliza), se mueve x speed/sec
    const vx = Math.cos(angle) * this.speed; // px/s
    const vy = Math.sin(angle) * this.speed; // px/s

    this.position.x += vx * secs;
    this.position.y += vy * secs;

    this.center = {
      x: this.position.x + (this.width ? this.width / 2 : 0),
      y: this.position.y + (this.height ? this.height / 2 : 0),
    };

    // dibujar después de mover
    this.draw();

    // colisión
    const dx = this.enemy.center.x - this.position.x;
    const dy = this.enemy.center.y - this.position.y;
    const distance = Math.hypot(dx, dy);

    const hitRadius = (this.enemy.radius ?? 6) + 2; // margen pequeño
    if (distance < hitRadius) {
      // efectos de impacto
      if (this.tower?.ability?.id === 'curse' || this.tower?.ability?.id === 'curseDoubleShot') {
        this.enemy.applyStatusEffect({ type: 'curse' });
      }

      // crítico
      let finalDamage = this.power;
      let isCritical = false;

      if (this.tower?.ability?.id === 'star') {
        finalDamage += this.tower.main.player.stars;
        if (this.tower?.pokemon?.favorite) finalDamage++;
        if (this.tower?.pokemon?.isShiny) finalDamage++;
        if (this.tower?.pokemon?.item?.id == 'starCandy') finalDamage++;
        this.tower.main.team.pokemon.forEach((poke) => {
          if (poke.id == 32) finalDamage++;
        });
      }

      if (this.tower?.ability?.id === 'scheme') {
        let probs = this.tower?.pokemon?.item?.id == 'shinyCharm' ? 3000 : 9000;
        const shiny = Math.floor(Math.random() * probs);
        if (shiny == 0) {
          const pokes = [...this.tower.main.team.pokemon, ...this.tower.main.box.pokemon];
          const noShinyPokes = pokes.filter(
            (pokemon) => !pokemon.isShiny && pokemon.specie.evolution === undefined
          );

          if (noShinyPokes.length > 0) {
            const randomPokemon = noShinyPokes[Math.floor(Math.random() * noShinyPokes.length)];
            randomPokemon.isShiny = true;
            randomPokemon.setShiny();
            playSound('shiny', 'effect');
            this.tower.main.player.shinyAmount++;
          }
        }
      }

      if (this.tower?.ability?.id === 'speedBoost' && this.tower?.speedBoost < 10) {
        this.tower.speedBoost++;
      }

      if (this.tower?.ability?.id == 'chatter') {
        finalDamage *= Math.floor(this.tower.main.dataManager.config.audio['effects'] * 0.2);
      }

      if (this.tower?.pokemon?.item?.id == 'loadedDice') {
        let bonus = Math.sqrt(this.ricochetsLeft * 0.5);
        finalDamage = Math.floor(finalDamage * bonus);
      }

      if (this.tower?.pokemon?.item?.id == 'protein') finalDamage += 10;

      if (this.tower?.pokemon?.item?.id == 'sharpBeak' && this.tower?.tile.land == 4) {
        let dist = Math.sqrt(
          Math.pow(this.enemy.position.x - this.tower.position.x, 2) +
            Math.pow(this.enemy.position.y - this.tower.position.y, 2)
        );
        let bonus = Math.sqrt(this.tower.range / dist, 2);
        finalDamage = Math.floor(finalDamage * bonus);
      }

      if (this.tower?.pokemon?.item?.id == 'sniperScope') {
        let dist = Math.sqrt(
          Math.pow(this.enemy.position.x - this.tower.position.x, 2) +
            Math.pow(this.enemy.position.y - this.tower.position.y, 2)
        );
        let bonus = dist > 150 ? 1.2 : 0.8;
        if (this.tower?.ability?.id == 'defiant') bonus = 1.2;
        finalDamage = Math.floor(finalDamage * bonus);
      }

      if (this.tower?.pokemon?.ability.id == 'sniper') {
        let dist = Math.sqrt(
          Math.pow(this.enemy.position.x - this.tower.position.x, 2) +
            Math.pow(this.enemy.position.y - this.tower.position.y, 2)
        );
        let bonus = Math.min(7, Math.floor(dist / 120) * 2);
        for (let i = 0; i < bonus; i++) finalDamage = Math.floor(finalDamage * 2);
      }

      if (this.tower?.ability?.id === 'moxie')
        finalDamage += Math.floor(finalDamage * this.tower.moxieBuff * 0.03);
      if (this.tower?.pokemon?.item?.id == 'hardStone')
        finalDamage += Math.floor(finalDamage * 0.2);
      if (this.tower?.pokemon?.item?.id == 'clawFossil')
        finalDamage += Math.floor(finalDamage * (this.tower.main.player.fossilInTeam * 0.05));

      if (
        this.tower?.pokemon?.item?.id == 'thickClub' ||
        this.tower?.pokemon?.item?.id == 'lightBall' ||
        this.tower?.pokemon?.item?.id == 'metalPowder' ||
        this.tower?.pokemon?.item?.id == 'lifeOrb'
      )
        finalDamage += Math.ceil(this.power / 2);

      if (
        this.tower?.pokemon?.item?.id == 'zoomLens' ||
        this.tower?.pokemon?.item?.id == 'quickPowder' ||
        this.tower?.pokemon?.item?.id == 'quickClaw'
      ) {
        if (this.tower?.ability?.id != 'defiant') finalDamage -= Math.ceil(this.power / 2);
        else finalDamage += Math.ceil(this.power / 2);
      }

      if (this.tower?.ability?.id === 'rampardos') {
        let rampardosBonus = 0;
        if (this.tower?.pokemon?.item?.id == 'rockyHelmet')
          rampardosBonus =
            finalDamage *
            (Math.abs(this.tower.main.player.health[this.tower.main.area.routeNumber] - 14) * 0.1);
        else
          rampardosBonus =
            finalDamage *
            (Math.abs(this.tower.main.player.health[this.tower.main.area.routeNumber] - 14) * 0.05);
        finalDamage += Math.ceil(rampardosBonus);
      }

      if (this.tower.teleportBuff) {
        if (this.tower?.pokemon?.item?.id == 'twistedSpoon')
          finalDamage += Math.ceil(finalDamage * 0.25 * this.tower.teleportBuff);
        else finalDamage = Math.ceil(finalDamage * this.tower.teleportBuff);
        this.tower.teleportBuff = 0;
      }

      if (this.tower?.pokemon?.item?.id === 'leek') this.critical *= 2;
      if (this.tower?.pokemon?.item?.id === 'domeFossil')
        this.critical += this.tower.main.player.fossilInTeam * 5;

      // rockruff
      if (
        this.tower?.pokemon.ability.id == 'toughClawsNight' &&
        (this.tower?.tile.land == 2 ||
          (this.tower?.tile.land == 1 && this.tower?.pokemon?.item?.id == 'fertiliser'))
      ) {
        finalDamage = Math.ceil(finalDamage * 1.5);
        this.critical = 100;
      } else if (this.tower?.pokemon.ability.id == 'toughClawsDay' && this.tower?.tile.land == 4) {
        finalDamage = Math.ceil(finalDamage * 1.5);
        this.critical = 100;
      } else if (
        this.tower?.pokemon.ability.id == 'toughClaws' &&
        (this.tower?.tile.land == 2 ||
          (this.tower?.tile.land == 1 && this.tower?.pokemon?.item?.id == 'fertiliser'))
      ) {
        this.critical = 100;
      } else if (this.tower?.pokemon.ability.id == 'toughClaws' && this.tower?.tile.land == 4) {
        finalDamage = Math.ceil(finalDamage * 1.5);
      }

      // if (this.tower?.pokemon?.item?.id == 'blueBandana' && this.tower?.ability?.id == 'defiant') this.critical += this.tower?.pokemon?.critical;

      if (
        Math.random() * 100 < this.critical &&
        (this.tower?.pokemon?.item?.id != 'blueBandana' || this.tower?.ability?.id == 'defiant')
      ) {
        isCritical = true;
        let multiplier = this.tower?.ability?.id === 'superCritical' ? 2.0 : 1.5;
        if (this.tower?.pokemon?.item?.id === 'leek') multiplier *= 2;
        if (this.tower.criticalAura) multiplier *= 1.33;
        finalDamage = Math.ceil(finalDamage * multiplier);
        if (this.tower?.ability?.id === 'armaldo') this.ricochetsLeft++;
      }

      if (this.tower?.pokemon?.item?.id === 'blueBandana') {
        finalDamage = Math.ceil(finalDamage * (1 + this.critical * 0.0075));
      }

      if (this.tower?.ability?.id === 'focus') {
        if (this.tower.lastTarget === this.enemy) {
          this.tower.damageBoost = (this.tower.damageBoost || 0) + Math.ceil(finalDamage * 0.075);
        } else {
          this.tower.damageBoost = 0;
          this.tower.lastTarget = this.enemy;
        }
        finalDamage += this.tower.damageBoost || 0;
      }

      if (this.tower?.ability?.id === 'firstImpression') {
        if (this.tower.lastTarget !== this.enemy) {
          finalDamage = Math.ceil(finalDamage * 2);
          this.tower.lastTarget = this.enemy;
        }
      }

      this.enemy.getDamaged(
        finalDamage,
        'physical',
        this.tower?.pokemon?.ability,
        isCritical,
        new Set(),
        this.tower.pokemon,
        this.tower
      );

      if (this.tower?.pokemon?.item?.id === 'amuletCoin') {
        let g = Math.ceil(finalDamage * 0.03);
        this.tower.main.area.goldWave += g;
        this.tower.main.player.changeGold(g);
      }

      // efectos secundarios
      if (isCritical && this.tower?.pokemon?.item?.id == 'razorClaw' && this.enemy.canSlow)
        this.enemy.applyStatusEffect({
          type: 'slow',
          duration: 0.2,
          slowPercent: 0.5,
        });

      if (this.enemy.canBurn && this.tower?.ability?.id === 'burn') {
        if (this.tower?.pokemon?.item?.id == 'falmeOrb')
          this.enemy.applyStatusEffect(
            { type: 'burn', damagePercent: 0.00625, duration: 10 },
            this.tower.pokemon
          );
        else
          this.enemy.applyStatusEffect(
            { type: 'burn', damagePercent: 0.005, duration: 10 },
            this.tower.pokemon
          );
      }
      if (
        this.enemy.canPoison &&
        (this.tower?.ability?.id === 'poison' || this.tower?.ability?.id === 'poisonDoubleShot')
      ) {
        this.enemy.applyStatusEffect(
          { type: 'poison', damagePercent: 0.001, stacks: 1 },
          this.tower.pokemon
        );
        if (
          this.tower?.pokemon?.item?.id == 'toxicOrb' ||
          (this.tower?.pokemon?.item?.id == 'poisonBarb' && Math.random() < 0.5)
        )
          this.enemy.applyStatusEffect(
            { type: 'poison', damagePercent: 0.001, stacks: 1 },
            this.tower.pokemon
          );
      }
      if (
        this.enemy.canSlow &&
        (this.tower?.ability?.id === 'slow' ||
          this.tower?.ability?.id === 'slowSplash' ||
          this.tower?.ability?.id === 'cradily')
      ) {
        this.tower?.pokemon?.item?.id == 'lightClay'
          ? this.enemy.applyStatusEffect({
              type: 'slow',
              slowPercent: 0.5,
              duration: 2.2,
            })
          : this.enemy.applyStatusEffect({
              type: 'slow',
              slowPercent: 0.5,
              duration: 2,
            });
      }
      if (this.enemy.canStun && this.tower?.ability?.id === 'stunMono') {
        if (Math.random() < 0.3) {
          this.tower?.pokemon?.item?.id == 'lightClay'
            ? this.enemy.applyStatusEffect({ type: 'stun', duration: 2.2 })
            : this.enemy.applyStatusEffect({ type: 'stun', duration: 2 });
        }
      }
      if (
        this.enemy.canStun &&
        (this.tower?.ability?.id === 'stunMonoNerf' || this.tower?.ability?.id === 'static')
      ) {
        if (this.tower?.pokemon?.item?.id == 'cellBattery')
          this.enemy.applyStatusEffect({ type: 'stun', duration: 0.1 });
        else if (Math.random() < 0.05) {
          this.tower?.pokemon?.item?.id == 'lightClay'
            ? this.enemy.applyStatusEffect({ type: 'stun', duration: 1.65 })
            : this.enemy.applyStatusEffect({ type: 'stun', duration: 1.5 });
        }
      }
      if (this.tower?.ability?.id === 'nightmare') {
        this.enemy.applyStatusEffect(
          { type: 'nightmare', damage: null, stacks: 1 },
          this.tower.pokemon
        );
      }

      // splash
      if (
        this.tower?.ability?.id === 'splash' ||
        this.tower?.ability?.id === 'slowSplash' ||
        this.tower?.ability?.id === 'synchronySplash' ||
        this.tower?.pokemon?.item?.id == 'sprayduck'
      ) {
        const splashRadius = this.tower?.pokemon?.item?.id == 'dragonFang' ? 130 : 65;
        this.tower.main.area.enemies.forEach((e) => {
          if (e !== this.enemy && e.hp > 0) {
            const dist = Math.hypot(
              e.center.x - this.enemy.center.x,
              e.center.y - this.enemy.center.y
            );
            if (dist <= splashRadius) {
              e.getDamaged(
                Math.ceil(this.power * 0.5),
                'physical',
                this.tower?.pokemon?.ability,
                isCritical,
                new Set(),
                this.tower.pokemon
              );
              if (e.canSlow && this.tower?.ability?.id === 'slowSplash') {
                this.tower?.pokemon?.item?.id == 'lightClay'
                  ? e.applyStatusEffect({
                      type: 'slow',
                      slowPercent: 0.5,
                      duration: 2.2,
                    })
                  : e.applyStatusEffect({
                      type: 'slow',
                      slowPercent: 0.5,
                      duration: 2,
                    });
              }
              if (this.tower?.ability?.id === 'synchronySplash') {
                this.enemy.statusEffects.forEach((effect) => {
                  if (effect.type === 'burn' && e.canBurn)
                    e.applyStatusEffect(
                      { type: 'burn', damagePercent: 0.005, duration: 10 },
                      this.tower.pokemon
                    );
                  if (effect.type === 'poison' && e.canPoison)
                    e.applyStatusEffect(
                      { type: 'poison', damagePercent: 0.001, stacks: 1 },
                      this.tower.pokemon
                    );
                  if (effect.type === 'slow' && e.canSlow)
                    e.applyStatusEffect({
                      type: 'slow',
                      slowPercent: 0.5,
                      duration: 2,
                    });
                  if (effect.type === 'stun' && e.canStun)
                    e.applyStatusEffect({ type: 'stun', duration: 2 });
                  if (
                    effect.type == 'nightmare' &&
                    this.tower?.pokemon?.item?.id == 'nightmareCloth'
                  )
                    e.applyStatusEffect(
                      { type: 'nightmare', damage: null, stacks: 1 },
                      this.tower.pokemon
                    );
                });
              }
            }
          }
        });
      }

      // rebote
      if (this.ricochetsLeft > 0 && this.tower && this.tower?.pokemon?.item?.id != 'loadedDice') {
        const next = this.findClosestEnemy(this.enemy, 200);
        if (next) {
          const reducedPower =
            this.tower?.pokemon?.item?.id === 'metronome'
              ? Math.ceil(this.power * 0.85)
              : Math.ceil(this.power * 0.7);
          const sx = this.enemy.center.x + (Math.random() - 0.5) * 6;
          const sy = this.enemy.center.y + (Math.random() - 0.5) * 6;

          const newProj = this.tower.main.projectilePool.get(
            sx,
            sy,
            next,
            this.ctx,
            {
              ...this.tower.projectile,
              power: reducedPower,
              ricochetsLeft: Math.max(0, this.ricochetsLeft - 1),
              speed: this.speed,
            },
            this.tower
          );

          this.tower.projectiles.push(newProj);
        }
      }

      if (
        this.tower?.ability?.id === 'splash' ||
        this.tower?.ability?.id === 'slowSplash' ||
        this.tower?.ability?.id === 'synchronySplash' ||
        this.tower?.pokemon?.item?.id == 'sprayduck'
      ) {
        const pulseRadius = this.tower?.pokemon?.item?.id == 'dragonFang' ? 130 : 65;
        this.pulse = {
          active: true,
          x: this.enemy.center.x,
          y: this.enemy.center.y,
          radius: 0,
          alpha: 0.75,
          maxRadius: pulseRadius,
          speed: pulseRadius / 12,
          color: this.tower?.pokemon?.specie?.color || '#ffffff',
        };

        this.velocity.x = 0;
        this.velocity.y = 0;
        this.impacting = true;

        // detener aquí para que empiece la animación
        return;
      }
      // marcar para eliminación
      this.markedForDeletion = true;
      return;
    }

    // si sale del canvas -> eliminarlo
    if (this.ctx && this.ctx.canvas) {
      if (
        this.position.x < -50 ||
        this.position.x > this.ctx.canvas.width + 50 ||
        this.position.y < -50 ||
        this.position.y > this.ctx.canvas.height + 50
      ) {
        this.markedForDeletion = true;
      }
    }
  }

  findClosestEnemy(fromEnemy, maxDist = 200) {
    let closest = null;
    let minDist = maxDist;
    for (const e of this.tower.main.area.enemies) {
      if (!e || e === fromEnemy || e.hp <= 0 || e.invisible) continue;
      const dx = e.center.x - fromEnemy.center.x;
      const dy = e.center.y - fromEnemy.center.y;
      const d = Math.hypot(dx, dy);
      if (d < minDist) {
        minDist = d;
        closest = e;
      }
    }
    return closest;
  }
}
