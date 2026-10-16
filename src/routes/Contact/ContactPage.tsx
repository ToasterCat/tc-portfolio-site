import usePageMeta from '../../hooks/usePageMeta';
import ContactForm from '../../components/ContactForm/ContactForm';
import StatusLine from '../../components/UI/StatusLine/StatusLine';
import { STUDIO_STATUS, STUDIO_STATUSES, StudioStatus } from '../../SITE';
import './ContactPage.scss';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: 'Tell ToasterCat Studios what you’re making: games, websites, media, hardware, or consulting. Every message gets a reply from a person.',
  });

  return (
    <>
      <ContactForm
        intro={
          /* What helps someone about to write in, read before the fields. */
          <aside className="contact-brief" aria-labelledby="contact-brief-label">
            <p className="contact-brief-sub">Tell us what you&apos;re making. <br/>Every message gets a reply from a real human being.</p>
            <h2 id="contact-brief-label" className="meta meta-dim contact-notes-label">
              Helpful to include
            </h2>
            <ul className="contact-notes-list">
              <li>What you&apos;re making, in a sentence or two</li>
              <li>Rough timeline, and any hard dates</li>
              <li>Links or references to anything similar</li>
              <li>A budget range, if you have one</li>
            </ul>
            <p className="contact-brief-collab">
              <strong>
                Work <em>with</em> us:
              </strong>{' '}
              artist, developer, or musician who wants to collaborate? Same form; tell us what you do.
            </p>
          </aside>
        }
      />

      {/* What happens after sending, and when. */}
      <aside className="contact-notes" aria-label="After you write">
        <div className="contact-notes-inner">
          <section className="contact-process" aria-labelledby="contact-process-label">
            <h2 id="contact-process-label" className="meta meta-dim contact-notes-label">
              What to expect from us
            </h2>
            <ol className="contact-process-list">
              <li>
                <span className="contact-process-step">We reply within a week</span> to set up a video meeting.
              </li>
              <li>
                <span className="contact-process-step">We meet over video</span> to dig into what you&apos;re making.
              </li>
              <li>
                <span className="contact-process-step">You get an estimate</span> within two weeks of that meeting.
              </li>
              <li>
                <span className="contact-process-step">Work starts</span> once the estimate is agreed.
              </li>
            </ol>
            <p className="contact-status-footnote">
              If part of your project calls for a specialist outside our core team, we
              may bring in a trusted peer. You&rsquo;ll still work with us directly.
            </p>
            <p className="contact-status-footnote">
              Timing follows the studio status below.
            </p>
          </section>

          {/* What each footer status means for when a project can start. */}
          <section className="contact-status" id="status" aria-labelledby="contact-status-label">
            <h2 id="contact-status-label" className="meta meta-dim contact-notes-label">
              Studio status
            </h2>
            <dl className="contact-status-list">
              {(Object.keys(STUDIO_STATUSES) as StudioStatus[]).map((status) => {
                const current = status === STUDIO_STATUS;
                return (
                  <div
                    className={`contact-status-item contact-status-item--${status} ${current ? 'is-current' : ''}`}
                    key={status}
                  >
                    <dt>
                      <StatusLine status={status} live={current} />
                      {current && <span className="tag contact-status-now">now</span>}
                    </dt>
                    <dd>{STUDIO_STATUSES[status].summary}</dd>
                  </div>
                );
              })}
            </dl>
            <p className="contact-status-footnote">
              Start dates and timelines always vary, depending on how new work is scheduled
              alongside projects already in progress.
            </p>
          </section>
        </div>
      </aside>
    </>
  );
}

