import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import { Link } from 'react-scroll';
import Brackets from '../../components/UI/Brackets/Brackets';
import { PROJECT_CATEGORIES, projectsInCategory } from '../../PROJECTS';
import './ProjectsPage.scss';
import { Project } from '../../types/project.model';

import { ASSET_MANIFEST } from '../../assets/AssetMap';

interface ProjectTileProps {
  project: Project;
}

function MiniProject(props: ProjectTileProps) {
  let icon = props.project.projectDetails.thumbnailImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.thumbnailImage?.source)
    : ASSET_MANIFEST.get("default");

  let target = "project-" + props.project.projectDetails.alias
  return (
    <div className="project-tile-mini">
      <Link to={target} smooth={true}>
        <img src={icon} className='proj-mini-thumb' alt={props.project.projectDetails.name} />
      </Link>
    </div>
  );
}

export default function ProjectsPage() {
  useDocumentTitle('Portfolio');

  return (
    <React.Fragment>

      <section className="project-heading">

        <div className="project-anchors">

          <h1>ToasterCat Project Portfolio</h1>
          <p className="section-sub project-anchors-sub">
            The experiments that survived.
          </p>
          <div className="project-anchors-links">
            {PROJECT_CATEGORIES.map((category) => (
              <Link
                key={category.key}
                to={category.anchor}
                smooth={true}
                href={'#' + category.anchor}
                className="btn btn--tertiary"
              >
                <Brackets>{category.label}</Brackets>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {PROJECT_CATEGORIES.map((category) => {
        const projects = projectsInCategory(category.key);
        return (
          <section className="proj-section" key={category.key}>
            <div className="anchor-beard"></div>
            <h2 className="anchor" id={category.anchor}>
              {category.label}
            </h2>
            <div className="anchor-beard">
              <div className="project-mini-container">
                {projects.map((project) => (
                  <MiniProject project={project} key={project.projectDetails.alias} />
                ))}
              </div>
            </div>
            {projects.map((project) => (
              <ProjectTileLarge project={project} key={project.projectDetails.alias} />
            ))}
          </section>
        );
      })}
    </React.Fragment>
  );
}
