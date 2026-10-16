import './Monogram.scss';

interface MonogramProps {
  /** Two or three letters, e.g. "CT" or "UNE". */
  text: string;
  className?: string;
}

/**
 * A project's initials as a square badge: the stand-in for a mark when the
 * work has none of its own. Same lettering as the PostCard avatar, but square,
 * so it reads as a badge rather than a person. Decorative: the project's name
 * is always next to it.
 */
export default function Monogram({ text, className = '' }: MonogramProps) {
  return (
    <span className={`monogram ${text.length > 2 ? 'monogram--long' : ''} ${className}`} aria-hidden="true">
      {text}
    </span>
  );
}
