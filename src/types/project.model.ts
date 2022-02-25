export interface Project {
  id: number;
  projectDetails: ProjectDetails;
}

export interface ProjectDetails {
  alias: string;
  name: string;
  description: string;
  links: ProjectLinks[];
  skills?: string[];
  thumbnailImage?: ProjectImage;
  backgroundImage?: ProjectImage;
}

export interface ProjectLinks {
  label: string;
  target: string;
}

export interface ProjectImage {
  source: string;
  alt?: string;
}