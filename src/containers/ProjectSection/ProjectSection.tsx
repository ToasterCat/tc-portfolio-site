import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';
import './ProjectSection.scss';

export function ProjectSection() {
  return (
    <section className="projects-section">
      <h2>Recent Works</h2>
      <div className="projects-container">

        <ProjectTile project={PROJECTS["outsideAgitators"]}/>

        <ProjectTile project={PROJECTS["fossArmory"]}/>

      </div>
    </section>
  );
}
