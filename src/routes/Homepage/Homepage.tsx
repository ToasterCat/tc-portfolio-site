import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import HeroSection from '../../containers/HeroSection/HeroSection';
import TileSection from '../../containers/TileSection/TileSection';
import './Homepage.scss';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';

export default function Homepage() {
  return (
    <React.Fragment>
      <HeroSection
        classPrefix={'hero1'}
        heading={'We help you build stuff more good.'}
        content={`God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Checkmate... Yes, Yes, without the oops! Checkmate... You know what? It is beets. I've crashed into a beet truck. They're using our own satellites against us. And the clock is ticking.`}
        img={{
          source:
            'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1619030102/toastercat/toastercat_qlm38x.png',
          alt: 'toaster-cat-logo',
          position: 'right',
        }}
      />
      <TileSection
        heading={'Consulting Services'}
        buttons={[
          'Software Consultation',
          'Custom Web Design & Hosting',
          'Game Development',
        ]}
      />
      <ProjectSection />
      <section className="homepage-contact">
        <ContactForm />
      </section>
    </React.Fragment>
  );
}
