export interface Project {
  projectDetails: ProjectDetails;
}

/** How we came to the work: our own, hired for it, or one team among several. */
export type ProjectOrigin = 'in-house' | 'client' | 'contributor';

export type ProjectStatus = 'in-development' | 'live' | 'shipped' | 'archived' | 'unreleased';

/** Directory bucket - drives grouping today and the /portfolio filters next. */
export type ProjectCategory = 'game' | 'web' | 'consult' | 'audio' | 'proto';

/**
 * Where a piece of media lives: an ASSET_MANIFEST key ("lizzie-tinker") for
 * files bundled with the site, or a path under the media server
 * ("lizzie/assembly.webp" -> MEDIA_BASE + path). Never a full URL, so the
 * media host can change in one place (see src/media.ts).
 */
export type MediaRef = string;

/** Fields every visual medium shares. Dimensions are the source's pixel size,
 *  used to reserve the right space (no layout jump) and lay out the gallery. */
interface SizedMedia {
  caption?: string;
  width: number;
  height: number;
}

export type MediaItem =
  /** A still image. */
  | (SizedMedia & { type: 'image'; src: MediaRef; alt: string })
  /** A silent, autoplaying loop: the GIF replacement (MP4/WebM). */
  | (SizedMedia & { type: 'clip'; src: MediaRef; poster: MediaRef; alt: string })
  /** A real video with controls; never autoplays. */
  | (SizedMedia & { type: 'video'; src: MediaRef; poster: MediaRef; title: string })
  /** A YouTube video, built from its id (never a pasted URL), click-to-load. */
  | { type: 'embed'; provider: 'youtube'; id: string; title: string; poster?: MediaRef; caption?: string }
  /**
   * A Bandcamp album player, built from the numeric album id (never a pasted
   * URL). Loads when scrolled near, with `poster` (album art) as a fading
   * stand-in. `tracks` sizes the tracklist so nothing jumps on load.
   * Audio: featured slot only - it'd stop playing inside the gallery viewer.
   */
  | { type: 'embed'; provider: 'bandcamp'; id: string; title: string; tracks: number; poster?: MediaRef; caption?: string };

export interface ProjectMedia {
  /** Shown large, directly under the page hero. */
  featured?: MediaItem;
  /** The gallery view. */
  gallery?: MediaItem[];
}

export interface Testimonial {
  /** Supports the inline formatting described in RichText. */
  quote: string;
  name: string;
  title?: string;
  org?: string;
}

export interface ProjectDetails {
  /** URL slug for /portfolio/<alias>: lowercase words joined by hyphens. */
  alias: string;
  category: ProjectCategory;
  /** Display order across the whole portfolio, ascending. Gaps are fine. */
  order: number;
  name: string;
  kind?: string;
  brief: string;
  /** Discipline label shown as a #tag (e.g. "Game Development"). */
  showcase: string;
  origin: ProjectOrigin;
  status: ProjectStatus;
  role?: string;
  year?: string;
  outcome?: string;
  /**
   * Detail paragraphs, 0..n. Each supports inline [links](url), **bold** and
   * *italic*; a paragraph whose lines all start with "- " renders as a list.
   */
  body: string[];
  media?: ProjectMedia;
  testimonials?: Testimonial[];
  /**
   * The one link we *really* want clicked (play the demo, visit the live
   * site). Shown in the page hero as the primary action. Optional: most
   * projects shouldn't have one. Not repeated automatically in `links`.
   */
  heroLink?: ProjectLinks;
  /** Everything else, listed in the page's Links section. */
  links?: ProjectLinks[];
  skills?: string[];
  thumbnailImage?: ProjectImage;
  backgroundImage?: ProjectImage;
}

export interface ProjectLinks {
  label: string;
  target: string;
  icon?: string;
}

export interface ProjectImage {
  source: string;
  alt?: string;
}
