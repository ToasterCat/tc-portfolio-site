import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TcMark from '../UI/TcMark/TcMark';
import Brackets from '../UI/Brackets/Brackets';
import MobileMenu from '../MobileMenu/MobileMenu';
import { CTA_LINK, NAV_LINKS } from '../../SITE';
import './Header.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  // Following a menu link lands on a new page; close quietly, no refocus.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Widening past the breakpoint hides the menu; close it so the page's
  // scroll lock is released too. Matches $bp (50rem) in _base.scss.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 50rem)');
    const onChange = () => desktop.matches && setMenuOpen(false);
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  // The bar goes translucent once content is scrolling underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Stable identity: the menu's open-state effect depends on it.
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuToggle.current?.focus();
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="header-brand">
          <TcMark className="header-brand-mark" />
          <span className="header-brand-name">
            <span className="meta meta-dim header-brand-prompt" aria-hidden="true">{'\\>'}</span>
            ToasterCat Studios
          </span>
        </Link>

        <nav className="header-nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              exact={link.to === '/'}
              to={link.to}
              className="header-nav-link"
              activeClassName="is-active"
            >
              <span className="meta meta-dim header-nav-bar" aria-hidden="true">|</span>
              {link.label}
              <span className="meta meta-dim header-nav-bar" aria-hidden="true">|</span>
            </NavLink>
          ))}
          <Link to={CTA_LINK.to} className="btn btn--primary btn--sm header-cta">
            {CTA_LINK.label}
          </Link>
        </nav>

        <button
          ref={menuToggle}
          type="button"
          className="btn btn--tertiary header-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Brackets>Menu</Brackets>
        </button>
      </header>

      {/* Rendered outside <header>: the header's backdrop-filter would
          otherwise become the containing block for this fixed overlay. */}
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
