import useDocumentTitle from '../../hooks/useDocumentTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import StatusLine from '../../components/UI/StatusLine/StatusLine';
import { STUDIO_STATUS, STUDIO_STATUSES, StudioStatus } from '../../SITE';
import './ContactPage.scss';

export default function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <>
      
      <ContactForm />

      {/* What helps someone about to write in - not another call to action. */}
      <aside className="contact-notes" aria-label="Before you write">
        <div className="contact-notes-inner">
          <h2 className="meta meta-dim contact-notes-label">Helpful to include</h2>
          <ul className="contact-notes-list">
            <li>What you&apos;re making, in a sentence or two</li>
            <li>Rough timeline, and any hard dates</li>
            <li>Links or references to anything similar</li>
          </ul>

          {/* What each footer status means for when a project can start. */}
          <section className="contact-status" id="status" aria-labelledby="contact-status-label">
            <h2 id="contact-status-label" className="meta meta-dim contact-notes-label">
              Studio status
            </h2>
            <dl className="contact-status-list">
              {(Object.keys(STUDIO_STATUSES) as StudioStatus[]).map((status) => {
                const current = status === STUDIO_STATUS;
                return (
                  <div className={`contact-status-item ${current ? 'is-current' : ''}`} key={status}>
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
