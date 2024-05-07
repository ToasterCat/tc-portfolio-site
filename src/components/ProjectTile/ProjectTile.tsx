import React from 'react';
import { Project, ProjectImage } from '../../types/project.model';
import './ProjectTile.scss';

import { ASSET_MANIFEST } from '../../assets/AssetMap';

export interface ProjectTileProps {
  project: Project;
}
export interface ProjectImageProps {
  image?: ProjectImage;
}

function ProjectThumbnailImage(props: ProjectImageProps) {
  let thumbImageSrc = props.image ? props.image?.source : "default";
  return (
      <div className="project-img">
        <img 
          src={ASSET_MANIFEST.get(thumbImageSrc)} 
          alt={props.image?.alt} />
      </div>
  )
}

export default function ProjectTile(props: ProjectTileProps) {
  let bgd = props.project.projectDetails.backgroundImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.backgroundImage?.source)
    : ASSET_MANIFEST.get("default");

  return (
    <div className="project-tile-container">
      
      <div className="project-tile">
        <div className="project-background" 
          style={{backgroundImage: `url(${bgd})`}}>
        </div>
        
        <div className="project-details">
          <h4>{props.project.projectDetails.name}</h4>
          <p>{props.project.projectDetails.description}</p>
          <div className="project-tile-links">
            {props.project.projectDetails.links.map((link) => {
              return <a href={link.target}>{link.label}</a>;
            })}
          </div>
        </div>
        
        <ProjectThumbnailImage
          image={props.project.projectDetails.thumbnailImage}
        />
      </div>

    </div>
  );
}
