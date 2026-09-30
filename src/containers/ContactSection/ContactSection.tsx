import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/UI/SectionHeading/SectionHeading';
import ExternalLinkButton from '../../components/UI/ExternalLinkButton/ExternalLinkButton';

import './ContactSection.scss';

interface ContactInfoBarProps {
  // Suppressed on the contact page itself, where the form is already on screen.
  showCta?: boolean;
}

export default function ContactInfoBar(props: ContactInfoBarProps) {
  const showCta = props.showCta ?? true;

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

      {showCta && (
        <Link to="/contact" className="contact-cta">
          Start a Conversation
        </Link>
      )}

      <div className="contact-button-group">
        <ExternalLinkButton
          text={'LinkedIn'}
          linkTo={'https://www.linkedin.com/company/110969321'}
        />
        <ExternalLinkButton
          text={'Facebook'}
          linkTo={'https://www.facebook.com/ToasterCat.Studios'}
        />
        <ExternalLinkButton
          text={'GitHub'}
          linkTo={'https://github.com/ToasterCat'}
        />
        <ExternalLinkButton
          text={'Discord'}
          linkTo={'https://discord.gg/VENmWr635t'}
        />
        <ExternalLinkButton
          text={'Patreon'}
          linkTo={'https://www.patreon.com/cw/ToasterCatStudios'}
        />
      </div>
    </section>
  );
}
