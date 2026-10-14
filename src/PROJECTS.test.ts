import PROJECTS, {
  ARCHIVED_PROJECTS,
  FEATURED_PROJECTS,
  PROJECT_CATEGORIES,
  PROJECT_LIST,
  getProjectByAlias,
  homepageTestimonials,
  isEarlyWork,
  isListed,
  shownOrigin,
  sectionProjects,
  visibleTestimonials,
} from './PROJECTS';
import { ASSET_MANIFEST } from './assets/AssetMap';
import { bandcampEmbedUrl, mediaSize, resolveMedia, youtubeEmbedUrl } from './media';
import { MediaItem } from './types/project.model';
import { skillIconMap } from './skills';

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

describe('service sections (/portfolio)', () => {
  test.each(PROJECT_CATEGORIES.map((c) => [c.label, c]))('%s: flagship exists and belongs here', (_label, c) => {
    const flagship = getProjectByAlias(c.flagship);
    expect(flagship?.projectDetails.category).toBe(c.key);
  });

  test('section anchors are unique and URL-safe', () => {
    const anchors = PROJECT_CATEGORIES.map((c) => c.anchor);
    expect(new Set(anchors).size).toBe(anchors.length);
    anchors.forEach((a) => expect(a).toMatch(URL_SAFE));
  });

  test('every section has a pitch and a call to action', () => {
    PROJECT_CATEGORIES.forEach((c) => {
      expect(c.pitch.trim()).not.toBe('');
      expect(c.cta.trim()).not.toBe('');
    });
  });
});

describe('unlisted projects (the /portfolio Archive)', () => {
  test('are never a flagship', () => {
    PROJECT_CATEGORIES.forEach((c) => {
      const flagship = getProjectByAlias(c.flagship);
      expect(flagship && isListed(flagship)).toBe(true);
    });
  });

  test('are never featured on the homepage', () => {
    expect(FEATURED_PROJECTS.filter((p) => !isListed(p))).toEqual([]);
  });

  test('stay out of every service section, but keep their pages', () => {
    const shown = PROJECT_CATEGORIES.flatMap((c) => {
      const { flagship, rest, early } = sectionProjects(c);
      return [flagship, ...rest, ...early];
    });
    ARCHIVED_PROJECTS.forEach((p) => {
      expect(shown).not.toContain(p);
      expect(getProjectByAlias(p.projectDetails.alias)).toBe(p);
    });
  });

  test('every listed project shows up exactly once on /portfolio', () => {
    const shown = PROJECT_CATEGORIES.flatMap((c) => {
      const { flagship, rest, early } = sectionProjects(c);
      return [...(flagship ? [flagship] : []), ...rest, ...early];
    });
    expect(shown).toHaveLength(PROJECT_LIST.filter(isListed).length);
  });
});

describe('early work (finished before the studio)', () => {
  const at = (year: string) => isEarlyWork({ projectDetails: { ...details[0], year } });
  test.each([
    ['2013', true],
    ['2014–2016', true],
    ['2019–Present', false],
    ['2021', false],
    ['', false],
  ])('year "%s" -> early: %s', (year, early) => {
    expect(at(year)).toBe(early);
  });
});

describe('roles', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: roles are non-blank and listed once each', (_alias, d) => {
    const roles = d.roles ?? [];
    roles.forEach((r) => expect(r.trim()).not.toBe(''));
    expect(new Set(roles).size).toBe(roles.length);
  });
});

describe('credits', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: every credit has a name and a role, once each', (_alias, d) => {
    const credits = d.credits ?? [];
    credits.forEach((c) => {
      expect(c.name.trim()).not.toBe('');
      expect(c.role.trim()).not.toBe('');
    });
    expect(new Set(credits.map((c) => c.name)).size).toBe(credits.length);
  });
});

describe('thumbnails', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: the TC stamp only marks our own work', (_alias, d) => {
    if (d.thumbnailImage?.source === 'tc-logo') expect(d.origin).toBe('in-house');
  });
});

describe('origin tags', () => {
  const at = (origin: 'in-house' | 'client', year: string) => shownOrigin({ ...details[0], origin, year });
  test('in-house is hidden on current work', () => expect(at('in-house', '2024–Present')).toBeUndefined());
  test('in-house shows on early work', () => expect(at('in-house', '2014')).toBe('in-house'));
  test('client always shows', () => expect(at('client', '2025')).toBe('client'));
});

describe('testimonials', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: stand-in text is flagged as a placeholder', (_alias, d) => {
    (d.testimonials ?? []).forEach((t) => {
      if (/lorem ipsum/i.test(`${t.quote} ${t.name}`)) expect(t.placeholder).toBe(true);
    });
  });

  test('production builds never show a placeholder', () => {
    details.forEach((d) => expect(visibleTestimonials(d, false).some((t) => t.placeholder)).toBe(false));
    expect(homepageTestimonials(false).some(({ testimonial }) => testimonial.placeholder)).toBe(false);
  });

  test('the homepage band has at least one real quote', () => {
    expect(homepageTestimonials(false).length).toBeGreaterThan(0);
  });
});

describe('homepage selection', () => {
  test('at least one project is featured', () => {
    expect(details.some((d) => d.featured)).toBe(true);
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
        if (m.provider === 'youtube' && !youtubeEmbedUrl(m.id)) problems.push(`${at}: not a YouTube id "${m.id}"`);
        if (m.provider === 'bandcamp') {
          if (!bandcampEmbedUrl(m.id)) problems.push(`${at}: not a Bandcamp album id "${m.id}"`);
          if (!(Number.isInteger(m.tracks) && m.tracks > 0)) problems.push(`${at}: tracks must be a positive integer`);
        }
        if (!m.title.trim()) problems.push(`${at}: needs a title`);
        if (m.poster && !resolveMedia(m.poster)) problems.push(`${at}: poster does not resolve`);
        return;
      }
      if (!resolveMedia(m.src)) problems.push(`${at}: src "${m.src}" is a full URL or unknown`);
      // A bare name (no folder) is an asset key, so it has to exist: a typo would silently become a CDN path.
      [m.src, 'poster' in m ? m.poster : undefined].forEach((ref) => {
        if (ref && !ref.includes('/') && !ASSET_MANIFEST.has(ref)) problems.push(`${at}: "${ref}" isn't in ASSET_MANIFEST`);
      });
      if ('poster' in m && !resolveMedia(m.poster)) problems.push(`${at}: poster does not resolve`);
      // Bundled media is measured at build time; only server media needs explicit sizes.
      const size = mediaSize(m);
      if (!size || !(Number.isInteger(size.width) && size.width > 0 && Number.isInteger(size.height) && size.height > 0)) {
        problems.push(`${at}: no size (bundled files are measured automatically; server media needs width/height)`);
      }
      if ((m.width === undefined) !== (m.height === undefined)) problems.push(`${at}: set width and height together, or neither`);
      const label = m.type === 'video' ? m.title : m.alt;
      if (!label.trim()) problems.push(`${at}: needs ${m.type === 'video' ? 'a title' : 'alt text'}`);
    });
    expect(problems).toEqual([]);
  });

  // The gallery adds to the page: it never repeats the featured item or the thumbnail.
  test.each(withMedia.map((d) => [d.alias, d]))('%s: the gallery doesn’t repeat the featured item or thumbnail', (_alias, d) => {
    const ref = (m?: MediaItem) => (m ? (m.type === 'embed' ? m.id : m.src) : undefined);
    const repeated = new Set([ref(d.media?.featured), d.thumbnailImage?.source].filter(Boolean));
    expect((d.media?.gallery ?? []).map(ref).filter((r) => repeated.has(r))).toEqual([]);
  });

  // Audio stops when the gallery viewer moves on or closes; keep it featured.
  test.each(withMedia.map((d) => [d.alias, d]))('%s: no audio players in the gallery', (_alias, d) => {
    const audio = (d.media?.gallery ?? []).filter((m) => m.type === 'embed' && m.provider === 'bandcamp');
    expect(audio).toEqual([]);
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
    const texts = [d.brief, ...(d.roles ?? []), d.outcome, ...d.body].filter((t): t is string => !!t);
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
