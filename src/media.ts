import { ASSET_MANIFEST } from './assets/AssetMap';
import { MediaRef } from './types/project.model';

/**
 * Media server base URL. Project data stores paths under it, never full URLs,
 * so moving hosts is a one-line change here (or REACT_APP_MEDIA_BASE in .env).
 *
 * Defaults to the CloudFront distribution. Switch to the custom domain
 * (https://media.toastercat-studios.com/assets/tc-home/) once CloudFront has
 * it as an alternate domain name with a matching ACM certificate - as of
 * 2026-10-01 HTTPS on that name fails with a certificate mismatch.
 */
export const MEDIA_BASE = withTrailingSlash(
  process.env.REACT_APP_MEDIA_BASE || 'https://dw7warrfe0txv.cloudfront.net/assets/tc-home/'
);

function withTrailingSlash(url: string) {
  return url.endsWith('/') ? url : url + '/';
}

/** True when a ref names a file bundled with the site rather than a server path. */
export function isBundledMedia(ref: MediaRef) {
  return ASSET_MANIFEST.has(ref);
}

/**
 * Turn a MediaRef into a URL: a bundled asset key resolves through
 * ASSET_MANIFEST, anything else is a path under MEDIA_BASE. Absolute URLs are
 * refused (data must not point at arbitrary hosts).
 */
export function resolveMedia(ref: MediaRef): string | undefined {
  if (isBundledMedia(ref)) {
    return ASSET_MANIFEST.get(ref);
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(ref) || ref.startsWith('//')) {
    return undefined;
  }
  return MEDIA_BASE + ref.replace(/^\/+/, '');
}

/**
 * Bandcamp album player. Ids are numeric; anything else is rejected. Bandcamp
 * offers only a dark or light theme (custom backgrounds are ignored), so it's
 * the dark one, with the site's signal red for links.
 */
export function bandcampEmbedUrl(id: string): string | undefined {
  if (!/^\d{5,12}$/.test(id)) {
    return undefined;
  }
  return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=333333/linkcol=f05a3f/tracklist=true/artwork=small/`;
}

/** Player height: 120px header + 33px per track + the list's own padding
 *  (less than ~30px and Bandcamp shows an inner scrollbar). */
export function bandcampPlayerHeight(tracks: number) {
  return 120 + 33 * tracks + 30;
}

/** YouTube ids are 11 chars of [A-Za-z0-9_-]; anything else is rejected. */
export function youtubeEmbedUrl(id: string): string | undefined {
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
    return undefined;
  }
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}
