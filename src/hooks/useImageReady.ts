import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an <img> (or a clip's first frame) has arrived, so it can
 * sharpen from its blurred preview. Ready is one-way per source: once the
 * load (or error) event has fired for a src, nothing can mark it pending
 * again, whatever order the event and the mount check happen in. A file
 * that was already cached, or that failed, counts as ready (nothing should
 * stay blurred forever).
 */
export function useElementReady<T extends HTMLImageElement | HTMLVideoElement>(src: string | undefined) {
  const ref = useRef<T>(null);
  const [readySrc, setReadySrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    const done = el instanceof HTMLImageElement ? el.complete && el.naturalWidth > 0 : el.readyState >= 2;
    if (done) setReadySrc(src);
  }, [src]);

  const onReady = () => setReadySrc(src);
  return { ref, ready: !!src && readySrc === src, onReady };
}

/**
 * For CSS backgrounds: fetches the image in the background and reports when
 * it's ready, so the layer can switch from preview to full image.
 */
export function useBackgroundReady(url: string | undefined) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!url) return;
    setReady(false);
    const img = new Image();
    img.onload = img.onerror = () => setReady(true);
    img.src = url;
    if (img.complete) setReady(true);
    return () => {
      img.onload = img.onerror = null;
    };
  }, [url]);

  return ready;
}
