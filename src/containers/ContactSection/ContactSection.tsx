import { Link } from 'react-router-dom';
import SectionHeading from '../../components/UI/SectionHeading/SectionHeading';

import './ContactSection.scss';

export default function ContactInfoBar() {
  return (
    <section className="contact-section">

      <SectionHeading
        heading={`Taking private commissions.`}
        styleClass={'contact-heading'}
      />

      <p className="contact-blurb">
        {/* Two lines on desktop, breaking after the colon for cadence. */}
        <span className="contact-blurb-line">Games, software, hardware, or audio:</span>{' '}
        <span className="contact-blurb-line">tell us what you&rsquo;re making.</span>
      </p>

      <Link to="/contact" className="btn btn--primary btn--lg">
        Start a Conversation
      </Link>
    </section>
  );
}
