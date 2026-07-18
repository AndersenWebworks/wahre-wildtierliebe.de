import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectPublicCopy, images, nav, publicPages, site } from '../src/site-source.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pageUrl = (page) => page.slug ? `/${page.slug}/` : '/';
const esc = (value = '') => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const json = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');
const relative = (page, slug = '') => `${page.slug ? '../' : './'}${slug ? `${slug}/` : ''}`;
const icon = (name) => {
  const paths = {
    search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"></path>',
    close: '<path d="M18 6 6 18M6 6l12 12"></path>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"></path>',
    alert: '<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z"></path><path d="M12 9v4M12 17h.01"></path>',
    check: '<path d="m20 6-11 11-5-5"></path>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};

function renderHeader(page) {
  const links = nav.map(([slug, label]) => `<a href="${relative(page, slug)}"${page.slug === slug ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('');
  const mobile = nav.map(([slug, label]) => `<a href="${relative(page, slug)}">${esc(label)}${icon('arrow')}</a>`).join('');
  const quickPaths = [
    ['braucht-das-tier-hilfe', 'Unklarer Wildtierfund'], ['jungvogel-am-boden', 'Jungvogel am Boden'],
    ['igel-am-tag', 'Igel am Tag'], ['fledermaus-im-zimmer', 'Fledermaus im Zimmer'],
    ['tier-im-schacht', 'Tier in Schacht oder Tonne'], ['verletzter-vogel', 'Verletzter Vogel'],
    ['garten', 'Garten verbessern'], ['balkon-und-fenster', 'Balkon oder Fenster'],
    ['glasflaechen', 'Gefährliche Scheibe'], ['licht-in-der-nacht', 'Außenlicht prüfen'],
    ['tier-erkennen', 'Tier erkennen'], ['hilfestellen', 'Hilfestelle finden'],
  ];
  return `<a class="skip-link" href="#inhalt">Zum Inhalt</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${relative(page)}" aria-label="${site.name} Startseite"><span>Wa(h)re</span> Wildtier(liebe)</a>
      <nav class="desktop-nav" aria-label="Hauptnavigation">${links}</nav>
      <div class="header-actions">
        <button class="icon-button" type="button" data-search-open aria-label="Suche öffnen" title="Suche">${icon('search')}</button>
        <button class="icon-button mobile-only" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav" aria-label="Menü öffnen" title="Menü">${icon('menu')}</button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav" hidden>${mobile}</div>
  </header>
  <dialog class="search-dialog" data-search-dialog>
    <form method="dialog" class="search-head"><h2>Was ist passiert?</h2><button class="icon-button" aria-label="Auswahl schließen" title="Schließen">${icon('close')}</button></form>
    <p>Wähle die Situation, die deiner Beobachtung am nächsten kommt.</p>
    <div class="quick-paths">${quickPaths.map(([slug, label]) => `<a href="${relative(page, slug)}">${esc(label)}${icon('arrow')}</a>`).join('')}</div>
  </dialog>`;
}

function renderImage(image, className = 'page-image') {
  if (!image) return '';
  return `<figure class="${className}"><img src="${esc(image.src)}" alt="${esc(image.alt)}"><figcaption>Foto: <a href="${esc(image.href)}" target="_blank" rel="noopener noreferrer">${esc(image.credit)}</a></figcaption></figure>`;
}

function renderCards(page, cards, className = '') {
  if (!cards?.length) return '';
  return `<div class="path-grid ${className}">${cards.map((item) => `<a class="path-card" href="${relative(page, item.slug)}">
    ${item.meta ? `<span class="card-meta">${esc(item.meta)}</span>` : ''}
    <h3>${esc(item.label)}</h3><p>${esc(item.text)}</p><span class="card-link">Öffnen ${icon('arrow')}</span>
  </a>`).join('')}</div>`;
}

function renderSections(page) {
  const status = page.status?.length ? `<div class="status-strip" aria-label="Schnelleinschätzung">${page.status.map((item, index) => `<div><span>${index + 1}</span>${esc(item)}</div>`).join('')}</div>` : '';
  const sections = (page.sections || []).map((item, index) => `<section class="content-section${index === 0 ? ' first' : ''}">
    <div class="section-number">${String(index + 1).padStart(2, '0')}</div>
    <div><h2>${esc(item.title)}</h2>${(item.paragraphs || []).map((text) => `<p>${esc(text)}</p>`).join('')}${item.bullets?.length ? `<ul class="check-list">${item.bullets.map((text) => `<li>${icon('check')}<span>${esc(text)}</span></li>`).join('')}</ul>` : ''}</div>
  </section>`).join('');
  return `${status}${sections}`;
}

function renderSources(page) {
  if (!page.sources?.length) return '';
  return `<aside class="sources"><h2>Hilfe und Vertiefung</h2>${page.sources.map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}${icon('arrow')}</a>`).join('')}</aside>`;
}

function renderTool(page) {
  if (page.toolKind === 'triage') {
    return `<form class="decision-tool" data-score-tool>
      ${page.questions.map((question, index) => `<fieldset><legend><span>${index + 1}</span>${esc(question.label)}</legend><div class="segmented">${question.options.map(([label, score], optionIndex) => `<label><input type="radio" name="${esc(question.name)}" value="${score}"${optionIndex === 0 ? ' required' : ''}><span>${esc(label)}</span></label>`).join('')}</div></fieldset>`).join('')}
      <button class="button primary" type="submit">Einschätzung anzeigen ${icon('arrow')}</button>
      <div class="tool-result" data-tool-result hidden tabindex="-1"></div>
      <script type="application/json" data-tool-config>${json(page.results)}</script>
      <template data-public-state>${page.results.map((item) => `<h2>${esc(item.title)}</h2><p>${esc(item.text)}</p>`).join('')}</template>
    </form>`;
  }
  if (page.toolKind === 'checklist') {
    return `<form class="check-tool" data-check-tool>
      <div class="check-options">${page.questions.map((question) => `<label><input type="checkbox" name="${esc(question.name)}"><span class="check-mark">${icon('check')}</span><span>${esc(question.label)}</span></label>`).join('')}</div>
      <button class="button primary" type="submit">Nächsten Schritt zeigen ${icon('arrow')}</button>
      <div class="tool-result" data-tool-result hidden tabindex="-1"></div>
      <script type="application/json" data-tool-config>${json(page.recommendations)}</script>
      <template data-public-state>${Object.values(page.recommendations).map(([title, text]) => `<h2>${esc(title)}</h2><p>${esc(text)}</p>`).join('')}<h2>Die Grundlage stimmt</h2><p>Erhalte diese Bedingungen und beobachte, welche Tiere den Ort tatsächlich nutzen. Veränderungen werden am besten einzeln und über mehrere Wochen geprüft.</p></template>
    </form>`;
  }
  if (page.toolKind === 'planner') {
    return `<div class="plan-grid" data-plan-tool>${page.plans.map(([value, label, text]) => `<button type="button" data-plan="${esc(value)}" aria-pressed="false"><strong>${esc(label)}</strong><span>${esc(text)}</span>${icon('arrow')}</button>`).join('')}</div><div class="tool-result" data-plan-result hidden tabindex="-1"></div><template data-public-state>${page.plans.map(([, label, text]) => `<h2>Dein Start für ${esc(label)}</h2><p>${esc(text)}</p>`).join('')}</template>`;
  }
  if (page.toolKind === 'calendar') {
    return `<div class="calendar-grid">${page.months.map(([month, title, text]) => `<article${month === 'Juli' ? ' class="current"' : ''}><span>${esc(month)}</span><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join('')}</div>`;
  }
  if (page.toolKind === 'finder') {
    return `<div class="finder" data-finder><div class="finder-filters">
      <label>Tiergruppe<select data-finder-filter="group"><option value="">Alle</option><option value="vogel">Vogel</option><option value="saeuger">Säugetier</option><option value="amphibie">Amphibie</option><option value="insekt">Insekt</option></select></label>
      <label>Tageszeit<select data-finder-filter="time"><option value="">Alle</option><option value="tag">Tag</option><option value="nacht">Dämmerung oder Nacht</option></select></label>
      <label>Ort<select data-finder-filter="place"><option value="">Alle</option><option value="garten">Garten oder Boden</option><option value="stadt">Stadt oder freier Himmel</option><option value="haus">Haus oder Wohnung</option><option value="baum">Baum</option><option value="bluete">Blüte</option></select></label>
      <label>Auffälligstes Merkmal<select data-finder-filter="clue"><option value="">Alle</option><option value="stimme">Stimme oder Klopfen</option><option value="flug">Flugform</option><option value="boden">Am Boden</option><option value="bewegung">Bewegung</option></select></label>
    </div><div class="finder-grid" data-finder-results>${page.finderItems.map(([label, group, time, place, clue, text]) => `<article data-group="${group}" data-time="${time}" data-place="${place}" data-clue="${clue}"><h2>${esc(label)}</h2><p>${esc(text)}</p></article>`).join('')}</div><p class="finder-empty" data-finder-empty hidden>Diese Kombination ist noch nicht abgedeckt. Setze einen Filter zurück oder beginne mit der Tiergruppe.</p></div>`;
  }
  if (page.toolKind === 'contacts') {
    return `<div class="contact-list">${page.contacts.map(([label, text, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer"><div><h2>${esc(label)}</h2><p>${esc(text)}</p></div>${icon('arrow')}</a>`).join('')}</div>${renderSections(page)}`;
  }
  return '';
}

function renderHome(page) {
  return `<main id="inhalt">
    <section class="home-hero" style="--hero-image:url('${esc(page.image.src)}')">
      <div class="hero-inner"><p class="eyebrow">${esc(page.kicker)}</p><h1>${esc(page.heading)}</h1><p>${esc(page.intro)}</p><a class="button light" href="${relative(page, 'braucht-das-tier-hilfe')}">${icon('alert')} Braucht dieses Tier Hilfe?</a></div>
      <a class="image-credit" href="${esc(page.image.href)}" target="_blank" rel="noopener noreferrer">Foto: ${esc(page.image.credit)}</a>
    </section>
    <section class="quick-search"><div><p class="eyebrow">Tier, Ort oder Gefahr auswählen</p><h2>Was ist gerade passiert?</h2></div><button class="search-field" type="button" data-search-open>${icon('search')}<span>Situation auswählen</span></button></section>
    <section class="home-section intro-paths"><header><p class="eyebrow">Dein Ausgangspunkt</p><h2>Beginne bei der Situation, nicht bei der Tierart.</h2></header>${renderCards(page, page.cards)}</section>
    <section class="home-section situation-band"><header><p class="eyebrow">Häufige Begegnungen</p><h2>Was jetzt zählt</h2></header>${renderCards(page, page.situations, 'compact')}</section>
    <section class="home-section editorial-band">${renderImage(images.blackbird, 'editorial-image')}<div><p class="eyebrow">Wahrnehmen, ohne zu bedrängen</p><h2>${esc(page.sections[0].title)}</h2>${page.sections[0].paragraphs.map((text) => `<p>${esc(text)}</p>`).join('')}<a class="text-link" href="${relative(page, 'natur-beobachten')}">Natur beobachten ${icon('arrow')}</a></div></section>
    <section class="home-section square-band"><div><p class="eyebrow">Kleine Fläche</p><h2>${esc(page.sections[1].title)}</h2>${page.sections[1].paragraphs.map((text) => `<p>${esc(text)}</p>`).join('')}<a class="button secondary" href="${relative(page, 'flaechenplan')}">Passende Maßnahmen finden ${icon('arrow')}</a></div><div class="square-steps"><span>Fenster</span><span>Balkon</span><span>Hof</span><span>Garten</span></div></section>
  </main>`;
}

function renderStandard(page) {
  const isTool = page.kind === 'tool';
  const breadcrumbs = `<div class="breadcrumbs"><a href="${relative(page)}">Start</a><span>/</span><span>${esc(page.kicker)}</span></div>`;
  return `<main id="inhalt">
    <article class="article-shell">
      ${breadcrumbs}
      <header class="page-hero${page.image ? ' with-image' : ''}"><div><p class="eyebrow">${esc(page.kicker)}</p><h1>${esc(page.heading)}</h1><p>${esc(page.intro)}</p></div>${renderImage(page.image)}</header>
      ${isTool ? `<div class="tool-shell">${renderTool(page)}</div>` : `<div class="article-content">${renderSections(page)}</div>`}
      ${page.cards?.length ? `<section class="related-block"><header><p class="eyebrow">Wege durch das Thema</p><h2>Womit möchtest du beginnen?</h2></header>${renderCards(page, page.cards)}</section>` : ''}
      ${page.next?.length ? `<section class="next-block"><p class="eyebrow">Weitergehen</p>${renderCards(page, page.next, 'compact')}</section>` : ''}
      ${renderSources(page)}
    </article>
  </main>`;
}

function renderFooter(page) {
  return `<footer class="site-footer"><div><a class="brand footer-brand" href="${relative(page)}"><span>Wa(h)re</span> Wildtier(liebe)</a><p>Bei Verletzung, Atemnot oder Katzenkontakt sofort fachkundige Hilfe holen.</p></div><div class="footer-links"><a href="${relative(page, 'tier-gefunden')}">Tier gefunden</a><a href="${relative(page, 'gefahren-vermeiden')}">Gefahren vermeiden</a><a href="${relative(page, 'regional-plau')}">Region Plau am See</a><a href="${relative(page, 'hilfestellen')}">Hilfestellen</a></div></footer>`;
}

function render(page) {
  const body = page.kind === 'home' ? renderHome(page) : renderStandard(page);
  const schema = {
    '@context': 'https://schema.org', '@type': page.kind === 'tool' ? 'WebApplication' : 'WebPage',
    name: page.title, description: page.description, url: `${site.url}${pageUrl(page)}`, inLanguage: 'de-DE',
  };
  const html = `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${site.url}${pageUrl(page)}">
  <meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${site.url}${pageUrl(page)}"><meta property="og:type" content="website">
  <meta property="og:image" content="${esc((page.image || images.hedgehog).src)}">
  <link rel="stylesheet" href="${relative(page)}assets/site.css">
  <script type="application/ld+json">${json(schema)}</script>
</head>
<body data-base="${relative(page)}">
  ${renderHeader(page)}${body}${renderFooter(page)}
  <script src="${relative(page)}assets/site.js"></script>
</body>
</html>\n`;
  return html.split('\n').map((line) => line.trimEnd()).join('\n');
}

for (const page of publicPages) {
  const output = page.slug ? path.join(root, page.slug, 'index.html') : path.join(root, 'index.html');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, render(page), 'utf8');
}

const urls = publicPages.map((page) => `  <url><loc>${site.url}${pageUrl(page)}</loc></url>`).join('\n');
await fs.writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
await fs.writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`, 'utf8');
await fs.mkdir(path.join(root, 'ai'), { recursive: true });
await fs.writeFile(path.join(root, 'ai', 'site.json'), `${JSON.stringify({ name: site.name, url: site.url, language: 'de-DE', description: site.description, pages: publicPages.map((page) => ({ title: page.title, description: page.description, url: `${site.url}${pageUrl(page)}` })) }, null, 2)}\n`, 'utf8');
await fs.writeFile(path.join(root, 'llms.txt'), `${site.name}\n${site.description}\n\n${publicPages.map((page) => `- ${page.heading}: ${site.url}${pageUrl(page)}`).join('\n')}\n`, 'utf8');
await import('./extract-public-copy.mjs');

console.log(JSON.stringify({ pages: publicPages.length, publicCopyItems: publicPages.reduce((count, page) => count + collectPublicCopy(page).length, 0) }));
