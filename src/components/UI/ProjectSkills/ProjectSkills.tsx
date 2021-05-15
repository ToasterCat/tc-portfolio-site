import SectionHeading from '../SectionHeading/SectionHeading';

import tcLogo from '../../../assets/toastercat.png';
import adsenseLogo from "../../../assets/adsenseLogo.png";
import androidLogo from "../../../assets/androidLogo.png";
import gsuiteLogo from "../../../assets/gsuiteLogo.png";
import reaperLogo from "../../../assets/reaperLogo.png";
import unityLogo from '../../../assets/unityLogo.png';
import unrealLogo from '../../../assets/unrealLogo.png';
import wordpressLogo from '../../../assets/wordpressLogo.png';

import './ProjectSkills.scss';

const skillsIcons = {
  "AdSense": adsenseLogo,
  "Android": androidLogo,
  "GSuite": gsuiteLogo,
  "Reaper": reaperLogo,
  "Unity": unityLogo,
  "Unreal": unrealLogo,
  "Wordpress": wordpressLogo
};

interface ProjectSkillsProps {
  iconNames: string[];
  styleClass?: string;
}

export default function ProjectSkills(props: ProjectSkillsProps) {
  const getSkillsIcons = () => {
    let icons = props.iconNames.map((icon) => {
      return (
        <div className="skill-icon">
          <img key={icon} src={skillsIcons[icon]} alt={icon} />
        </div>
      );
    });
    return icons;
  };

  let icons = getSkillsIcons();
  return (
    <div className={props.styleClass ? props.styleClass : 'project-skills'}>
      <SectionHeading
        heading={'Project Technologies'}
        styleClass={'project-skills-heading'}
      />
      <div className="project-tech-icons">{icons}</div>
    </div>
  );
}
