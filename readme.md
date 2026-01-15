# Roguelike Mode Documentation

## Overview

Roguelike Mode is a new game mode that focuses on adaptability and strategic resource management. Unlike the Standard mode which uses a Draft system, Roguelike mode forces you to build your team dynamically wave by wave.

## Core Rules

1.  **Random Start**: You begin with **one random Starter Pokémon** (Tier 1). No initial draft.
2.  **Reward Phase**: After completing each wave, the game pauses and offers you **3 Random Rewards**. You must choose one.
3.  **Mandatory Choice**: You **MUST** choose a reward to proceed. The reward window cannot be closed or skipped.
4.  **One Choice Per Wave**: You cannot take multiple rewards. Choose wisely between immediate power (Items/Levels) or long-term growth (New Pokemon/Gold).
5.  **Permadeath**: (Standard Rule) If your lives reach 0, the run ends.
6.  **Generation 1 Exclusive**: The Roguelike pool is currently restricted to **Generation 1 Pokémon** only (approx. 50 available).

## Mechanics

### 📈 Progression & XP

- **Passive XP**: Deployed Pokémon now gain experience automatically at the end of every wave based on wave difficulty.
- **Duplicate Upgrades**: Finding a duplicate of a Pokémon you own grants instant levels:
    - **+3 Levels** if Level < 4
    - **+2 Levels** if Level < 6
    - **+1 Level** otherwise
- **Diminishing Returns**: Early game upgrades are more impactful than late game ones.

### 💰 Economy & Interest

- **Scaling Interest**: Every time you finish a wave, you gain **+10% Interest** on your **currently held Gold**.
- **Gold Rewards**: Gold piles now scale polynomially (`Wave^1.5`) to keep up with inflation.
- _Strategy_: Saving gold early generates massive wealth in late waves.

### 🔄 Reroll System

- Don't like your 3 choices? Press **REROLL**.
- **Cost**: Starts at **200g**. Increases linearly by **+150g** for each subsequent reroll (200 -> 350 -> 500...).
- Cost resets to 200g at the start of a new wave.

### 🎲 Smart Loot & RNG

- **Tag Weighting**: The game analyzes your team's **Land Types** (Grass/Water/Mountain). Rewards are more likely to match your team's terrain compatibility.
- **Bad Luck Protection**: If your Lives drop to **4 or less**, the chance of finding **Potions/Consumables** triples (5% -> 15%).
- **Odds Display**: The UI now clearly shows the probability of rolling Unit, Item, Gold, or Consumable.

### 🎒 Items & Equipping

- **Direct Equip**: You can now equip items directly from the reward screen to any compatible team member.
- **Compatibility Check**: Rewards are filtered to ensure they are wearable by at least one member of your current team.
- **Visuals**: Items now use correct icons (e.g. Amulet Coin for Gold).

## Rewards Types

### 🐾 Pokémon Cards

- Adds a new Pokémon to your team.
- **Rarity**: Distinct visual styles for Common (Grey), Rare (Blue), and Legendary (Gold).
- **Gen 1 Pool**: Only Kanto Pokémon appear in this mode.

### 🎒 Held Items

- Standard items like **Protein**, **Magnet**, **Leftovers**.
- Automatically added to inventory or equipped directly.

### 🧪 Consumables

- **Rare Candy**: Instantly levels up random team members.
- **Max Potion**: Restores **1 Life** (Heart) to the Player.

### 🟡 Gold Piles

- Instant injection of cash.
- **Critical Gold**: 10% chance to find a "Rare" Gold pile with double value.

## Visuals & UI

- **Enhanced Cards**: New 3D-style cards with rarity-based borders, gradients, and hover animations.
- **Floating XP**: Visual indicators for XP gain and Level Ups on the map.
- **Assignment UI**: New interface for managing item distribution during rewards.