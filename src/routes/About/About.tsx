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

        <p>
          ToasterCat blah blah blah
        </p>

        <ul className="services-list">
          <li>
            <h3>Custom Web Design and Hosting</h3>
            <p>
              Have an idea for a website? Don't know whether you should code it
              all yourself or just let another service handle it for you? We'll
              help you get online and establish your presence so you can get
              back to working on what matters.
            </p>
            <a href="/projects#proj-web">Learn More</a>
          </li>
          <li>
            <h3>Game Development</h3>
            <p>
              With over a decade of experience building games from the ground-up,
              we know just how hard it is to make something fun. We want to help
              you realize your vision without running into the same pitfalls we've
              seen time and time again.
            </p>
            <p>
              <i>(hint: no one is good at netcode)</i>
            </p>
            <a href="/projects#proj-game">Learn More</a>
          </li>
          <li>
            <h3>Audio Production // Recording Studio</h3>
            <p>
              From music to vlogging to games, everyone needs good audio.
            </p>
            <p>
              Located in the musical pacific northwest, ToasterCat Recording Studios
              provides equipment and experience for blossoming artists and makers
              alike to create professional audio assets at an accessible hourly rate.
            </p>
            <a href="/projects#proj-audio">Learn More</a>
          </li>
          <li>
            <h3>Private Consultation</h3>
            <p>
              Sometimes our expertise is required for more specialized use cases
              and technologies. We would love to hear about your "crazy" ideas
              and critique your technical approach from behind the NDA'd veil.
            </p>
            <p>
              From apps to doomsday devices - let's see what we can do for you.
            </p>
            <a href="/contact">Reach Out</a>
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
