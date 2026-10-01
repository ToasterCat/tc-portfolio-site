export interface Project {
  projectDetails: ProjectDetails;
}

/** How we came to the work: our own, hired for it, or one team among several. */
export type ProjectOrigin = 'in-house' | 'client' | 'contributor';

export type ProjectStatus = 'in-development' | 'live' | 'shipped' | 'archived' | 'unreleased';

/** Directory bucket - drives grouping today and the /portfolio filters next. */
export type ProjectCategory = 'game' | 'web' | 'consult' | 'audio' | 'proto';

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
  description: string;
  descriptionBullets?: string[];
  testimonial?: string;
  links?: ProjectLinks[];
  skills?: string[];
  thumbnailImage?: ProjectImage;
  backgroundImage?: ProjectImage;
  detailImage?: ProjectImage;
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
