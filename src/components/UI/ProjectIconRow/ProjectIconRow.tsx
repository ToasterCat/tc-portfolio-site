import toasterCatLogo from '../../../assets/toastercat.png';
import crudeMirrorLogo from '../../../assets/crude-mirror.png';

const projectIcons = {
  CrudeMirror: crudeMirrorLogo,
  ToasterCat: toasterCatLogo
};

function projectIconMap(projectAlias: string) {
  switch (projectAlias) {
    case "CrudeMirror":
      return projectIcons.CrudeMirror;
    case"ToasterCat":
    default:
      return toasterCatLogo;
  }
}

interface ProjectIconRowProps {
  styleClass?: string;
  projAlias: string;
  projName: string;
}

export default function ProjectIconRow(props: ProjectIconRowProps) {
  // let imgSrc;  to include icons

  return (
    <div
      className={props.styleClass ? props.styleClass : 'project-details-row'}
    >
      <img src={projectIconMap(props.projAlias)} alt="project-icon" />
      <h2>{props.projName}</h2>
    </div>
  );
}
