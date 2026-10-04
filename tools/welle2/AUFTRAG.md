# Recherchewelle 2: Arten mit nur Wikipedia-Beleg

Für jede dir zugewiesene Art (Slug) den aktuellen Eintrag lesen: in `src/arten-daten/*.json` im Array `arten` den Eintrag mit diesem `slug` suchen (Felder: erkennen, verwechslung, lebensraum, zeit, spuren, regional, schutz, umgang, quellen, korrekturen).

Aufgabe: Jede Aussage gegen mindestens eine zweite, nicht-Wikipedia-Fachquelle prüfen (NABU, BfN, LUNG M-V, Rote Liste Zentrum/BfN, Bundesartenschutzverordnung, Naturschutzbehörden, Museen, Fachgesellschaften, Bestimmungsportale wie naturspaziergang/Arachnologische Gesellschaft/Malakologie, Universitäten). Besonders: Schutzstatus und Rote-Liste-Angaben gegen die Originalliste bzw. BArtSchV.

Ausgabe: pro Paket genau EINE Datei `tools/welle2/paket-<n>.json`, nichts anderes schreiben, keine Dateien in src/ ändern. Format:
{"paket":n,"ergebnisse":[{"slug":"...","status":"bestaetigt|korrigiert|nur_wikipedia","quellen_neu":[["Name","URL"]],"aenderungen":{"feld":"neuer Wert im selben Format wie im Original"},"anmerkung":"kurz, was geprüft/geändert wurde"}]}

Regeln: Nur Aussagen aufnehmen, die eine echte Quelle trägt, URL muss wirklich abgerufen worden sein (WebFetch/WebSearch). Keine Vermutungen, keine Erfindungen. Deutsch, echte Umlaute, keine Geviertstriche, keine Emojis, sachlicher Ton ohne Werbesprache. Was keine zweite Quelle trägt, bleibt unverändert, Status nur_wikipedia. Rote-Liste-Kategorie nur mit Jahr/Stand nennen.
