import SectionHeading from '../SectionHeading/SectionHeading';

import { ASSET_MANIFEST } from '../../../assets/AssetMap';

import './ProjectSkills.scss';

function skillIconMap(skillName: string) {
  switch (skillName) {
    case "AdSense":
      return {
        icon: ASSET_MANIFEST.get('logo-adsense'),
        label: "Google AdSense"
      };
    case "Amazon":
      return {
        icon: ASSET_MANIFEST.get('logo-amazon'),
        label: "Amazon Seller"
      };
    case "AmazonCoins":
      return {
        icon: ASSET_MANIFEST.get('logo-amazon-coins'),
        label: "Amazon Coins"
      };
    case "Android":
      return {
        icon: ASSET_MANIFEST.get('logo-android'),
        label: "Android"
      };

    case "AWS-CloudFront":
      return {
        icon: ASSET_MANIFEST.get('logo-cloudfront'),
        label: "AWS CloudFront"
      };
    case "AWS-GameLift":
      return {
        icon: ASSET_MANIFEST.get('logo-gamelift'),
        label: "AWS GameLift"
      };
    case "AWS-Lightsail":
      return {
        icon: ASSET_MANIFEST.get('logo-lightsail'),
        label: "AWS Lightsail"
      };
    case "AWS-S3":
      return {
        icon: ASSET_MANIFEST.get('logo-s3'),
        label: "AWS S3"
      };
    case "AWS-Route53":
      return {
        icon: ASSET_MANIFEST.get('logo-route53'),
        label: "AWS Route 53"
      };

    case "CSS":
      return {
        icon: ASSET_MANIFEST.get('logo-css'),
        label: "CSS 3"
      };
    case "Cura":
      return {
        icon: ASSET_MANIFEST.get('logo-cura'),
        label: "Cura Slicer"
      };
    case "Ebay":
      return {
        icon: ASSET_MANIFEST.get('logo-ebay'),
        label: "Ebay Seller"
      };
    case "Fusion360":
      return {
        icon: ASSET_MANIFEST.get('logo-fusion'),
        label: "Fusion 360"
      };
    case "FDM":
      return {
        icon: ASSET_MANIFEST.get('logo-fdm'),
        label: "FDM 3D Printing"
      };
    case "GSuite":
      return {
        icon: ASSET_MANIFEST.get('logo-gsuite'),
        label: "Google GSuite"
      };
    case "HTML":
      return {
        icon: ASSET_MANIFEST.get('logo-html'),
        label: "HTML 5"
      };
    case "Maya":
      return {
        icon: ASSET_MANIFEST.get('logo-maya'),
        label: "Maya"
      };
    case "Photoshop":
      return {
        icon: ASSET_MANIFEST.get('logo-photoshop'),
        label: "Adobe Photoshop"
      };
    case "Premiere":
      return {
        icon: ASSET_MANIFEST.get('logo-premiere'),
        label: "Adobe Premiere"
      };
    case "Reaper":
      return {
        icon: ASSET_MANIFEST.get('logo-reaper'),
        label: "Reaper"
      };
    case "Shopify":
      return {
        icon: ASSET_MANIFEST.get('logo-shopify'),
        label: "Shopify"
      };
    case "Squarespace":
      return {
        icon: ASSET_MANIFEST.get('logo-squarespace'),
        label: "Squarespace"
      };
    case "Unity":
      return {
        icon: ASSET_MANIFEST.get('logo-unity'),
        label: "Unity Engine"
      };
    case "Unreal":
      return {
        icon: ASSET_MANIFEST.get('logo-unreal'),
        label: "Unreal Engine"
      };
    case "WordPress":
      return {
        icon: ASSET_MANIFEST.get('logo-wordpress'),
        label: "WordPress"
      };
    default:
      return {
        icon: ASSET_MANIFEST.get('default'),
        label: "ToasterCat"
      };
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
      let s = skillIconMap(skill);
      return (
        <div className="skill-icon">
          <img key={skill} src={s.icon} alt={s.label} />
          <h5>{s.label}</h5>
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
