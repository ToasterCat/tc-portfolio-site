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
  AdSense: adsenseLogo,
  Android: androidLogo,
  GSuite: gsuiteLogo,
  Reaper: reaperLogo,
  Unity: unityLogo,
  Unreal: unrealLogo,
  Wordpress: wordpressLogo
};

function skillIconMap(skillName: string) {
  switch (skillName) {
    case "AdSense":
      return skillsIcons.AdSense;
    case "Android":
      return skillsIcons.Android;
    case "GSuite":
      return skillsIcons.GSuite;
    case "Reaper":
      return skillsIcons.Reaper;
    case "Unity":
      return skillsIcons.Unity;
    case "Unreal":
      return skillsIcons.Unreal;
    case "WordPress":
      return skillsIcons.Wordpress;
    default:
      return tcLogo;
  }
}

interface ProjectSkillsProps {
  skills: string[];
  styleClass?: string;
}

export default function ProjectSkills(props: ProjectSkillsProps) {
  const getSkillsIcons = () => {
    if (props.skills.length < 1) {
      return null;
    }
    let icons = props.skills.map((skill) => {
      return (
        <div className="skill-icon">
          <img key={skill} src={skillIconMap(skill)} alt={skill} />
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
