export interface Project {
  projectDetails: ProjectDetails;
}

export interface ProjectDetails {
  alias: string;
  name: string;
  brief: string;
  showcase: string;
  description: string;
  descriptionBullets?: string[];
  testimonial?: string;
  links: ProjectLinks[];
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