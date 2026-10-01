import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TcMark from '../UI/TcMark/TcMark';
import { CTA_LINK, NAV_LINKS, SOCIAL_LINKS } from '../../SITE';
import './MobileMenu.scss';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-screen site menu for small screens. Replaces react-burger-menu: large
 * tap targets, the same `\>` current-page marker as the desktop nav, and the
 * CTA + socials at thumb height.
 */
export default function MobileMenu(props: MobileMenuProps) {
  const { open, onClose } = props;
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    firstLink.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="mobile-menu-bar">
        <Link to="/" className="mobile-menu-brand">
          <TcMark className="mobile-menu-mark" />
          <span className="visually-hidden">ToasterCat Studios home</span>
        </Link>
        <button
          type="button"
          className="meta mobile-menu-close"
          onClick={onClose}
        >
          <span className="meta-dim meta-bracket" aria-hidden="true">[</span>
          CLOSE
          <span className="meta-dim meta-bracket" aria-hidden="true">]</span>
        </button>
      </div>

      <nav className="mobile-menu-nav" aria-label="Main">
        {NAV_LINKS.map((link, i) => (
          <NavLink
            key={link.to}
            exact
            to={link.to}
            innerRef={i === 0 ? firstLink : undefined}
            className="mobile-menu-link"
            activeClassName="is-active"
          >
            <span className="meta meta-dim mobile-menu-bar-mark" aria-hidden="true">|</span>
            {link.label}
            <span className="meta meta-dim mobile-menu-bar-mark" aria-hidden="true">|</span>
          </NavLink>
        ))}
      </nav>

      <div className="mobile-menu-foot">
        <Link to={CTA_LINK.to} className="mobile-menu-cta">
          {CTA_LINK.label}
        </Link>
        <ul className="meta mobile-menu-socials">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.to}>
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
