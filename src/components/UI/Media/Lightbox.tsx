import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MediaItem } from '../../../types/project.model';
import Brackets from '../Brackets/Brackets';
import MediaFrame from './MediaFrame';
import './Lightbox.scss';

interface LightboxProps {
  items: MediaItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  label: string;
}

const SWIPE_PX = 50;

/** Text shown under an item: its caption, else its description. */
export function describeMedia(m: MediaItem) {
  if (m.caption) return m.caption;
  return m.type === 'video' || m.type === 'embed' ? m.title : m.alt;
}

/**
 * Full-screen viewer for a gallery. Arrow keys / swipe to move, Escape to
 * close, wraps at the ends. Only the current item is mounted, so a playing
 * video stops when you move on. Focus goes to [ CLOSE ] on open and back to
 * whatever opened it on close; the page behind can't scroll.
 */
export default function Lightbox(props: LightboxProps) {
  const { items, index, onIndexChange, onClose } = props;
  const closeButton = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const count = items.length;
  const item = items[index];

  const go = (delta: number) => onIndexChange((index + delta + count) % count);

  // Keep latest handlers for the one-time key listener.
  const goRef = useRef(go);
  goRef.current = go;
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current();
      else if (e.key === 'ArrowRight') goRef.current(1);
      else if (e.key === 'ArrowLeft') goRef.current(-1);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  if (!item) {
    return null;
  }

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={props.label}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || count < 2) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="lightbox-bar">
        <span className="meta meta-dim lightbox-count" aria-live="polite">
          {index + 1} / {count}
        </span>
        <button ref={closeButton} type="button" className="btn btn--tertiary" onClick={onClose}>
          <Brackets>Close</Brackets>
        </button>
      </div>

      {/* Clicking the dark backdrop (not the media) closes, like most viewers. */}
      <div
        className="lightbox-stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <figure className="lightbox-figure" key={index}>
          <MediaFrame item={item} mode="full" eager />
          <figcaption className="lightbox-caption">{describeMedia(item)}</figcaption>
        </figure>
      </div>

      {count > 1 && (
        <div className="lightbox-nav">
          <button type="button" className="btn btn--tertiary" onClick={() => go(-1)}>
            <Brackets>&lt; Prev</Brackets>
          </button>
          <button type="button" className="btn btn--tertiary" onClick={() => go(1)}>
            <Brackets>Next &gt;</Brackets>
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}
