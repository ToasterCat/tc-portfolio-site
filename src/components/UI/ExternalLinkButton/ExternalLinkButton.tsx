import React from 'react';

interface ExternalLinkButtonProps {
  linkTo: string;
  text: string;
}

export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
  return (
    <button className="external-button">
      {props.linkTo && (
        <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
          {props.text}
        </a>
      )}
      {!props.linkTo && props.text}
    </button>
  );
}
