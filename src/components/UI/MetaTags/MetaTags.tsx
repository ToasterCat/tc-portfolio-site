import './MetaTags.scss';

interface MetaTagsProps {
  tags: (string | undefined)[];
  styleClass?: string;
}

/**
 * The monospace device.
 *
 * Renders meta content - disciplines, stacks, statuses - as #tags. This is
 * the one place PT-Mono is allowed to appear at length; it signals "technical
 * detail" precisely because it is rare elsewhere.
 */
function toTag(raw: string) {
  return raw.trim().toLowerCase().replace(/\s+/g, '-');
}

export default function MetaTags(props: MetaTagsProps) {
  const tags = props.tags.filter((t): t is string => !!t && t.trim().length > 0);

  if (tags.length < 1) {
    return null;
  }

  return (
    <ul className={`meta-tags ${props.styleClass ?? ''}`}>
      {tags.map((tag) => (
        <li className="meta meta-tag" key={tag}>
          <span className="meta-tag-hash" aria-hidden="true">#</span>
          {toTag(tag)}
        </li>
      ))}
    </ul>
  );
}
