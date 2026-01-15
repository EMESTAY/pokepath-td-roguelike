const fs = require('fs');
const path = require('path');

const assetsBaseDir = path.join(__dirname, 'assets');
const imagesDir = path.join(assetsBaseDir, 'images');
const soundsDir = path.join(assetsBaseDir, 'sounds');

const extensions = {
  images: ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
  sounds: ['.mp3', '.wav', '.ogg']
};

function walk(dir, exts, baseDir) {
  let filesList = [];
  if (!fs.existsSync(dir)) {
    return filesList;
  }
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      filesList = filesList.concat(walk(fullPath, exts, baseDir));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        filesList.push(relativePath);
      }
    }
  });
  return filesList;
}

const images = walk(imagesDir, extensions.images, assetsBaseDir);
const sounds = walk(soundsDir, extensions.sounds, assetsBaseDir);

const assets = {
  images,
  sounds
};

const outputPath = path.join(assetsBaseDir, 'assets.json');
fs.writeFileSync(outputPath, JSON.stringify(assets, null, 2));