import React from 'react';

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
  img: {
    source: string;
    alt: string;
    position: 'left' | 'right';
  };
}

export default function HeroSection(props: HeroSectionProps) {
  const imgLeftContent = (
    <>
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}>
        <img src={props.img.source} alt={props.img.alt} />
      </div>

      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}>

        <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-quote`}>
          <h2>{props.quote?.content}</h2>
          <h3>{props.quote?.src}</h3>
          <h4>{props.quote?.sub}</h4>
        </div>

        <p>{props.heading}</p>
        <p>{props.detail}</p>
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
        
        <p>{props.heading}</p>
        <p>{props.detail}</p>
      </div>
      
      <div className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}>
        <img src={props.img.source} alt={props.img.alt} />
      </div>
    </>
  );

  return (
    <section className={`${props.classPrefix ? props.classPrefix : 'hero'}-section`}>
      {props.img.position === 'left' ? imgLeftContent : imgRightContent}
    </section>
  );
}
