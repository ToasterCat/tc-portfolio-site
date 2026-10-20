import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/**
 * The policy pages promise a "Last updated" date, so it must move whenever their content
 * does. Each page is stamped with the date it shows and a fingerprint of its source (the
 * date itself left out). Any edit to a page changes its fingerprint and fails this test.
 * When it fails:
 *   1. Content changed: set the page's `updated` to today, then re-stamp below.
 *   2. Only code or formatting changed: keep the date, and re-stamp below.
 * The failure message prints the new fingerprint to paste in.
 */
const STAMPS: Record<string, { updated: string; fingerprint: string }> = {
  'src/routes/Privacy/PrivacyPage.tsx': { updated: '2026-10-08', fingerprint: '30aedecbe7bb' },
  'src/routes/AiPolicy/AiPolicyPage.tsx': { updated: '2026-10-14', fingerprint: '827ef79236f0' },
};

const DATE_PROP = /updated="(\d{4}-\d{2}-\d{2})"/;

function read(file: string) {
  // Checkouts may use CRLF; fingerprint the text, not the line endings.
  return fs.readFileSync(path.resolve(file), 'utf-8').replace(/\r\n/g, '\n');
}

function fingerprint(source: string) {
  return createHash('sha256').update(source.replace(DATE_PROP, 'updated=""')).digest('hex').slice(0, 12);
}

describe('policy "Last updated" dates', () => {
  test.each(Object.entries(STAMPS))('%s shows its stamped date', (file, stamp) => {
    expect(read(file).match(DATE_PROP)?.[1]).toBe(stamp.updated);
  });

  test.each(Object.entries(STAMPS))('%s is unchanged since its date was set', (file, stamp) => {
    const now = fingerprint(read(file));
    expect(
      now,
      `${file} changed. If its content changed, update its "Last updated" date; either way, set its fingerprint here to '${now}'.`
    ).toBe(stamp.fingerprint);
  });
});
