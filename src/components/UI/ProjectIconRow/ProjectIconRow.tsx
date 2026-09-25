import { ProjectImage } from '../../../types/project.model';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';

interface ProjectIconRowProps {
  styleClass?: string;
  projAlias: string;
  projName: string;
  showcase?: string;
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
          {props.showcase && (
            <span className="meta project-icon-row-discipline">
              <span className="meta-dim" aria-hidden="true">#</span>
              {props.showcase.toLowerCase().replace(/\s+/g, '-')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
