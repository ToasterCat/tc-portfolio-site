import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../SITE';

const SITE_NAME = 'ToasterCat Studios';

interface PageMeta {
  /** Shown as "ToasterCat Studios - <title>"; omit for the homepage. */
  title?: string;
  /** Search snippet and share description; omit to keep the site default. */
  description?: string;
  /** Keep the page out of search results (the 404). */
  noindex?: boolean;
}

/** The head tags a page can change, and the site defaults from index.html. */
const TAGS = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogUrl: 'meta[property="og:url"]',
  twitterTitle: 'meta[name="twitter:title"]',
  twitterDescription: 'meta[name="twitter:description"]',
  canonical: 'link[rel="canonical"]',
} as const;

const DEFAULTS = Object.fromEntries(
  Object.entries(TAGS).map(([key, sel]) => {
    const el = document.head.querySelector(sel);
    return [key, el?.getAttribute(key === 'canonical' ? 'href' : 'content') ?? ''];
  })
) as Record<keyof typeof TAGS, string>;

function setTag(key: keyof typeof TAGS, value: string) {
  document.head.querySelector(TAGS[key])?.setAttribute(key === 'canonical' ? 'href' : 'content', value);
}

function setRobots(noindex: boolean) {
  let el = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (noindex && !el) {
    el = document.createElement('meta');
    el.name = 'robots';
    document.head.appendChild(el);
  }
  if (el) el.content = noindex ? 'noindex' : 'all';
}

/**
 * Sets a route's title, description, canonical URL, and share tags, restoring
 * the site defaults on unmount so back-navigation never strands stale tags.
 * (Search engines run the page's JavaScript, so they see these; link-preview
 * bots don't, and get the site's default card.)
 */
export default function usePageMeta({ title, description, noindex = false }: PageMeta = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${SITE_NAME} - ${title}` : SITE_NAME;
    const url = SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/+$/, ''));
    document.title = fullTitle;
    setTag('canonical', url);
    setTag('ogUrl', url);
    if (title) {
      setTag('ogTitle', fullTitle);
      setTag('twitterTitle', fullTitle);
    }
    if (description) {
      setTag('description', description);
      setTag('ogDescription', description);
      setTag('twitterDescription', description);
    }
    setRobots(noindex);

    return () => {
      document.title = SITE_NAME;
      (Object.keys(TAGS) as (keyof typeof TAGS)[]).forEach((key) => setTag(key, DEFAULTS[key]));
      setRobots(false);
    };
  }, [title, description, noindex, pathname]);
}

