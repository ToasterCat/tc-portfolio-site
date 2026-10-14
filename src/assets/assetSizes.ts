/**
 * Pixel sizes of bundled images, keyed by their resolved URL. Filled in as
 * each image module loads (see vite-plugin-asset-sizes.ts), so any image
 * imported through AssetMap has a size here before the page renders.
 */
export interface AssetSize {
  width: number;
  height: number;
}

const SIZES = new Map<string, AssetSize>();

export function registerAssetSize(url: string, width: number, height: number) {
  SIZES.set(url, { width, height });
}

export function assetSize(url: string | undefined): AssetSize | undefined {
  return url ? SIZES.get(url) : undefined;
}
