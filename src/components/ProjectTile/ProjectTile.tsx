import React from 'react';
import tcLogo from '../../assets/toastercat.png';
import { Project } from '../../types/project.model';
import './ProjectTile.scss';

export interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile(props: ProjectTileProps) {
  return (
    <div className="project-tile-container">
      <div className="project-tile">
        <div className="project-details">
          <h4>{props.project.projectDetails.name}</h4>
          <p>{props.project.projectDetails.description}</p>
          <div className="project-tile-links">
            {props.project.projectDetails.links.map((link) => {
              return <a href={link.target}>{link.label}</a>;
            })}
          </div>
        </div>
        <div className="project-img">
          <img src={tcLogo} alt="project-screenshot" />
        </div>
      </div>
    </div>
  );
}
