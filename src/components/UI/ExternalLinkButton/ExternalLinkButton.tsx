import React from 'react';
import './ExternalLinkButton.scss';
import { ASSET_MANIFEST } from '../../../assets/AssetMap';

interface ExternalLinkButtonProps {
  linkTo: string;
  text: string;
  icon?: string;
  color?: string;
}

function LinkIcon(props: ExternalLinkButtonProps) {
  return props.icon
    ? (<><img src={ASSET_MANIFEST.get(props.icon)} alt="" /></>)
    : (<></>)
}

export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
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
          <div className="external-button-label">{props.text}</div>
        </a>
      )}
      {!props.linkTo && props.text}
    </>
  );
}
