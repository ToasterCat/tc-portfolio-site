import React from 'react';

import './GenericSection.scss';

interface GenericSubSection {
  content: string;
  src: string;
  sub?: string;
}

interface GenericSectionProps {
  heading: string;
  detail?: string;
  subsection?: GenericSubSection;
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

export default function GenericSection(props: GenericSectionProps) {
  const imgLeftContent = (
    <>
      <div className={`${props.classPrefix ? props.classPrefix : 'generic'}-image`}>
        <img src={props.logoImage.source} alt={props.logoImage.alt} />
      </div>

      <div className={`${props.classPrefix ? props.classPrefix : 'generic'}-content`}>

        <div className={`${props.classPrefix ? props.classPrefix : 'generic'}-sub`}>
          <h2>{props.subsection?.content}</h2>
          <h3>{props.subsection?.src}</h3>
          <h4>{props.subsection?.sub}</h4>
        </div>

        <p>{props.heading}</p>
        <p>{props.detail}</p>
      </div>
    </>
  );

  const imgRightContent = (
    <>
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}>

        <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-subsection`}>
          <h2>{props.subsection?.content}</h2>
          <h3>{props.subsection?.src}</h3>
          <h4>{props.subsection?.sub}</h4>
        </div>
        
        <p>{props.heading}</p>
        <p>{props.detail}</p>
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
