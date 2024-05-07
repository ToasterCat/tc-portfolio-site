import { ProjectTileProps, ProjectImageProps } from '../ProjectTile/ProjectTile';
import ProjectIconRow from '../UI/ProjectIconRow/ProjectIconRow';
import ProjectLinks from '../UI/ProjectLinks/ProjectLinks';
import ProjectSkills from '../UI/ProjectSkills/ProjectSkills';
import SmallContentSection from '../UI/SmallContentSection/SmallContentSection';

import { ASSET_MANIFEST } from '../../assets/AssetMap';

import './ProjectTileLarge.scss';

function ProjectScreenshot(props: ProjectImageProps) {
  let imageSrc = props.image ? props.image?.source : "default";
  return (
      <div className="project-tile-large-screenshot">
        <img 
          src={ASSET_MANIFEST.get(imageSrc)} 
          alt={props.image?.alt} />
      </div>
  )
}

export default function ProjectTileLarge(props: ProjectTileProps) {
  let bgd = props.project.projectDetails.backgroundImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.backgroundImage?.source)
    : ASSET_MANIFEST.get("default");

  return (
    <div className="project-tile-large" >
      <div className="project-tile-large-background" style={{
      backgroundImage: `url(${bgd})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}></div>
      <section className="project-tile-large-content">        
        <ProjectIconRow
          projAlias={props.project.projectDetails.alias}
          projName={props.project.projectDetails.name}
          styleClass={'project-tile-large-icons'}
          thumbnailImage={props.project.projectDetails.thumbnailImage}
        />
        <section>
        <SmallContentSection
          heading={'Project Description'}
          styleClass={'project-tile-large-description'}
          content={props.project.projectDetails.description}
        />
        <ProjectSkills
          skills={
            props.project.projectDetails.skills
              ? props.project.projectDetails.skills
              : []
          }
          styleClass={'project-section-skills'}
        />
        <ProjectLinks
          links={props.project.projectDetails.links}
          styleClass={'project-tile-large-links'}
        />
        </section>
      </section>
    </div>
  );
}
