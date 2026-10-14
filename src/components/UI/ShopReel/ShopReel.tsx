import { useEffect, useRef, useState } from 'react';
import Brackets from '../Brackets/Brackets';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import './ShopReel.scss';

export interface ReelPhoto {
  src: string;
  /** The service the shot advertises (shown as the caption): "3D Printing". */
  label: string;
  /** What the photo actually shows. */
  alt: string;
}

interface ShopReelProps {
  photos: ReelPhoto[];
  /** Seconds each photo holds before the next fades in. */
  hold?: number;
}

/**
 * One frame that slowly crossfades through a set of photos: ambience, not a
 * carousel. It holds still under prefers-reduced-motion, pauses while it's
 * off-screen, hovered, or focused, and has a [ PAUSE ] / [ PLAY ] control
 * (anything moving on its own for over 5 seconds needs one), plus [ < ] | [ > ]
 * to step by hand. Each photo is fetched only once it's next in line.
 */
export default function ShopReel({ photos, hold = 6 }: ShopReelProps) {
  const reduced = usePrefersReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false); // hover or focus inside
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0, 1 % photos.length]));

  // Only run while on screen.
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = !reduced && !paused && !held && visible && photos.length > 1;

  /** Step by ±1 (wrapping), fetching the new photo and the one after so the next turn is ready. */
  const step = (delta: 1 | -1) => {
    const n = photos.length;
    setIndex((i) => {
      const target = (i + delta + n) % n;
      setLoaded((prev) => new Set(prev).add(target).add((target + 1) % n));
      return target;
    });
  };

  // Advance on a timer; any change of photo (including a manual step) restarts the hold.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => step(1), hold * 1000);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, hold, index]);

  return (
    <figure
      className="shop-reel"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="shop-reel-frame" ref={frame}>
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            className={`shop-reel-photo${i === index ? ' is-current' : ''}`}
            src={loaded.has(i) ? photo.src : undefined}
            alt={i === index ? photo.alt : ''}
            aria-hidden={i === index ? undefined : true}
            width={960}
            height={640}
            decoding="async"
          />
        ))}
      </div>

      <figcaption className="shop-reel-caption">
        <span className="meta meta-dim shop-reel-label">{photos[index].label}</span>
        {photos.length > 1 && (
          <span className="shop-reel-steps">
            <button
              type="button"
              className="btn btn--tertiary shop-reel-step"
              onClick={() => step(-1)}
              aria-label="Previous photo"
            >
              <Brackets>&lt;</Brackets>
            </button>
            <span className="meta meta-dim" aria-hidden="true">|</span>
            <button
              type="button"
              className="btn btn--tertiary shop-reel-step"
              onClick={() => step(1)}
              aria-label="Next photo"
            >
              <Brackets>&gt;</Brackets>
            </button>
          </span>
        )}
        {!reduced && photos.length > 1 && (
          <button
            type="button"
            className="btn btn--tertiary shop-reel-toggle"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
          >
            <Brackets>
              {paused ? 'Play' : 'Pause'}
              {/* Text-style glyphs (U+FE0E), so no platform turns them into emoji. */}
              <span className="shop-reel-glyph" aria-hidden="true">
                {paused ? '\u25B6\uFE0E' : '\u23F8\uFE0E'}
              </span>
            </Brackets>
          </button>
        )}
      </figcaption>
    </figure>
  );
}
