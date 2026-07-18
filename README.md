# wahre-wildtierliebe.de

`Wa(h)re Wildtier(liebe)` ist das Gegenstück zu `Wa(h)re Haustier(liebe)`: ein statisches Wissensprojekt für Wildtiere im menschlichen Alltag.

Im Mittelpunkt stehen Gärten, Balkone, Wohnungen, Stadt, Dorf und Land. Das Projekt sammelt später konkrete Orientierung für Situationen wie ein Vogel im Regenrohr, ein Igel am Zaun oder ein Tier, das in einer Einzimmerwohnung auftaucht.

## Struktur

- `src/site-source.js` ist die gepflegte Quelle für Seiten, Metadaten und sichtbare Inhalte.
- `tools/build-static-pages.mjs` erzeugt die öffentlichen HTML-Seiten sowie Sitemap, Robots-Datei und maschinenlesbare Projektdateien.
- `.clautz/public-copy-surface.json` hält die aus der Quelle erzeugte sichtbare Copy-Fläche für die unabhängige Freigabe fest.

## Lokaler Build

```powershell
npm run build
```

Die öffentliche Copy muss vor einer Veröffentlichung separat geprüft werden. `npm run verify:public-copy` bleibt ohne aktuelle, hashgebundene Freigabe absichtlich rot.

## Inhaltliche Leitlinie

Das Projekt trennt Beobachtung, Schutz im Alltag und akute Fundtier-Situationen. Konkrete Handlungsanweisungen, Artwissen und regionale Kontakte kommen erst nach eigener Quellenprüfung in die Seiten.
