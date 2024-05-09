import { ProjectTileProps, ProjectImageProps } from '../ProjectTile/ProjectTile';
import ProjectIconRow from '../UI/ProjectIconRow/ProjectIconRow';
import ProjectLinks from '../UI/ProjectLinks/ProjectLinks';
import ProjectSkills from '../UI/ProjectSkills/ProjectSkills';
import SmallContentSection from '../UI/SmallContentSection/SmallContentSection';

import { ASSET_MANIFEST } from '../../assets/AssetMap';

import './ProjectTileLarge.scss';

function ProjectScreenshot(props: ProjectImageProps) {
  return props.image
    ? (
          <div className="project-tile-large-screenshot">
            <img 
              src={ASSET_MANIFEST.get(props.image?.source)} 
              alt={props.image?.alt} />
          </div>
      )
    : (<></>);
}

export default function ProjectTileLarge(props: ProjectTileProps) {
  let bgd = props.project.projectDetails.backgroundImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.backgroundImage?.source)
    : ASSET_MANIFEST.get("default");

  return (
    <div className="project-tile-large" id={"project-" + props.project.projectDetails.alias} >
      <div className="project-tile-large-background" style={{
        backgroundImage: `url(${bgd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>

      <ProjectIconRow
        projAlias={props.project.projectDetails.alias}
        projName={props.project.projectDetails.name}
        styleClass={'project-tile-large-icons'}
        thumbnailImage={props.project.projectDetails.thumbnailImage}
      />
      <section className="project-tile-large-content">     
        
        <div className="project-tile-large-blurb">
          <SmallContentSection
            heading={''}
            styleClass={'project-tile-large-brief'}
            content={props.project.projectDetails.brief}
          />
          <SmallContentSection
            heading={''}
            styleClass={'project-tile-large-description'}
            content={props.project.projectDetails.description}
          />
        </div>

        <div className="project-tile-large-detail-row">
          <div className="project-tile-large-details">
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
          </div>

          <ProjectScreenshot image={props.project.projectDetails.detailImage}/> 
        </div>

      </section>
    </div>
  );
}
