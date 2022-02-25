import { ProjectTileProps } from '../ProjectTile/ProjectTile';
import ProjectIconRow from '../UI/ProjectIconRow/ProjectIconRow';
import ProjectLinks from '../UI/ProjectLinks/ProjectLinks';
import ProjectSkills from '../UI/ProjectSkills/ProjectSkills';
import SmallContentSection from '../UI/SmallContentSection/SmallContentSection';

import './ProjectTileLarge.scss';

export default function ProjectTileLarge(props: ProjectTileProps) {
  return (
    <div className="project-tile-large">
      <section className="project-tile-large-content">
        <ProjectIconRow
          projAlias={props.project.projectDetails.alias}
          projName={props.project.projectDetails.name}
          styleClass={'project-tile-large-icons'}
        />
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
      <div className="project-tile-large-screenshot">
        <img 
          src={props.project.projectDetails.thumbnailImage?.source}
          alt={props.project.projectDetails.thumbnailImage?.alt} />
      </div>
    </div>
  );
}
