import type { CSSProperties } from 'react';

/**
 * Pixel size and blurred preview of each bundled image, keyed by its resolved
 * URL. Filled in as each image module loads (see vite-plugin-asset-meta.ts),
 * so any imported image has an entry here before the page renders.
 */
export interface AssetSize {
  width: number;
  height: number;
}

interface AssetMeta extends AssetSize {
  /** ~16px blurred WebP data URI; null for images with transparency. */
  preview: string | null;
}

const META = new Map<string, AssetMeta>();

export function registerAsset(url: string, width: number, height: number, preview: string | null) {
  META.set(url, { width, height, preview });
}

export function assetSize(url: string | undefined): AssetSize | undefined {
  const m = url ? META.get(url) : undefined;
  return m && { width: m.width, height: m.height };
}

export function assetPreview(url: string | undefined): string | undefined {
  return (url && META.get(url)?.preview) || undefined;
}

/**
 * Props for an <img> that shows its blurred preview while the real file
 * loads: the preview is a background the image paints over, and the alt
 * text is hidden until then (screen readers still get it). The image keeps
 * its width/height, so the space is reserved too.
 */
export function previewProps(url: string | undefined): { className?: string; style?: CSSProperties } {
  const preview = assetPreview(url);
  return preview ? { className: 'has-preview', style: { backgroundImage: `url("${preview}")` } } : {};
}

/**
 * A background layer that starts as the preview and becomes the full image
 * once `ready` (see useBackgroundReady); pair with the .progressive-bg class.
 */
export function progressiveBackground(url: string, ready: boolean): string | undefined {
  if (ready) return withPreview(url);
  const preview = assetPreview(url);
  return preview ? `url("${preview}")` : undefined;
}

/** A CSS background value: the image, with its preview underneath until it arrives. */
export function withPreview(url: string): string {
  const preview = assetPreview(url);
  return preview ? `url("${url}"), url("${preview}")` : `url("${url}")`;
}
