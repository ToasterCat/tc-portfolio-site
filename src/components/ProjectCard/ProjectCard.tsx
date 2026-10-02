import { Link } from 'react-router-dom';
import { Project } from '../../types/project.model';
import { ASSET_MANIFEST } from '../../assets/AssetMap';
import { categoryLabel } from '../../PROJECTS';
import MetaTags from '../UI/MetaTags/MetaTags';
import ExternalLinkButton from '../UI/ExternalLinkButton/ExternalLinkButton';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
  /** Show the project's heroLink as its own button (homepage drives clicks
   *  to these). Default true. */
  showHeroLink?: boolean;
  /** Heading level for the name, to fit the page outline. Default h3. */
  headingLevel?: 'h2' | 'h3';
}

/**
 * Teaser for one project, linking to /portfolio/<alias>.
 *
 * The whole card is clickable, but only the name is the actual link -
 * stretched over the card with ::after - so screen readers announce it once
 * and text stays selectable. The heroLink button sits above that layer, so
 * it's a separate target, never a link nested inside a link.
 */
export default function ProjectCard(props: ProjectCardProps) {
  const d = props.project.projectDetails;
  const Heading = props.headingLevel ?? 'h3';
  const cover = d.cardImage ?? d.backgroundImage;
  const coverSrc = cover ? ASSET_MANIFEST.get(cover.source) : undefined;
  const logoSrc = d.thumbnailImage ? ASSET_MANIFEST.get(d.thumbnailImage.source) : undefined;
  const heroLink = (props.showHeroLink ?? true) ? d.heroLink : undefined;

  return (
    <article className="project-card">
      <div className={`project-card-cover ${coverSrc ? '' : 'project-card-cover--pattern'}`}>
        {coverSrc && <img src={coverSrc} alt="" loading="lazy" decoding="async" />}
        {logoSrc && (
          <img className="project-card-logo" src={logoSrc} alt="" loading="lazy" decoding="async" />
        )}
      </div>

      <div className="project-card-body">
        {d.kind && (
          <p className="meta project-card-kind">
            <span className="meta-dim project-card-bracket" aria-hidden="true">[</span>
            {d.kind}
            <span className="meta-dim project-card-bracket" aria-hidden="true">]</span>
          </p>
        )}

        <Heading className="project-card-title">
          <span className="meta meta-dim project-card-prompt" aria-hidden="true">{'\\>'}</span>
          <Link className="project-card-link" to={`/portfolio/${d.alias}`}>
            {d.name}
          </Link>
        </Heading>

        <p className="project-card-brief">{d.brief}</p>

        {heroLink && (
          <div className="project-card-action">
            <ExternalLinkButton
              linkTo={heroLink.target}
              text={heroLink.label}
              icon={heroLink.icon}
              size="sm"
            />
          </div>
        )}

        <div className="project-card-foot">
          <MetaTags tags={[categoryLabel(d.category), d.origin, d.status]} />
          {d.year && <span className="meta meta-dim project-card-year">{d.year}</span>}
          <span className="project-card-arrow" aria-hidden="true">→</span>
        </div>

      </div>

    </article>
  );
}
