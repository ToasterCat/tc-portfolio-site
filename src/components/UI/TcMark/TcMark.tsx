import tcMark from '../../../assets/tc-mark-96.png';

interface TcMarkProps {
  className?: string;
}

/**
 * The professional "TC" mark, for the header and anywhere the brand needs to
 * read as a studio rather than a mascot. (The pixel toastercat, BrandMark,
 * is kept for spots with room for personality, like the footer.)
 *
 * 96px source, so it stays sharp up to 48px on 2x screens.
 */
export default function TcMark(props: TcMarkProps) {
  return (
    <img
      src={tcMark}
      alt=""
      aria-hidden="true"
      width={96}
      height={96}
      className={`tc-mark ${props.className ?? ''}`}
    />
  );
}
