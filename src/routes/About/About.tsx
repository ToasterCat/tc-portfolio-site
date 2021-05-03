import React from 'react';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';
import './About.scss';

export default function About() {
  return (
    <React.Fragment>
      <section className="about-section">
        <h2>About ToasterCat Studios</h2>
        <p>
          ToasterCat Studios is a free-range, ethically-sourced research center,
          makerspace, recording studio, and mad science laboratory based out of
          the American Pacific Northwest. It was founded by its owner and
          operator, Dirk Hortensius, to provide engineering and logistical
          resources to local makers and artists alike.
        </p>
        <p>
          As these modern times require multi-disciplinary expertise and an
          ever-increasingly diverse toolbox of specializations, services offered
          by ToasterCat Studios range across the digital and physical realms.
          Software design, hardware prototyping, product development, business
          consultation, and even audio/video production resources are made
          available to empower innovation and progress at the individual level.
          If the vision is mad enough, we want to talk shop.
        </p>
      </section>

      <section className="about-services">
        <h2>What We Do</h2>
        <ul className="services-list">
          <li>
            <h4>Custom Web Design and Hosting</h4>
            <p>
              Do you have any idea how long it takes those cups to decompose.
              Hey, take a look at the earthlings. Goodbye! Yeah, but your
              scientists were so preoccupied with whether or not they could,
              they didn't stop to think if they should. Just my luck, no ice.
            </p>
            <a href="/projects#proj-web">Learn More</a>
          </li>
          <li>
            <h4>Game Development</h4>
            <p>
              Do you have any idea how long it takes those cups to decompose.
              Hey, take a look at the earthlings. Goodbye! Yeah, but your
              scientists were so preoccupied with whether or not they could,
              they didn't stop to think if they should. Just my luck, no ice.
            </p>
            <a href="/projects#proj-game">Learn More</a>
          </li>
          <li>
            <h4>Audio Production / Engineering</h4>
            <p>
              Do you have any idea how long it takes those cups to decompose.
              Hey, take a look at the earthlings. Goodbye! Yeah, but your
              scientists were so preoccupied with whether or not they could,
              they didn't stop to think if they should. Just my luck, no ice.
            </p>
            <a href="/projects#proj-audio">Learn More</a>
          </li>
          <li>
            <h4>Makerspace / Recording Studio</h4>
            <p>
              Do you have any idea how long it takes those cups to decompose.
              Hey, take a look at the earthlings. Goodbye! Yeah, but your
              scientists were so preoccupied with whether or not they could,
              they didn't stop to think if they should. Just my luck, no ice.
            </p>
          </li>
          <li>
            <h4>Consultation</h4>
            <p>
              Do you have any idea how long it takes those cups to decompose.
              Hey, take a look at the earthlings. Goodbye! Yeah, but your
              scientists were so preoccupied with whether or not they could,
              they didn't stop to think if they should. Just my luck, no ice.
            </p>
          </li>
        </ul>
        <h2>Where We Do It</h2>
        <ul className="services-list">
          <li>Greater Seattle Metro</li>
          <li>Virtually via web conferencing</li>
          <li>Wherever you are! We travel on case-by-case basis</li>
        </ul>
      </section>

      <ContactInfoBar />
    </React.Fragment>
  );
}
