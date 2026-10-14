import Brackets from '../Brackets/Brackets';
import './ScrollControls.scss';

interface ScrollControlsProps {
  atStart: boolean;
  atEnd: boolean;
  page: (direction: 1 | -1) => void;
}

/** [ < PREV ] [ NEXT > ] for a sideways-scrolling row (see useHorizontalScroll). */
export default function ScrollControls({ atStart, atEnd, page }: ScrollControlsProps) {
  return (
    <div className="scroll-controls">
      <button type="button" className="btn btn--tertiary" onClick={() => page(-1)} disabled={atStart}>
        <Brackets>&lt; Prev</Brackets>
      </button>
      <button type="button" className="btn btn--tertiary" onClick={() => page(1)} disabled={atEnd}>
        <Brackets>Next &gt;</Brackets>
      </button>
    </div>
  );
}
