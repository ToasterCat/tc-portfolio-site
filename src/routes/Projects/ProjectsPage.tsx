import React from 'react';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import TileSection from '../../containers/TileSection/TileSection';
import { Link } from 'react-scroll';
import PROJECTS from '../../PROJECTS';
import './ProjectsPage.scss';
import { ProjectTileProps } from '../../components/ProjectTile/ProjectTile';
import { ASSET_MANIFEST } from '../../assets/AssetMap';

function MiniProject(props: ProjectTileProps) {
  let bgd = props.project.projectDetails.thumbnailImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.thumbnailImage?.source)
    : ASSET_MANIFEST.get("default");
  return (
    <div className="project-tile-mini">
      <a href="#proj-audio">
        <img src={bgd} className='proj-mini-thumb'/>
      </a>
    </div>
  );
}

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
            <Link to="proj-proto" smooth={true}>
              Rapid Prototyping
            </Link>
          </div>

        </div>
      </section>


      <section className="proj-section">
        <h2 id="proj-web" className="anchor">
            Web Development
        </h2>
        <div className="anchor-wrapper">
          <div className="project-mini-container">
              <MiniProject project={PROJECTS["crudeMirror"]} />
              <MiniProject project={PROJECTS["strongarm"]} />
              <MiniProject project={PROJECTS["oasWebsite"]} />
              <MiniProject project={PROJECTS["umaWebsite"]} />
          </div>
        </div>

        <ProjectTileLarge project={PROJECTS["crudeMirror"]} />
        <ProjectTileLarge project={PROJECTS["strongarm"]} />
        <ProjectTileLarge project={PROJECTS["oasWebsite"]} />
        <ProjectTileLarge project={PROJECTS["umaWebsite"]} />
      </section>

      <section className="proj-section">
        <h2 className="anchor" id="proj-game">
          Game Development
        </h2>
        <div className="anchor-wrapper">
          <div className="project-mini-container">
              <MiniProject project={PROJECTS["fossArmory"]} />
              <MiniProject project={PROJECTS["pixHell"]} />
              <MiniProject project={PROJECTS["wraithSquadron"]} />
              <MiniProject project={PROJECTS["chickMagnet"]} />
          </div>
        </div>
        <ProjectTileLarge project={PROJECTS["fossArmory"]} />
        <ProjectTileLarge project={PROJECTS["pixHell"]} />
        <ProjectTileLarge project={PROJECTS["wraithSquadron"]} />
        <ProjectTileLarge project={PROJECTS["chickMagnet"]} />
      </section>
      
      <section className="proj-section">
        <h2 className="anchor" id="proj-audio">
          Audio Production
        </h2>
        <ProjectTileLarge project={PROJECTS["outsideAgitators"]} />
        <ProjectTileLarge project={PROJECTS["umaBand"]} />
      </section>

      <section className="proj-section">
        <h2 className="anchor" id="proj-proto">
          Rapid Prototyping
        </h2>
        <ProjectTileLarge project={PROJECTS["moxel"]} />
        <ProjectTileLarge project={PROJECTS["gecko"]} />
        <ProjectTileLarge project={PROJECTS["tcPrints"]} />
      </section>
    </React.Fragment>
  );
}
