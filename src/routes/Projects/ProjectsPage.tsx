import React from 'react';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import { Link } from 'react-scroll';
import PROJECTS from '../../PROJECTS';
import './ProjectsPage.scss';

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <div className="project-anchors">
        <h2>ToasterCat Projects</h2>
        <div className="project-anchors-links">
          <Link to="proj-web" smooth={true}>
            Web Development
          </Link>
          <Link to="proj-game" smooth={true}>
            Game Development
          </Link>
          <Link to="proj-audio" smooth={true}>
            Audio Production
          </Link>
        </div>
      </div>
      <section className="proj-section">
        <h2 id="proj-web" className="anchor">
          Web Dev projects
        </h2>
        <ProjectTileLarge project={PROJECTS[0]} />
      </section>
      <section className="proj-section">
        <h2 className="anchor" id="proj-game">
          Game Dev projects
        </h2>
        <ProjectTileLarge project={PROJECTS[1]} />
      </section>
      <section className="proj-section">
        <h2 className="anchor" id="proj-audio">
          Audio Projects
        </h2>
        <ProjectTileLarge project={PROJECTS[2]} />
      </section>
    </React.Fragment>
  );
}
