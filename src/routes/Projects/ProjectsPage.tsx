import React from 'react';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import { Link } from 'react-scroll';
import PROJECTS from '../../PROJECTS';
import './ProjectsPage.scss';

export default function ProjectsPage() {
  return (
    <React.Fragment>

      <section className="project-heading">

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
      </section>


      <section className="proj-section">
        <h2 id="proj-web" className="anchor">
          Web Development
        </h2>
        <ProjectTileLarge project={PROJECTS[0]} />
      </section>

      <section className="proj-section">
        <h2 className="anchor" id="proj-game">
          Game Development
        </h2>
        <ProjectTileLarge project={PROJECTS[1]} />
        <ProjectTileLarge project={PROJECTS[2]} />
      </section>
      
      <section className="proj-section">
        <h2 className="anchor" id="proj-audio">
          Audio Production and Recording
        </h2>
        <ProjectTileLarge project={PROJECTS[3]} />
        <ProjectTileLarge project={PROJECTS[4]} />
      </section>

      <section className="proj-section">
        <h2 className="anchor" id="proj-proto">
          Rapid Digital + Physical Prototyping
        </h2>
        <ProjectTileLarge project={PROJECTS[5]} />
        <ProjectTileLarge project={PROJECTS[6]} />
      </section>
    </React.Fragment>
  );
}
