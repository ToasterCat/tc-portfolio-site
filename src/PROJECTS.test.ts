import PROJECTS, { PROJECT_CATEGORIES, PROJECT_LIST, getProjectByAlias } from './PROJECTS';
import { ASSET_MANIFEST } from './assets/AssetMap';
import { resolveMedia, youtubeEmbedUrl } from './media';
import { MediaItem } from './types/project.model';
import { skillIconMap } from './components/UI/ProjectSkills/ProjectSkills';

/**
 * Data contract for the portfolio. Each project gets a page at
 * /portfolio/<alias>, so these rules guard URLs and rendering, not style.
 * Run: npm test -- PROJECTS
 */

const details = PROJECT_LIST.map((p) => p.projectDetails);
const URL_SAFE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('aliases (become /portfolio/<alias> URLs)', () => {
  test.each(details.map((d) => [d.alias]))('%s is lowercase-hyphenated', (alias) => {
    expect(alias).toMatch(URL_SAFE);
  });

  test('are unique', () => {
    const seen = details.map((d) => d.alias);
    const dupes = seen.filter((a, i) => seen.indexOf(a) !== i);
    expect(dupes).toEqual([]);
  });

  test('resolve back to their project', () => {
    details.forEach((d) => expect(getProjectByAlias(d.alias)?.projectDetails).toBe(d));
  });
});

describe('ordering and categories', () => {
  test('order values are unique, so sorting is deterministic', () => {
    const orders = details.map((d) => d.order);
    expect(new Set(orders).size).toBe(orders.length);
  });

  test('every project uses a known category', () => {
    const known = PROJECT_CATEGORIES.map((c) => c.key);
    details.forEach((d) => expect(known).toContain(d.category));
  });

  test('every category has at least one project', () => {
    PROJECT_CATEGORIES.forEach((c) =>
      expect(details.some((d) => d.category === c.key)).toBe(true)
    );
  });

  test('PROJECT_LIST covers every entry in PROJECTS', () => {
    expect(PROJECT_LIST).toHaveLength(Object.keys(PROJECTS).length);
  });
});

describe('referenced assets exist in ASSET_MANIFEST', () => {
  test.each(details.map((d) => [d.alias, d]))('%s', (_alias, d) => {
    const keys = [
      d.thumbnailImage?.source,
      d.backgroundImage?.source,
      ...[...(d.links ?? []), ...(d.heroLink ? [d.heroLink] : [])].map((l) => l.icon),
    ].filter((k): k is string => !!k);
    const missing = keys.filter((k) => !ASSET_MANIFEST.has(k));
    expect(missing).toEqual([]);
  });
});

/** Every MediaItem a project shows: featured first, then the gallery. */
const mediaOf = (d: typeof details[number]): MediaItem[] =>
  [d.media?.featured, ...(d.media?.gallery ?? [])].filter((m): m is MediaItem => !!m);

describe('media (featured + gallery)', () => {
  const withMedia = details.filter((d) => mediaOf(d).length > 0);

  test.each(withMedia.map((d) => [d.alias, d]))('%s: every item resolves and is described', (_alias, d) => {
    const problems: string[] = [];
    mediaOf(d).forEach((m, i) => {
      const at = `#${i} (${m.type})`;
      if (m.type === 'embed') {
        if (!youtubeEmbedUrl(m.id)) problems.push(`${at}: not a YouTube id "${m.id}"`);
        if (!m.title.trim()) problems.push(`${at}: needs a title`);
        if (m.poster && !resolveMedia(m.poster)) problems.push(`${at}: poster does not resolve`);
        return;
      }
      if (!resolveMedia(m.src)) problems.push(`${at}: src "${m.src}" is a full URL or unknown`);
      if ('poster' in m && !resolveMedia(m.poster)) problems.push(`${at}: poster does not resolve`);
      if (!(Number.isInteger(m.width) && m.width > 0 && Number.isInteger(m.height) && m.height > 0)) {
        problems.push(`${at}: width/height must be positive integers`);
      }
      const label = m.type === 'video' ? m.title : m.alt;
      if (!label.trim()) problems.push(`${at}: needs ${m.type === 'video' ? 'a title' : 'alt text'}`);
    });
    expect(problems).toEqual([]);
  });
});

describe('body text', () => {
  const aliases = new Set(details.map((d) => d.alias));
  const linksIn = (text: string) => Array.from(text.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)).map((m) => m[2]);

  test.each(details.map((d) => [d.alias, d]))('%s: links are http(s) or real site pages', (_alias, d) => {
    const texts = [...d.body, ...(d.testimonials ?? []).map((t) => t.quote)];
    const bad = texts.flatMap(linksIn).filter((url) => {
      if (/^https?:\/\/\S+$/.test(url)) return false;
      const project = url.match(/^\/portfolio\/([^/#?]+)/);
      if (project) return !aliases.has(project[1]);
      return !['/', '/portfolio', '/contact'].includes(url.split(/[?#]/)[0]);
    });
    expect(bad).toEqual([]);
  });

  test.each(details.map((d) => [d.alias, d]))('%s: no placeholder text ships', (_alias, d) => {
    const texts = [d.brief, d.role, d.outcome, ...d.body].filter((t): t is string => !!t);
    expect(texts.filter((t) => /\bTODO\b|\bTBD\b|lorem ipsum/i.test(t))).toEqual([]);
  });
});

describe('testimonials', () => {
  const withQuotes = details.filter((d) => (d.testimonials ?? []).length > 0);
  // (test.each refuses an empty table, so only build it once quotes exist)
  if (withQuotes.length === 0) {
    test('none yet', () => expect(withQuotes).toEqual([]));
  } else {
    test.each(withQuotes.map((d) => [d.alias, d]))('%s: quote and name are filled in', (_alias, d) => {
      (d.testimonials ?? []).forEach((t) => {
        expect(t.quote.trim()).not.toBe('');
        expect(t.name.trim()).not.toBe('');
      });
    });
  }
});

describe('content quality', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: links are real, trimmed URLs', (_alias, d) => {
    const bad = [...(d.links ?? []), ...(d.heroLink ? [d.heroLink] : [])]
      .filter((l) => l.target !== l.target.trim() || !/^https?:\/\/\S+$/.test(l.target.trim()))
      .map((l) => `${l.label} -> "${l.target}"`);
    expect(bad).toEqual([]);
  });

  test.each(details.map((d) => [d.alias, d]))('%s: skills all have an icon', (_alias, d) => {
    // Unknown skills fall back to the "ToasterCat" placeholder label.
    const unknown = (d.skills ?? []).filter((s) => skillIconMap(s).label === 'ToasterCat');
    expect(unknown).toEqual([]);
  });
});
