import React from 'react';

interface HeroSectionProps {
  heading: string;
  content: string;
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
      <div
        className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}
      >
        <img src={props.img.source} alt={props.img.alt} />
      </div>
      <div
        className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}
      >
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );

  const imgRightContent = (
    <>
      <div
        className={`${props.classPrefix ? props.classPrefix : 'hero'}-content`}
      >
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
      <div
        className={`${props.classPrefix ? props.classPrefix : 'hero'}-image`}
      >
        <img src={props.img.source} alt={props.img.alt} />
      </div>
    </>
  );

  return (
    <section
      className={`${props.classPrefix ? props.classPrefix : 'hero'}-section`}
    >
      {props.img.position === 'left' ? imgLeftContent : imgRightContent}
    </section>
  );
}
