// Regenerates every icon/splash PNG the Xcode project needs from the
// text-only source resources/icon.svg. The PNGs themselves are NOT kept in
// git (the snapshot push that seeds this repo is UTF-8 text only), so CI
// runs this script on the macOS runner before `cap sync`:
//
//   npm install --no-save sharp
//   node scripts/generate-assets.js
//
// Outputs (all square renders of the icon artwork, matching the sizes the
// committed asset catalogs declare):
//   icon.png                                                     1024x1024
//   ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png  1024x1024
//   ios/App/App/Assets.xcassets/Splash.imageset/splash-2732x2732*.png  2732x2732
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const svg = fs.readFileSync(path.join(root, 'resources', 'icon.svg'));

async function render(relFile, size) {
  const file = path.join(root, relFile);
  await sharp(svg).resize(size, size, { fit: 'fill' }).png().toFile(file);
  console.log('generated', relFile, size + 'x' + size);
}

(async () => {
  await render('icon.png', 1024);
  const iconSet = 'ios/App/App/Assets.xcassets/AppIcon.appiconset';
  if (fs.existsSync(path.join(root, iconSet))) {
    await render(path.join(iconSet, 'AppIcon-512@2x.png'), 1024);
  }
  const splashSet = 'ios/App/App/Assets.xcassets/Splash.imageset';
  if (fs.existsSync(path.join(root, splashSet))) {
    for (const name of ['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png']) {
      await render(path.join(splashSet, name), 2732);
    }
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
