import { Link } from 'react-router-dom';
import './Header.scss';
import tcLogo from '../../assets/toastercat-cropped.png';
import { getAllJSDocTagsOfKind } from 'typescript';

interface HeaderProps {
  isMobileDevice: boolean;
}

export default function Header(props:HeaderProps) {
  return (
    <header className="header">
      <Link to="/" className="header-main-link">
        <div className="header-brand">
          <img
            alt="toastercat-logo"
            className="header-brand-img"
            src={tcLogo}
          />
          <h1>ToasterCat Studios</h1>
        </div>
      </Link>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
