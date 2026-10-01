import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import NyanToaster from '../../components/UI/NyanToaster/NyanToaster';
import './404.scss';

/**
 * Placeholder 404, shared by unknown routes and unknown /portfolio/<alias>.
 * The pixel toastercat gets the splash, animated Nyan Cat style: a dead end
 * is a spot with room for some character.
 */
export default function NotFound() {
  useDocumentTitle('Not Found');

  return (
    <section className="not-found">
      <NyanToaster className="not-found-splash" />
      <p className="meta not-found-code">404</p>
      <h1 className="not-found-heading">Nothing's here!</h1>
      <p className="not-found-detail">
        This page doesn&apos;t exist, or it moved.
      </p>
      <Link to="/" className="btn btn--primary btn--lg">
        Back to Home
      </Link>
    </section>
  );
}
