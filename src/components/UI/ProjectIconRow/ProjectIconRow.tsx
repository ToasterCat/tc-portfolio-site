import tcLogo from '../../../assets/toastercat.png';
import cmLogo from '../../../assets/crude-mirror.png';

interface ProjectIconRowProps {
  styleClass?: string;
  projName: string;
}

export default function ProjectIconRow(props: ProjectIconRowProps) {
  // let imgSrc;  to include icons

  return (
    <div
      className={props.styleClass ? props.styleClass : 'project-details-row'}
    >
      <img src={cmLogo} alt="project-icon" />
      <h2>{props.projName}</h2>
    </div>
  );
}
