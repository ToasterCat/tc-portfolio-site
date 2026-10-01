import React from 'react';
import { Project, ProjectImage } from '../../types/project.model';
import './ProjectTile.scss';

import { ASSET_MANIFEST } from '../../assets/AssetMap';
import MetaTags from '../UI/MetaTags/MetaTags';
import ExternalLinkButton from '../UI/ExternalLinkButton/ExternalLinkButton';

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

  const links = props.project.projectDetails.links;

  return (
    <div className="project-tile-container">
      
      <div className="project-tile">
        
        <div className="project-background" 
          style={{backgroundImage: `url(${bgd})`}}>
        </div>
        
        <div className="project-details">

          <h4>{props.project.projectDetails.name}</h4>
          <MetaTags
            tags={[props.project.projectDetails.showcase]}
            styleClass={'project-tile-discipline'}
          />
          <div className="project-info">
            <ProjectThumbnailImage
              image={props.project.projectDetails.thumbnailImage}
            />

            <div className="project-blurb">
              <p>{props.project.projectDetails.brief}</p>
              {links && links.length > 0 && (
                <div className="project-tile-links">
                  {links.map((link) => (
                    <ExternalLinkButton
                      key={link.label}
                      linkTo={link.target}
                      text={link.label}
                      icon={link.icon}
                      size="sm"
                    />
                  ))}
                </div>
              )}
            </div>
            
          </div>

        </div>
      
      </div>

    </div>
  );
}
