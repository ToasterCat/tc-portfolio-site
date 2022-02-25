import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';
import './ProjectSection.scss';

export default function ProjectSection() {
  return (
    <section className="projects-section">
      <h2>Active Projects</h2>
      <div className="projects-container">
        {PROJECTS.map((project) => (
          <ProjectTile 
            project={project}/>
        ))}
      </div>
    </section>
  );
}
