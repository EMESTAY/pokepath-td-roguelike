const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/js/game/data/pokemonData.js");
const content = fs.readFileSync(dataPath, "utf-8");

const regex = /key:\s*'([^']+)'/g;
const matches = [];
let match;

while ((match = regex.exec(content)) !== null) {
  matches.push(match[1]);
}

// Remove duplicates and sort
const unique = [...new Set(matches)].sort();

console.log(`Found ${unique.length} Pokemon:`);
console.log(unique.join(", "));
