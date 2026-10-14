import { RefObject, useCallback, useEffect, useState } from 'react';

/**
 * State and paging for a sideways-scrolling row: whether it has more than
 * fits, whether it sits at either end, and a page(±1) that moves one
 * visible width (instantly under prefers-reduced-motion).
 */
export default function useHorizontalScroll(ref: RefObject<HTMLElement>) {
  const [state, setState] = useState({ overflows: false, atStart: true, atEnd: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setState({ overflows: max > 1, atStart: el.scrollLeft <= 1, atEnd: el.scrollLeft >= max - 1 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    // Size changes (rotation, breakpoints) can turn overflow on or off.
    const resize = new ResizeObserver(update);
    resize.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      resize.disconnect();
    };
  }, [ref]);

  const page = useCallback(
    (direction: 1 | -1) => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollBy({ left: direction * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
    },
    [ref]
  );

  return { ...state, page };
}
