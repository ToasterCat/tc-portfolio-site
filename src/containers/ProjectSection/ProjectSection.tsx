import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';

export default function ProjectSection() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {PROJECTS.map((project) => (
        <ProjectTile project={project} />
      ))}
    </section>
  );
}
