import { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Feature, FeatureAction } from '../../FEATURES';
import './FeatureBanner.scss';

interface FeatureBannerProps {
  feature: Feature;
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

function Action({ action, className, children }: { action: FeatureAction; className: string; children?: ReactNode }) {
  return isExternal(action.href) ? (
    <a href={action.href} className={className} target="_blank" rel="noopener noreferrer">
      {action.label}
      {children}
    </a>
  ) : (
    <Link to={action.href} className={className}>
      {action.label}
      {children}
    </Link>
  );
}

/**
 * A full-width banner for one highlighted work (see FEATURES.ts), right under
 * the hero. The key art is decoration (the copy carries the message), so it's
 * a CSS layer; a logo, when there is one, is the heading, with the title as
 * its alt text. Built for one feature today; several could rotate here later.
 */
export default function FeatureBanner({ feature: f }: FeatureBannerProps) {
  const titleId = `feature-${f.id}-title`;
  const art = { '--art': `url(${f.art})`, '--art-small': `url(${f.artSmall ?? f.art})` } as CSSProperties;

  return (
    <section className="feature-banner" aria-labelledby={titleId}>
      <div className="feature-banner-art" style={art} aria-hidden="true" />

      <div className="feature-banner-inner">
        <p className="tag tag--signal">{f.status}</p>

        <h2 id={titleId} className={`feature-banner-title${f.logo ? ' feature-banner-title--logo' : ''}`}>
          {f.logo ? <img src={f.logo.src} alt={f.title} width={f.logo.width} height={f.logo.height} /> : f.title}
        </h2>

        {f.tagline && <p className="feature-banner-tagline">{f.tagline}</p>}
        <p className="feature-banner-hook">{f.hook}</p>
        {f.meta && <p className="meta feature-banner-meta">{f.meta}</p>}

        <div className="feature-banner-actions">
          <Action action={f.primary} className="btn btn--primary" />
          {f.secondary && (
            <Action action={f.secondary} className="btn btn--secondary">
              <span className="btn-icon btn-icon--trailing" aria-hidden="true">→</span>
            </Action>
          )}
        </div>
      </div>
    </section>
  );
}
