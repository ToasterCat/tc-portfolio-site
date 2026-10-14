import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';
import type { Plugin } from 'vite';

const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/i;

/**
 * Records every imported image's pixel size at build time, so gallery data
 * never needs hand-copied width/height. Each image module keeps its normal
 * default export (the URL) and also registers that URL's size with
 * src/assets/assetSizes.ts, which the media code reads to reserve space
 * before the image loads.
 */
export default function assetSizes(): Plugin {
  let registry = '';
  return {
    name: 'tc-asset-sizes',
    configResolved(config) {
      registry = path.resolve(config.root, 'src/assets/assetSizes.ts').replace(/\\/g, '/');
    },
    transform(code, id) {
      const file = id.split('?')[0];
      if (id.includes('?') || !IMAGE.test(file) || !code.startsWith('export default ')) return null;
      const size = imageSize(fs.readFileSync(file));
      // EXIF orientations 5-8 are rotated a quarter turn: swap the axes.
      const turned = (size.orientation ?? 1) >= 5;
      const width = turned ? size.height : size.width;
      const height = turned ? size.width : size.height;
      const url = code.slice('export default '.length).replace(/;\s*$/, '');
      return {
        code:
          `import { registerAssetSize } from ${JSON.stringify(registry)};\n` +
          `const url = ${url};\n` +
          `registerAssetSize(url, ${width}, ${height});\n` +
          `export default url;\n`,
        map: null,
      };
    },
  };
}
