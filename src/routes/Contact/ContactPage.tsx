import useDocumentTitle from '../../hooks/useDocumentTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import { AVAILABILITY, CONTACT_EMAIL } from '../../SITE';
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

          <p className="contact-notes-alt">
            Prefer email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

          <p className={`meta contact-notes-status ${AVAILABILITY.open ? 'is-open' : ''}`}>
            <span className="contact-notes-dot" aria-hidden="true" />
            {AVAILABILITY.open ? AVAILABILITY.label : AVAILABILITY.closedLabel}
          </p>
        </div>
      </aside>
    </>
  );
}
