import SectionHeading from '../SectionHeading/SectionHeading';

import { ASSET_MANIFEST } from '../../../assets/AssetMap';

import './ProjectSkills.scss';

const skillsIcons = {
  AdSense: ASSET_MANIFEST.get('logo-adsense'),
  Android: ASSET_MANIFEST.get('logo-android'),
  GSuite: ASSET_MANIFEST.get('logo-gsuite'),
  Reaper: ASSET_MANIFEST.get('logo-reaper'),
  Unity: ASSET_MANIFEST.get('logo-unity'),
  Unreal: ASSET_MANIFEST.get('logo-unreal'),
  Wordpress: ASSET_MANIFEST.get('logo-wordpress'),

  Unset: ASSET_MANIFEST.get('default')
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
      return skillsIcons.Unset;
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
        heading={'Core Technologies'}
        styleClass={'project-skills-heading'}
      />
      <div className="project-tech-icons">{icons}</div>
    </div>
  );
}
