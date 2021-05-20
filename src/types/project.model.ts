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
}

export interface ProjectLinks {
  label: string;
  target: string;
  bgImgSrc?: string;
}
