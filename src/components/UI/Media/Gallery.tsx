import { CSSProperties, useState } from 'react';
import { MediaItem } from '../../../types/project.model';
import MediaFrame from './MediaFrame';
import Lightbox, { describeMedia } from './Lightbox';
import './Gallery.scss';

interface GalleryProps {
  items: MediaItem[];
  /** Names the viewer for screen readers, e.g. "FOSS Armory gallery". */
  label: string;
}

/** Width:height of an item; embeds are 16:9. */
function ratioOf(m: MediaItem) {
  return m.type === 'embed' ? 16 / 9 : m.width / m.height;
}

/**
 * Justified rows: every tile in a row shares one height and keeps its own
 * aspect ratio, so mixed portrait/landscape/square media pack edge to edge
 * while reading left to right. (Pure CSS: each tile's flex-grow and basis
 * are proportional to its ratio.) Shorter rows on phones. Tiles open the
 * full-screen viewer.
 */
export default function Gallery(props: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  if (props.items.length === 0) {
    return null;
  }

  return (
    <>
      <ul className="gallery">
        {props.items.map((item, i) => (
          <li
            key={i}
            className="gallery-item"
            style={{ '--ratio': ratioOf(item) } as CSSProperties}
          >
            <button
              type="button"
              className="gallery-open"
              onClick={() => setOpen(i)}
              aria-label={`View ${describeMedia(item)} (${i + 1} of ${props.items.length})`}
            >
              <MediaFrame item={item} mode="thumb" />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <Lightbox
          items={props.items}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
          label={props.label}
        />
      )}
    </>
  );
}
