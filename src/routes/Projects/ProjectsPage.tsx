import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ProjectTileLarge from '../../components/ProjectTileLarge/ProjectTileLarge';
import TileSection from '../../containers/TileSection/TileSection';
import { Link } from 'react-scroll';
import PROJECTS from '../../PROJECTS';
import './ProjectsPage.scss';
import { ProjectTileProps } from '../../components/ProjectTile/ProjectTile';
import { ASSET_MANIFEST } from '../../assets/AssetMap';

function MiniProject(props: ProjectTileProps) {
  let icon = props.project.projectDetails.thumbnailImage
    ? ASSET_MANIFEST.get(props.project.projectDetails.thumbnailImage?.source)
    : ASSET_MANIFEST.get("default");

  let target = "project-" + props.project.projectDetails.alias
  return (
    <div className="project-tile-mini">
      <Link to={target} smooth={true}>
        <img src={icon} className='proj-mini-thumb'/>
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

          <h2>ToasterCat Project Portfolio</h2>
          <p className="section-sub project-anchors-sub">
            The experiments that survived.
          </p>
          <div className="project-anchors-links">
            <Link to="proj-game" smooth={true}>
              Game Development
            </Link>
            <Link to="proj-web" smooth={true}>
              Web Development
            </Link>
            <Link to="proj-consult" smooth={true}>
              Client Consultation
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
        <div className="anchor-beard"></div>
        <h2 className="anchor" id="proj-game">
          Game Development
        </h2>
        <div className="anchor-beard">
          <div className="project-mini-container">
              <MiniProject project={PROJECTS["blackoutPunk"]} />
              <MiniProject project={PROJECTS["fossArmory"]} />
              <MiniProject project={PROJECTS["pixHell"]} />
              <MiniProject project={PROJECTS["wraithSquadron"]} />
              <MiniProject project={PROJECTS["chickMagnet"]} />
          </div>
        </div>
        <ProjectTileLarge project={PROJECTS["blackoutPunk"]} />
        <ProjectTileLarge project={PROJECTS["fossArmory"]} />
        <ProjectTileLarge project={PROJECTS["pixHell"]} />
        <ProjectTileLarge project={PROJECTS["wraithSquadron"]} />
        <ProjectTileLarge project={PROJECTS["chickMagnet"]} />
      </section>


      <section className="proj-section">
        <div className="anchor-beard"></div>
        <h2 id="proj-web" className="anchor">
            Web Development
        </h2>
        <div className="anchor-beard">
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
        <div className="anchor-beard"></div>
        <h2 className="anchor" id="proj-consult">
          Client Consultation
        </h2>
        <div className="anchor-beard">
          <div className="project-mini-container">
              <MiniProject project={PROJECTS["clickTune"]} />
              <MiniProject project={PROJECTS["jukeDec"]} />
          </div>
        </div>
        <ProjectTileLarge project={PROJECTS["clickTune"]} />
        <ProjectTileLarge project={PROJECTS["jukeDec"]} />
      </section>

      
      <section className="proj-section">
        <div className="anchor-beard"></div>
        <h2 className="anchor" id="proj-audio">
          Audio Production
        </h2>
        <div className="anchor-beard">
          <div className="project-mini-container">
            <MiniProject project={PROJECTS["outsideAgitators"]} />
            <MiniProject project={PROJECTS["umaAlbum"]} />
          </div>
        </div>
        <ProjectTileLarge project={PROJECTS["outsideAgitators"]} />
        <ProjectTileLarge project={PROJECTS["umaAlbum"]} />
      </section>

      <section className="proj-section">
      <div className="anchor-beard"></div>
        <h2 className="anchor" id="proj-proto">
          Rapid Prototyping
        </h2>
        <div className="anchor-beard">
          <div className="project-mini-container">
            <MiniProject project={PROJECTS["moxel"]} />
            <MiniProject project={PROJECTS["lizzie"]} />
            <MiniProject project={PROJECTS["tcPrints"]} />
          </div>
        </div>
        <ProjectTileLarge project={PROJECTS["moxel"]} />
        <ProjectTileLarge project={PROJECTS["lizzie"]} />
        <ProjectTileLarge project={PROJECTS["tcPrints"]} />
      </section>
    </React.Fragment>
  );
}
