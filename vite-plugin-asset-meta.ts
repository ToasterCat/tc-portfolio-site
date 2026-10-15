import path from 'node:path';
import sharp from 'sharp';
import type { Plugin } from 'vite';

const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/i;

/**
 * Measures every imported image at build time and makes a tiny blurred
 * preview of it, so pages can reserve the right space and show something
 * before the real file arrives, with no hand-typed sizes. Each image module
 * keeps its normal default export (the URL) and also registers the URL's
 * size and preview with src/assets/assetMeta.ts.
 *
 * Previews are ~16px WebP data URIs (well under 1 KB), made only for opaque
 * images: a blurred blob behind a transparent logo would show through it.
 */
export default function assetMeta(): Plugin {
  let registry = '';
  return {
    name: 'tc-asset-meta',
    configResolved(config) {
      registry = path.resolve(config.root, 'src/assets/assetMeta.ts').replace(/\\/g, '/');
    },
    async transform(code, id) {
      const file = id.split('?')[0];
      if (id.includes('?') || !IMAGE.test(file) || !code.startsWith('export default ')) return null;

      const meta = await sharp(file).metadata();
      // EXIF orientations 5-8 are rotated a quarter turn: swap the axes.
      const turned = (meta.orientation ?? 1) >= 5;
      const width = turned ? meta.height : meta.width;
      const height = turned ? meta.width : meta.height;
      const preview = meta.hasAlpha
        ? null
        : 'data:image/webp;base64,' +
          (await sharp(file).rotate().resize(16, 16, { fit: 'inside' }).webp({ quality: 40 }).toBuffer()).toString('base64');

      const url = code.slice('export default '.length).replace(/;\s*$/, '');
      return {
        code:
          `import { registerAsset } from ${JSON.stringify(registry)};\n` +
          `const url = ${url};\n` +
          `registerAsset(url, ${width}, ${height}, ${JSON.stringify(preview)});\n` +
          `export default url;\n`,
        map: null,
      };
    },
  };
}
