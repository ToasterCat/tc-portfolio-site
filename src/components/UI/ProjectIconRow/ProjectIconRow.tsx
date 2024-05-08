import toasterCatLogo from '../../../assets/toastercat.png';
import crudeMirrorLogo from '../../../assets/crude-mirror.png';

import { ProjectImage } from '../../../types/project.model';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';

const projectIcons = {
  CrudeMirror: crudeMirrorLogo,
  ToasterCat: toasterCatLogo
};

interface ProjectIconRowProps {
  styleClass?: string;
  projAlias: string;
  projName: string;
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
      <img src={bgd} alt="project-icon" />      
      <h2>{"\\> " + props.projName}</h2>
    </div>
  );
}
