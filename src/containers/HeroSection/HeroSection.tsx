import React from 'react';

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
}

export default function HeroSection(props: HeroSectionProps) {
  const imgLeftContent = (
    <>
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}>
        <img src={props.logoImage.source} alt={props.logoImage.alt} />
      </div>

      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}>

        <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-quote`}>
          <h2>{props.quote?.content}</h2>
          <h3>{props.quote?.src}</h3>
          <h4>{props.quote?.sub}</h4>
        </div>

        <h1 className={`${props.classPrefix ? props.classPrefix : 'hero'}-headline`}>{props.heading}</h1>
        <p className={`${props.classPrefix ? props.classPrefix : 'hero'}-detail`}>{props.detail}</p>
      </div>
    </>
  );

  const imgRightContent = (
    <>
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}>

        <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-quote`}>
          <h2>{props.quote?.content}</h2>
          <h3>{props.quote?.src}</h3>
          <h4>{props.quote?.sub}</h4>
        </div>
        
        <h1 className={`${props.classPrefix ? props.classPrefix : 'hero'}-headline`}>{props.heading}</h1>
        <p className={`${props.classPrefix ? props.classPrefix : 'hero'}-detail`}>{props.detail}</p>
      </div>
      
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}>
        <img src={props.logoImage.source} alt={props.logoImage.alt} />
      </div>
    </>
  );

  return (
    <section className={`${props.classPrefix ? props.classPrefix : 'hero'}-section`}
      style={{
        backgroundImage: 'url(' + props.backgroundImage?.source + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      {props.logoImage.position === 'left' ? imgLeftContent : imgRightContent}
    </section>
  );
}
