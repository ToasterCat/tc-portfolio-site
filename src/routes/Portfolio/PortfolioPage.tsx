import { useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import usePageMeta from '../../hooks/usePageMeta';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Brackets from '../../components/UI/Brackets/Brackets';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';
import { ARCHIVED_PROJECTS, CategoryInfo, PROJECT_CATEGORIES, sectionProjects } from '../../PROJECTS';
import './PortfolioPage.scss';

/**
 * /portfolio - the company resume.
 *
 * One section per service we sell, each read top to bottom like a resume
 * entry: what you'd hire us for (pitch) -> our best proof (flagship) -> the
 * rest of the evidence (rows) -> work we can't show -> early work (before
 * the studio) -> the ask (CTA).
 * Unlisted projects sit in a small Archive after the last service.
 * No dates or counts at section level: quiet stretches and NDA work never
 * read as gaps.
 */
export default function PortfolioPage() {
  usePageMeta({
    title: 'Portfolio',
    description: 'Games, websites, digital media, prototypes, and consulting work from ToasterCat Studios, a Seattle studio, grouped by service.',
  });
  useLegacyAnchorRedirect();
  const active = useActiveSection(PROJECT_CATEGORIES.map((c) => c.anchor));
  const jumpList = useRef<HTMLUListElement>(null);
  const { fadeProps } = useHorizontalScroll(jumpList);

  // Phones: keep the current section's label visible in the swipeable bar.
  useEffect(() => {
    const list = jumpList.current;
    const item = list?.querySelector<HTMLElement>('.is-active')?.parentElement;
    if (list && item) {
      const target = item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      list.scrollTo({ left: Math.max(0, target), behavior: reduce ? 'auto' : 'smooth' });
    }
  }, [active]);

  return (
    <div className="portfolio">
      <div className="portfolio-head-band">
        <header className="portfolio-head">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-sub">
            Work we&apos;ve built for clients, and a few things nobody asked for.
          </p>
        </header>
      </div>

      <nav className="portfolio-jump" aria-label="Services">
        <ul className="portfolio-jump-list" ref={jumpList} {...fadeProps}>
          {PROJECT_CATEGORIES.map((c) => (
            <li key={c.key}>
              <Link
                to={{ hash: `#${c.anchor}` }}
                className={`btn btn--tertiary ${active === c.anchor ? 'is-active' : ''}`}
                aria-current={active === c.anchor ? 'location' : undefined}
              >
                <Brackets>{c.label}</Brackets>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {PROJECT_CATEGORIES.map((c) => (
        <ServiceSection key={c.key} category={c} />
      ))}

      {ARCHIVED_PROJECTS.length > 0 && (
        <section className="portfolio-archive" aria-labelledby="archive-heading">
          <div className="portfolio-service-inner">
            <div className="portfolio-service-more">
              <h2 id="archive-heading" className="meta meta-dim portfolio-service-more-label">Archive</h2>
              <p className="portfolio-archive-note">Shelved and retired projects, kept for the record.</p>
              <ul className="portfolio-service-rows">
                {ARCHIVED_PROJECTS.map((p) => (
                  <li key={p.projectDetails.alias}>
                    <ProjectCard project={p} variant="row" headingLevel="h3" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <ContactInfoBar />
    </div>
  );
}

function ServiceSection(props: { category: CategoryInfo }) {
  const c = props.category;
  const { flagship, rest, early } = sectionProjects(c);
  const headingId = `${c.anchor}-heading`;

  return (
    <section id={c.anchor} className="portfolio-service" aria-labelledby={headingId}>
      <div className="portfolio-service-inner">
        <div className="portfolio-service-head">
          <h2 id={headingId} className="portfolio-service-title">
            <span className="meta meta-dim portfolio-service-prompt" aria-hidden="true">{'\\>'}</span>
            {c.label}
          </h2>
          <p className="portfolio-service-pitch">{c.pitch}</p>
        </div>

        {flagship && (
          <ProjectCard project={flagship} variant="feature" showYear={false} headingLevel="h3" />
        )}

        {(rest.length > 0 || c.confidentialNote) && (
          <div className="portfolio-service-more">
            <h3 className="meta meta-dim portfolio-service-more-label">More {c.label.toLowerCase()}</h3>
            <ul className="portfolio-service-rows">
              {rest.map((p) => (
                <li key={p.projectDetails.alias}>
                  <ProjectCard project={p} variant="row" headingLevel="h4" />
                </li>
              ))}
              {c.confidentialNote && (
                <li className="portfolio-service-confidential">
                  <span className="tag portfolio-service-confidential-mark" aria-hidden="true">
                    <HiddenIcon />
                  </span>
                  <span>{c.confidentialNote}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        {early.length > 0 && (
          <div className="portfolio-service-more portfolio-service-more--early">
            <h3 className="meta meta-dim portfolio-service-more-label">Early work</h3>
            <ul className="portfolio-service-rows">
              {early.map((p) => (
                <li key={p.projectDetails.alias}>
                  <ProjectCard project={p} variant="row" headingLevel="h4" />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="portfolio-service-cta">
          <Link to="/contact" className="btn btn--primary">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Which section the reader is in: the last one whose top has passed a line
 * just under the sticky header + jump bar. Drives the jump bar highlight.
 */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>();
  const key = ids.join('|');

  useEffect(() => {
    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current: string | undefined;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [key]);

  return active;
}

/** /portfolio#proj-web (pre-resume anchors) -> /portfolio#websites, #audio -> #media. */
function useLegacyAnchorRedirect() {
  const { hash } = useLocation();
  const history = useHistory();
  useEffect(() => {
    const legacy = PROJECT_CATEGORIES.find((c) => c.legacyAnchors.some((a) => `#${a}` === hash));
    if (legacy) {
      history.replace({ hash: `#${legacy.anchor}` });
    }
  }, [hash, history]);
}

/** Crossed-out eye ("hidden"), stroked in currentColor to sit in the meta palette. */
function HiddenIcon() {
  return (
    <svg
      className="portfolio-service-confidential-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M4 20 20 4" />
    </svg>
  );
}
