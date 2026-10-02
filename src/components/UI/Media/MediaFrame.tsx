import { useState } from 'react';
import { MediaItem } from '../../../types/project.model';
import { bandcampEmbedUrl, bandcampPlayerHeight, resolveMedia, youtubeEmbedUrl } from '../../../media';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import './MediaFrame.scss';

/**
 * Renders any MediaItem.
 *
 *   mode="full"  - the real thing: images, looping clips, playable video and
 *                  click-to-load YouTube. Used for the featured slot and the
 *                  full-screen viewer.
 *   mode="thumb" - a still preview for gallery tiles: images and clips show
 *                  as-is, video/embeds show their poster with a play badge
 *                  (nothing plays or loads from YouTube until opened).
 *
 * Sized media get width/height attributes so the browser reserves the space
 * before anything downloads (no layout jump).
 */
interface MediaFrameProps {
  item: MediaItem;
  mode?: 'full' | 'thumb';
  /** Eager-load (e.g. the featured slot above the fold). Default lazy. */
  eager?: boolean;
}

export default function MediaFrame(props: MediaFrameProps) {
  const { item, mode = 'full', eager } = props;
  const reduceMotion = usePrefersReducedMotion();
  const loading = eager ? 'eager' : 'lazy';

  switch (item.type) {
    case 'image':
      return (
        <img
          className="media-frame"
          src={resolveMedia(item.src)}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading={loading}
          decoding="async"
        />
      );

    case 'clip':
      // The GIF replacement: silent loop. Holds on its poster (with controls
      // to start it) for anyone who's asked for less motion.
      return (
        <video
          className="media-frame"
          src={resolveMedia(item.src)}
          poster={resolveMedia(item.poster)}
          width={item.width}
          height={item.height}
          aria-label={item.alt}
          muted
          loop
          playsInline
          autoPlay={!reduceMotion}
          controls={reduceMotion}
          preload={reduceMotion ? 'none' : 'auto'}
        />
      );

    case 'video':
      if (mode === 'thumb') {
        return <PosterThumb poster={item.poster} label={item.title} width={item.width} height={item.height} />;
      }
      return (
        <video
          className="media-frame"
          src={resolveMedia(item.src)}
          poster={resolveMedia(item.poster)}
          width={item.width}
          height={item.height}
          title={item.title}
          controls
          playsInline
          preload="none"
        />
      );

    case 'embed':
      if (item.provider === 'bandcamp') {
        // (thumb mode never happens: the data tests keep audio out of galleries)
        return <BandcampEmbed id={item.id} title={item.title} tracks={item.tracks} poster={item.poster} />;
      }
      if (mode === 'thumb') {
        return <PosterThumb poster={item.poster} label={item.title} width={16} height={9} />;
      }
      return <YouTubeEmbed id={item.id} title={item.title} poster={item.poster} />;
  }
}

/**
 * Bandcamp album player, no click gate: the iframe lazy-loads as it nears
 * the viewport, while a stand-in laid out like the player's own header
 * (album art top-left, title beside it) holds its exact footprint and fades
 * away once the player has loaded. One click to play.
 */
function BandcampEmbed(props: { id: string; title: string; tracks: number; poster?: string }) {
  const [loaded, setLoaded] = useState(false);
  const url = bandcampEmbedUrl(props.id);
  const poster = props.poster ? resolveMedia(props.poster) : undefined;

  if (!url) {
    return null; // the data tests reject bad ids; never build a frame from one
  }

  return (
    <div
      className={`media-bandcamp ${loaded ? 'is-loaded' : ''}`}
      style={{ height: bandcampPlayerHeight(props.tracks) }}
    >
      <iframe
        src={url}
        title={`${props.title} (Bandcamp player)`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setLoaded(true)}
      />
      <div className="media-bandcamp-standin" aria-hidden="true">
        {poster ? <img src={poster} alt="" decoding="async" /> : <span className="media-bandcamp-art" />}
        <span className="media-bandcamp-label">
          <span className="media-bandcamp-title">{props.title}</span>
          <span className="meta meta-dim">Loading player…</span>
        </span>
      </div>
    </div>
  );
}

/** Poster still + play badge, for video/embed previews. */
function PosterThumb(props: { poster?: string; label: string; width: number; height: number }) {
  const src = props.poster ? resolveMedia(props.poster) : undefined;
  return (
    <span className="media-poster" style={{ aspectRatio: `${props.width} / ${props.height}` }}>
      {src && <img src={src} alt="" loading="lazy" decoding="async" />}
      <span className="media-play-badge" aria-hidden="true">▶</span>
      <span className="visually-hidden">Video: {props.label}</span>
    </span>
  );
}

/**
 * YouTube, click-to-load: until the visitor presses play, no request, cookie
 * or script goes to YouTube. Then a sandboxed, privacy-enhanced
 * (youtube-nocookie) iframe replaces the poster.
 */
function YouTubeEmbed(props: { id: string; title: string; poster?: string }) {
  const [loaded, setLoaded] = useState(false);
  const url = youtubeEmbedUrl(props.id);
  const poster = props.poster ? resolveMedia(props.poster) : undefined;

  if (!url) {
    return null; // the data tests reject bad ids; never build a frame from one
  }

  if (!loaded) {
    return (
      <button type="button" className="media-embed media-embed--idle" onClick={() => setLoaded(true)}>
        {poster && <img src={poster} alt="" loading="lazy" decoding="async" />}
        <span className="media-play-badge" aria-hidden="true">▶</span>
        <span className="media-embed-label">
          <span className="media-embed-title">{props.title}</span>
          <span className="meta meta-dim">Plays from YouTube</span>
        </span>
      </button>
    );
  }

  return (
    <div className="media-embed">
      <iframe
        src={url}
        title={props.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
