import tcLogo from '../../../assets/toastercat.png';

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
      <img src={tcLogo} alt="project-icon" />
      <h2>{props.projName}</h2>
    </div>
  );
}
