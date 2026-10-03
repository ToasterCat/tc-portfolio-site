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
        Consulting, builds, and production work &mdash; software, hardware, or
        audio. Tell us what you're making.
      </p>

      <Link to="/contact" className="btn btn--primary btn--lg">
        Start a Conversation
      </Link>
    </section>
  );
}
