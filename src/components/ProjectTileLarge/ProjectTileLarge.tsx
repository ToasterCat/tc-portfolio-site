import { ProjectTileProps } from '../ProjectTile/ProjectTile';
import { MediaItem } from '../../types/project.model';
import { resolveMedia } from '../../media';
import { ASSET_MANIFEST } from '../../assets/AssetMap';
import ProjectIconRow from '../UI/ProjectIconRow/ProjectIconRow';
import ProjectLinks from '../UI/ProjectLinks/ProjectLinks';
import ProjectSkills from '../UI/ProjectSkills/ProjectSkills';
import SmallContentSection from '../UI/SmallContentSection/SmallContentSection';


import './ProjectTileLarge.scss';

/* Legacy /portfolio tile only (retired with the directory in stage 4):
 * shows the featured media when it's a still image. */
function ProjectScreenshot(props: { media?: MediaItem }) {
  if (props.media?.type !== 'image') {
    return null;
  }
  return (
    <div className="project-tile-large-screenshot">
      <img src={resolveMedia(props.media.src)} alt={props.media.alt} />
    </div>
  );
}

interface ProjectEngagementProps {
  role?: string;
  outcome?: string;
}

/* STAR report - what we did and how it ended. Carries the weight for work that never
 * launched and has no screenshot or live link to point at. */
function ProjectEngagement(props: ProjectEngagementProps) {
  if (!props.role && !props.outcome) {
    return null;
  }

  return (
    <dl className="project-tile-large-engagement">
      {props.role && (
        <div>
          <dt className="meta meta-dim">Role</dt>
          <dd>{props.role}</dd>
        </div>
      )}
      {props.outcome && (
        <div>
          <dt className="meta meta-dim">Outcome</dt>
          <dd>{props.outcome}</dd>
        </div>
      )}
    </dl>
  );
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
        backgroundAttachment: 'scroll'
      }}></div>

      <ProjectIconRow
        projAlias={props.project.projectDetails.alias}
        projName={props.project.projectDetails.name}
        kind={props.project.projectDetails.kind}
        showcase={props.project.projectDetails.showcase}
        origin={props.project.projectDetails.origin}
        status={props.project.projectDetails.status}
        year={props.project.projectDetails.year}
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
            content={props.project.projectDetails.body.find((p) => !p.startsWith('- ')) ?? ''}
          />
          <ProjectEngagement
            role={props.project.projectDetails.role}
            outcome={props.project.projectDetails.outcome}
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

          <ProjectScreenshot media={props.project.projectDetails.media?.featured} /> 
        </div>

      </section>
    </div>
  );
}
