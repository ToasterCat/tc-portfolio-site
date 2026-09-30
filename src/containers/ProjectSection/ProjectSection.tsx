import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';
import './ProjectSection.scss';

export function ProjectSection() {
  return (
    <section className="projects-section section-band">
      <div className="section-head">
        <h2>Recent Works</h2>
        <p className="section-sub">
          Half of this shouldn&apos;t exist. All of it works.
        </p>
      </div>


      <div className="projects-container card-grid">

        <ProjectTile project={PROJECTS["blackoutPunk"]}/>

        <ProjectTile project={PROJECTS["fossArmory"]}/>

        <ProjectTile project={PROJECTS["clickTune"]}/>

        <ProjectTile project={PROJECTS["outsideAgitators"]}/>

      </div>

    </section>
  );
}
