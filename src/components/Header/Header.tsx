import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-main-link">
        <div className="header-icon">
          <img
            src={
              'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1619030102/toastercat/toastercat_qlm38x.png'
            }
            alt="toastercat-logo"
            className="header-img"
          />
          <h1>ToasterCat Studios</h1>
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
