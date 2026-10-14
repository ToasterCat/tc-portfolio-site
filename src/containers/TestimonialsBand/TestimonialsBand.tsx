import { Link } from 'react-router-dom';
import { InlineText } from '../../components/UI/RichText/RichText';
import { homepageTestimonials } from '../../PROJECTS';
import './TestimonialsBand.scss';

/**
 * Homepage quotes, straight from the projects' testimonials, each linking
 * back to the work it's about. Placeholders appear in dev builds only.
 */
export default function TestimonialsBand() {
  const quotes = homepageTestimonials();
  if (quotes.length === 0) return null;

  return (
    <section className="testimonials-band section-band" aria-labelledby="testimonials-heading">
      <div className="section-head">
        <h2 id="testimonials-heading">In Their Words</h2>
      </div>

      <ul className="testimonials-list card-grid">
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
                <Link to={`/portfolio/${d.alias}`} className="testimonial-project">
                  See the project
                  <span aria-hidden="true"> →</span>
                </Link>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
