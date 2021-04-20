import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">ToasterCat</Link>
      </h1>
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
