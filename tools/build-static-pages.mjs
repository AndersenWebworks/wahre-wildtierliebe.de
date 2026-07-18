import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, site } from '../src/site-source.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pageUrl = (page) => page.slug ? `/${page.slug}/` : '/';
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const nav = pages.filter((page) => page.slug).map((page) => `<a href="${pageUrl(page)}">${escape(page.kicker)}</a>`).join('');

function render(page) {
  const cards = page.cards ? `<section class="topics" aria-label="Themen">${page.cards.map(([slug, label, text]) => `<a class="topic" href="/${slug}/"><h2>${escape(label)}</h2><p>${escape(text)}</p><span aria-hidden="true">Weiter</span></a>`).join('')}</section>` : '';
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(page.title)}</title>
  <meta name="description" content="${escape(page.description)}">
  <link rel="canonical" href="${site.url}${pageUrl(page)}">
  <meta property="og:title" content="${escape(page.title)}">
  <meta property="og:description" content="${escape(page.description)}">
  <meta property="og:url" content="${site.url}${pageUrl(page)}">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="${page.slug ? '../assets/site.css' : 'assets/site.css'}">
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: `${site.url}${pageUrl(page)}`, inLanguage: 'de-DE' })}</script>
</head>
<body>
  <a class="skip" href="#inhalt">Zum Inhalt</a>
  <header class="header"><a class="brand" href="${page.slug ? '../' : './'}">${site.name}</a><nav aria-label="Hauptnavigation">${nav}</nav></header>
  <main id="inhalt"><section class="hero"><p class="kicker">${escape(page.kicker)}</p><h1>${escape(page.heading)}</h1><p>${escape(page.intro)}</p></section>${cards}</main>
  <footer><span>${site.name}</span><span>Wildtiere im Alltag</span></footer>
  <script src="${page.slug ? '../assets/site.js' : 'assets/site.js'}"></script>
</body>
</html>\n`;
}

await fs.mkdir(path.join(root, 'assets'), { recursive: true });
for (const page of pages) {
  const output = page.slug ? path.join(root, page.slug, 'index.html') : path.join(root, 'index.html');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, render(page), 'utf8');
}
const urls = pages.map((page) => `  <url><loc>${site.url}${pageUrl(page)}</loc></url>`).join('\n');
await fs.writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
await fs.writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`, 'utf8');
await fs.mkdir(path.join(root, 'ai'), { recursive: true });
await fs.writeFile(path.join(root, 'ai', 'site.json'), `${JSON.stringify({ name: site.name, url: site.url, language: 'de-DE', pages: pages.map((page) => ({ title: page.title, url: `${site.url}${pageUrl(page)}` })) }, null, 2)}\n`, 'utf8');
await import('./extract-public-copy.mjs');
