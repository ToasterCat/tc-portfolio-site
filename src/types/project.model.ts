export interface Project {
  projectDetails: ProjectDetails;
}

export interface ProjectDetails {
  alias: string;
  name: string;
  brief: string;
  showcase: string;
  /* Typed as string while PROJECTS stays JS (its literals widen to string).
   * origin: 'in-house' | 'client' | 'contributor'
   * status: 'in-development' | 'live' | 'shipped' | 'archived' | 'unreleased' */
  origin?: string;
  status?: string;
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