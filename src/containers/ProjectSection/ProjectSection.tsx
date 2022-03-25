import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';
import './ProjectSection.scss';

export function ActiveProjectSection() {
  return (
    <section className="projects-section">
      <h2>Active Projects</h2>
      <div className="projects-container">

        <ProjectTile project={PROJECTS["crudeMirror"]}/>

        <ProjectTile project={PROJECTS["tcPrints"]}/>

      </div>
    </section>
  );
}
