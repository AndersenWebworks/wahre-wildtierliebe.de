import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), 'spuren-atlas.json');
const section = (title, paragraphs = [], bullets = []) => ({ title, paragraphs, bullets });
const link = (slug, label, text, meta = '') => ({ slug, label, text, meta });

export function buildSpurenAtlasPage() {
  if (!fs.existsSync(file)) return [];
  const { abschnitte } = JSON.parse(fs.readFileSync(file, 'utf8'));
  const seen = new Set();
  const sources = [];
  for (const abschnitt of abschnitte) {
    for (const quelle of abschnitt.quellen || []) {
      if (seen.has(quelle[1])) continue;
      seen.add(quelle[1]);
      sources.push(quelle);
    }
  }
  return [{
    slug: 'spuren-atlas', kind: 'identify', kicker: 'Spuren', heading: 'Spuren-Atlas: Wer war hier?',
    title: 'Spuren-Atlas: Trittsiegel, Kot, Fraßspuren und Gewölle erkennen – Wa(h)re Wildtier(liebe)',
    description: 'Trittsiegel, Gangart, Kot, Fraßspuren, Gewölle, Federn und Erdhaufen der Wildtiere in Mecklenburg-Vorpommern unterscheiden.',
    intro: 'Wildtiere sieht man selten, ihre Spuren dagegen fast täglich. Dieser Atlas zeigt, woran sich Trittsiegel, Losung, Fraßbilder, Gewölle und Erdhaufen unterscheiden lassen. Keine Spur beweist allein etwas: Fundort, Jahreszeit und mehrere Merkmale gehören zusammen.',
    sections: abschnitte.map((abschnitt) => section(abschnitt.titel, abschnitt.absaetze, abschnitt.stichpunkte)),
    next: [
      link('spuren-und-kot', 'Spuren dokumentieren', 'Maßstab, Umgebung und Hygiene beim Fotografieren.'),
      link('arten/saeugetiere', 'Säugetiere nachschlagen', 'Steckbriefe mit Spuren und Verwechslungen.'),
      link('tierfinder', 'Spurenfinder', 'Form, Ort und Größe kombinieren.', 'Werkzeug'),
    ],
    sources,
    sourcesTitle: 'Quellen',
  }];
}
