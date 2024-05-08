import React from 'react';

import HeroSection from '../../containers/HeroSection/HeroSection';
import TileSection from '../../containers/TileSection/TileSection';
import { ProjectSection } from '../../containers/ProjectSection/ProjectSection';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';

import tcLogo from '../../assets/tc-3d.png';
import heroBackground from '../../assets/background/chess-alt_scaled.png';
//import heroBackground from '../../assets/background/uma-kitty-gold.jpg';

import './Homepage.scss';
import about from './about.module.scss';
import locations from './locations.module.scss';
import services from './services.module.scss';

export default function Homepage() {
  return (
    <React.Fragment>

      <HeroSection
        classPrefix={'hero1'}
        quote={{
          content: `"Let's build better, together."`,
          src: `- ToasterCat Studios`,
          sub: ``
        }}
        heading={`We're makers who love what makers make, so we want to help makers make them.`}
        detail={`ToasterCat Studios (LLC) is a multidisciplinary engineering and consulting firm that aims to empower local makers realize their vision. From professional High-TPS scalable microservices to robotics, prototyping, and even A/V production - we want to work with you to make your 'crazy' science projects a reality. Bring on the doomsday devices, we want to build three.`}
        backgroundImage={{
          source: heroBackground
        }}
        logoImage={{
          source: tcLogo,
          alt: 'toaster-cat-logo',
          position: 'right',
        }}
      />

      <TileSection
        areLinks
        heading={'Client Services'}
        tiles={[
          { label: 'Web Design', url: '/projects#proj-web' },
          { label: 'Audio Production', url: '/projects#proj-audio' },
          { label: 'Consultation', url: '/projects#proj-consult' },
          { label: 'Prototyping', url: '/projects#proj-proto' }
        ]}
      />

      <section className={about.aboutSection}>
        <div className={about.aboutBlurb}>
          <h2>About ToasterCat</h2>
          <p>
            ToasterCat Studios is a free-range, ethically-sourced research center,
            makerspace, recording studio, and mad science laboratory based out of
            the American Pacific Northwest. ToasterCat was founded in 2020 to provide
            engineering and logistical resources to local makers and artists alike.
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
        </div>
      </section>

      <section className={about.aboutServices}>
        <h2>What We Do</h2>

        <ul className={about.servicesList}>
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
          <li>
            <h3>Custom Web Development and Hosting</h3>
            <p>
              Have an idea for a website? Don't know whether you should code it
              all yourself or just let another service handle it for you? We'll
              help you get online and establish your presence so you can get
              back to working on what matters.
            </p>
            <a href="/projects#proj-web">Portfolio</a>
          </li>
          <li>
            <h3>3D Product Design and Fabrication</h3>
            <p>
              From functional parts to cosplay accessories, ToasterCat Studios is
              equipped with an ever-growing fleet of 3D printers aimed at making
              rapid prototyping a reality for your vision. Send us your designs
              and we'll find a way to get something physical in your hands before
              you can say "uncanny".
            </p>
            <a href="/projects#proj-proto">Portfolio</a>
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
            <a href="/projects#proj-audio">Portfolio</a>
          </li>
        </ul>
      </section>

      <section className={locations.locationSection}>      
        <h2>Where We Do It</h2>
        <ul className={locations.locationsList}>
          <li>Seattle, WA</li>
          <li>Remote</li>
        </ul>
      </section>

      <ProjectSection />
      
      <ContactInfoBar />
    
    </React.Fragment>
  );
}
