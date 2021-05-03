import React from 'react';

interface SectionHeadingProps {
  styleClass: string;
  heading: string;
}

export default function SectionHeading(props: SectionHeadingProps) {
  return <h2 className={props.styleClass}>{props.heading}</h2>;
}
