import React from 'react';

import HeroSection from '../../containers/HeroSection/HeroSection';
import TileSection from '../../containers/TileSection/TileSection';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';

import './Homepage.scss';

export default function Homepage() {
  return (
    <React.Fragment>
      <HeroSection
        classPrefix={'hero1'}
        quote={{
          content: `"We help you make stuff more good."`,
          src: `- Dirk Hortensius`,
          sub: `Founder, ToasterCat Studios LLC`
        }}
        heading={`We're makers who love what makers make, so we want to help makers make them.`}
        detail={`ToasterCat Studios is a multidisciplinary engineering and consulting firm that aims to empower local makers realize their vision. From professional High-TPS scalable microservices to robotics, prototyping, and even amateur A/V production, we want to work with you to make your 'crazy' science projects a reality. Bring on the doomsday devices, we want to build three.`}
        img={{
          source:
            'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1619030102/toastercat/toastercat_qlm38x.png',
          alt: 'toaster-cat-logo',
          position: 'right',
        }}
      />
      <TileSection
        areLinks
        heading={'Services'}
        tiles={[
          { label: 'Web Design', url: '/projects#proj-web' },
          { label: 'Game Development', url: '/projects#proj-game' },
          { label: 'Audio Production', url: '/projects#proj-audio' },
          { label: 'Custom Engineering Solutions', url: '/about' }
        ]}
      />
      <ProjectSection />
      <ContactInfoBar />
    </React.Fragment>
  );
}
