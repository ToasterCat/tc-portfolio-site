import { useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Brackets from '../../components/UI/Brackets/Brackets';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';
import { CategoryInfo, PROJECT_CATEGORIES, sectionProjects } from '../../PROJECTS';
import './PortfolioPage.scss';

/**
 * /portfolio - the company resume.
 *
 * One section per service we sell, each read top to bottom like a resume
 * entry: what you'd hire us for (pitch) -> our best proof (flagship) -> the
 * rest of the evidence (rows) -> work we can't show -> the ask (CTA).
 * No dates or counts at section level: quiet stretches and NDA work never
 * read as gaps.
 */
export default function PortfolioPage() {
  useDocumentTitle('Portfolio');
  useLegacyAnchorRedirect();
  const active = useActiveSection(PROJECT_CATEGORIES.map((c) => c.anchor));
  const jumpList = useRef<HTMLUListElement>(null);

  // Phones: keep the current section's label visible in the swipeable bar.
  useEffect(() => {
    const list = jumpList.current;
    const item = list?.querySelector<HTMLElement>('.is-active')?.parentElement;
    if (list && item) {
      const target = item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2;
      list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }, [active]);

  return (
    <div className="portfolio">
      <header className="portfolio-head">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-sub">
          Work we&apos;ve built for clients, and a few things nobody asked for.
        </p>
      </header>

      <nav className="portfolio-jump" aria-label="Services">
        <ul className="portfolio-jump-list" ref={jumpList}>
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

      <ContactInfoBar />
    </div>
  );
}

function ServiceSection(props: { category: CategoryInfo }) {
  const c = props.category;
  const { flagship, rest } = sectionProjects(c);
  const headingId = `${c.anchor}-heading`;

  return (
    <section id={c.anchor} className="portfolio-service" aria-labelledby={headingId}>
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
                <span className="meta portfolio-service-confidential-mark" aria-hidden="true">
                  <span className="portfolio-service-confidential-bracket">[</span>
                  <HiddenIcon />
                  <span className="portfolio-service-confidential-bracket">]</span>
                </span>
                <span>{c.confidentialNote}</span>
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="portfolio-service-cta">
        <Link to="/contact" className="btn btn--primary">
          {c.cta}
        </Link>
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

/** /portfolio#proj-web (pre-resume anchors) -> /portfolio#websites. */
function useLegacyAnchorRedirect() {
  const { hash } = useLocation();
  const history = useHistory();
  useEffect(() => {
    const legacy = PROJECT_CATEGORIES.find((c) => `#${c.legacyAnchor}` === hash);
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
