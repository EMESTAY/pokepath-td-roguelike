const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'src');

// Map of OLD relative path (from src/js/) -> NEW absolute path (relative to src root)
// We need to be careful. The old imports were relative.
// Best approach:
// 1. Define a map of FILENAME -> NEW PATH (assuming unique filenames, which is mostly true here).
// 2. Or map OLD_PATH (e.g. 'game/component/Tower.js') -> NEW_PATH ('features/combat/entities/Tower.js').

const fileMap = {
  // Main
  'main.js': 'src/main/main.js',
  'preload.js': 'src/main/preload.js',

  // Core
  'js/game/core/EventManager.js': 'src/core/EventBus.js',
  'js/game/Game.js': 'src/core/GameLoop.js',
  'js/game/Init.js': 'src/core/Init.js',
  'js/game/Main.js': 'src/core/Main.js',
  'js/game/RunState.js': 'src/core/RunState.js',
  'js/file/audio.js': 'src/core/AudioSystem.js',
  'js/bootstrap.js': 'src/main/bootstrap.js',

  // Utils
  'js/utils/Element.js': 'src/features/ui/Element.js',
  'js/utils/GameScene.js': 'src/core/utils/GameScene.js',
  'js/utils/Input.js': 'src/core/InputSystem.js',
  'js/utils/KeyController.js': 'src/core/utils/KeyController.js',
  'js/utils/Notification.js': 'src/features/ui/Notification.js',
  'js/utils/ObjectPool.js': 'src/core/utils/ObjectPool.js',
  'js/utils/RNG.js': 'src/core/utils/RNG.js',
  'js/utils/SpatialGrid.js': 'src/core/utils/SpatialGrid.js',
  'js/utils/Sprite.js': 'src/core/utils/Sprite.js',
  'js/utils/Tooltip.js': 'src/features/ui/Tooltip.js',
  'js/utils/Utility.js': 'src/core/utils/Utility.js',

  // Features - UI
  'js/game/UI.js': 'src/features/ui/UIManager.js',
  'js/game/component/PokemonSlot.js': 'src/features/ui/PokemonSlot.js',
  // Scenes
  'js/game/scenes/BoxScene.js': 'src/features/ui/scenes/BoxScene.js',
  'js/game/scenes/MenuScene.js': 'src/features/ui/scenes/MenuScene.js',
  'js/game/scenes/MapScene.js': 'src/features/ui/scenes/MapScene.js',
  'js/game/scenes/ShopScene.js': 'src/features/ui/scenes/ShopScene.js',
  'js/game/scenes/ProfileScene.js': 'src/features/ui/scenes/ProfileScene.js',
  'js/game/scenes/ChallengeScene.js': 'src/features/ui/scenes/ChallengeScene.js',
  'js/game/scenes/NewGameScene.js': 'src/features/ui/scenes/NewGameScene.js',
  'js/game/scenes/PokemonScene.js': 'src/features/ui/scenes/PokemonScene.js',
  'js/game/scenes/TutorialScene.js': 'src/features/ui/scenes/TutorialScene.js',
  'js/game/scenes/DraftScene.js': 'src/features/ui/scenes/DraftScene.js',
  'js/game/scenes/DefeatScene.js': 'src/features/ui/scenes/DefeatScene.js',
  'js/game/scenes/FinalScene.js': 'src/features/ui/scenes/FinalScene.js',
  'js/game/scenes/RoguelikeScene.js': 'src/features/ui/scenes/RoguelikeScene.js',
  'js/game/scenes/RoguelikeStarterScene.js': 'src/features/ui/scenes/RoguelikeStarterScene.js',
  'js/game/scenes/StarterSelectionScene.js': 'src/features/ui/scenes/StarterSelectionScene.js',
  'js/game/scenes/BanetteScene.js': 'src/features/ui/scenes/BanetteScene.js',
  'js/game/scenes/ChangePokemonName.js': 'src/features/ui/scenes/ChangePokemonName.js',

  // Features - Combat
  'js/game/component/Enemy.js': 'src/features/combat/entities/Enemy.js',
  'js/game/component/Pokemon.js': 'src/features/combat/entities/Pokemon.js',
  'js/game/component/Projectile.js': 'src/features/combat/entities/Projectile.js',
  'js/game/component/Tower.js': 'src/features/combat/entities/Tower.js',
  'js/game/mechanics/Trait.js': 'src/features/combat/systems/Trait.js',
  // Traits (Folder) - we will handle this by checking if path starts with `js/game/mechanics/traits/`

  // Features - Map
  'js/game/core/Area.js': 'src/features/map/Area.js',
  'js/game/component/PlacementTile.js': 'src/features/map/tiles/PlacementTile.js',

  // Features - Economy
  'js/game/core/Shop.js': 'src/features/economy/Shop.js',
  'js/game/mechanics/DraftLootManager.js': 'src/features/economy/DraftLootManager.js',

  // Features - Player
  'js/game/core/Player.js': 'src/features/player/Player.js',
  'js/game/core/Team.js': 'src/features/player/Team.js',
  'js/game/core/TeamManager.js': 'src/features/player/TeamManager.js',
  'js/game/core/Box.js': 'src/features/player/Box.js',

  // Data
  'js/game/core/DataManager.js': 'src/data/DataManager.js',
  'js/file/data.js': 'src/data/repositories/StorageRepository.js',
  'js/file/text.js': 'src/data/static/text.js', // Assuming checking where text.js went
};

// Also handle folder wildcards:
// js/game/data/* -> src/data/static/*

function getNewPath(filename) {
  // Reverse lookup in fileMap? No, we need to correct IMPORTS.
  // If a file imports '../utils/Element.js', we need to resolve that to 'src/js/utils/Element.js' (the old path)
  // and then find the new path 'src/features/ui/Element.js'.
  // Then calculate the new relative path from the current file's new location.

  // Simplification: We search by filename in the map values.
  // Ideally, we scan the whole project first to build a robust Map of [Basename] -> [AbsolutePath].
  return null;
}

// Build a reverse map: BaseName -> NewAbsolutePath
const basenameMap = {};
for (const [oldPath, newPath] of Object.entries(fileMap)) {
  const base = path.basename(oldPath);
  basenameMap[base] = newPath;
}
// Add explicit overrides for duplicates like 'data.js' (there was src/js/file/data.js and src/js/game/data/something probably)
basenameMap['StorageRepository.js'] = 'src/data/repositories/StorageRepository.js'; // renamed
basenameMap['DataManager.js'] = 'src/data/DataManager.js';
basenameMap['EventBus.js'] = 'src/core/EventBus.js'; // renamed
basenameMap['AudioSystem.js'] = 'src/core/AudioSystem.js'; // renamed
basenameMap['GameLoop.js'] = 'src/core/GameLoop.js'; // renamed

// Recurse function
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

// 1. Scan src to find all files and build a map of "Current Location"
const currentFiles = {};
walkDir('src', (filePath) => {
  if (filePath.endsWith('.js') && !filePath.includes('node_modules')) {
    currentFiles[path.basename(filePath)] = filePath.replace(/\\/g, '/');
  }
});

// 2. Fix imports
walkDir('src', (filePath) => {
  if (!filePath.endsWith('.js')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const dir = path.dirname(filePath).replace(/\\/g, '/');

  // Regex for imports: import ... from 'PATH'; or require('PATH');
  // We handle static imports mostly.
  content = content.replace(
    /(import\s+.*?from\s+['"])(.*?)(['"])|(require\(['"])(.*?)(['"])/g,
    (match, impStart, impPath, impEnd, reqStart, reqPath, reqEnd) => {
      const p = impPath || reqPath;
      const start = impStart || reqStart;
      const end = impEnd || reqEnd;

      if (!p.startsWith('.')) return match; // Ignore packages

      // Resolve old import to what it was pointing to.
      // This is tricky because the file ITSELF has moved, but unchanged content refers to OLD relative paths relative to OLD location.
      // Actually, the content is moved, so the relative path is now broken relative to NEW location.
      // Wait, the content is IDENTICAL.
      // Example: src/core/GameLoop.js (was src/js/game/Game.js)
      // allows import { Tower } from './component/Tower.js';
      // Relative to NEW location src/core/, './component/Tower.js' does not exist.
      // Relative to OLD location src/js/game/, it pointed to src/js/game/component/Tower.js.

      // We need to know:
      // 1. Where this file WAS.
      // 2. Resolve the import path relative to where it WAS.
      // 3. Find where the target IS NOW.
      // 4. Compute new relative path.

      // Find Old Path of current file
      let currentFileBase = path.basename(filePath);
      let oldPathRelative = null;
      for (const [op, np] of Object.entries(fileMap)) {
        if (np.endsWith(currentFileBase)) {
          // Loose match or check logic
          // If filenames are unique, easy.
          // We renamed Game.js to GameLoop.js.
          if (np === filePath.replace(/\\/g, '/')) {
            oldPathRelative = op;
            break;
          }
        }
      }

      // Fallback for files not in map (like traits)
      if (!oldPathRelative) {
        // Heuristic?
        // Maybe we fix imports based on basename target.
        const targetBasename = path.basename(p);
        let targetIsNow = currentFiles[targetBasename];

        // Handle renames
        if (targetBasename === 'EventManager.js') targetIsNow = basenameMap['EventBus.js'];
        if (targetBasename === 'Game.js') targetIsNow = basenameMap['GameLoop.js'];
        if (targetBasename === 'audio.js') targetIsNow = basenameMap['AudioSystem.js'];
        if (targetBasename === 'data.js') targetIsNow = basenameMap['StorageRepository.js']; // or text.js? Be careful.

        if (targetIsNow) {
          // Calculate relative path from Current File Directory to Target New Directory
          let newRel = path.relative(dir, targetIsNow).replace(/\\/g, '/');
          if (!newRel.startsWith('.')) newRel = './' + newRel;
          return `${start}${newRel}${end}`;
        }
        return match;
      }

      // If we found the old path, we can resolve strictly
      const oldDir = path.dirname('src/' + oldPathRelative);
      const oldTarget = path.join(oldDir, p).replace(/\\/g, '/');

      // Find where oldTarget moved to
      // We strip 'src/' to match keys
      const oldTargetKey = oldTarget.replace('src/', '');

      let newTarget = fileMap[oldTargetKey];
      if (!newTarget) {
        // Try direct basename matching if strict lookup fails
        const targetBase = path.basename(p);
        // Handle known renames
        if (targetBase === 'EventManager.js') newTarget = 'src/core/EventBus.js';
        else if (targetBase === 'Game.js') newTarget = 'src/core/GameLoop.js';
        else if (targetBase === 'audio.js') newTarget = 'src/core/AudioSystem.js';
        else if (targetBase === 'data.js' && p.includes('file'))
          newTarget = 'src/data/repositories/StorageRepository.js';
        else newTarget = currentFiles[targetBase];
      }

      if (newTarget) {
        let newRel = path.relative(dir, newTarget).replace(/\\/g, '/');
        if (!newRel.startsWith('.')) newRel = './' + newRel;
        changed = true;
        return `${start}${newRel}${end}`;
      }

      return match;
    }
  );

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated imports in ${filePath}`);
  }
});
