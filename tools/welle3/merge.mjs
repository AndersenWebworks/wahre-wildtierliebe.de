// Führt die Ergebnisse der Recherchewelle 3 in src/arten-daten/ zusammen.
// Aufruf: node tools/welle3/merge.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const dataDir = path.join(root, 'src', 'arten-daten');
const welleDir = path.join(root, 'tools', 'welle3');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 1)}\n`);
const union = (a = [], b = []) => [...new Set([...(a || []), ...(b || [])])];
const mergeSources = (a = [], b = []) => {
  const seen = new Set((a || []).map((s) => s[1]));
  const out = [...(a || [])];
  for (const s of b || []) if (s?.[1] && !seen.has(s[1])) { seen.add(s[1]); out.push(s); }
  return out;
};

const cleanName = (n) => String(n).replace(/\s*\((Zweitquelle|Suchtreffer)[^)]*\)/g, '').trim();
const cleanSources = (list = []) => (list || []).map((q) => [cleanName(q[0]), q[1]]);

const outputs = fs.readdirSync(welleDir).filter((f) => /^ausgabe-(pflanzen|tiere)-\d+\.json$/.test(f)).sort();
const existingFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json') && !f.startsWith('welle3-'));
const store = new Map();
for (const f of existingFiles) store.set(f, readJson(path.join(dataDir, f)));
const slugIndex = new Map();
for (const [f, data] of store) for (const art of data.arten) slugIndex.set(art.slug, art);

const newPlants = new Map();
const newAnimals = new Map();
const report = { neu: 0, doppelt: 0, ergaenzt: 0, ergaenzungOhneArt: [], nichtUebernommen: 0 };

for (const file of outputs) {
  const out = readJson(path.join(welleDir, file));
  for (const art of out.neu || []) {
    art.quellen = cleanSources(art.quellen);
    const target = art.gruppe === 'Pflanzen, Pilze und Moose' ? newPlants : newAnimals;
    if (slugIndex.has(art.slug)) { report.doppelt += 1; const old = slugIndex.get(art.slug); old.naturdeck_ids = union(old.naturdeck_ids, art.naturdeck_ids); old.quellen = mergeSources(old.quellen, art.quellen); continue; }
    if (target.has(art.slug)) {
      const old = target.get(art.slug);
      old.naturdeck_ids = union(old.naturdeck_ids, art.naturdeck_ids);
      old.quellen = mergeSources(old.quellen, art.quellen);
      old.korrekturen = union(old.korrekturen, art.korrekturen);
      report.doppelt += 1;
      continue;
    }
    target.set(art.slug, art);
    report.neu += 1;
  }
  report.nichtUebernommen += (out.nicht_uebernommen || []).length;
}

for (const file of outputs) {
  const out = readJson(path.join(welleDir, file));
  for (const erg of out.ergaenzungen || []) {
    const art = slugIndex.get(erg.slug) || newPlants.get(erg.slug) || newAnimals.get(erg.slug);
    if (!art) { report.ergaenzungOhneArt.push(erg.slug); continue; }
    const wert = String(erg.wert || '').trim();
    if (!wert) continue;
    if (erg.feld === 'erkennen') {
      art.erkennen = art.erkennen || [];
      if (!art.erkennen.includes(wert)) art.erkennen.push(wert);
    } else if (['spuren', 'zeit', 'verwechslung', 'lebensraum', 'umgang'].includes(erg.feld)) {
      const old = typeof art[erg.feld] === 'string' ? art[erg.feld].trim() : '';
      if (!old) art[erg.feld] = wert;
      else if (!old.includes(wert)) art[erg.feld] = `${old} ${wert}`;
    } else continue;
    art.quellen = mergeSources(art.quellen, cleanSources(erg.quellen_neu));
    art.naturdeck_ids = union(art.naturdeck_ids, erg.naturdeck_ids);
    report.ergaenzt += 1;
  }
}

for (const [f, data] of store) writeJson(path.join(dataDir, f), data);
const sortByName = (m) => [...m.values()].sort((a, b) => a.name.localeCompare(b.name, 'de'));
if (newPlants.size) writeJson(path.join(dataDir, 'pflanzen-pilze-moose.json'), { paket: 'pflanzen-pilze-moose', arten: sortByName(newPlants) });
if (newAnimals.size) writeJson(path.join(dataDir, 'ergaenzung-tiere.json'), { paket: 'ergaenzung-tiere', arten: sortByName(newAnimals) });
console.log(JSON.stringify({ ...report, neuePflanzen: newPlants.size, neueTiere: newAnimals.size }, null, 1));
