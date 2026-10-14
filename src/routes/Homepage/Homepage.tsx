import { Link } from 'react-router-dom';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import HeroSection from '../../containers/HeroSection/HeroSection';
import FeatureBanner from '../../containers/FeatureBanner/FeatureBanner';
import ServicesStrip from '../../containers/ServicesStrip/ServicesStrip';
import { ProjectSection } from '../../containers/ProjectSection/ProjectSection';
import AboutSection from '../../containers/AboutSection/AboutSection';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';

import { FEATURES } from '../../FEATURES';

import tcLogo from '../../assets/tc-3d.png';
// 1920px WebP of chess-alt.png (the full-size original stays alongside it).
import heroBackground from '../../assets/background/chess-alt_1920.webp';

/**
 * Pitch -> featured work -> what we do -> proof -> who we are -> the ask.
 */
export default function Homepage() {
  useDocumentTitle();

  return (
    <>
      <HeroSection
        classPrefix={'hero1'}
        quote={{
          content: `“If an idea works, it can’t be that crazy.”`,
          src: `— ToasterCat Studios`,
          sub: ``
        }}
        heading={`Mad science, made real.`}
        detail={`Games, websites, media, and hardware—designed, built, and finished under one roof in the Pacific Northwest. Bring us the project everyone else called impractical.`}
        backgroundImage={{
          source: heroBackground
        }}
        logoImage={{
          source: tcLogo,
          alt: 'ToasterCat Studios TC mark',
          position: 'right',
        }}
        actions={
          <>
            <Link to="/contact" className="btn btn--primary">
              Start a project
            </Link>
            <Link to="/portfolio" className="btn btn--secondary">
              See our work
              <span className="btn-icon btn-icon--trailing" aria-hidden="true">→</span>
            </Link>
          </>
        }
      />

      {FEATURES[0] && <FeatureBanner feature={FEATURES[0]} />}

      <ServicesStrip />

      <ProjectSection />

      <AboutSection />

      <ContactInfoBar />
    </>
  );
}
