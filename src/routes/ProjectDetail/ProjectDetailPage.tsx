import { CSSProperties, Fragment, ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import NotFound from '../Error/404';
import MetaTags from '../../components/UI/MetaTags/MetaTags';
import Ticker from '../../components/UI/Ticker/Ticker';
import Brackets from '../../components/UI/Brackets/Brackets';
import ExternalLinkButton from '../../components/UI/ExternalLinkButton/ExternalLinkButton';
import RichText, { InlineText } from '../../components/UI/RichText/RichText';
import { skillIconMap } from '../../components/UI/ProjectSkills/ProjectSkills';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';
import { ASSET_MANIFEST } from '../../assets/AssetMap';
import { getProjectByAlias } from '../../PROJECTS';
import MediaFrame from '../../components/UI/Media/MediaFrame';
import Gallery from '../../components/UI/Media/Gallery';
import { MediaItem, ProjectDetails } from '../../types/project.model';
import './ProjectDetailPage.scss';

/**
 * /portfolio/<alias> - one linkable "dossier" page per project.
 *
 *   breadcrumb -> hero (what it is) -> featured media -> overview/outcome +
 *   spec sheet -> gallery -> testimonials -> back to portfolio -> contact band
 *
 * Sections without data don't render, so thin projects stay tidy. The
 * outcome always comes last and stays quiet: it closes the story without
 * shouting a shelved project's result.
 */
export default function ProjectDetailPage() {
  const { alias } = useParams<{ alias: string }>();
  const project = getProjectByAlias(alias);

  useDocumentTitle(project ? project.projectDetails.name : 'Not Found');

  if (!project) {
    return <NotFound />;
  }

  const d = project.projectDetails;

  const outcome = d.outcome ? (
    <section className="project-page-outcome" aria-labelledby="project-outcome">
      <h2 id="project-outcome" className="meta project-page-label">Outcome</h2>
      <p>
        <InlineText text={d.outcome} />
      </p>
    </section>
  ) : null;

  return (
    <article className="project-page">
      <nav className="meta project-page-crumbs" aria-label="Breadcrumb">
        <span className="meta-dim" aria-hidden="true">{'\\>'}</span>
        <Link to="/portfolio">portfolio</Link>
        <span className="meta-dim" aria-hidden="true">/</span>
        <span aria-current="page">{d.alias}</span>
      </nav>

      <ProjectHero details={d} />

      {d.media?.featured && <FeaturedMedia item={d.media.featured} />}

      <div className="project-page-columns">
        <div className="project-page-main">
          {d.body.length > 0 && (
            <section aria-labelledby="project-overview">
              <h2 id="project-overview" className="meta project-page-label">Overview</h2>
              <RichText className="project-page-body" paragraphs={d.body} />
            </section>
          )}

          {outcome}
        </div>

        <SpecSheet details={d} />
      </div>

      {d.media?.gallery && d.media.gallery.length > 0 && (
        <section className="project-page-gallery" aria-labelledby="project-gallery">
          <h2 id="project-gallery" className="meta project-page-label">
            Gallery <span className="meta-dim">({d.media.gallery.length})</span>
          </h2>
          <Gallery items={d.media.gallery} label={`${d.name} gallery`} />
        </section>
      )}

      {d.testimonials && d.testimonials.length > 0 && (
        <section className="project-page-testimonials" aria-label="Testimonials">
          {d.testimonials.map((t, i) => (
            <figure className="project-quote" key={i}>
              <blockquote>
                <p>
                  <InlineText text={t.quote} />
                </p>
              </blockquote>
              <figcaption className="meta">
                <span className="meta-dim" aria-hidden="true">— </span>
                {t.name}
                {t.title && <span className="meta-dim">, {t.title}</span>}
                {t.org && <span className="meta-dim"> @ {t.org}</span>}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <div className="project-page-back">
        <Link to="/portfolio" className="btn btn--tertiary">
          <Brackets>&lt;&lt; Back to Portfolio</Brackets>
        </Link>
      </div>

      <ContactInfoBar />
    </article>
  );
}

function ProjectHero(props: { details: ProjectDetails }) {
  const d = props.details;
  const background = d.backgroundImage ? ASSET_MANIFEST.get(d.backgroundImage.source) : undefined;
  const thumbnail = d.thumbnailImage ? ASSET_MANIFEST.get(d.thumbnailImage.source) : undefined;

  return (
    <header
      className={`project-hero ${background ? '' : 'project-hero--pattern'}`}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
    >
      {/* A grid: [KIND] eyebrow on top at full width; then the logo centred
          on the title; brief, hero link and tags follow in the text column
          (the tag ticker runs full width on phones). */}
      <div className={`project-hero-inner ${thumbnail ? '' : 'project-hero-inner--no-thumb'}`}>
        {/* Eyebrow across the full width, so any length of kind fits and
            the logo and title below can centre on each other. */}
        {d.kind && (
          <p className="meta project-hero-kind">
            <span className="meta-dim project-hero-bracket" aria-hidden="true">[</span>
            {d.kind}
            <span className="meta-dim project-hero-bracket" aria-hidden="true">]</span>
          </p>
        )}

        {thumbnail && (
          <img className="project-hero-thumb" src={thumbnail} alt={d.thumbnailImage?.alt ?? ''} />
        )}

        <h1 className="project-hero-title">
          <span className="meta meta-dim project-hero-prompt" aria-hidden="true">{'\\>'}</span>
          <span className="project-hero-name">{withDotBreaks(d.name)}</span>
        </h1>

        <p className="project-hero-brief">{d.brief}</p>

        {d.heroLink && (
          <div className="project-hero-links">
            <ExternalLinkButton key={d.heroLink.label} linkTo={d.heroLink.target} text={d.heroLink.label} icon={d.heroLink.icon} />
          </div>
        )}

        {/* One line: drifts as a ticker only when it doesn't fit. (Year lives
            in the spec sheet.) */}
        <Ticker className="project-hero-meta">
          <MetaTags tags={[d.showcase, d.origin, d.status]} />
        </Ticker>
      </div>
    </header>
  );
}

/**
 * Offer a line break after each "." so long dotted names wrap at the dot
 * ("BLACK0UT. / PUNK") rather than mid-word. <wbr>, not a zero-width space,
 * so nothing invisible ends up in copied text.
 */
function withDotBreaks(text: string) {
  const parts = text.split('.');
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <>
          .<wbr />
        </>
      )}
    </Fragment>
  ));
}

/** The featured slot: any media type, full size, loaded eagerly. */
function FeaturedMedia(props: { item: MediaItem }) {
  const m = props.item;
  return (
    <figure
      className="project-featured"
      /* never upscale small art past its own pixel size */
      style={m.type === 'embed' ? undefined : ({ '--source-w': `${m.width}px` } as CSSProperties)}
    >
      <MediaFrame item={m} mode="full" eager />
      {m.caption && <figcaption className="meta meta-dim">{m.caption}</figcaption>}
    </figure>
  );
}

function SpecSheet(props: { details: ProjectDetails }) {
  const d = props.details;
  const rows: [string, ReactNode][] = [];
  if (d.role) rows.push(['Role', d.role]);
  if (d.year) rows.push(['Year', <span className="meta">{d.year}</span>]); // data, not a #tag
  rows.push(['Origin', <span className="meta">#{d.origin}</span>]);
  rows.push(['Status', <span className="meta">#{d.status}</span>]);

  const skills = d.skills ?? [];
  const links = d.links ?? [];

  return (
    <aside className="project-spec" aria-label="Project details">
      <dl>
        {rows.map(([label, value]) => (
          <div className="project-spec-row" key={label}>
            <dt className="meta meta-dim">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
        {skills.length > 0 && (
          <div className="project-spec-row">
            <dt className="meta meta-dim">Tech</dt>
            <dd>
              <ul className="project-spec-tech">
                {skills.map((skill) => {
                  const s = skillIconMap(skill);
                  // No icon yet (the data tests flag these): show the name plainly
                  // rather than the generic ToasterCat placeholder.
                  const known = s.label !== 'ToasterCat';
                  return (
                    <li key={skill}>
                      {known && <img src={s.icon} alt="" aria-hidden="true" />}
                      {known ? s.label : skill}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      {links.length > 0 && (
        <section className="project-spec-links" aria-labelledby="project-links">
          <h2 id="project-links" className="meta project-page-label">Links</h2>
          <div className="project-spec-links-list">
            {links.map((l) => (
              <ExternalLinkButton key={l.label} linkTo={l.target} text={l.label} icon={l.icon} />
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
