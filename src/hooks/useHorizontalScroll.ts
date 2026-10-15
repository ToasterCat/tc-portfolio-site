import { RefObject, useCallback, useEffect, useState } from 'react';

/**
 * State and paging for a sideways-scrolling row: whether it has more than
 * fits, whether it sits at either end, a page(±1) that moves one visible
 * width (instantly under prefers-reduced-motion), and `fadeProps` to spread
 * on the row for the `base.scroll-fade` edge fades.
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

  // Fade whichever edge has content hidden past it.
  const fadeProps = {
    'data-fade-start': state.overflows && !state.atStart ? '' : undefined,
    'data-fade-end': state.overflows && !state.atEnd ? '' : undefined,
  };

  return { ...state, page, fadeProps };
}
