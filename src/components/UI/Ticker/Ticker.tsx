import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import './Ticker.scss';

interface TickerProps {
  children: ReactNode;
  className?: string;
  /** Drift speed in px per second. Slow enough to read. */
  speed?: number;
}

/* Breathing room between the end of one pass and the start of the next. */
const LOOP_GAP_PX = 32;

/**
 * One line of content that drifts sideways like a terminal readout - but
 * only when it doesn't fit. When it fits, it's an ordinary static line.
 *
 * Moving: the content is rendered twice and the track slides one copy's
 * width, so the loop is seamless. Hover or tap pauses it (tap again to
 * resume); with reduced motion it stays still and can be swiped instead.
 */
export default function Ticker(props: TickerProps) {
  const speed = props.speed ?? 32;
  const viewport = useRef<HTMLDivElement>(null);
  const firstCopy = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0); // 0 = fits, stay still
  const [paused, setPaused] = useState(false);

  // Re-measure when the box resizes or the content's own width changes
  // (e.g. web fonts finishing loading).
  useEffect(() => {
    const box = viewport.current;
    const copy = firstCopy.current;
    if (!box || !copy) {
      return;
    }
    const measure = () => {
      const contentWidth = copy.scrollWidth;
      setDistance(contentWidth > box.clientWidth + 1 ? contentWidth + LOOP_GAP_PX : 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    observer.observe(copy);
    return () => observer.disconnect();
  }, []);

  const moving = distance > 0;
  const style = moving
    ? ({
        '--ticker-distance': `${distance}px`,
        '--ticker-duration': `${(distance / speed).toFixed(2)}s`,
        '--ticker-gap': `${LOOP_GAP_PX}px`,
      } as CSSProperties)
    : undefined;

  return (
    <div
      ref={viewport}
      className={`ticker ${moving ? 'is-moving' : ''} ${paused ? 'is-paused' : ''} ${props.className ?? ''}`}
      style={style}
      onClick={moving ? () => setPaused((p) => !p) : undefined}
    >
      <div className="ticker-track">
        <div className="ticker-copy" ref={firstCopy}>
          {props.children}
        </div>
        {moving && (
          <div className="ticker-copy" aria-hidden="true">
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
}
