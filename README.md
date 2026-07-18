# wahre-wildtierliebe.de

`Wa(h)re Wildtier(liebe)` ist ein statisches Entscheidungs- und Wissensportal für Begegnungen mit Wildtieren im menschlichen Alltag.

Die öffentliche Struktur beginnt bei der wirklichen Situation: Tier gefunden, Lebensraum schaffen, Gefahren vermeiden, Tier erkennen und Natur beobachten. Garten, Balkon, Fenster, Haus, Hof, Stadt und Dorf werden als zusammenhängende Lebensräume behandelt.

## Umfang

- 46 statische Routen mit Startseite, fünf Aufgabenbereichen und vertiefenden Situations-, Lebensraum-, Gefahren-, Bestimmungs- und Beobachtungsseiten
- neun Werkzeuge für Fundtiere, Jungvögel, Flächen, Außenlicht, Zäune, Saison, Bestimmung und regionale Hilfestellen
- strukturierte lokale Suche über konkrete Situationen statt freier Schlagwortlogik
- regionale Ebene für Plau am See und Mecklenburg-Vorpommern
- Sitemap, `robots.txt`, `llms.txt` und `ai/site.json`

## Struktur

- `src/site-source.js` enthält Seiten, Werkzeuge, Verknüpfungen, Quellen und Bildnachweise.
- `tools/build-static-pages.mjs` erzeugt die öffentlichen HTML-Seiten und maschinenlesbaren Dateien.
- `tools/extract-public-copy.mjs` liest die gebauten HTML-Seiten mit einem HTML-Parser und erzeugt die vollständige öffentliche Copy-Fläche.
- `.clautz/public-copy-surface.json` bindet die unabhängige Copy-Prüfung an den gebauten Stand.

## Build

```powershell
npm install
npm run build
```

Die Freigabe der öffentlichen Copy läuft getrennt. `npm run verify:public-copy` akzeptiert nur eine aktuelle, hashgebundene Prüfung der vollständig gebauten Oberfläche.

## Inhaltliche Grundlage

Die vorhandenen lokalen Projekte `Wa(h)re Haustier(liebe)`, Vogelguide Klein Dammerow und Wildtier-Gartenguide liefern Struktur und Inspiration. Fachliche Soforthilfe verweist zusätzlich auf zuständige Stellen wie NABU, Pro Igel, BUND Naturschutz und regionale Wildtierhilfen.
