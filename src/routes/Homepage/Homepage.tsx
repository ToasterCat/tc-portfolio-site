import React from 'react';
import tcLogo from '../../assets/toastercat.png';
import ContactForm from '../../components/ContactForm/ContactForm';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import PROJECTS from '../../PROJECTS';
import './Homepage.scss';

export default function Homepage() {
  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="hero-content">
          <h2>HERO HEADING</h2>
          <p>
            You really think you can fly that thing? I was part of something
            special. Forget the fat lady! You're obsessed with the fat lady!
            Drive us out of here! Hey, take a look at the earthlings. Goodbye!
            Just my luck, no ice. Must go faster. This thing comes fully loaded.
            AM/FM radio, reclining bucket seats, and... power windows.
          </p>
        </div>
        <div className="hero-image">
          <img src={tcLogo} alt="toaster-cat-logo" />
        </div>
      </section>
      <section className="services-section">
        <h3>Services</h3>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        {PROJECTS.map((project) => (
          <ProjectTile project={project} />
        ))}
      </section>
      <section className="homepage-contact">
        <ContactForm />
      </section>
    </React.Fragment>
  );
}
