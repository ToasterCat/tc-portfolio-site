import { Link } from 'react-router-dom';
import tcLogo from '../../assets/toastercat.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-main-link">
        <div className="header-icon">
          <img src={tcLogo} alt="toastercat-logo" className="header-img" />
          <h1>ToasterCat</h1>
        </div>
      </Link>
      <nav>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
