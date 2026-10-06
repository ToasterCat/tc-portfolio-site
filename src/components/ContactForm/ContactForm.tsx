import React from 'react';
import { Link } from 'react-router-dom';
import Brackets from '../UI/Brackets/Brackets';
import { CONTACT_EMAIL } from '../../SITE';
import './ContactForm.scss';

export default function ContactForm() {
  return (
    <React.Fragment>
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

        <form
          className="form-group"
          action="https://formspree.io/f/mzbyrpnd"
          method="POST"
        >
          <div className="contact-form-field">
            <label htmlFor="user-name-1">Your Name:</label>
            <input
              id="user-name-1"
              type="text"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="email-1">Your Email:</label>
            <input
              id="email-1"
              type="email"
              placeholder="name@host.com"
              name="_replyto"
              required
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="location-1">
              Phone: <span className="contact-form-optional">(optional)</span>
            </label>
            <input
              id="location-1"
              type="tel"
              placeholder="555-555-5555"
              name="phone"
            />
          </div>
          <div className="contact-form-field-text-area">
            <label htmlFor="textarea-1">Requests/Comments:</label>
            <textarea
              name="textarea-1"
              id="textarea-1"
              cols={30}
              rows={10}
              placeholder="Your message here"
            ></textarea>
          </div>
          <div className="contact-form-buttons">
            <button
              type="submit"
              name="submit"
              value="Send"
              className="btn btn--primary btn--lg"
            >
              Submit
            </button>
            <button type="reset" className="btn btn--tertiary">
              <Brackets>Reset</Brackets>
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}
