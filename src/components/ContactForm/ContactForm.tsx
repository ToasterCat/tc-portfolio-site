import { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Brackets from '../UI/Brackets/Brackets';
import { CONTACT_EMAIL } from '../../SITE';
import './ContactForm.scss';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzbyrpnd';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Posts to Formspree in the background so visitors stay on the site and get
 * an in-page thank-you. Without JavaScript the plain form action still works
 * (Formspree then shows its own confirmation page).
 */
export default function ContactForm() {
  const [state, setState] = useState<SendState>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
    statusRef.current?.focus();
  }

  return (
    <section className="contact-form-section">
      <h1 className="contact-form-heading">Contact ToasterCat</h1>

      {/* How the form travels, and the way around it, before anyone types. */}
      <div className="contact-form-preamble">
        <p>
          This form is delivered to our inbox by{' '}
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
            Formspree
          </a>
          . We only use your details to reply, and never share them with anyone else (
          <Link to="/privacy">privacy policy</Link>).
        </p>
        <p>
          Prefer to email us directly? Reach out to us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>

      {state === 'sent' ? (
        <div className="contact-form-status contact-form-status--sent" ref={statusRef} tabIndex={-1} role="status">
          <p className="contact-form-status-title">Thanks, it’s on its way.</p>
          <p>
            Expect a reply within a week. If it’s urgent, email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <button type="button" className="btn btn--tertiary" onClick={() => setState('idle')}>
            <Brackets>Send another</Brackets>
          </button>
        </div>
      ) : (
        <form className="form-group" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New inquiry from toastercat-studios.com" />
          {/* Spam trap: hidden from people, filled in by bots, discarded by Formspree. */}
          <input type="text" name="_gotcha" className="contact-form-trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="contact-form-field">
            <label htmlFor="contact-name">Your Name:</label>
            <input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Enter your full name" required />
          </div>
          <div className="contact-form-field">
            <label htmlFor="contact-email">Your Email:</label>
            <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="name@host.com" required />
          </div>
          <div className="contact-form-field">
            <label htmlFor="contact-phone">
              Phone: <span className="contact-form-optional">(optional)</span>
            </label>
            <input id="contact-phone" type="tel" name="phone" autoComplete="tel" placeholder="555-555-5555" />
          </div>
          <div className="contact-form-field-text-area">
            <label htmlFor="contact-message">Your Message:</label>
            <textarea
              id="contact-message"
              name="message"
              rows={10}
              placeholder="What are you making?"
              required
            />
          </div>

          {state === 'error' && (
            <div className="contact-form-status contact-form-status--error" ref={statusRef} tabIndex={-1} role="alert">
              <p>
                Something went wrong sending that. Please try again, or email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </div>
          )}

          <div className="contact-form-buttons">
            <button type="submit" className="btn btn--primary btn--lg" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Submit'}
            </button>
            <button type="reset" className="btn btn--tertiary" onClick={() => setState('idle')}>
              <Brackets>Reset</Brackets>
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
