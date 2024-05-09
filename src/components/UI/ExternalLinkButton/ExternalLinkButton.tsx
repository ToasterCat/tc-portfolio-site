import React from 'react';
import './ExternalLinkButton.scss';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';
import { Link } from 'react-router-dom';

interface ExternalLinkButtonProps {
  linkTo: string;
  text: string;
  icon?: string;
  color?: string;
}

function LinkIcon(props: ExternalLinkButtonProps) {
  return props.icon
    ? (<><img src={ASSET_MANIFEST.get(props.icon)}></img></>)
    : (<></>)
}

export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
  let icon = props.icon
    ? ASSET_MANIFEST.get(props.icon)
    : '';

  return (
    <>
      {props.linkTo && (
        <a
          className="external-button"
          href={props.linkTo}
          target={props.linkTo}
          rel="noopener noreferrer"
          color={props.color}
        >
          <LinkIcon linkTo={props.linkTo} text={props.text} icon={props.icon} color={props.color}/>
          {props.text}
        </a>
      )}
      {!props.linkTo && props.text}
    </>
  );
}
