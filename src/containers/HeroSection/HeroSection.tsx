import { ReactNode } from 'react';

import './HeroSection.scss';

interface HeroQuote {
  content: string;
  src: string;
  sub?: string;
}

interface HeroSectionProps {
  quote?: HeroQuote;
  heading: string;
  detail?: string;
  classPrefix?: string;
  backgroundImage?: {
    source: string;
    // STUB: Configurable Background Effects (zoom, scroll, distort, etc)
  };
  logoImage: {
    source: string;
    alt: string;
    position: 'left' | 'right';
  };
  /** Calls to action under the detail line (e.g. primary + secondary buttons). */
  actions?: ReactNode;
}

/**
 * One layout for both logo positions: the content always comes first in the
 * markup (so the h1 leads for screen readers and search), and CSS `order`
 * moves the logo to the left when asked. The quote is a real <blockquote>,
 * so it no longer puts headings above the page's h1.
 */
export default function HeroSection(props: HeroSectionProps) {
  const p = props.classPrefix ?? 'hero';

  return (
    <section
      className={`${p}-section ${p}-section--logo-${props.logoImage.position}`}
      style={{
        backgroundImage: 'url(' + props.backgroundImage?.source + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={`${p}-content`}>
        {props.quote && (
          <figure className={`${p}-quote`}>
            <blockquote>
              <p>{props.quote.content}</p>
            </blockquote>
            <figcaption>
              {props.quote.src}
              {props.quote.sub && <span className={`${p}-quote-sub`}>{props.quote.sub}</span>}
            </figcaption>
          </figure>
        )}

        <h1 className={`${p}-headline`}>{props.heading}</h1>
        {props.detail && <p className={`${p}-detail`}>{props.detail}</p>}
        {props.actions && <div className={`${p}-actions`}>{props.actions}</div>}
      </div>

      <div className={`${p}-image`}>
        <img src={props.logoImage.source} alt={props.logoImage.alt} />
      </div>
    </section>
  );
}
