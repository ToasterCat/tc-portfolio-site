import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/* Clears the sticky header when landing on an #anchor. Matches $header-h. */
const HEADER_OFFSET = 72;

/**
 * Scroll so `target` sits just below the sticky header. A sticky element
 * reports where it is *stuck*, not where it lives, so measure its parent
 * (e.g. the section an anchor heading belongs to) instead.
 */
function scrollToAnchor(target: HTMLElement, behavior: ScrollBehavior) {
  const sticky = getComputedStyle(target).position === 'sticky';
  const measured = sticky && target.parentElement ? target.parentElement : target;
  const top = measured.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior });
}

/**
 * Router-level scroll behaviour (renders nothing):
 *  - a new page starts at the top, instead of inheriting the last page's
 *    scroll position;
 *  - a link with a #hash scrolls to that element once it has rendered;
 *  - back/forward (POP) is left alone so the browser can restore position.
 *    The first page load also reports POP; it's still handled when it
 *    carries a #hash, since the browser's own jump ignores the sticky header.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const { action } = useHistory();
  const firstLoad = useRef(true);

  useEffect(() => {
    const isFirstLoad = firstLoad.current;
    firstLoad.current = false;

    if (action === 'POP' && !(isFirstLoad && hash)) {
      return;
    }

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The target may not exist until the new route has rendered.
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const timer = window.setInterval(() => {
      const target = document.getElementById(id);
      if (target || ++tries > 20) {
        window.clearInterval(timer);
        if (target) {
          scrollToAnchor(target, 'smooth');
        }
      }
    }, 50);

    // On a cold load, images above the target are still arriving and push it
    // down; settle on its final position once everything has loaded.
    const onLoad = () => {
      const target = document.getElementById(id);
      if (target) {
        scrollToAnchor(target, 'auto');
      }
    };
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      window.clearInterval(timer);
      window.removeEventListener('load', onLoad);
    };
  }, [pathname, hash, action]);

  return null;
}
