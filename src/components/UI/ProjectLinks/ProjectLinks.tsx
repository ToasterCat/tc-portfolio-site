import React from 'react';
import ExternalLinkButton from '../ExternalLinkButton/ExternalLinkButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import './ProjectLinks.scss';

interface ProjectLinksProps {
  styleClass?: string;
  links: { target: string; label: string; icon?: string; color?: string; }[];
}

export default function ProjectLinks(props: ProjectLinksProps) {
  return (
    <div className={props.styleClass ? props.styleClass : 'project-links'}>
      <SectionHeading
        heading={'Links'}
        styleClass={'project-links-heading'}
      />
      <div className="project-links-buttons">
        {props.links.map((link) => {
          return <ExternalLinkButton linkTo={link.target} text={link.label} icon={link.icon} color={link.color} />;
        })}
      </div>
    </div>
  );
}
