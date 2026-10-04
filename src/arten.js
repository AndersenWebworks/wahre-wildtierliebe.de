import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'arten-daten');
const link = (slug, label, text, meta = '') => ({ slug, label, text, meta });
const section = (title, paragraphs = [], bullets = []) => ({ title, paragraphs, bullets });

const groupInfo = {
  'Greifvögel und Eulen': {
    slug: 'greifvoegel-und-eulen',
    intro: 'Greifvögel und Eulen jagen aus der Luft oder aus der Deckung. Silhouette, Flugbild, Rufe, Gewölle und Rupfplätze verraten oft mehr als ein flüchtiger Blick.',
  },
  'Wasser-, Wiesen- und Großvögel': {
    slug: 'wasser-wiesen-und-grossvoegel',
    intro: 'Rund um Seen, Gräben, Röhricht und offene Felder leben Vögel, die Ruhe und weite Sicht brauchen. Viele sind Brutvögel mit empfindlichen Plätzen und werden am besten aus der Entfernung beobachtet.',
  },
  'Singvögel': {
    slug: 'singvoegel',
    intro: 'Im Garten, an der Hecke und im Schilf sind Singvögel oft eher zu hören als zu sehen. Gesang, Rufe und Verhalten grenzen die Arten besser ein als die Farbe allein.',
  },
  'Säugetiere': {
    slug: 'saeugetiere',
    intro: 'Die meisten Säugetiere zeigen sich selten. Trittsiegel, Losung, Fraßspuren und Gänge erzählen, wer nachts unterwegs war.',
  },
  'Fledermäuse': {
    slug: 'fledermaeuse',
    intro: 'Alle heimischen Fledermäuse sind streng geschützt. Sie jagen in der Dämmerung und beziehen Quartiere in Gebäuden, Bäumen und Spalten.',
  },
  'Libellen': {
    slug: 'libellen',
    intro: 'Libellen verraten sauberes Wasser und strukturreiche Ufer. Flugbild, Körperhaltung in der Ruhe und Gewässertyp führen zur Art.',
  },
  'Schmetterlinge und Verwandte': {
    slug: 'schmetterlinge-und-verwandte',
    intro: 'Schmetterlinge, Netzflügler, Eintags- und Köcherfliegen und viele Fliegen zeigen, wie vielfältig ein Garten oder Ufer ist. Entscheidend sind Raupenfutterpflanzen, Nektar und ungestörte Ecken.',
  },
  'Heuschrecken, Wanzen und Zikaden': {
    slug: 'heuschrecken-wanzen-und-zikaden',
    intro: 'Heuschrecken erkennt man oft am Gesang, Wanzen und Zikaden an Form und Pflanze. Wiesenränder, Säume und Ufer sind ihr Lebensraum.',
  },
  'Käfer, Ameisen, Hummeln und Wespen': {
    slug: 'kaefer-ameisen-hummeln-und-wespen',
    intro: 'Käfer, Ameisen, Hummeln und Wespen haben Aufgaben im Boden, im Totholz und auf Blüten. Viele sind geschützt, fast alle sind friedlicher, als ihr Ruf es vermuten lässt.',
  },
  'Spinnen, Schnecken, Krebstiere und Amphibien': {
    slug: 'spinnen-schnecken-krebstiere-und-amphibien',
    intro: 'Spinnen, Schnecken, Asseln, Krebstiere und Amphibien arbeiten im Verborgenen: im Laub, im Totholz, am Ufer und im Wasser.',
  },
};

const slugify = (text) => text.toLowerCase()
  .replaceAll('ä', 'ae').replaceAll('ö', 'oe').replaceAll('ü', 'ue').replaceAll('ß', 'ss')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function loadSpecies() {
  if (!fs.existsSync(dataDir)) return [];
  const seen = new Set();
  const species = [];
  for (const file of fs.readdirSync(dataDir).filter((name) => name.endsWith('.json')).sort()) {
    const data = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
    for (const art of data.arten || []) {
      if (!art.slug || seen.has(art.slug)) continue;
      seen.add(art.slug);
      species.push(art);
    }
  }
  return species.sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

const present = (value) => (typeof value === 'string' && value.trim() ? value.trim() : '');

function speciesPage(art, group) {
  const place = [present(art.lebensraum), present(art.zeit)].filter(Boolean);
  const sections = [];
  if (art.erkennen?.length) sections.push(section('Erkennen', [], art.erkennen));
  if (present(art.verwechslung)) sections.push(section('Verwechslung', [art.verwechslung]));
  if (place.length) sections.push(section('Lebensraum und Zeit', place));
  if (present(art.spuren)) sections.push(section('Spuren, Rufe und Hinweise', [art.spuren]));
  if (present(art.regional)) sections.push(section('In der Region', [art.regional]));
  if (present(art.umgang)) sections.push(section('Rücksicht und Hilfe', [art.umgang]));
  if (present(art.schutz)) sections.push(section('Schutzstatus', [art.schutz]));
  return {
    slug: `arten/${art.slug}`, kind: 'species', kicker: `${art.gruppe} · ${art.latein}`, heading: art.name,
    title: `${art.name} (${art.latein}) – Steckbrief – Wa(h)re Wildtier(liebe)`,
    description: art.kurz,
    intro: art.kurz,
    sections,
    next: [link(`arten/${group.slug}`, art.gruppe, `Weitere Arten dieser Gruppe ansehen.`), link('tier-erkennen', 'Tier erkennen', 'Beobachtung mit mehreren Merkmalen eingrenzen.')],
    sources: art.quellen || [],
    sourcesTitle: 'Quellen',
  };
}

export function buildSpeciesPages() {
  const species = loadSpecies();
  if (!species.length) return [];
  const byGroup = new Map();
  for (const art of species) {
    if (!byGroup.has(art.gruppe)) byGroup.set(art.gruppe, []);
    byGroup.get(art.gruppe).push(art);
  }
  const groups = [...byGroup.keys()].map((name) => ({ name, ...(groupInfo[name] || { slug: slugify(name), intro: '' }) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
  const groupOf = new Map(groups.map((group) => [group.name, group]));
  const pages = [];
  pages.push({
    slug: 'arten', kind: 'hub', kicker: 'Arten', heading: 'Arten der Region',
    title: 'Arten der Region – Steckbriefe – Wa(h)re Wildtier(liebe)',
    description: 'Steckbriefe zu Vögeln, Säugetieren, Fledermäusen, Libellen, Insekten und weiteren Tieren in Mecklenburg-Vorpommern.',
    intro: `${species.length} Arten aus Garten, Dorf, Wald, Feld und Ufer in Mecklenburg-Vorpommern, jeweils mit Erkennungsmerkmalen, Lebensraum, Schutzstatus und dem Umgang mit dem Tier.`,
    cards: groups.map((group) => link(`arten/${group.slug}`, group.name, `${byGroup.get(group.name).length} Arten.`)),
    sections: [section('So lesen sich die Steckbriefe', ['Jeder Steckbrief nennt Merkmale zum Erkennen, die häufigste Verwechslung, den Lebensraum und was dem Tier hilft. Der Schutzstatus ist nur angegeben, wenn eine Quelle ihn trägt.'])],
    next: [link('tier-erkennen', 'Tier erkennen', 'Beobachtungen aus Ort, Tageszeit, Verhalten und Stimme eingrenzen.'), link('tierfinder', 'Tier-, Spur- und Stimmenfinder', 'Mit vorhandenen Merkmalen weiterkommen.', 'Werkzeug')],
  });
  for (const group of groups) {
    const items = byGroup.get(group.name);
    pages.push({
      slug: `arten/${group.slug}`, kind: 'hub', kicker: 'Arten', heading: group.name,
      title: `${group.name} in Mecklenburg-Vorpommern – Steckbriefe – Wa(h)re Wildtier(liebe)`,
      description: `${items.length} Steckbriefe: ${group.name} erkennen, einordnen und schützen.`,
      intro: group.intro || `Steckbriefe zu ${items.length} Arten dieser Gruppe.`,
      cards: items.map((art) => link(`arten/${art.slug}`, art.name, art.kurz)),
      next: [link('arten', 'Alle Artengruppen', 'Zur Übersicht der Steckbriefe.'), link('tier-erkennen', 'Tier erkennen', 'Beobachtung mit mehreren Merkmalen eingrenzen.')],
    });
  }
  for (const art of species) pages.push(speciesPage(art, groupOf.get(art.gruppe)));
  return pages;
}
