import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Brackets from '../../components/UI/Brackets/Brackets';
import { InlineText } from '../../components/UI/RichText/RichText';
import ScrollControls from '../../components/UI/ScrollControls/ScrollControls';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';
import { homepageTestimonials } from '../../PROJECTS';
import './TestimonialsBand.scss';

/**
 * Homepage quotes, straight from the projects' testimonials, each linking
 * back to the work it's about. Placeholders appear in dev builds only.
 *
 * Always one quote tall: the quotes sit in a single row that scrolls
 * sideways (two visible on desktop, one and a peek on phones), with
 * [ PREV ] / [ NEXT ] once there are more than fit.
 */
export default function TestimonialsBand() {
  const quotes = homepageTestimonials();
  const track = useRef<HTMLUListElement>(null);
  const { overflows, atStart, atEnd, page } = useHorizontalScroll(track);

  if (quotes.length === 0) return null;

  return (
    <section className="testimonials-band section-band" aria-labelledby="testimonials-heading">
      <div className="section-head">
        <h2 id="testimonials-heading">In Their Words</h2>
      </div>

      <ul
        className={`testimonials-track${quotes.length === 1 ? ' testimonials-track--single' : ''}`}
        ref={track}
        tabIndex={overflows ? 0 : undefined}
        aria-label={overflows ? 'Testimonials, scroll sideways for more' : undefined}
      >
        {quotes.map(({ testimonial: t, project }, i) => {
          const d = project.projectDetails;
          return (
            <li key={`${d.alias}-${i}`}>
              <figure className={`testimonial${t.placeholder ? ' testimonial--placeholder' : ''}`}>
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
                <Link to={`/portfolio/${d.alias}`} className="btn btn--tertiary testimonial-project">
                  <Brackets>See the project</Brackets>
                </Link>
              </figure>
            </li>
          );
        })}
      </ul>

      {overflows && <ScrollControls atStart={atStart} atEnd={atEnd} page={page} />}
    </section>
  );
}

