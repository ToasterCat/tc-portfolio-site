import { ReactNode, useEffect, useRef, useState } from 'react';
import Brackets from '../Brackets/Brackets';
import './PostCard.scss';

/* Collapsed height, in rem; notes shorter than this plus a little slack never collapse. */
const COLLAPSED_REM = 16;

interface PostCardProps {
  id?: string;
  name: string;
  role: string;
  /** Shown in the header's corner, e.g. "Personal note". */
  tag?: string;
  children: ReactNode;
}

/**
 * A first-person note set apart from the page's company voice, styled like
 * an embedded social post: author header, smaller type, and a "Read more"
 * toggle once it runs long.
 */
export default function PostCard({ id, name, role, tag, children }: PostCardProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [long, setLong] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Only offer "Read more" when the note actually overflows the collapsed height.
  useEffect(() => {
    const measure = () => {
      const body = bodyRef.current;
      if (!body) return;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      setLong(body.scrollHeight > (COLLAPSED_REM + 3) * rem);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [children]);

  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <figure className="post-card" id={id}>
      <figcaption className="post-card-head">
        <span className="post-card-avatar" aria-hidden="true">
          {initials}
        </span>
        <span className="post-card-who">
          <span className="post-card-name">
            <span className="meta meta-dim post-card-prompt" aria-hidden="true">
              {'\\>'}
            </span>
            {name}
          </span>
          <span className="meta meta-dim post-card-role">{role}</span>
        </span>
        {tag && <span className="meta post-card-tag">{tag}</span>}
      </figcaption>

      <blockquote
        ref={bodyRef}
        className={`post-card-body ${long && !expanded ? 'is-collapsed' : ''}`}
        style={long && !expanded ? { maxHeight: `${COLLAPSED_REM}rem` } : undefined}
      >
        {children}
      </blockquote>

      {long && (
        <button
          type="button"
          className="btn btn--tertiary post-card-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
        >
          <Brackets>{expanded ? 'Show less' : 'Read more'}</Brackets>
        </button>
      )}
    </figure>
  );
}
