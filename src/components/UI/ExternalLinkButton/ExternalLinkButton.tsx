import { ASSET_MANIFEST } from '../../../assets/AssetMap';

interface ExternalLinkButtonProps {
  linkTo: string;
  text: string;
  icon?: string;
  size?: 'sm';
}

/**
 * Secondary-tier button for an off-site link (see _buttons.scss): label plus
 * icon. Brand links lead with their logo; anything without one gets a
 * trailing "↗" so it still reads as leaving the site.
 */
export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
  if (!props.linkTo) {
    return <>{props.text}</>;
  }

  const iconSrc = props.icon ? ASSET_MANIFEST.get(props.icon) : undefined;

  return (
    <a
      className={`btn btn--secondary ${props.size === 'sm' ? 'btn--sm' : ''}`}
      href={props.linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconSrc && (
        <span className="btn-icon" aria-hidden="true">
          <img src={iconSrc} alt="" />
        </span>
      )}
      {props.text}
      {!iconSrc && (
        <span className="btn-icon btn-icon--trailing" aria-hidden="true">↗</span>
      )}
    </a>
  );
}
