import { ProjectImage } from '../../../types/project.model';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';
import MetaTags from '../MetaTags/MetaTags';

interface ProjectIconRowProps {
  styleClass?: string;
  projAlias: string;
  projName: string;
  kind?: string;
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
      <div className="project-icon-row-inner">
        <img src={bgd} alt={props.thumbnailImage?.alt ?? `${props.projName} logo`} />

        <div className="project-icon-row-title">
          <h2>
            <span className="meta project-icon-row-prefix">
              {props.kind && (
                <span className="project-icon-row-kind">
                  <span className="meta-dim project-icon-row-bracket" aria-hidden="true">[</span>
                  {props.kind}
                  <span className="meta-dim project-icon-row-bracket" aria-hidden="true">]</span>
                </span>
              )}
              <span className="meta-dim" aria-hidden="true">{'\\>'}</span>
            </span>
            <span className="project-icon-row-name">{props.projName}</span>
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
