import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, site } from '../src/site-source.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const surface = {
  version: 1,
  project: 'wahre-wildtierliebe',
  pages: pages.map((page) => ({
    route: page.slug ? `/${page.slug}/` : '/',
    title: page.title,
    content: [site.name, page.kicker, page.heading, page.intro, ...(page.cards?.flat() || [])],
  })),
};

await fs.mkdir(path.join(root, '.clautz'), { recursive: true });
await fs.writeFile(path.join(root, '.clautz', 'public-copy-surface.json'), `${JSON.stringify(surface, null, 2)}\n`, 'utf8');
