import SectionHeading from '../SectionHeading/SectionHeading';
import tcLogo from '../../../assets/toastercat.png';
import './ProjectSkills.scss';

// const skillsIcons = {

// };

interface ProjectSkillsProps {
  iconNames: string[];
  styleClass?: string;
}

export default function ProjectSkills(props: ProjectSkillsProps) {
  const getSkillsIcons = () => {
    let icons = props.iconNames.map((icon) => {
      return (
        <div className="skill-icon">
          <img key={icon} src={tcLogo} alt="skill-icon" />
        </div>
      );
    });
    return icons;
  };

  let icons = getSkillsIcons();
  return (
    <div className={props.styleClass ? props.styleClass : 'project-skills'}>
      <SectionHeading
        heading={'Project Skills'}
        styleClass={'project-skills-heading'}
      />
      <div className="project-tech-icons">{icons}</div>
    </div>
  );
}
