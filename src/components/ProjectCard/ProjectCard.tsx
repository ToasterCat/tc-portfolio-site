import { Link } from 'react-router-dom';
import { Project } from '../../types/project.model';
import { ASSET_MANIFEST } from '../../assets/AssetMap';
import { categoryLabel } from '../../PROJECTS';
import MetaTags from '../UI/MetaTags/MetaTags';
import ExternalLinkButton from '../UI/ExternalLinkButton/ExternalLinkButton';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
  /**
   *  card    - cover over text (homepage grid). Default.
   *  feature - large; cover beside text on desktop (a service's flagship).
   *  row     - compact one-line entry (the rest of a service's evidence).
   */
  variant?: 'card' | 'feature' | 'row';
  /** Show the project's heroLink as its own button (homepage drives clicks
   *  to these). Default true; never on rows. */
  showHeroLink?: boolean;
  /** Show the year. The /portfolio resume view hides it: no timeline, no gaps. */
  showYear?: boolean;
  /** Heading level for the name, to fit the page outline. Default h3. */
  headingLevel?: 'h2' | 'h3' | 'h4';
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
  const variant = props.variant ?? 'card';
  const Heading = props.headingLevel ?? 'h3';
  const cover = d.cardImage ?? d.backgroundImage;
  const coverSrc = cover ? ASSET_MANIFEST.get(cover.source) : undefined;
  const logoSrc = d.thumbnailImage ? ASSET_MANIFEST.get(d.thumbnailImage.source) : undefined;
  const heroLink = variant !== 'row' && (props.showHeroLink ?? true) ? d.heroLink : undefined;
  const showYear = (props.showYear ?? true) && !!d.year;

  const kind = d.kind && (
    <p className="tag tag--quiet project-card-kind">{d.kind}</p>
  );

  const title = (
    <Heading className="project-card-title">
      <span className="meta meta-dim project-card-prompt" aria-hidden="true">{'\\>'}</span>
      <Link className="project-card-link" to={`/portfolio/${d.alias}`}>
        {d.name}
      </Link>
    </Heading>
  );

  if (variant === 'row') {
    return (
      <article className="project-card project-card--row">
        {logoSrc ? (
          <img className="project-card-row-logo" src={logoSrc} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="project-card-row-logo project-card-cover--pattern" aria-hidden="true" />
        )}
        <div className="project-card-row-text">
          {kind}
          {title}
        </div>
        <span className="project-card-arrow" aria-hidden="true">→</span>
      </article>
    );
  }

  return (
    <article className={`project-card project-card--${variant}`}>
      <div className={`project-card-cover ${coverSrc ? '' : 'project-card-cover--pattern'}`}>
        {coverSrc && <img src={coverSrc} alt="" loading="lazy" decoding="async" />}
        {logoSrc && (
          <img className="project-card-logo" src={logoSrc} alt="" loading="lazy" decoding="async" />
        )}
      </div>

      <div className="project-card-body">
        {kind}
        {title}

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
          {showYear && <span className="meta meta-dim project-card-year">{d.year}</span>}
          <span className="project-card-arrow" aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
}
