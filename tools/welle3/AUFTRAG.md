# Recherchewelle 3: Naturdeck-Fakten in die Seiten einbauen

Das Naturdeck sind die Naturfakten, die Erik und Annemarie lesen, während Clautz antwortet. Alle 1.150 Fakten wurden neu formuliert. Die Fakten, zu denen die Seite noch keinen Steckbrief hat, liegen in `tools/welle3/*-eingang-<n>.json` (Felder: id, bezug, text). `bezug` ist `wildtier` (Tier im Mittelpunkt) oder `umwelt` (Pflanze, Pilz, Moos, Lebensraum).

Das Ziel: Aus diesen Fakten werden gut recherchierte, schön lesbare Seiteninhalte für Wa(h)re Wildtier(liebe). Ein Naturdeck-Fakt ist nur ein Hinweis, kein Beleg. Übernommen wird eine Aussage nur, wenn eine echte Fachquelle sie trägt.

## Regeln für alle Pakete

- Jede Aussage gegen mindestens eine Fachquelle prüfen, die du wirklich abgerufen hast (WebFetch/WebSearch): BfN-Artenporträts, NABU, LUNG M-V, Landesämter, Rote-Liste-Zentrum, Naturschutzbehörden, Museen, Fachgesellschaften, Hochschulen, Bestimmungsportale mit Fachredaktion. Wikipedia darf als Zweitquelle dienen, aber nie als einzige.
- Was keine Quelle trägt, wird weggelassen. Stimmt ein Fakt nicht oder nur eingeschränkt, übernimm die belegte Fassung und nenne die Abweichung in `korrekturen` (intern, wird nicht veröffentlicht).
- Rote-Liste-Kategorien nur mit Jahr und Bezugsraum (Deutschland oder Mecklenburg-Vorpommern). Schutzstatus (BArtSchV, FFH, BNatSchG) nur, wenn du ihn in einer Quelle gelesen hast.
- Giftigkeit, Essbarkeit und Heilwirkung nur mit Quelle. Bei Pilzen und Giftpflanzen immer der Hinweis, dass keine Verzehrempfehlung gegeben wird.
- Sprache: sachliches, warmes Deutsch in ganzen Sätzen, echte Umlaute, keine Geviertstriche, keine Emojis, keine Werbesprache, keine Rätselkürze. Fachwörter nur mit Erklärung im selben Satz. Komma vor jedem Nebensatz.
- Das Wort „Naturdeck“ darf in keinem öffentlichen Feld stehen. Nur in `naturdeck_ids` (die 8-stelligen ids aus dem Eingang) und in `korrekturen`.
- Regionaler Bezug (Plau am See, Mecklenburg-Vorpommern) nur, wenn eine Quelle ihn trägt, sonst `null`.
- Keine Dateien außerhalb von `tools/welle3/` ändern. Genau eine Ausgabedatei pro Paket.

## Bestehende Daten kennen

Vorhandene Steckbriefe liegen in `src/arten-daten/*.json` (Array `arten`) und als Ordner in `arten/`. Schau dort, wie ein Eintrag aufgebaut ist und wie ausführlich er schreibt, bevor du schreibst. Prüfe vor jedem neuen Steckbrief, ob der `slug` schon existiert.

Gruppennamen für Tiere exakt: `Greifvögel und Eulen`, `Wasser-, Wiesen- und Großvögel`, `Singvögel`, `Säugetiere`, `Fledermäuse`, `Libellen`, `Schmetterlinge und Verwandte`, `Heuschrecken, Wanzen und Zikaden`, `Käfer, Ameisen, Hummeln und Wespen`, `Spinnen, Schnecken, Krebstiere und Amphibien`. Für Pflanzen, Pilze, Moose, Flechten und Bäume: `Pflanzen, Pilze und Moose`.

## Eintragsformat (neuer Steckbrief)

```json
{
  "slug": "kleinbuchstaben-mit-bindestrich-ohne-umlaute",
  "name": "Deutscher Name",
  "latein": "Wissenschaftlicher Name",
  "gruppe": "eine der Gruppen oben",
  "kurz": "Ein bis zwei ganze Sätze: was die Art ist und woran man sie erkennt.",
  "erkennen": ["3 bis 5 Merkmale, jeweils ein sauberer Satzteil oder Satz"],
  "verwechslung": "Mit wem sie verwechselt wird und woran man den Unterschied sieht, sonst null",
  "lebensraum": "Wo sie vorkommt und was sie dort braucht",
  "zeit": "Jahreszeit, Blüte, Aktivität, Zugzeit",
  "spuren": "Spuren, Rufe, Fraßbilder, Kot und andere Hinweise, sonst null",
  "tiere": "NUR für Pflanzen, Pilze, Moose: welche Tiere von ihr leben oder sie nutzen (Nahrung, Nistplatz, Raupenfutter), sonst null",
  "regional": "Bezug zu Mecklenburg-Vorpommern, nur mit Quelle, sonst null",
  "umgang": "Rücksicht, Hilfe, Pflege, Gefahren. Bei Giftigem der Warnhinweis.",
  "schutz": "Schutzstatus mit Jahr und Bezugsraum, sonst null",
  "naturdeck_ids": ["8-stellige ids der Eingangsfakten, die diesen Eintrag stützen"],
  "korrekturen": ["intern: was am Fakt gefehlt hat oder falsch war"],
  "quellen": [["Name der Quelle", "https://wirklich-abgerufene-url"]]
}
```

## Ergänzung zu einem vorhandenen Steckbrief

Trägt ein Fakt ein belegtes Detail zu einer Art, die schon einen Steckbrief hat, wird es als Ergänzung geliefert:

```json
{"slug":"vorhandener-slug","feld":"spuren|zeit|erkennen|verwechslung|lebensraum|umgang","wert":"ein bis zwei fertige Sätze, die den Feldinhalt sinnvoll erweitern, ohne Vorhandenes zu wiederholen","quellen_neu":[["Name","URL"]],"naturdeck_ids":["…"]}
```

Vorher den vorhandenen Feldtext lesen. Ist die Information dort schon enthalten, gibt es keine Ergänzung.

## Ausgabeformat

Eine Datei `tools/welle3/ausgabe-<paketname>.json`:

```json
{"paket":"…","neu":[ /* Steckbriefe */ ],"ergaenzungen":[ /* Ergänzungen */ ],"nicht_uebernommen":[{"id":"…","grund":"keine Fachquelle gefunden | Aussage falsch | Doppelung | …"}]}
```

Jede Eingangs-id soll am Ende entweder in `naturdeck_ids` eines Eintrags oder in `nicht_uebernommen` stehen. Das JSON muss gültig sein (`node -e "JSON.parse(require('fs').readFileSync(...))"` zur Prüfung).
