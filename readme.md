# PokéPath TD - Roguelike Mode

![Build Status](https://img.shields.io/badge/build-stable-brightgreen) ![Version](https://img.shields.io/badge/version-0.5.1-blue) ![License](https://img.shields.io/badge/license-MIT-green)

> A strategic, run-based twist on the classic PokéPath Tower Defense experience where adaptation is key.

## 📖 Description

**PokéPath TD - Roguelike** transforms the core tower defense gameplay into a dynamic drafting adventure. Instead of a static shop, you must build and adapt your team using randomized rewards earned after surviving waves. This mode emphasizes strategic flexibility, resource management, and making the best of the hand you're dealt.

### Key Features

- **Drafting System**: Select 1 of 3 randomized rewards after specific waves.
- **Dynamic Reward Pool**: Includes Pokémon, Hold Items, Gold, and rare Consumables.
- **Smart Upgrades**: Finding a duplicate Pokémon grants a powerful **Level Boost** (up to +3 levels) instead of a useless copy.
- **Reroll Economy**: Spend gold to refresh your options. Costs increase linearly within a draft to discourage endless fishing.
- **Team Synergy**: Pokémon that share land types with your current team appear more frequently.
- **Bad Luck Protection**: Increased chance for healing items when Player Health is critical (≤ 4 hearts).

## 📋 Table of Contents

- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Mechanics](#-mechanics)
- [Configuration](#-configuration)
- [Development](#-development)
- [Contributing](#-contributing)
-

## 📦 Installation

This project exclusively uses **Bun**.

### Prerequisites

- [Bun](https://bun.sh/) (latest version recommended)
- [Electron](https://www.electronjs.org/) (latest version recommended)
- [Node.js](https://nodejs.org/) (latest version recommended)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/EMESTAY/pokepath-td-roguelike.git
    cd pokepath-td-roguelike
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Run the game:**
    ```bash
    bun start
    ```

## 🚀 Quick Start

1.  Launch the game using `bun start`.
2.  Enter **Roguelike Mode** (or a mode utilizing `RoguelikeScene`).
3.  Survive the wave.
4.  When the **Reward Selection** screen appears:
    - Hover over cards to see details (Abilities, Item effects).
    - Click **REROLL** (-200g) if you need better options.
    - Click a card to select it.
5.  If you select an **Item**, assign it to a compatible Pokémon on your team or stash it in your Bag.

## 🎮 Mechanics

### Reward Logic

The game rolls for a reward type based on the following probabilities:

| Type           | Chance  | Description                                                         |
| :------------- | :------ | :------------------------------------------------------------------ |
| **Pokémon**    | **45%** | Adds a new unit. Gen 1, Low/Mid Cost, Non-Mega.                     |
| **Item**       | **35%** | Adds a hold item compatible with your team.                         |
| **Consumable** | **5%**  | Rare single-use effects. Chance increases to **15%** if Health ≤ 4. |
| **Gold**       | **15%** | Currency. Amount scales with wave number. 10% chance to Crit (2x).  |

### Unique Rewards

- **Upgrade (Blue Border)**: Replaces a duplicate Pokémon. Grants **+3 Levels** (if lvl < 4), **+2 Levels** (if lvl < 6), or **+1 Level** otherwise.
- **Max Potion (Legendary)**: Restores **1 Life (Heart)** to the Player.
- **Rare Candy (Rare)**: Instantly levels up **3 random team members**.

### Reroll System

You can refresh the reward pool for a cost. The cost increases every time you reroll _within the same selection phase_.

- **Base Cost**: 200g
- **Scaling**: +150g per use (200g -> 350g -> 500g -> ...).
- **Reset**: Cost resets to 200g at the next draft.

## ⚙️ Configuration

The Roguelike mechanics are primarily handled in `src/js/game/scenes/RoguelikeScene.js`.

### Key Variables

You can modify these values in the `RoguelikeScene` class:

- `rerollCost`: Starting cost for rerolls (Default: 200).
- `consumableChance`: Probability of seeing consumables (Default: 0.05).
- `badLuckThreshold`: Health value that triggers higher consumable odds (Default: 4).

## 💻 Development

### Environment Setup

1.  Ensure **Bun** is installed. (Or npm if you prefer)
2.  Install dependencies: `bun install`.

### Building

To package the application for distribution:

```bash
bun run build
# Note: Ensure a build script is defined in package.json, typically "electron-builder"
```

### Key Files

- **Logic**: `src/js/game/scenes/RoguelikeScene.js` - Main drafting and RNG logic.
- **Data**: `src/js/game/data/pokemonData.js` - Pokémon stats and tiers.
- **Data**: `src/js/game/data/itemData.js` - Item details and restrictions.

### Testing Roguelike Features

To test the scene directly without playing through waves, you can invoke it from the developer console (Ctrl+Shift+I):

```javascript
// Force open the Roguelike reward scene
game.main.roguelikeScene.open();
```

## 🤝 Contributing

Contributions to the Roguelike mode are welcome!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewRewardType`)
3.  Commit your Changes (`git commit -m 'Add Master Ball reward'`)
4.  Push to the Branch (`git push origin feature/NewRewardType`)
5.  Open a Pull Request

## 👏 Acknowledgments

- **Nintendo/Game Freak** for the Pokémon IP.
- **Khydra** for developing the original [PokéPath game](https://khydra98.itch.io/pokepath).
  - Follow on Twitter: [@khydra98](https://x.com/khydra98)
  - Huge thanks for the foundation this roguelike mode is built upon!
