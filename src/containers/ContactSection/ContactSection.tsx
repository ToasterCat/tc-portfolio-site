import React from 'react';
import SectionHeading from '../../components/UI/SectionHeading/SectionHeading';
import ExternalLinkButton from '../../components/UI/ExternalLinkButton/ExternalLinkButton';

export default function ContactInfoBar() {
  return (
    <section className="contact-section">
      <SectionHeading
        heading={'Connect with us'}
        styleClass={'contact-heading'}
      />
      <div className="contact-button-group">
        <ExternalLinkButton
          text={'LinkedIn'}
          linkTo={'https://www.linkedin.com/in/dirk-hortensius/'}
        />
        <ExternalLinkButton
          text={'Github'}
          linkTo={'https://github.com/Dirker27'}
        />
      </div>
    </section>
  );
}
