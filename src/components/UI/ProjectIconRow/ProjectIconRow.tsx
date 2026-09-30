import { ProjectImage } from '../../../types/project.model';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';
import MetaTags from '../MetaTags/MetaTags';

interface ProjectIconRowProps {
  styleClass?: string;
  projAlias: string;
  projName: string;
  showcase?: string;
  origin?: string;
  status?: string;
  year?: string;
  thumbnailImage?: ProjectImage;
}

export default function ProjectIconRow(props: ProjectIconRowProps) {
  let bgd = props.thumbnailImage
    ? ASSET_MANIFEST.get(props.thumbnailImage?.source)
    : ASSET_MANIFEST.get("default");

  return (
    <div
      className={props.styleClass ? props.styleClass : 'project-details-row'}
    >
      {/* Inner rail keeps the title on the same left edge as the prose
          column below, instead of hugging the viewport. */}
      <div className="project-icon-row-inner">
        <img src={bgd} alt={props.thumbnailImage?.alt ?? `${props.projName} logo`} />

        <div className="project-icon-row-title">
          {/* The prompt is the monospace device at its smallest: one mark
              that says "technical" without tipping the name into mono. */}
          <h2>
            <span className="meta project-icon-row-prompt" aria-hidden="true">
              {'\\>'}
            </span>
            {props.projName}
          </h2>
          <div className="project-icon-row-meta">
            <MetaTags tags={[props.showcase, props.origin, props.status]} />
            {props.year && (
              <span className="meta meta-dim project-icon-row-year">
                {props.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
