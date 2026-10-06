import { Link } from 'react-router-dom';
import BrandMark from '../UI/BrandMark/BrandMark';
import TcMark from '../UI/TcMark/TcMark';
import Brackets from '../UI/Brackets/Brackets';
import StatusLine from '../UI/StatusLine/StatusLine';
import {
  CONTACT_EMAIL,
  LOCATIONS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
  STUDIO_STATUS,
} from '../../SITE';
import './Footer.scss';

function scrollToTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-link">
            <TcMark className="footer-brand-mark" />
            <span className="footer-brand-name">ToasterCat Studios</span>
          </Link>
          <p className="footer-locations">{LOCATIONS.join(' · ')}</p>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="meta meta-dim footer-col-heading">Site</h2>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="meta meta-dim footer-col-heading">Elsewhere</h2>
          <ul>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.to}>
                <a href={link.to} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-status">
          <h2 className="meta meta-dim footer-col-heading">Status</h2>
          {/* Links to the guide on /contact that explains each status. */}
          <Link to="/contact#status" className="footer-status-link">
            <StatusLine status={STUDIO_STATUS} live />
          </Link>
        </div>
      </div>

      <div className="footer-base">
        {/* The pixel toastercat lives down here: a bit of character beside
            the small print. Hovering the line gives it its little hop. */}
        <span className="footer-base-brand brand-link">
          <BrandMark scale={1} />
          © {year} ToasterCat Studios LLC
        </span>
        <button type="button" className="btn btn--tertiary footer-top" onClick={scrollToTop}>
          <Brackets>Back to top</Brackets>
        </button>
      </div>
    </footer>
  );
}
