# PokéPath TD - Roguelike Mode

![Build Status](https://img.shields.io/badge/build-stable-brightgreen) ![Version](https://img.shields.io/badge/version-0.5.1-blue) ![License](https://img.shields.io/badge/license-MIT-green)

> A strategic, run-based twist on the classic PokéPath Tower Defense experience where adaptation is key.

## 📖 Description

**PokéPath TD - Roguelike** introduces a dynamic drafting and progression system to the core tower defense gameplay. Instead of buying specific units from a static shop, players must build their team from randomized rewards offered after waves. This mode forces players to adapt their strategy based on the cards they are dealt, managing resources between rerolling for better options or stabilizing their current board.

### Key Features

- **Drafting System**: Choose 1 of 3 randomized rewards after specific waves, including Pokémon, items, and rare consumables.
- **Dynamic Rarity**: Rewards are tiered (Common, Rare, Legendary) based on power and utility.
- **Duplicate Upgrades**: Finding a Pokémon you already own offers a powerful "+3 Level" upgrade instead of a duplicate unit.
- **Risk vs. Reward Rerolling**: Don't like your options? Reroll the selection for gold, but beware—the cost increases by 50% every time you use it in a single turn!
- **Roguelike Exclusives**: Access special consumables like **Max Potions** (restore Player Life) and **Rare Candies** (instant team leveling) found only in this mode.

## 📋 Table of Contents

- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Mechanics](#-mechanics)
- [Configuration](#-configuration)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [bun](https://bun.sh/)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/pokepath-td-electron.git
    cd pokepath-td-electron
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

1.  Launch the game via `bun start`.
2.  Select **Roguelike Mode** from the main menu (if enabled) or start a new run where the `RoguelikeScene` is integrated.
3.  Complete a wave of enemies.
4.  The **Reward Selection** screen will appear automatically.
5.  Click a card to select it, or click **REROLL** (500g) to refresh options.

## 🎮 Mechanics

### Reward Types

| Type           | Description                                                             | Rarity                    |
| :------------- | :---------------------------------------------------------------------- | :------------------------ |
| **Pokémon**    | Adds a new unit to your team or box.                                    | Common / Rare / Legendary |
| **Upgrade**    | If you roll a Pokémon you own, gain **+3 Levels** for it instantly.     | Rare (Blue Border)        |
| **Item**       | Adds a hold item to your inventory (e.g., _Leftovers_, _Choice Scarf_). | Common / Rare             |
| **Gold**       | A lump sum of currency. Critical rolls double the amount.               | Common / Rare             |
| **Max Potion** | Restores **1 Heart** (Life) to the player.                              | Legendary                 |
| **Rare Candy** | Instantly levels up **3 random team members**.                          | Rare                      |

### Reroll Economy

The reroll button allows you to fish for better rewards, but costs escalate quickly within a single draft session to prevent abuse.

- **Base Cost:** 500g
- **Scaling:** Cost multiplies by **1.5x** after each click.
- **Reset:** Cost resets to 500g at the start of the next draft.

## ⚙️ Configuration

The Roguelike settings can be tweaked in `src/js/game/scenes/RoguelikeScene.js` or via the global config object passed during initialization.

```javascript
// Example Config Object Structure
{
  "roguelike": {
    "rerollBaseCost": 500,
    "rerollMultiplier": 1.5,
    "rareCandyTargets": 3,
    "potionHealAmount": 1
  }
}
```

_Note: Currently, these values are hardcoded in the class. See `RoguelikeScene.js` to modify defaults._

## 💻 Development

### Setup

Ensure you have the Electron development headers installed if you are rebuilding native modules.

```bash
bun run dev
```

### Key Files

- `src/js/game/scenes/RoguelikeScene.js`: Core logic for the drafting UI, reward generation, and RNG weighting.
- `src/js/game/data/pokemonData.js`: Source of truth for Pokémon stats and rarity tiers.
- `src/js/game/data/itemData.js`: Source of truth for item pools.

### Running Tests

Currently, manual testing is required for UI interactions.

1.  Open the console with `Ctrl+Shift+I`.
2.  Invoke the scene manually for testing:
    ```javascript
    game.main.roguelikeScene.open();
    ```

## 🤝 Contributing

We welcome contributions to balance the RNG, add new rewards, or improve the UI!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingReward`)
3.  Commit your Changes (`git commit -m 'Add new Legendary Item'`)
4.  Push to the Branch (`git push origin feature/AmazingReward`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- **Nintendo/Game Freak** for the Pokémon IP (Fan Game usage).
- **Electron** for the application framework.
- Original contributors to the PokéPath TD core engine.
