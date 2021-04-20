import React from 'react';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import { Link } from 'react-scroll';
import PROJECTS from '../../PROJECTS';

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <div className="project-anchors">
        <Link to="proj-web" smooth={true}>
          <button>Web Development</button>
        </Link>
        <Link to="proj-game" smooth={true}>
          <button>Game Development</button>
        </Link>
        <Link to="proj-audio" smooth={true}>
          <button>Audio Production</button>
        </Link>
      </div>
      <section className="proj-section">
        <h2 id="proj-web" className="anchor">
          Web Dev projects
        </h2>
        <ProjectTile project={PROJECTS[0]} />
      </section>
      <section className="proj-section">
        <h2 className="anchor" id="proj-game">
          Game Dev projects
        </h2>
        <ProjectTile project={PROJECTS[1]} />
      </section>
      <section className="proj-section">
        <h2 className="anchor" id="proj-audio">
          Audio Projects
        </h2>
        <ProjectTile project={PROJECTS[2]} />
      </section>
    </React.Fragment>
  );
}
