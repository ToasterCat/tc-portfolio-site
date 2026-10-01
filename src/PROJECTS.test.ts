import PROJECTS, { PROJECT_CATEGORIES, PROJECT_LIST, getProjectByAlias } from './PROJECTS';
import { ASSET_MANIFEST } from './assets/AssetMap';
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
      d.detailImage?.source,
      ...(d.links ?? []).map((l) => l.icon),
    ].filter((k): k is string => !!k);
    const missing = keys.filter((k) => !ASSET_MANIFEST.has(k));
    expect(missing).toEqual([]);
  });
});

describe('content quality', () => {
  test.each(details.map((d) => [d.alias, d]))('%s: links are real, trimmed URLs', (_alias, d) => {
    const bad = (d.links ?? [])
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
