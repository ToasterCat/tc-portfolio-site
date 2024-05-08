import React from 'react';
import './ExternalLinkButton.scss';

interface ExternalLinkButtonProps {
  linkTo: string;
  text: string;
  image?: string;
}

export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
  return (
    <>
      {props.linkTo && (
        <a
          className="external-button"
          href={props.linkTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
        </a>
      )}
      {!props.linkTo && props.text}
    </>
  );
}
