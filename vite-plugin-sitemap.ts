import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { SITE_URL } from './src/SITE.ts';

/** Top-level pages; every listed project adds /portfolio/<alias>. (Not the 404.) */
export const STATIC_ROUTES = ['/', '/portfolio', '/contact', '/privacy', '/ai-policy'];

/**
 * Listed project aliases, read straight from PROJECTS.ts's source (it imports
 * images, so the build can't execute it). Unlisted projects (`listed: false`)
 * keep their pages but stay out of the sitemap. A data test checks this
 * against PROJECT_LIST, so the parsing can't drift.
 */
export function listedAliases(projectsSource: string): string[] {
  return projectsSource
    .split(/(?=\balias: ')/)
    .slice(1)
    .filter((block) => !/^\s*listed: false,/m.test(block.split(/\n {2}\w+: \{/)[0]))
    .map((block) => block.match(/^alias: '([^']+)'/)![1]);
}

export function sitemapRoutes(projectsSource: string): string[] {
  return [...STATIC_ROUTES, ...listedAliases(projectsSource).map((a) => `/portfolio/${a}`)];
}

/**
 * No <lastmod>: a build-date stamp changes on every deploy, so crawlers learn to ignore it,
 * and Vercel's shallow clone can't give real per-page dates. The field is optional.
 */
export function sitemapXml(routes: string[]): string {
  const urls = routes
    .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/** Writes /sitemap.xml into the build, and serves the same file from the dev server. */
export default function sitemap(): Plugin {
  let root = '';
  const xml = () => sitemapXml(sitemapRoutes(fs.readFileSync(path.join(root, 'src/PROJECTS.ts'), 'utf-8')));
  return {
    name: 'tc-sitemap',
    configResolved(config) {
      root = config.root;
    },
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_req, res) => {
        res.setHeader('Content-Type', 'application/xml');
        res.end(xml());
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml() });
    },
  };
}
