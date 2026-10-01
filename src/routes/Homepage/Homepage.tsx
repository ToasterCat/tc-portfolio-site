import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

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
  useDocumentTitle();

  return (
    <React.Fragment>

    {/* ==== HERO / LANDING ===== */}
      <HeroSection
        classPrefix={'hero1'}
        quote={{
          content: `"If it works, it wasn't that crazy."`,
          src: `— ToasterCat Studios`,
          sub: ``
        }}
        heading={`Mad science, made real.`}
        detail={`Games, websites, records, and hardware — designed, built, and finished under one roof in the Pacific Northwest. Bring us the project everyone else called impractical.`}
        backgroundImage={{
          source: heroBackground
        }}
        logoImage={{
          source: tcLogo,
          alt: 'toaster-cat-logo',
          position: 'right',
        }}
      />


    {/* ==== RECENT WORKS ===== */}
      <ProjectSection />


    {/* ==== ABOUT TOASTERCAT ===== */}
      <section className={`${about.aboutSection} section-band`}>
        <div className={about.aboutBlurb}>
          <div className="section-head">
            <h2>About ToasterCat</h2>
          </div>
          <p>
            ToasterCat Studios is a free-range, ethically-sourced research center,
            makerspace, recording studio, and mad science laboratory based out of
            the American Pacific Northwest. ToasterCat was founded in 2020 to provide
            engineering and logistical resources to local makers and artists alike.
          </p>
          <p>
            The shop runs a printer fleet, a live room, and whatever hardware the
            current project demands. Software, hardware, and audio all come out of
            the same building &mdash; which is the whole point. If the vision is mad
            enough, we want to talk shop. Still taking work.
          </p>
        </div>
      </section>
      

      {/* ==== CLIENT SERVICES ===== */}
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

      {/* ==== SERVICE DETAIL ===== */}
      <section className={`${about.aboutServices} section-band`}>
        <div className="section-head">
          <h2>What We Build</h2>
          <p className="section-sub">Nobody asked for most of this.</p>
        </div>

        <ul className={`${about.servicesList} card-grid`}>
          <li>
            <h3>Web</h3>
            <p>
              Four client sites, from a static storefront for a touring punk act
              to an ad-revenue media blog with a full analytics suite. Built lean
              and custom &mdash; one client's site runs on $0.12/month of AWS.
              No template tax.
            </p>
            <a href="/projects#proj-web">See the Work</a>
          </li>
          <li>
            <h3>Games</h3>
            <p>
              Four titles across mobile, PC, and open-source hardware showcases.
              PixHell shipped in native Android with custom motion controls;
              Chick Magnet ran custom physics and destructible environments with
              a team of nine. Both made expo finals.
            </p>
            <a href="/projects#proj-game">See the Work</a>
          </li>
          <li>
            <h3>Hardware and Prototyping</h3>
            <p>
              An ever-growing printer fleet pointed at whatever you send us &mdash;
              ergonomic croquet hooks, a working Nerf-compatible blaster, licensed
              products for retail. Design, slice, print, iterate, ship.
            </p>
            <a href="/projects#proj-proto">See the Work</a>
          </li>
          <li>
            <h3>Audio Production // Recording Studio</h3>
            <p>
              Two LPs tracked, mixed, and mastered &mdash; one in partnership with
              Soundhouse Studios alongside Jack Endino and Mike Sebring.
              Experimental techniques, heavy overlays, and a record cut across four
              locations when it called for it.
            </p>
            <a href="/projects#proj-audio">See the Work</a>
          </li>
        </ul>
      </section>


    {/* ==== LOCATIONS ===== */}
      <section className={`${locations.locationSection} section-band`}>      
        <div className="section-head">
          <h2>Where We Work</h2>
        </div>
        <ul className={locations.locationsList}>
          <li>Seattle, WA</li>
          <li>Portland, OR</li>
          <li>Vancouver, BC</li>
          <li>Remote</li>
        </ul>
      </section>
      
      <ContactInfoBar />
    
    </React.Fragment>
  );
}
