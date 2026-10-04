import { buildSpeciesPages } from './arten.js';

export const site = {
  name: 'Wa(h)re Wildtier(liebe)',
  shortName: 'Wildtierliebe',
  url: 'https://wahre-wildtierliebe.de',
  description: 'Wildtiere im Alltag erkennen, Notlagen einschätzen und Lebensräume in Garten, Wohnung, Stadt und Dorf verbessern.',
};

export const images = {
  hedgehog: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/European_or_common_hedgehog_(Erinaceus_europaeus).jpg?width=1800',
    alt: 'Ein Europäischer Igel im Gras',
    credit: 'Dunpharlain, CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:European_or_common_hedgehog_(Erinaceus_europaeus).jpg',
  },
  blackbird: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Common_Blackbird_(Turdus_merula).jpg?width=1400',
    alt: 'Eine männliche Amsel auf einer Wiese',
    credit: 'Ron Knight, CC BY 2.0',
    href: 'https://commons.wikimedia.org/wiki/File:Common_Blackbird_(Turdus_merula).jpg',
  },
  nest: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blackbird_nest.jpg?width=1400',
    alt: 'Ein verlassenes Amselnest mit einer Eierschale',
    credit: 'Tony Wills, CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Blackbird_nest.jpg',
  },
};

export const sources = {
  wildbird: ['NABU: Wildvogel gefunden', 'https://sachsen.nabu.de/imperia/md/content/sachsen/160614-nabu-grafik-wildvogel-gefunden-nabu-rv-leipzig.pdf'],
  fledgling: ['NABU Berlin: Erstversorgung von Ästlingen', 'https://berlin.nabu.de/imperia/md/content/berlin/projekte/wildtierpflege/info3_erstversorgung___stlinge.pdf'],
  hedgehog: ['Pro Igel: Checkliste Fundigel', 'https://www.pro-igel.de/kurative-igelhilfe/checkliste-fundigel/'],
  bat: ['Fledermausschutz NRW: Fledermäuse in der Wohnung', 'https://www.fledermausschutz.de/schnelle-hilfe/fledermaeuse-in-der-wohnung-was-tun/'],
  mower: ['BUND Naturschutz: Mähroboter und Igel', 'https://www.bund-naturschutz.de/oekologisch-leben/naturgarten/maehroboter-und-igel'],
  water: ['BUND Naturschutz: Tiertränken im Garten', 'https://www.bund-naturschutz.de/oekologisch-leben/tieren-helfen/tiertraenken-im-garten'],
  local: ['NABU Plau am See: Wildtiere in Not', 'https://www.nabu-plau.de/wildtiere-in-not/'],
  mv: ['NABU Mecklenburg-Vorpommern: Wildtiere', 'https://mecklenburg-vorpommern.nabu.de/imperia/md/content/mecklenburgvorpommern/projekteundaktionen/200810-nabu-faltblatt-wildtiere-lm-mv.pdf'],
};

export const nav = [
  ['tier-gefunden', 'Tier gefunden'],
  ['lebensraum-schaffen', 'Lebensraum schaffen'],
  ['gefahren-vermeiden', 'Gefahren vermeiden'],
  ['tier-erkennen', 'Tier erkennen'],
  ['natur-beobachten', 'Natur beobachten'],
];

const link = (slug, label, text, meta = '') => ({ slug, label, text, meta });
const section = (title, paragraphs = [], bullets = []) => ({ title, paragraphs, bullets });

const pages = [
  {
    slug: '',
    kind: 'home',
    title: 'Wa(h)re Wildtier(liebe) – Wildtieren richtig helfen',
    description: site.description,
    kicker: 'Wildtiere nebenan',
    heading: site.name,
    intro: 'Eine Amsel im Fallrohr braucht einen Ausstieg, ein Ästling meist Abstand und ein verletzter Vogel fachkundige Hilfe. Danach lohnt der Blick auf die Ursache am Haus oder im Garten.',
    image: images.hedgehog,
    cards: [
      link('tier-gefunden', 'Ich habe ein Tier gefunden', 'Verletzung, Jungtier oder ungewöhnlicher Fund: erst einschätzen, dann handeln.', 'Soforthilfe'),
      link('garten', 'Ich möchte meinen Garten verbessern', 'Die drei wirksamsten Schritte für sichere Wege, Nahrung und Rückzug.', 'Lebensraum'),
      link('balkon-und-fenster', 'Ich habe nur einen Balkon oder ein Fenster', 'Auch wenige Quadratmeter können Wasser, Nahrung und Ruhe bieten.', 'Kleine Fläche'),
      link('gefahren-vermeiden', 'Etwas wird zur Tierfalle', 'Glas, Licht, Netze, Schächte, Wasserbecken und Gartengeräte prüfen.', 'Gefahren'),
      link('tier-erkennen', 'Welches Tier habe ich gesehen?', 'Merkmale, Stimme, Spur, Nest und Verhalten zusammen betrachten.', 'Bestimmung'),
      link('saisonkalender', 'Was ist in diesem Monat wichtig?', 'Gartenarbeit und Beobachtung an Brutzeit, Hitze und Nachtleben anpassen.', 'Juli'),
    ],
    situations: [
      link('jungvogel-am-boden', 'Jungvogel am Boden', 'Voll befiedert und unverletzt? Meist sind die Eltern noch in der Nähe.'),
      link('igel-am-tag', 'Igel am Tag', 'Tagaktivität ist ein Warnzeichen. Zustand und Umgebung entscheiden über den nächsten Schritt.'),
      link('fledermaus-im-zimmer', 'Fledermaus im Zimmer', 'Ruhe bewahren, Türen schließen, abends einen freien Ausflug ermöglichen.'),
      link('tier-im-schacht', 'Tier in Schacht oder Tonne', 'Fluchtweg schaffen, Abstand halten und die dauerhafte Falle beseitigen.'),
    ],
    sections: [
      section('Verletzung, Gefahr, Bewegung und Tageszeit prüfen', [
        'Nicht jedes allein sitzende Tier ist verlassen. Sichtbare Verletzungen, fehlende Fluchtfähigkeit, eine akute Gefahr oder ein für die Art ungewöhnlicher Ort verändern die Lage.',
        'Prüfe zuerst Verletzung, Fluchtfähigkeit, unmittelbare Gefahr und ob das Verhalten für Ort und Tageszeit normal ist. Erst danach entscheidest du zwischen Beobachten, kurzem Sichern und fachkundiger Hilfe.',
      ]),
      section('Jeder Quadratmeter zählt', [
        'Ein Balkon ersetzt keinen Garten. Er kann aber eine flache Wasserstelle, heimische Blüten, dunkle Nächte und einen sicheren Zwischenstopp bieten. Entscheidend ist nicht die Größe, sondern ob die Maßnahme zur Fläche passt und dauerhaft gepflegt wird.',
      ]),
    ],
  },
  {
    slug: 'tier-gefunden', kind: 'hub', kicker: 'Soforthilfe', heading: 'Tier gefunden: beobachten, sichern oder Hilfe holen?',
    title: 'Tier gefunden – Wa(h)re Wildtier(liebe)', description: 'Fundtiere richtig einschätzen und unnötige Eingriffe vermeiden.',
    intro: 'Beginne nicht mit Futter oder einem Karton. Beginne mit vier Fragen: Ist das Tier verletzt? Ist es unmittelbar gefährdet? Ist sein Verhalten für Art und Tageszeit ungewöhnlich? Kannst du aus Abstand beobachten?',
    cards: [
      link('braucht-das-tier-hilfe', 'Braucht dieses Tier Hilfe?', 'Der schnelle Entscheidungsweg für unklare Funde.', '2 Minuten'),
      link('jungvogel-am-boden', 'Jungvogel am Boden', 'Ästling, Nestling oder tatsächlich hilfsbedürftig?'),
      link('verletzter-vogel', 'Verletzter oder benommener Vogel', 'Nach Kollision, Katzenkontakt oder sichtbarer Verletzung.'),
      link('igel-am-tag', 'Igel am Tag', 'Warnzeichen erkennen und fachkundige Hilfe organisieren.'),
      link('fledermaus-im-zimmer', 'Fledermaus im Zimmer', 'Ausflug ermöglichen, versteckte Tiere finden, Bisskontakt vermeiden.'),
      link('tier-im-schacht', 'Tier im Schacht oder Fallrohr', 'Sofort befreien lassen und die Falle dauerhaft entschärfen.'),
      link('nest-beschaedigt', 'Nest beschädigt', 'Brut nicht vorschnell umsetzen oder aufgeben.'),
      link('jungtier-allein', 'Jungtier allein', 'Rehkitz, Feldhase und andere Jungtiere nicht aus Fürsorge mitnehmen.'),
    ],
    sections: [
      section('Akut heißt: nicht allein herumprobieren', ['Blutungen, Atemnot, Krämpfe, Lähmungen, starke Benommenheit, Katzenkontakt und eine offensichtliche Fraktur gehören in fachkundige Hände. Das Tier ruhig, dunkel und sicher unterbringen, nichts einflößen und sofort telefonischen Rat holen.']),
      section('Fundort und Zustand festhalten', ['Notiere Uhrzeit, genauen Fundort, Verhalten und sichtbare Verletzungen. Ein Foto aus Abstand hilft einer Station oft mehr als eine unklare Beschreibung. Der Fundort bleibt wichtig, weil Rückführung und Freilassung möglichst dort geschehen.']),
    ],
    sources: [sources.local, sources.mv],
  },
  {
    slug: 'jungvogel-am-boden', kind: 'situation', kicker: 'Vogel gefunden', heading: 'Jungvogel am Boden: Ästling oder Nestling?',
    title: 'Jungvogel am Boden – Wa(h)re Wildtier(liebe)', description: 'Jungvögel am Boden richtig einschätzen.',
    intro: 'Ein fast vollständig befiederter Jungvogel kann das Nest verlassen haben, obwohl er noch nicht sicher fliegt. Seine Eltern versorgen ihn weiter – sobald Menschen Abstand halten.', image: images.blackbird,
    status: ['Voll befiedert, aufmerksam, unverletzt', 'Wenig befiedert, kalt oder verletzt', 'Akute Gefahr durch Verkehr oder Katze'],
    sections: [
      section('Was du jetzt tust', ['Gehe mehrere Meter zurück und beobachte mindestens eine Stunde. Elternvögel kommen oft erst wieder, wenn du nicht direkt danebenstehst.', 'Liegt ein voll befiederter Ästling offen auf Straße oder Gehweg, setze ihn wenige Meter weiter in eine Hecke oder auf einen niedrigen Ast. Er muss in Rufweite bleiben.']),
      section('Wann du eingreifst', ['Ein kaum befiederter Nestling gehört zurück in das eindeutig zugehörige Nest, wenn es sicher erreichbar ist. Verletzte, kalte, benommene oder von einer Katze gebrachte Vögel brauchen sofort fachkundige Hilfe. Ein Mauersegler am Boden gilt als hilfsbedürftig.']),
      section('Was du lässt', [], ['Nicht füttern oder Wasser in den Schnabel geben.', 'Nicht in ein beliebiges fremdes Nest setzen.', 'Nicht weit vom Fundort wegbringen.', 'Nicht in die Luft werfen.']),
      section('Danach den Ort verbessern', ['Katzen während der Brutzeit in den frühen Morgenstunden möglichst im Haus lassen, dichte Sträucher als Deckung erhalten und Gartenarbeiten an belegten Nestern verschieben.']),
    ],
    next: [link('jungvogel-check', 'Jungvogel-Check', 'Vier Fragen führen zum nächsten Schritt.'), link('hilfestellen', 'Hilfe in der Region', 'Kontakte für Plau am See und Mecklenburg-Vorpommern.')],
    sources: [sources.wildbird, sources.fledgling],
  },
  {
    slug: 'verletzter-vogel', kind: 'situation', kicker: 'Vogel gefunden', heading: 'Verletzt, benommen oder nach Katzenkontakt',
    title: 'Verletzter Vogel – Wa(h)re Wildtier(liebe)', description: 'Verletzte oder kollidierte Vögel sichern.',
    intro: 'Ein Vogel, der nicht flieht, schief sitzt, sichtbar blutet oder nach einer Kollision benommen bleibt, braucht eine ruhige Sicherung und fachkundige Einschätzung.',
    sections: [
      section('Sicher unterbringen', ['Setze den Vogel mit einem Tuch in einen kleinen Karton mit Luftlöchern. Der Karton bleibt dunkel, ruhig und bei normaler Raumtemperatur. Halte Kinder und Haustiere fern.']),
      section('Sofort Rat holen', ['Bei Blutung, Atemnot, hängendem Flügel, Krämpfen, Lähmung oder Katzenkontakt nicht abwarten. Auch winzige Bissverletzungen können gefährlich sein. Wildvogelhilfe oder tierärztliche Praxis anrufen.']),
      section('Keine Erstversorgung erfinden', [], ['Kein Wasser einflößen.', 'Kein Brot, Körner oder Hackfleisch geben.', 'Flügel nicht schienen oder verbinden.', 'Nicht zum Flug zwingen.']),
      section('Die Ursache beseitigen', ['War eine Scheibe die Ursache, muss die gesamte wirksame Glasfläche von außen sichtbar markiert werden. Einzelne Greifvogelsilhouetten lösen das Problem nicht.']),
    ],
    next: [link('glasflaechen', 'Glasflächen sichern', 'Kollisionen dauerhaft verhindern.'), link('hilfestellen', 'Fachkundige Hilfe', 'Regionale Anlaufstellen öffnen.')], sources: [sources.wildbird, sources.local],
  },
  {
    slug: 'igel-am-tag', kind: 'situation', kicker: 'Igel gefunden', heading: 'Ein Igel ist am Tag unterwegs',
    title: 'Igel am Tag – Wa(h)re Wildtier(liebe)', description: 'Tagaktive Igel richtig einschätzen.',
    intro: 'Igel sind vor allem in Dämmerung und Nacht aktiv. Ein Tier im vollen Tageslicht, das offen liegt, torkelt, apathisch wirkt oder von Fliegen umschwärmt wird, braucht Hilfe.', image: images.hedgehog,
    sections: [
      section('Erst hinschauen', ['Achte auf Gang, Reaktion, Körperform, sichtbare Wunden, Fliegeneier und den Fundort. Eine säugende Igelin kann ausnahmsweise tagsüber unterwegs sein; ein krank wirkendes Tier wird trotzdem nicht einfach laufen gelassen.']),
      section('Bei Warnzeichen sichern', ['Handschuhe anziehen, den Igel in einen hohen Karton setzen und mit einem Handtuch schützen. Ist er deutlich kälter als deine Hand, braucht er eine handwarme, eingewickelte Wärmflasche neben sich. Dann sofort Igelstation oder Tierarztpraxis anrufen.']),
      section('Was nicht in den Karton gehört', [], ['Keine Milch.', 'Kein Wasser in das Maul spritzen.', 'Keine Medikamente oder Flohmittel auf eigene Faust.', 'Nicht baden oder zwangsfüttern.']),
      section('Der Garten danach', ['Mähroboter nicht unbeaufsichtigt fahren lassen, vor dem Mähen unter Hecken prüfen, Durchgänge am Zaun lassen und Laub- oder Reisighaufen als Rückzug erhalten.']),
    ],
    next: [link('maehroboter-und-gartenarbeit', 'Mähen ohne Tierleid', 'Gefahren durch Klingen und Fadentrimmer vermeiden.'), link('hilfestellen', 'Igelhilfe finden', 'Regionale Kontakte und Notfallwege.')], sources: [sources.hedgehog, sources.mower],
  },
  {
    slug: 'fledermaus-im-zimmer', kind: 'situation', kicker: 'Fledermaus gefunden', heading: 'Fledermaus im Zimmer: ruhig bleiben und Ausgang öffnen',
    title: 'Fledermaus im Zimmer – Wa(h)re Wildtier(liebe)', description: 'Fledermäusen sicher aus Innenräumen helfen.',
    intro: 'Verflogene Fledermäuse suchen oft nur einen Ausweg oder einen ruhigen Schlafplatz. Hektik, Fangversuche und geöffnete Türen in weitere Räume machen die Lage schwieriger.',
    sections: [
      section('Wenn sie fliegt', ['Zimmertür schließen, Haustiere hinausbringen, Licht ausschalten und ein Fenster weit öffnen. Vorhänge zur Seite ziehen. Dann den Raum verlassen und der Fledermaus Zeit geben.']),
      section('Wenn sie hängt oder am Boden liegt', ['Nicht mit bloßen Händen anfassen. Bei einem Tier am Boden, sichtbarer Verletzung oder fehlendem Abflug Fledermaushilfe anrufen. Muss es gesichert werden, nur mit festen Handschuhen und in einem ausbruchsicheren Karton mit Tuch.']),
      section('Nach dem Ausflug', ['Hinter Vorhängen, Möbeln und in nach oben offenen Gefäßen nachsehen. Vasen und Eimer können Fallen sein. Das Fenster in den folgenden Nächten geschlossen halten oder mit einem geeigneten Insektenschutz versehen.']),
      section('Bei Bisskontakt', ['Die Wunde sofort gründlich mit Wasser und Seife reinigen und ärztlichen Rat einholen. Die Fledermaus nicht eigenmächtig freilassen, bevor das weitere Vorgehen geklärt ist.']),
    ],
    next: [link('haus-und-dach', 'Quartiere am Haus', 'Spalten erhalten und Sanierungen richtig planen.'), link('hilfestellen', 'Fledermaushilfe', 'Regionale Beratung finden.')], sources: [sources.bat, sources.local],
  },
  {
    slug: 'tier-im-schacht', kind: 'situation', kicker: 'Gebäudefalle', heading: 'Tier im Schacht, Fallrohr oder Wasserbehälter',
    title: 'Tier im Schacht oder Fallrohr – Wa(h)re Wildtier(liebe)', description: 'Tiere aus baulichen Fallen retten und Wiederholungen verhindern.',
    intro: 'Glatte Wände, offene Rohre und steile Becken werden zur Falle, weil Tiere hinein-, aber nicht wieder herauskommen.',
    sections: [
      section('Sofort handeln', ['Sichere zuerst den Bereich gegen Verkehr, Wasserzulauf, Pumpen und Haustiere. Bei tiefen Schächten, engen Rohren oder verletzten Tieren Feuerwehr, Wildtierhilfe oder Fachbetrieb rufen. Nicht selbst hineinsteigen.']),
      section('Einen Fluchtweg anbieten', ['In flachen Tonnen und Becken kann ein raues Brett oder ein fest verankertes Gitter mit geringer Steigung als Ausstieg dienen. Es muss den Rand erreichen und darf nicht abrutschen.']),
      section('Die Falle schließen', ['Fallrohre mit geeignetem Gitter sichern, Lichtschächte abdecken, Regentonnen schließen und Becken mit dauerhaften Ausstiegshilfen versehen. Vor jeder Nutzung kontrollieren, ob sich ein Tier darin befindet.']),
    ],
    next: [link('wasser-und-schaechte', 'Wasser und Schächte sichern', 'Dauerhafte Lösungen für Haus und Garten.'), link('gefahren-vermeiden', 'Gefahrencheck', 'Weitere Fallen auf dem Grundstück finden.')], sources: [sources.water],
  },
  {
    slug: 'nest-beschaedigt', kind: 'situation', kicker: 'Brutplatz', heading: 'Ein Nest ist beschädigt oder im Weg',
    title: 'Nest beschädigt – Wa(h)re Wildtier(liebe)', description: 'Beschädigte und belegte Nester schützen.',
    intro: 'Ein belegtes Nest ist kein loses Gartenobjekt. Eier, Küken und Altvögel hängen am genauen Ort, an Deckung und an ungestörten Anflugwegen.', image: images.nest,
    sections: [
      section('Arbeit stoppen', ['Mähen, Schneiden, Abriss oder Reinigung im unmittelbaren Bereich beenden. Abstand schaffen und prüfen, ob Eier oder Jungvögel vorhanden sind.']),
      section('Nicht eigenmächtig umsetzen', ['Ein Nest nicht an einen bequemeren Ort tragen. Bei beschädigten Nestern, Bauvorhaben oder Gefahr fachkundigen Rat bei Naturschutzbehörde, NABU oder Wildvogelhilfe einholen.']),
      section('Nach der Brut vorsorgen', ['Einflugöffnungen, Nischen und dichte Sträucher erhalten. Geplante Arbeiten außerhalb der belegten Zeit durchführen und Ersatzquartiere vor dem Verlust alter Plätze schaffen.']),
    ], next: [link('haus-und-dach', 'Haus und Dach', 'Brutplätze bei Arbeiten berücksichtigen.'), link('saisonkalender', 'Saisonkalender', 'Arbeiten zum passenden Zeitpunkt planen.')], sources: [sources.mv],
  },
  {
    slug: 'jungtier-allein', kind: 'situation', kicker: 'Jungtier', heading: 'Allein heißt nicht verlassen',
    title: 'Wildtier-Jungtier allein – Wa(h)re Wildtier(liebe)', description: 'Allein sitzende Wildtierjunge richtig einschätzen.',
    intro: 'Rehkitze, Feldhasen und viele andere Jungtiere verbringen lange Zeit ohne sichtbares Muttertier. Nähe von Menschen und Hunden verhindert oft erst die Rückkehr.',
    sections: [
      section('Abstand ist die erste Hilfe', ['Nicht anfassen, nicht füttern, Hunde anleinen und den Ort zügig verlassen. Beobachtung nur aus großer Entfernung.']),
      section('Wann Hilfe nötig wird', ['Sichtbare Verletzung, starke Schwäche, tote Elterntiere oder eine unmittelbare Gefahr ändern die Lage. Bei jagdbaren Arten Polizei, Rettungsleitstelle oder zuständigen Jäger einbeziehen; bei anderen Arten Wildtierhilfe anrufen.']),
      section('Kein Geruchsexperiment', ['Ein gesund wirkendes Jungtier nicht hochheben, um zu prüfen, ob es reagiert. Die Stressreaktion sagt Laien wenig und kann das Tier gefährden.']),
    ], next: [link('braucht-das-tier-hilfe', 'Entscheidungsweg öffnen', 'Warnzeichen Schritt für Schritt prüfen.'), link('hilfestellen', 'Ansprechpartner', 'Regional passende Hilfe finden.')], sources: [sources.mv],
  },
  {
    slug: 'lebensraum-schaffen', kind: 'hub', kicker: 'Platz wirksam nutzen', heading: 'Lebensraum beginnt dort, wo du wohnst',
    title: 'Lebensraum schaffen – Wa(h)re Wildtier(liebe)', description: 'Wildtierfreundliche Lebensräume für jede verfügbare Fläche.',
    intro: 'Nicht jeder hat einen Garten. Wasser, heimische Pflanzen, dunkle Nächte, sichere Durchgänge und ungestörte Ecken lassen sich trotzdem an viele Orte anpassen.',
    cards: [
      link('garten', 'Garten', 'Prioritäten statt Einkaufsliste: Durchgänge, Struktur und sichere Pflege.'),
      link('balkon-und-fenster', 'Balkon und Fenster', 'Blüten, Wasser und Kollisionsschutz auf kleiner Fläche.'),
      link('haus-und-dach', 'Hauswand und Dach', 'Quartiere erhalten, Öffnungen prüfen und Sanierungen vorbereiten.'),
      link('hof-und-kleingarten', 'Hof und Kleingarten', 'Versiegelte Flächen aufbrechen und Randbereiche nutzen.'),
      link('stadt-und-dorf', 'Stadt und Dorf', 'Gemeinschaftsflächen, Straßenränder und Gebäude mitdenken.'),
      link('flaechenplan', 'Plan für meine Fläche', 'Maßnahmen nach Ort, Zeit und Pflege auswählen.', 'Werkzeug'),
    ],
    sections: [section('Drei Dinge bringen fast überall viel', [], ['Wasser so anbieten, dass niemand ertrinken kann.', 'Heimische Pflanzen über die ganze Saison blühen und aussamen lassen.', 'Licht, Glas und geschlossene Wege als Gefahren mitdenken.'])],
  },
  {
    slug: 'garten', kind: 'habitat', kicker: 'Lebensraum Garten', heading: 'Ein guter Wildtiergarten hat Wege, Schichten und Ruhe',
    title: 'Wildtierfreundlicher Garten – Wa(h)re Wildtier(liebe)', description: 'Die wirksamsten Maßnahmen für einen wildtierfreundlichen Garten.',
    intro: 'Der Wert eines Gartens entsteht nicht aus möglichst vielen Produkten. Er entsteht aus Boden, Pflanzen, Wasser, Totholz, Durchgängen und Zeiten, in denen nichts gestört wird.',
    sections: [
      section('Die drei stärksten Schritte', [], ['Mindestens einen bodennahen Durchgang zu Nachbarflächen offenhalten.', 'Eine dichte, heimische Strauch- und Staudenstruktur statt leerer Rasenfläche entwickeln.', 'Nächte dunkel lassen und motorisierte Pflege auf den Tag begrenzen.']),
      section('Was schon wertvoll ist', ['Alte Hecken, Laub unter Sträuchern, Totholz, Samenstände, offene Bodenstellen und eine ruhige Gartenecke sind keine Versäumnisse. Sie bieten Deckung, Baumaterial, Nahrung und Überwinterungsplätze.']),
      section('Wasser ohne Falle', ['Flache Schalen täglich reinigen und mit Steinen als Ausstieg ausstatten. Regentonnen abdecken. Teiche brauchen eine flache Uferzone oder eine feste Ausstiegshilfe.']),
      section('Pflege im Rhythmus der Tiere', ['Nicht alles gleichzeitig schneiden oder mähen. Vor jeder Arbeit unter Hecken, in hohem Gras und an Gebäuden nachsehen. Abschnitte stehen lassen, damit nie der ganze Lebensraum auf einmal verschwindet.']),
    ], next: [link('lebensraum-check', 'Garten-Check', 'Prioritäten für den vorhandenen Garten erhalten.'), link('maehroboter-und-gartenarbeit', 'Gartenarbeit sichern', 'Klingen, Fäden und Brutplätze mitdenken.')], sources: [sources.mower, sources.water],
  },
  {
    slug: 'balkon-und-fenster', kind: 'habitat', kicker: 'Kleine Fläche', heading: 'Ein Balkon kann Rastplatz sein – aber keine Falle',
    title: 'Wildtierfreundlicher Balkon – Wa(h)re Wildtier(liebe)', description: 'Natur auf Balkon, Fensterbank und kleiner Fläche unterstützen.',
    intro: 'Auch eine Einzimmerwohnung kann Natur Raum geben. Entscheidend sind passende Pflanzen, sichere Wasserstellen und der Verzicht auf Licht und Glasfallen.',
    sections: [
      section('Drei machbare Schritte', [], ['Ungespritzte heimische Kräuter und Blüten in gestaffelter Blüte pflanzen.', 'Eine sehr flache Wasserschale mit Steinen anbieten und häufig reinigen.', 'Abends unnötiges Außenlicht ausschalten und Scheiben von außen sichtbar machen.']),
      section('Pflanzen statt Dekoration', ['Blütenform, Blühzeit und Herkunft entscheiden darüber, ob Insekten Nahrung finden. Ein kleiner Topf mit einer geeigneten Pflanze ist wertvoller als eine große Fläche aus gefüllten, nektararmen Zierblüten.']),
      section('Nisthilfen nur passend einsetzen', ['Ein Insektenhotel ersetzt keine Nahrung und keinen offenen Boden. Vogelnistkästen brauchen geeignete Ausrichtung, freie Anflugwege, sichere Befestigung und regelmäßige Pflege außerhalb der Brut.']),
      section('Wohnung als Ausweg offenhalten', ['Kippfenster können zur Falle werden. Bei regelmäßig geöffneten Fenstern helfen passende Schutzgitter. Nach oben offene Gefäße im Zimmer schließen oder umdrehen.']),
    ], next: [link('flaechenplan', 'Plan für kleine Flächen', 'Aus Ort und Pflegezeit passende Schritte ableiten.'), link('glasflaechen', 'Scheiben sichtbar machen', 'Vogelkollisionen verhindern.')], sources: [sources.water, sources.bat],
  },
  {
    slug: 'haus-und-dach', kind: 'habitat', kicker: 'Gebäude', heading: 'Hauswand und Dach sind Lebensraum',
    title: 'Wildtierfreundliches Haus und Dach – Wa(h)re Wildtier(liebe)', description: 'Quartiere und Brutplätze an Gebäuden schützen.',
    intro: 'Spalten, Traufen, Fassadennischen und Dachräume werden von Vögeln und Fledermäusen genutzt. Eine Sanierung kann solche Plätze unbemerkt verschließen.',
    sections: [
      section('Vor Arbeiten beobachten', ['Ausflüge in der Dämmerung, Kotspuren, Bettelrufe und regelmäßiger Anflug sind Hinweise auf ein Quartier. Vor Gerüst, Dämmung oder Verschluss fachkundig prüfen lassen.']),
      section('Besetzte Plätze nicht verschließen', ['Ein belegtes Nest oder Fledermausquartier bleibt zugänglich. Arbeiten verschieben und bei unvermeidbaren Eingriffen Naturschutzbehörde und Fachleute einbeziehen.']),
      section('Ersatz zuerst, Verlust danach', ['Neue Einbausteine oder Kästen werden passend zur Art und möglichst vor dem Wegfall des alten Quartiers angebracht. Lage, Höhe, Temperatur und Anflugweg sind wichtiger als die bloße Stückzahl.']),
    ], next: [link('nest-beschaedigt', 'Nest beschädigt', 'Bei akuten Schäden richtig reagieren.'), link('licht-check', 'Licht am Gebäude prüfen', 'Dunkle Wege und Ausflugbereiche erhalten.')], sources: [sources.bat, sources.mv],
  },
  {
    slug: 'hof-und-kleingarten', kind: 'habitat', kicker: 'Hof und Parzelle', heading: 'Zwischen Pflaster, Schuppen und Zaun liegt viel Potenzial',
    title: 'Wildtierfreundlicher Hof und Kleingarten – Wa(h)re Wildtier(liebe)', description: 'Höfe und Kleingärten als Lebensraum entwickeln.',
    intro: 'Kleine Randflächen, Fugen, Schuppenwände und gemeinschaftliche Wege können Nahrung und Verbindung schaffen, wenn nicht jede Fläche versiegelt oder nachts beleuchtet ist.',
    sections: [
      section('Ränder nutzen', ['Entlang von Mauern und Zäunen entstehen mit heimischen Stauden, offenen Bodenstellen und Totholz schmale, aber wichtige Lebensräume.']),
      section('Gemeinsam statt lückenlos', ['Mehrere benachbarte kleine Flächen wirken zusammen. Bodendurchgänge, abgestimmte dunkle Bereiche und zeitversetzte Mahd verbinden sie.']),
      section('Konflikte vorwegnehmen', ['Wasserstellen sauber halten, Futterreste vermeiden und Wege frei lassen. Wildtierfreundlich heißt nicht, Hygiene oder sichere Nutzung aufzugeben.']),
    ], next: [link('zaun-check', 'Zaun-Check', 'Durchgänge und Gefahren prüfen.'), link('lebensraum-check', 'Flächen-Check', 'Die wirksamsten nächsten Schritte wählen.')],
  },
  {
    slug: 'stadt-und-dorf', kind: 'habitat', kicker: 'Gemeinsamer Raum', heading: 'Wildtiere nutzen unsere Straßen, Dächer und Ränder',
    title: 'Wildtiere in Stadt und Dorf – Wa(h)re Wildtier(liebe)', description: 'Wildtiere in Siedlungen schützen und beobachten.',
    intro: 'Parks, Friedhöfe, Höfe, Feldränder, Brücken und alte Gebäude bilden ein Netz. Gefährlich werden zerschnittene Wege, Glas, nächtliches Licht und abrupter Verlust von Quartieren.',
    sections: [
      section('Beobachtung wird zur Information', ['Wiederkehrende Sichtungen, tote Tiere an einer Scheibe oder Amphibien auf einer Straße zeigen konkrete Konfliktorte. Fundort, Datum und Artverdacht dokumentieren.']),
      section('Nicht allein am Einzelgrundstück denken', ['Eine dunkle Gasse, ein durchlässiger Zaun oder ein ungemähter Saum hilft erst richtig, wenn er an weitere Flächen anschließt. Mit Nachbarn, Verwaltung oder Verein lässt sich aus Einzelmaßnahmen ein Weg machen.']),
      section('Öffentliche Eingriffe ansprechen', ['Bei Brutplätzen, Fällungen, Sanierungen oder wiederkehrenden Tierverlusten früh Naturschutzbehörde oder lokale Naturschutzgruppe informieren. Sachlich dokumentierte Orte sind leichter zu prüfen.']),
    ], next: [link('regional-plau', 'Region Plau am See', 'Arten, Landschaft und Kontakte vor Ort.'), link('gartentagebuch', 'Beobachtungen festhalten', 'Aus einzelnen Begegnungen Muster erkennen.')], sources: [sources.local, sources.mv],
  },
  {
    slug: 'gefahren-vermeiden', kind: 'hub', kicker: 'Fallen erkennen', heading: 'Viele Gefahren sehen harmlos aus',
    title: 'Gefahren für Wildtiere vermeiden – Wa(h)re Wildtier(liebe)', description: 'Alltägliche Tierfallen an Haus und Garten entschärfen.',
    intro: 'Eine klare Scheibe, ein offener Schacht, ein lockeres Netz oder eine nächtliche Klinge wird erst auffällig, wenn ein Tier verletzt ist. Besser ist der Rundgang vorher.',
    cards: [
      link('glasflaechen', 'Glasflächen', 'Spiegelung und Durchsicht von außen unterbrechen.'),
      link('licht-in-der-nacht', 'Licht in der Nacht', 'Nur dort, so kurz und so schwach wie nötig beleuchten.'),
      link('maehroboter-und-gartenarbeit', 'Mähroboter und Gartengeräte', 'Vor der Arbeit suchen, nachts nicht fahren lassen.'),
      link('wasser-und-schaechte', 'Wasser, Tonnen und Schächte', 'Abdecken, flache Ränder und sichere Ausstiege schaffen.'),
      link('netze-und-zaeune', 'Netze und Zäune', 'Verheddern verhindern und Bodenwege öffnen.'),
      link('gifte-und-leimfallen', 'Gifte und Leimfallen', 'Nahrungsketten und Nichtzieltiere schützen.'),
      link('katzen-und-wildtiere', 'Katzen und Wildtiere', 'Brutplätze, Zeiten und Jagderfolg mitdenken.'),
      link('bau-und-pflege', 'Bau und Pflege', 'Vor Schnitt, Abriss und Verschluss prüfen.'),
    ],
    sections: [section('Der Grundstücksrundgang', [], ['Was spiegelt oder ist durchsichtig?', 'Wo kann ein Tier hineinfallen?', 'Wo gibt es enge Schlingen, lose Netze oder scharfe Kanten?', 'Welche Maschine arbeitet unbeaufsichtigt?', 'Welches Licht bleibt ohne echten Zweck an?'])],
  },
  {
    slug: 'glasflaechen', kind: 'measure', kicker: 'Gefahr Glas', heading: 'Vögel erkennen eine Scheibe nicht als Hindernis',
    title: 'Glasflächen gegen Vogelschlag sichern – Wa(h)re Wildtier(liebe)', description: 'Vogelkollisionen an Scheiben verhindern.',
    intro: 'Durchsicht auf Himmel und Pflanzen oder die Spiegelung der Umgebung täuscht einen freien Flugweg vor.',
    sections: [
      section('Wirksam markieren', ['Markierungen gehören auf die Außenseite und müssen die Fläche dicht genug gliedern. Einzelne schwarze Greifvogelsilhouetten reichen nicht. Geeignet sind geprüfte Punkt- oder Streifenmuster, Folien, Schnüre oder außenliegender Sonnenschutz.']),
      section('Sofortmaßnahme nach Kollision', ['Den benommenen Vogel in einen kleinen dunklen Karton setzen und fachkundigen Rat einholen. Nicht auf die Fensterbank legen und nicht zum Weiterflug drängen.']),
      section('Auch kleine Flächen prüfen', ['Balkonbrüstungen, Windschutz, Wartehäuschen und über Eck stehende Scheiben können gefährlich sein. Tote oder kollidierte Vögel am genauen Ort dokumentieren.']),
    ], next: [link('verletzter-vogel', 'Vogel kollidiert', 'Sicher unterbringen und Hilfe holen.'), link('gefahren-vermeiden', 'Weitere Gefahren', 'Den ganzen Ort prüfen.')],
  },
  {
    slug: 'licht-in-der-nacht', kind: 'measure', kicker: 'Gefahr Licht', heading: 'Dunkelheit ist ein Lebensraum',
    title: 'Lichtverschmutzung vermeiden – Wa(h)re Wildtier(liebe)', description: 'Außenlicht wildtierfreundlich planen.',
    intro: 'Künstliches Licht verändert Orientierung, Nahrungssuche, Ruhe und Wanderwege. Besonders problematisch sind unnötige Dauerbeleuchtung und nach oben oder seitlich streuendes Licht.',
    sections: [
      section('Die wirksamste Reihenfolge', [], ['Licht ausschalten, wenn es nicht gebraucht wird.', 'Bewegungsmelder kurz und zielgenau einstellen.', 'Leuchten abschirmen und nur nach unten richten.', 'Geringe Helligkeit und warmes Licht wählen.', 'Dunkle Korridore an Hecken, Wasser und Quartieren erhalten.']),
      section('Dekoration begrenzen', ['Baumkronen, Teiche, Hecken und Fassaden nicht dauerhaft anstrahlen. Gerade dort bewegen sich Insekten, Fledermäuse und Vögel.']),
    ], next: [link('licht-check', 'Lichtfallen-Check', 'Leuchten am eigenen Ort prüfen.'), link('nachts-beobachten', 'Nachtleben beobachten', 'Sehen, ohne den Ort auszuleuchten.')],
  },
  {
    slug: 'maehroboter-und-gartenarbeit', kind: 'measure', kicker: 'Gefahr Klingen', heading: 'Mähen beginnt mit Nachsehen',
    title: 'Mähroboter und Wildtiere – Wa(h)re Wildtier(liebe)', description: 'Wildtiere vor Mährobotern und Gartengeräten schützen.',
    intro: 'Igel fliehen nicht zuverlässig vor rotierenden Klingen. Auch Frösche, Insekten und andere kleine Tiere werden im hohen Gras oder unter Hecken leicht übersehen.',
    sections: [
      section('Nachts bleibt der Mäher stehen', ['Mähroboter nicht in Dämmerung oder Nacht fahren lassen. Sicherer ist beaufsichtigtes Mähen am Tag, nachdem die Fläche und besonders Randbereiche kontrolliert wurden.']),
      section('Faden und Messer mit Abstand', ['Unter Hecken, an Laubhaufen, Böschungen und dichtem Bewuchs zuerst mit der Hand prüfen. Fadentrimmer und Freischneider nicht blind in Deckung führen.']),
      section('Weniger Fläche, mehr Wirkung', ['Mähwege und genutzte Rasenbereiche kurz halten, andere Abschnitte seltener und zeitversetzt mähen. So bleibt immer Deckung und Nahrung erhalten.']),
    ], next: [link('igel-am-tag', 'Igel gefunden', 'Warnzeichen und Soforthilfe.'), link('garten', 'Garten strukturieren', 'Pflege und Lebensraum verbinden.')], sources: [sources.mower],
  },
  {
    slug: 'wasser-und-schaechte', kind: 'measure', kicker: 'Gefahr Tiefe', heading: 'Wasser braucht einen Ausstieg',
    title: 'Regentonnen, Teiche und Schächte sichern – Wa(h)re Wildtier(liebe)', description: 'Wasserbehälter und Vertiefungen als Tierfallen entschärfen.',
    intro: 'Glatte, steile Wände lassen Vögel, Insekten, Amphibien und kleine Säuger nicht mehr heraus.',
    sections: [
      section('Abdecken oder aussteigen lassen', ['Regentonnen fest abdecken. In Teichen und Becken flache Uferzonen oder fest verankerte Ausstiegshilfen schaffen. Lichtschächte mit engmaschigen, tragfähigen Abdeckungen sichern.']),
      section('Tränken flach halten', ['Wasserschalen bekommen Steine oder einen rauen Rand. Wasser häufig wechseln und die Schale reinigen, damit sie nicht zur Krankheitsquelle wird.']),
      section('Nach Starkregen prüfen', ['Abläufe, Kellerabgänge und Baugruben nach Regen kontrollieren. Temporäre Gruben über Nacht abdecken oder mit einem sicheren Ausstieg versehen.']),
    ], next: [link('tier-im-schacht', 'Tier steckt fest', 'Sofortmaßnahmen bei einem Fund.'), link('lebensraum-check', 'Wasserstelle planen', 'Passende Maßnahme für die Fläche wählen.')], sources: [sources.water],
  },
  {
    slug: 'netze-und-zaeune', kind: 'measure', kicker: 'Gefahr Barriere', heading: 'Ein Zaun kann Grenze, Weg oder Falle sein',
    title: 'Netze und Zäune wildtiersicher machen – Wa(h)re Wildtier(liebe)', description: 'Zäune durchlässig und Netze sicher gestalten.',
    intro: 'Lose Maschen verheddern Tiere. Dichte Sockel schneiden ihre Wege ab. Bodendurchgänge und straff gespannte, kontrollierte Netze verändern beides.',
    sections: [
      section('Bodenwege öffnen', ['Mehrere Durchgänge von ungefähr 13 mal 13 Zentimetern verbinden Gärten für Igel und andere kleine Tiere. Sie bleiben frei von scharfen Kanten und führen nicht direkt in eine Gefahr.']),
      section('Netze nur gespannt verwenden', ['Pflanzen- und Sportnetze straff, gut sichtbar und ohne lose Enden befestigen. Nicht benötigte Netze vollständig entfernen und gelagerte Rollen geschlossen aufbewahren.']),
      section('Täglich kontrollieren', ['Während Netze im Einsatz sind, morgens und abends prüfen. Ein verheddertes Tier nicht ruckartig herausziehen, sondern je nach Art fachkundige Hilfe holen.']),
    ], next: [link('zaun-check', 'Zaun-Check', 'Durchlässigkeit und Risiken prüfen.'), link('garten', 'Garten als Weg', 'Verbindung zu Nahrung und Deckung schaffen.')],
  },
  {
    slug: 'gifte-und-leimfallen', kind: 'measure', kicker: 'Gefahr Gift', heading: 'Gift bleibt nicht beim vermeintlichen Schädling',
    title: 'Gifte und Leimfallen vermeiden – Wa(h)re Wildtier(liebe)', description: 'Nichtzieltiere und Nahrungsketten vor Giften schützen.',
    intro: 'Rodentizide, Insektengifte und Leimfallen treffen mehr Tiere als beabsichtigt. Vergiftete Beute kann auch ihre Fressfeinde schädigen.',
    sections: [
      section('Ursache statt Nahrungskette behandeln', ['Zugänge schließen, Lebensmittel und Tierfutter sicher lagern, Abfallquellen beseitigen und bauliche Schwachstellen reparieren. Bei einem Befall Fachleute nach nicht-chemischen Lösungen fragen.']),
      section('Leimfallen weglassen', ['Klebeflächen fangen auch Vögel, Fledermäuse, Eidechsen und Insekten. Ein festgeklebtes Tier nicht mit Gewalt lösen; Wildtierhilfe oder Tierarztpraxis kontaktieren.']),
      section('Pflanzenschutz reduzieren', ['Gezielte mechanische Maßnahmen, robuste Pflanzen und natürliche Gegenspieler erhalten das Nahrungsnetz besser als flächige Behandlung.']),
    ], next: [link('gefahren-vermeiden', 'Gefahrenrundgang', 'Weitere unsichtbare Risiken finden.'), link('garten', 'Stabiler Lebensraum', 'Vielfalt statt Schädlingsspirale.')],
  },
  {
    slug: 'katzen-und-wildtiere', kind: 'measure', kicker: 'Konflikt Haustier', heading: 'Katzenjagd ist natürlich – ihr Ausmaß ist menschengemacht',
    title: 'Katzen und Wildtiere – Wa(h)re Wildtier(liebe)', description: 'Wildtiere in Katzenhaushalten besser schützen.',
    intro: 'Freigängerkatzen jagen unabhängig davon, ob sie satt sind. Besonders gefährdet sind Jungvögel, bodennah brütende Tiere und geschwächte Fundtiere.',
    sections: [
      section('Akute Brutplätze schützen', ['Katzen in sensiblen Wochen und besonders morgens im Haus halten. Futterstellen und Nistplätze nicht so anlegen, dass eine Katze direkt darunter lauern kann.']),
      section('Ein gebrachtes Tier braucht Hilfe', ['Vögel und kleine Wildtiere nach Katzenkontakt nicht einfach wieder aussetzen. Auch ohne sichtbare Wunde sofort fachkundige Hilfe einholen.']),
      section('Den Garten nicht zur Jagdstation machen', ['Dichte Deckung schaffen, Kletterhilfen an Nistbäumen vermeiden und Futterreste entfernen, die Tiere an eine ungeschützte Stelle locken.']),
    ], next: [link('verletzter-vogel', 'Tier nach Katzenkontakt', 'Ruhig sichern und Hilfe holen.'), link('garten', 'Deckung schaffen', 'Struktur und sichere Abstände planen.')], sources: [sources.wildbird],
  },
  {
    slug: 'bau-und-pflege', kind: 'measure', kicker: 'Arbeiten am Lebensraum', heading: 'Vor Schnitt, Abriss und Verschluss kommt die Kontrolle',
    title: 'Bau- und Gartenarbeiten mit Wildtierschutz – Wa(h)re Wildtier(liebe)', description: 'Brutplätze und Quartiere vor Arbeiten prüfen.',
    intro: 'Ein Nest in der Hecke, eine Fledermausspalte am Dach oder ein Igelnest im Reisighaufen ist leicht zerstört und schwer ersetzt.',
    sections: [
      section('Früh prüfen', ['Nicht erst am Tag der Arbeit nach Tieren suchen. Wiederholte Beobachtung zu passenden Tageszeiten und fachkundige Kontrolle geben mehr Sicherheit.']),
      section('Bei Nutzung stoppen', ['Bettelrufe, regelmäßiger Anflug, Kotspuren oder Tiere im Hohlraum sind ein Grund, die Arbeit zu unterbrechen und Rat einzuholen.']),
      section('Zeit und Ersatz planen', ['Arbeiten in unkritische Zeiträume legen. Ersatzquartiere passend zur Art vor dem Verlust schaffen und neue Zugänge nicht durch Gerüstnetze oder Folien blockieren.']),
    ], next: [link('saisonkalender', 'Saisonkalender', 'Pflegearbeiten zeitlich einordnen.'), link('haus-und-dach', 'Gebäudequartiere', 'Spalten und Nischen erhalten.')], sources: [sources.mv],
  },
  {
    slug: 'tier-erkennen', kind: 'hub', kicker: 'Bestimmen ohne Stören', heading: 'Nicht das eine Merkmal entscheidet',
    title: 'Wildtiere erkennen – Wa(h)re Wildtier(liebe)', description: 'Arten über Ort, Größe, Verhalten, Stimme und Spuren eingrenzen.',
    intro: 'Farbe allein täuscht. Verlässlicher wird eine Bestimmung, wenn Ort, Tageszeit, Größe, Körperform, Bewegung, Stimme und Jahreszeit zusammenpassen.',
    cards: [
      link('arten', 'Artensteckbriefe', 'Vögel, Säugetiere, Fledermäuse, Libellen, Insekten und mehr mit Merkmalen, Lebensraum und Schutzstatus.'),
      link('vogel-erkennen', 'Vögel', 'Silhouette, Schnabel, Flug, Stimme und Lebensraum.'),
      link('spuren-und-kot', 'Spuren und Kot', 'Trittsiegel, Fraßbild, Losung und Laufweg zusammen lesen.'),
      link('stimmen-und-rufe', 'Stimmen und Rufe', 'Rhythmus, Wiederholung, Ort und Tageszeit notieren.'),
      link('nester-und-bauten', 'Nester und Bauten', 'Form, Material, Eingang und Umgebung beobachten.'),
      link('insekten-erkennen', 'Insekten', 'Körperbau, Flügel, Blütenbesuch und Verhalten.'),
      link('tierfinder', 'Tier-, Spur- und Stimmenfinder', 'Beobachtung mit vorhandenen Merkmalen eingrenzen.', 'Werkzeug'),
    ],
    sections: [section('Eine gute Notiz', ['Schreibe zuerst auf, was du wirklich gesehen oder gehört hast. „Etwa amselgroß, wippender Schwanz, am Bach, zweimaliger heller Ruf“ ist brauchbarer als „vielleicht eine seltene Art“.'])],
  },
  {
    slug: 'vogel-erkennen', kind: 'identify', kicker: 'Vögel', heading: 'Erst Silhouette und Verhalten, dann Farbe',
    title: 'Vögel erkennen – Wa(h)re Wildtier(liebe)', description: 'Vögel im Alltag systematisch bestimmen.',
    intro: 'Lebensraum, Saison, Größe und Häufigkeit grenzen die Kandidaten ein. Notiere zuerst Körperform, Bewegung, Stimme und den genauen Ort.',
    sections: [
      section('Fünf Merkmale notieren', [], ['Größe im Vergleich zu Amsel, Taube oder Krähe.', 'Körperform und Schnabelform.', 'Bewegung am Boden, im Geäst oder im Flug.', 'Lebensraum und genaue Höhe.', 'Stimme, Tageszeit und Wiederholung.']),
      section('Verwechslungen zulassen', ['Ein dunkler Vogel ist nicht automatisch eine Amsel, ein großer Greif nicht automatisch ein Adler. Zwei oder drei Kandidaten nebeneinander zu prüfen ist genauer als eine schnelle Gewissheit.']),
      section('Region und Saison nutzen', ['Im Gebiet um Plau am See verändern Seen, Wälder, Felder, Dörfer und Zugzeiten die Wahrscheinlichkeit. Seltenheit wird erst nach den sichtbaren Merkmalen berücksichtigt.']),
    ], next: [link('arten/singvoegel', 'Vogelarten nachschlagen', 'Steckbriefe zu Singvögeln, Greifvögeln, Eulen und Wasservögeln.'), link('tierfinder', 'Vogelfinder öffnen', 'Merkmale filtern und Kandidaten vergleichen.'), link('regional-plau', 'Regionale Ebene', 'Lebensräume rund um Plau am See.')],
  },
  {
    slug: 'spuren-und-kot', kind: 'identify', kicker: 'Spuren', heading: 'Eine Spur erzählt mehr als ein einzelner Abdruck',
    title: 'Wildtierspuren erkennen – Wa(h)re Wildtier(liebe)', description: 'Spuren, Fraßbilder und Kot vorsichtig einordnen.',
    intro: 'Größe, Gangart, Untergrund, Richtung und Begleitspuren gehören zusammen. Kot wird nur fotografiert, nicht mit bloßen Händen untersucht.',
    sections: [
      section('Den Maßstab mitfotografieren', ['Lineal oder Münze neben die Spur legen, ohne sie zu berühren. Mehrere Abdrücke und die ganze Laufspur aufnehmen.']),
      section('Umgebung einbeziehen', ['Zaunloch, Ufer, Baumart, Fraßreste, Haare oder Federn können die Einordnung stützen. Ein einzelner Abdruck im weichen Boden verformt leicht.']),
      section('Hygiene', ['Kot, Gewölle und tote Tiere nicht mit bloßen Händen anfassen. Kinder und Haustiere fernhalten; bei auffälligen Funden zuständige Stellen fragen.']),
    ], next: [link('arten/saeugetiere', 'Säugetiere nachschlagen', 'Steckbriefe mit Trittsiegeln, Losung und Fraßspuren.'), link('tierfinder', 'Spurenfinder', 'Form, Ort und Größe kombinieren.'), link('gartentagebuch', 'Fund dokumentieren', 'Ort und Datum festhalten.')],
  },
  {
    slug: 'stimmen-und-rufe', kind: 'identify', kicker: 'Hören', heading: 'Stimmen haben Rhythmus, Ort und Tageszeit',
    title: 'Tierstimmen erkennen – Wa(h)re Wildtier(liebe)', description: 'Vogel- und Wildtierstimmen beobachten und eingrenzen.',
    intro: 'Eine Aufnahme hilft, doch auch ohne Technik lassen sich Länge, Tonhöhe, Wiederholung, Richtung und Umgebung notieren.',
    sections: [
      section('Vor der App zuhören', ['Ist der Ruf einzeln oder in Serien? Gleichbleibend oder wechselnd? Kommt er aus Baumkrone, Schilf, Dach oder Bodenvegetation?']),
      section('Nicht anlocken', ['Rufe nicht dauerhaft abspielen. Tonwiedergabe kann Revierverhalten und Brut stören. Beobachten und aufnehmen genügt.']),
      section('Nachtstimmen', ['Nachts sind Richtung und Entfernung schwerer einzuschätzen. Taschenlampen aus und den Ort nicht betreten, nur um näher an die Stimme zu kommen.']),
    ], next: [link('tierfinder', 'Stimmenfinder', 'Rhythmus und Lebensraum eingrenzen.'), link('nachts-beobachten', 'Nachts beobachten', 'Dunkel und ruhig bleiben.')],
  },
  {
    slug: 'nester-und-bauten', kind: 'identify', kicker: 'Bauwerke', heading: 'Nest, Höhle und Bau bleiben unberührt',
    title: 'Nester und Tierbauten erkennen – Wa(h)re Wildtier(liebe)', description: 'Tierbauten beobachten, ohne sie zu stören.',
    intro: 'Material, Form, Eingang, Höhe und Umgebung geben Hinweise. Hineingreifen, Öffnen oder Freilegen zerstört Deckung und kann eine Brut gefährden.', image: images.nest,
    sections: [
      section('Aus Abstand dokumentieren', ['Gesamtansicht, Lage und sichtbares Material fotografieren. Bei Aktivität den Anflugweg frei lassen und den Aufenthalt kurz halten.']),
      section('Nicht jedes Loch bewohnen', ['Spuren am Eingang, frisches Material, Kot oder regelmäßige Bewegung sind aussagekräftiger als die Form allein.']),
      section('Vor Arbeiten klären', ['Soll die Stelle geschnitten, verschlossen oder saniert werden, Nutzung vorher fachkundig prüfen lassen.']),
    ], next: [link('nest-beschaedigt', 'Nest beschädigt', 'Arbeiten stoppen und richtig reagieren.'), link('bau-und-pflege', 'Arbeiten planen', 'Quartiere vor Eingriffen prüfen.')],
  },
  {
    slug: 'insekten-erkennen', kind: 'identify', kicker: 'Insekten', heading: 'Blüte, Körperbau und Verhalten zusammen ansehen',
    title: 'Insekten erkennen – Wa(h)re Wildtier(liebe)', description: 'Insekten auf Balkon und im Garten beobachten.',
    intro: 'Ein Foto von oben und von der Seite, die besuchte Pflanze, Größe und Flugweise helfen bei der Einordnung. Fangen ist meistens nicht nötig.',
    sections: [
      section('Vier Beobachtungen', [], ['Ungefähre Körperlänge.', 'Zahl und Haltung der Flügel.', 'Färbung und Behaarung.', 'Pflanze, Bodenstelle oder Material, das genutzt wird.']),
      section('Lebensraum gleich mitlesen', ['Viele Wildbienen brauchen nicht nur Blüten, sondern offene Bodenstellen, markhaltige Stängel oder vorhandene Hohlräume. Eine Artbeobachtung zeigt deshalb oft direkt, welcher Teil des Ortes wertvoll ist.']),
    ], next: [link('arten', 'Insekten nachschlagen', 'Steckbriefe zu Schmetterlingen, Libellen, Käfern, Hummeln und Heuschrecken.'), link('balkon-und-fenster', 'Blüten auf kleiner Fläche', 'Nahrung und Wasser passend anbieten.'), link('gartentagebuch', 'Beobachtung sammeln', 'Pflanze und Besuchszeit notieren.')],
  },
  {
    slug: 'natur-beobachten', kind: 'hub', kicker: 'Sehen lernen', heading: 'Beobachten heißt: anwesend sein, ohne den Ort zu übernehmen',
    title: 'Natur beobachten – Wa(h)re Wildtier(liebe)', description: 'Wildtiere rücksichtsvoll und systematisch beobachten.',
    intro: 'Aus einer einzelnen Begegnung wird Naturverständnis, wenn Ort, Jahreszeit, Verhalten und Veränderung zusammenkommen.',
    cards: [
      link('saisonkalender', 'Jahreszeiten', 'Was jetzt beginnt, ruht, brütet oder wandert.'),
      link('nachts-beobachten', 'Nachtleben', 'Ohne Ausleuchten sehen und hören.'),
      link('gartentagebuch', 'Gartentagebuch', 'Wiederkehrende Beobachtungen vergleichbar machen.'),
      link('arten', 'Arten nachschlagen', 'Steckbriefe zu Tieren der Region mit Merkmalen und Schutzstatus.'),
      link('regional-plau', 'Region Plau am See', 'Seen, Wälder, Felder und Siedlungen gemeinsam betrachten.'),
      link('vogel-erkennen', 'Vögel beobachten', 'Größe, Habitat, Saison und Stimme verbinden.'),
      link('tierfinder', 'Beobachtung eingrenzen', 'Mit den vorhandenen Merkmalen weiterkommen.', 'Werkzeug'),
    ],
    sections: [section('Die Grenze des guten Bildes', ['Kein Foto ist es wert, ein Nest freizulegen, ein Tier in die Enge zu treiben oder einen Nachtlebensraum auszuleuchten. Distanz, kurze Dauer und ein freier Rückweg gehören zur Beobachtung.'])],
  },
  {
    slug: 'nachts-beobachten', kind: 'observe', kicker: 'Nachtleben', heading: 'Nachts sehen die Ohren mehr als die Lampe',
    title: 'Wildtiere nachts beobachten – Wa(h)re Wildtier(liebe)', description: 'Nachtaktive Tiere ohne Störung beobachten.',
    intro: 'Dunkelheit schützt. Wer sie mit starkem Licht aufhebt, verändert genau das Verhalten, das er sehen wollte.',
    sections: [
      section('Augen gewöhnen lassen', ['Zehn bis zwanzig Minuten ohne Bildschirm und Taschenlampe verbessern die Wahrnehmung. Einen festen Platz wählen und Wege nicht blockieren.']),
      section('Rotlicht sparsam einsetzen', ['Wenn Licht aus Sicherheitsgründen nötig ist, schwaches, abgeschirmtes Licht kurz auf den Boden richten. Tiere und Quartieröffnungen nicht anstrahlen.']),
      section('Hören und notieren', ['Flugrichtung, Rascheln, Ruf, Uhrzeit und Wetter festhalten. Wiederkehrende Beobachtungen zeigen Wege und Aktivitätszeiten.']),
    ], next: [link('licht-in-der-nacht', 'Außenlicht reduzieren', 'Nachtwege dauerhaft dunkel halten.'), link('gartentagebuch', 'Beobachtung notieren', 'Muster über Wochen erkennen.')],
  },
  {
    slug: 'gartentagebuch', kind: 'observe', kicker: 'Beobachtungen', heading: 'Ein gutes Tagebuch sammelt nicht nur Arten',
    title: 'Natur- und Gartentagebuch – Wa(h)re Wildtier(liebe)', description: 'Naturbeobachtungen vergleichbar dokumentieren.',
    intro: 'Datum, Uhrzeit, Wetter, Ort und Verhalten machen aus einer Sichtung eine brauchbare Beobachtung.',
    sections: [
      section('Der kurze Eintrag', [], ['Datum und genaue Uhrzeit.', 'Ort und Lebensraum.', 'Art oder vorsichtiger Artverdacht.', 'Anzahl und Verhalten.', 'Foto, Ton oder Spur mit Maßstab.', 'Was sich am Ort verändert hat.']),
      section('Muster statt Trophäen', ['Wann blüht eine Pflanze? Wann erscheint die erste Fledermaus? Welche Hecke wird als Weg genutzt? Solche Reihen sind für den eigenen Garten oft wertvoller als eine lange Artenliste.']),
      section('Sensible Orte schützen', ['Genaue Standorte von Nestern, Quartieren und seltenen Arten nicht öffentlich verbreiten. Für fachliche Meldungen gezielt die zuständige Stelle nutzen.']),
    ], next: [link('saisonkalender', 'Saison vergleichen', 'Beobachtungen im Jahreslauf einordnen.'), link('regional-plau', 'Regionale Zusammenhänge', 'Lokale Lebensräume mitdenken.')],
  },
  {
    slug: 'regional-plau', kind: 'observe', kicker: 'Mecklenburg-Vorpommern', heading: 'Plau am See liegt zwischen Wasser, Wald, Feld und Siedlung',
    title: 'Wildtiere rund um Plau am See – Wa(h)re Wildtier(liebe)', description: 'Regionale Naturbeobachtung rund um Plau am See.',
    intro: 'Rund um Plau am See liegen Seen, Wälder, Felder, Dörfer und die Übergänge nach Brandenburg dicht beieinander. Wildtiere wechseln zwischen diesen Lebensräumen und kreuzen dabei Straßen, Gärten und Gebäude.',
    sections: [
      section('Wasser und Ufer', ['Seen, Gräben, Feuchtflächen und Röhrichte prägen Vogelzug, Amphibien, Libellen und Fledermausjagd. Ufer werden aus Abstand beobachtet; Schilf und Brutplätze bleiben unbetreten.']),
      section('Dorf, Garten und Feldrand', ['Alte Gebäude, Hecken, Obstbäume, Brachen und Wegränder verbinden Siedlung und offene Landschaft. Genau an diesen Übergängen werden Licht, Verkehr, Netze und Pflege besonders wirksam.']),
      section('Lokale Hilfe', ['Bei verletzten oder hilfsbedürftigen Wildtieren bietet der NABU Plau am See regionale Kontaktwege. Art und Fundort bestimmen, welche Stelle zuständig ist.']),
    ], next: [link('arten', 'Arten der Region', 'Steckbriefe zu Vögeln, Säugetieren, Fledermäusen, Libellen und Insekten.'), link('hilfestellen', 'Hilfestellen', 'Kontakte für akute Funde.'), link('vogel-erkennen', 'Vögel der Region', 'Lebensraum und Saison in die Bestimmung einbeziehen.')], sources: [sources.local, sources.mv],
  },
];

pages.push(
  {
    slug: 'fundtier', kind: 'redirect', kicker: 'Fundtier', heading: 'Verletzung, Jungtier oder ungewöhnlicher Fund?',
    title: 'Fundtier – Wa(h)re Wildtier(liebe)', description: 'Zum neuen Entscheidungsbereich für Wildtierfunde.',
    intro: 'Sichtbare Verletzung, unmittelbare Gefahr, fehlende Fluchtfähigkeit und ein für die Art ungewöhnlicher Ort bestimmen den nächsten Schritt.',
    next: [link('tier-gefunden', 'Tier gefunden', 'Den vollständigen Soforthilfe-Bereich öffnen.')],
  },
  {
    slug: 'balkon-und-wohnung', kind: 'redirect', kicker: 'Kleine Fläche', heading: 'Balkon, Fenster und Wohnung sicher gestalten',
    title: 'Balkon und Wohnung – Wa(h)re Wildtier(liebe)', description: 'Zum neuen Lebensraumweg für Balkon, Fenster und Wohnung.',
    intro: 'Ungespritzte Blüten, flaches Wasser, dunkle Nächte und von außen sichtbare Scheiben helfen auch auf wenigen Quadratmetern.',
    next: [link('balkon-und-fenster', 'Balkon und Fenster', 'Den vollständigen Lebensraumweg öffnen.')],
  },
  {
    slug: 'arten-beobachten', kind: 'redirect', kicker: 'Bestimmen und beobachten', heading: 'Was hast du gesehen – und was verändert sich am Ort?',
    title: 'Arten beobachten – Wa(h)re Wildtier(liebe)', description: 'Zu den neuen Bereichen für Tiererkennung und Naturbeobachtung.',
    intro: 'Für die Artbestimmung zählen Körperform, Bewegung, Stimme und Spur. Für wiederkehrende Beobachtungen kommen Datum, Jahreszeit, Wetter und Lebensraum hinzu.',
    next: [link('tier-erkennen', 'Tier erkennen', 'Merkmale, Spuren und Stimmen einordnen.'), link('natur-beobachten', 'Natur beobachten', 'Begegnungen im Jahreslauf verstehen.')],
  },
);

const toolPages = [
  {
    slug: 'braucht-das-tier-hilfe', kind: 'tool', toolKind: 'triage', kicker: 'Schnell einschätzen', heading: 'Braucht dieses Tier Hilfe?',
    title: 'Braucht dieses Wildtier Hilfe? – Wa(h)re Wildtier(liebe)', description: 'Ein kurzer Entscheidungsweg für Wildtierfunde.',
    intro: 'Beantworte die Fragen nach dem, was du wirklich siehst. Bei unmittelbarer Gefahr oder schwerer Verletzung nicht auf das Ergebnis warten, sondern Hilfe rufen.',
    questions: [
      { label: 'Siehst du Blut, Atemnot, Krämpfe, Lähmung oder eine deutliche Verletzung?', name: 'injury', options: [['Ja', 3], ['Nein', 0], ['Unklar', 2]] },
      { label: 'Ist das Tier gerade durch Verkehr, Wasser, Katze, Hund oder eine Falle gefährdet?', name: 'danger', options: [['Ja', 2], ['Nein', 0]] },
      { label: 'Kann das Tier fliehen oder sich artüblich bewegen?', name: 'movement', options: [['Ja', 0], ['Nein', 3], ['Unklar', 1]] },
      { label: 'Ist sein Verhalten für Ort und Tageszeit auffällig?', name: 'unusual', options: [['Ja', 2], ['Nein', 0], ['Kann ich nicht beurteilen', 1]] },
    ],
    results: [
      { max: 1, title: 'Aus Abstand beobachten', text: 'Im Moment ist kein klares Warnzeichen erkennbar. Halte Abstand, sichere Haustiere und beobachte. Verschlechtert sich der Zustand, beginne neu.' },
      { max: 4, title: 'Situation sichern und Rat holen', text: 'Es gibt ein Warnzeichen oder eine akute Gefahr. Sichere nur die unmittelbare Umgebung und rufe eine passende Wildtierhilfe an, bevor du fütterst oder das Tier weit bewegst.' },
      { max: 12, title: 'Jetzt fachkundige Hilfe', text: 'Mehrere deutliche Warnzeichen sprechen für eine Notlage. Tier ruhig und sicher halten, nichts einflößen und sofort Wildtierhilfe oder Tierarztpraxis kontaktieren.' },
    ], sources: [sources.local, sources.mv],
  },
  {
    slug: 'jungvogel-check', kind: 'tool', toolKind: 'triage', kicker: 'Vier Fragen', heading: 'Ästling, Nestling oder Notfall?',
    title: 'Jungvogel-Check – Wa(h)re Wildtier(liebe)', description: 'Jungvögel mit wenigen Fragen einschätzen.',
    intro: 'Mauersegler am Boden, verletzte Vögel und Katzenopfer brauchen unabhängig vom Punktestand fachkundige Hilfe.',
    questions: [
      { label: 'Ist der Vogel fast vollständig befiedert?', name: 'feathers', options: [['Ja', 0], ['Nein', 2]] },
      { label: 'Siehst du eine Verletzung oder starke Schwäche?', name: 'injury', options: [['Ja', 3], ['Nein', 0], ['Unklar', 1]] },
      { label: 'Sitzt er in unmittelbarer Gefahr?', name: 'danger', options: [['Ja', 1], ['Nein', 0]] },
      { label: 'Könnte es ein Mauersegler sein?', name: 'swift', options: [['Ja oder möglich', 3], ['Nein', 0]] },
    ],
    results: [
      { max: 0, title: 'Wahrscheinlich ein Ästling', text: 'Lass ihn am Fundort und beobachte mindestens eine Stunde aus größerer Entfernung. Nur bei unmittelbarer Gefahr wenige Meter in Deckung setzen.' },
      { max: 3, title: 'Nest oder fachkundigen Rat prüfen', text: 'Ein wenig befiederter Nestling gehört nur in das eindeutig zugehörige, sicher erreichbare Nest. Ist das nicht möglich oder bleibt die Lage unklar, Wildvogelhilfe anrufen.' },
      { max: 9, title: 'Wildvogelhilfe kontaktieren', text: 'Verletzung, starke Schwäche oder Mauersegler-Verdacht machen den Fund hilfsbedürftig. Ruhig im Karton sichern, nichts füttern und sofort Rat holen.' },
    ], sources: [sources.wildbird, sources.fledgling],
  },
  {
    slug: 'lebensraum-check', kind: 'tool', toolKind: 'checklist', kicker: 'Grundstück prüfen', heading: 'Garten- und Balkoncheck',
    title: 'Garten- und Balkoncheck – Wa(h)re Wildtier(liebe)', description: 'Prioritäten für einen wildtierfreundlicheren Ort finden.',
    intro: 'Markiere, was bereits stimmt. Das Ergebnis nennt nicht die schönste, sondern die wirksamste nächste Lücke.',
    questions: [
      { label: 'Wasser ist flach, sauber und mit Ausstieg erreichbar.', name: 'water' },
      { label: 'Es blühen ungespritzte, möglichst heimische Pflanzen über mehrere Jahreszeiten.', name: 'plants' },
      { label: 'Mindestens ein Bereich bleibt dunkel und ruhig.', name: 'dark' },
      { label: 'Glasflächen sind von außen sichtbar gemacht.', name: 'glass' },
      { label: 'Tiere finden Deckung, Laub, Stängel oder Totholz.', name: 'shelter' },
      { label: 'Zäune und Schächte blockieren oder fangen keine Tiere.', name: 'paths' },
    ],
    recommendations: {
      water: ['Wasser zuerst sichern', 'Eine flache Schale mit Steinen aufstellen, häufig reinigen und tiefe Behälter abdecken.'],
      dark: ['Dunkelheit zurückgeben', 'Unnötiges Licht abschalten und mindestens einen durchgehenden dunklen Bereich erhalten.'],
      glass: ['Glas sichtbar machen', 'Durchsicht und Spiegelung außen mit einem dichten Muster unterbrechen.'],
      paths: ['Wege und Fallen prüfen', 'Bodendurchgänge öffnen, Schächte abdecken und Wasserbecken mit Ausstieg versehen.'],
      plants: ['Nahrung über die Saison', 'Mit wenigen passenden Pflanzen Blühlücken schließen und Samenstände stehen lassen.'],
      shelter: ['Rückzug stehen lassen', 'Laub, Stängel, dichte Sträucher oder Totholz in einem ruhigen Bereich erhalten.'],
    },
  },
  {
    slug: 'licht-check', kind: 'tool', toolKind: 'checklist', kicker: 'Außenlicht prüfen', heading: 'Lichtfallen-Check',
    title: 'Lichtfallen-Check – Wa(h)re Wildtier(liebe)', description: 'Außenbeleuchtung auf Wildtierverträglichkeit prüfen.',
    intro: 'Markiere jede Aussage, die stimmt. Die erste offene Lücke ist dein nächster Schritt.',
    questions: [
      { label: 'Das Licht brennt nur, wenn ein Mensch es braucht.', name: 'need' },
      { label: 'Es leuchtet ausschließlich nach unten auf die benötigte Fläche.', name: 'direction' },
      { label: 'Bewegungsmelder schalten kurz und nicht bei jedem Tier.', name: 'sensor' },
      { label: 'Hecken, Wasser, Bäume und Quartieröffnungen bleiben dunkel.', name: 'corridor' },
      { label: 'Die Helligkeit ist so gering wie möglich.', name: 'brightness' },
    ],
    recommendations: {
      need: ['Erst ausschalten', 'Dauerlicht durch Schalter, Zeitschaltung oder einen gut eingestellten Sensor ersetzen.'],
      direction: ['Licht begrenzen', 'Leuchte abschirmen und nur die tatsächlich benötigte Fläche von oben beleuchten.'],
      corridor: ['Dunklen Weg erhalten', 'Hecke, Wasser und mögliche Quartieröffnungen vollständig aus dem Lichtkegel nehmen.'],
      sensor: ['Laufzeit verkürzen', 'Erfassungsbereich und Leuchtdauer so einstellen, dass Tiere nicht ständig schalten.'],
      brightness: ['Helligkeit senken', 'Mit weniger Licht beginnen und nur erhöhen, wenn die sichere Nutzung es wirklich verlangt.'],
    },
  },
  {
    slug: 'zaun-check', kind: 'tool', toolKind: 'checklist', kicker: 'Grundstück verbinden', heading: 'Zaun- und Durchlässigkeitscheck',
    title: 'Zaun-Check – Wa(h)re Wildtier(liebe)', description: 'Zäune und Netze auf Durchgänge und Fallen prüfen.',
    intro: 'Ein guter Zaun hält, was er halten soll, ohne kleine Wildtiere unnötig einzusperren oder zu verletzen.',
    questions: [
      { label: 'Es gibt mehrere bodennahe Durchgänge von etwa 13 mal 13 Zentimetern.', name: 'holes' },
      { label: 'Durchgänge enden nicht an Straße, Schacht oder Wasserfalle.', name: 'safe' },
      { label: 'Es gibt keine losen, schlingenartigen Netze oder Drahtenden.', name: 'loose' },
      { label: 'Eingesetzte Netze werden täglich kontrolliert.', name: 'check' },
    ],
    recommendations: {
      holes: ['Bodenwege öffnen', 'Mehrere passende Durchgänge an geschützten Stellen schaffen und dauerhaft freihalten.'],
      safe: ['Ausgänge sicher führen', 'Durchgänge so verlegen, dass Tiere in Deckung und nicht direkt in eine Gefahr gelangen.'],
      loose: ['Schlingen entfernen', 'Lose Enden, schlaffe Netze und scharfe Kanten vollständig beseitigen.'],
      check: ['Kontrolle einplanen', 'Netze nur nutzen, wenn morgens und abends eine Sichtkontrolle möglich ist.'],
    },
  },
  {
    slug: 'flaechenplan', kind: 'tool', toolKind: 'planner', kicker: 'Passend zum Ort', heading: 'Was passt auf meine Fläche?',
    title: 'Maßnahmenplan nach Fläche – Wa(h)re Wildtier(liebe)', description: 'Wildtierhilfen für Fenster, Balkon, Hof und Garten auswählen.',
    intro: 'Wähle den Ort, den du wirklich pflegen kannst. Wasser, Pflanzen, Dunkelheit, Glas und sichere Wege werden an die vorhandene Fläche angepasst.',
    plans: [
      ['fenster', 'Fensterbank', 'Eine geeignete Topfpflanze, Scheibenmarkierung von außen und nachts kein unnötiges Licht.'],
      ['balkon', 'Balkon', 'Gestaffelte Blüten, flache Wasserstelle mit Ausstieg und sichere, verschlossene Gefäße.'],
      ['hof', 'Hof oder Terrasse', 'Randbepflanzung, entsiegelte Fuge, dunkler Bereich und gesicherte Schächte.'],
      ['klein', 'Kleiner Garten', 'Zaunwege, Strauchschicht, Wasser ohne Falle und abschnittsweise Pflege.'],
      ['gross', 'Großer Garten oder Grundstück', 'Lebensraumzonen verbinden, Totholz und Altgras erhalten, Mahd staffeln und Beobachtungen dokumentieren.'],
    ],
  },
  {
    slug: 'saisonkalender', kind: 'tool', toolKind: 'calendar', kicker: 'Jahreslauf', heading: 'Was ist wann wichtig?',
    title: 'Saisonkalender für Wildtiere – Wa(h)re Wildtier(liebe)', description: 'Beobachtung und Gartenarbeit im Jahreslauf planen.',
    intro: 'Wetter und Region verschieben Termine. Vor jeder Arbeit zählt deshalb die wirkliche Nutzung vor Ort.',
    months: [
      ['Januar', 'Ruheplätze erhalten', 'Laub, Totholz und Winterquartiere nicht öffnen. Wasser bei Frost kontrollieren.'],
      ['Februar', 'Frühe Aktivität sehen', 'Erste Balz und warme Insektentage beobachten. Nistkästen nur unbewohnt pflegen.'],
      ['März', 'Brut beginnt', 'Schnittarbeiten zurückstellen, Zugvögel und Amphibienwege beachten.'],
      ['April', 'Nester und Jungtiere', 'Hecken, Dächer und Bodenbereiche vor jeder Arbeit kontrollieren.'],
      ['Mai', 'Hochbetrieb', 'Ästlinge am Boden nicht vorschnell mitnehmen. Wasserstellen sauber halten.'],
      ['Juni', 'Hitze und Nachwuchs', 'Flache Tränken anbieten, Schatten erhalten, Mäher nur nach Kontrolle nutzen.'],
      ['Juli', 'Dunkle Nächte sind kurz', 'Außenlicht reduzieren, Jungtiere aus Abstand beobachten, Wasser täglich wechseln.'],
      ['August', 'Spätsommer und Fledermäuse', 'Verflogene Fledermäuse ruhig ausfliegen lassen, Samenstände stehen lassen.'],
      ['September', 'Zug und Vorräte', 'Fruchttragende Sträucher erhalten, Netze kontrollieren, keine radikale Gartenräumung.'],
      ['Oktober', 'Winterplätze entstehen', 'Laub und Reisig in ruhigen Bereichen belassen, Schächte und Keller prüfen.'],
      ['November', 'Nicht aufräumen', 'Stängel, Laub und Totholz schützen Überwinterer. Licht in langen Nächten begrenzen.'],
      ['Dezember', 'Ruhe sichern', 'Quartiere nicht öffnen, Futterstellen nur sauber und verantwortbar betreiben.'],
    ],
  },
  {
    slug: 'tierfinder', kind: 'tool', toolKind: 'finder', kicker: 'Beobachtung eingrenzen', heading: 'Tier-, Spur- und Stimmenfinder',
    title: 'Tierfinder – Wa(h)re Wildtier(liebe)', description: 'Häufige Wildtierbeobachtungen über Merkmale eingrenzen.',
    intro: 'Der Finder ersetzt keine sichere Artbestimmung. Er zeigt, welche Beobachtung als Nächstes trennt.',
    finderItems: [
      ['Amsel', 'vogel', 'tag', 'garten', 'stimme', 'Achte auf hüpfende Nahrungssuche, langen Schwanz und melodischen Gesang.'],
      ['Mauersegler', 'vogel', 'tag', 'stadt', 'flug', 'Lange sichelförmige Flügel, fast immer in der Luft. Am Boden hilfsbedürftig.'],
      ['Igel', 'saeuger', 'nacht', 'garten', 'boden', 'Dämmerungs- und nachtaktiv; Durchgänge und Deckung im Bodenbereich prüfen.'],
      ['Zwergfledermaus', 'saeuger', 'nacht', 'haus', 'flug', 'Rasanter Flug in der Dämmerung, häufig an Gebäuden; nicht mit bloßen Händen anfassen.'],
      ['Eichhörnchen', 'saeuger', 'tag', 'baum', 'bewegung', 'Klettert kopfüber und baut kugelige Kobel hoch im Baum.'],
      ['Erdkröte', 'amphibie', 'nacht', 'garten', 'boden', 'Oft nachts am Boden; Schächte und steile Becken sind gefährlich.'],
      ['Hummel', 'insekt', 'tag', 'bluete', 'bewegung', 'Kräftig behaart; Blütenpflanze und mögliche Niststelle mitbeobachten.'],
      ['Specht', 'vogel', 'tag', 'baum', 'stimme', 'Klettert am Stamm; Trommeln, Ruf und Kopfzeichnung helfen weiter.'],
    ],
  },
  {
    slug: 'hilfestellen', kind: 'tool', toolKind: 'contacts', kicker: 'Regionale Hilfe', heading: 'Wer hilft bei einem Wildtierfund?',
    title: 'Wildtier-Hilfestellen rund um Plau am See – Wa(h)re Wildtier(liebe)', description: 'Regionale Kontaktwege für verletzte und hilfsbedürftige Wildtiere.',
    intro: 'Rufe möglichst vor der Fahrt an. Nenne Tierart oder Verdacht, Fundort, Uhrzeit, Zustand und ob du das Tier bereits gesichert hast.',
    contacts: [
      ['NABU Plau am See', 'Greifvögel, Eulen, Igel und regionale Weitervermittlung', 'https://www.nabu-plau.de/wildtiere-in-not/'],
      ['Fledermaushilfe', 'Beratung für Fledermausfunde und Quartiere', 'https://www.fledermausschutz.de/ansprechpartner/'],
      ['Igelhilfe Mecklenburg-Vorpommern', 'Ersteinschätzung und Igelstationen', 'https://igelhilfe-mv.de/?page=erstehilfe'],
      ['Wildtierschutz Deutschland', 'Auffangstationen nach Region und Tiergruppe', 'https://www.wildtierschutz-deutschland.de/wildtier-notfall/wildtierauffangstationen-berlin-brandenburg-mecklenburg-vorpommern'],
    ],
    sections: [section('Bei Gefahr für Menschen oder Verkehr', ['Bei einem Wildunfall Polizei verständigen. Große, wehrhafte oder jagdbare Tiere nicht selbst sichern. Abstand halten und den Ort so genau wie möglich angeben.'])],
    sources: [sources.local, sources.mv],
  },
];

export const allPages = [...pages, ...toolPages, ...buildSpeciesPages()];

const genericTitle = (page) => page.title || `${page.heading} – ${site.name}`;
export const publicPages = allPages.map((page) => ({ ...page, title: genericTitle(page) }));

export const searchIndex = publicPages.map((page) => ({
  slug: page.slug,
  label: page.heading,
  text: [page.kicker, page.heading, page.intro, page.description, ...(page.cards || []).flatMap((item) => [item.label, item.text])].filter(Boolean).join(' '),
}));

export function collectPublicCopy(page) {
  const output = [site.name, page.kicker, page.heading, page.intro];
  for (const item of page.cards || []) output.push(item.meta, item.label, item.text);
  for (const item of page.situations || []) output.push(item.label, item.text);
  for (const item of page.status || []) output.push(item);
  for (const item of page.sections || []) output.push(item.title, ...(item.paragraphs || []), ...(item.bullets || []));
  for (const item of page.next || []) output.push(item.label, item.text);
  for (const item of page.questions || []) {
    output.push(item.label);
    for (const option of item.options || []) output.push(option[0]);
  }
  for (const item of page.results || []) output.push(item.title, item.text);
  for (const item of Object.values(page.recommendations || {})) output.push(...item);
  for (const item of page.plans || []) output.push(item[1], item[2]);
  for (const item of page.months || []) output.push(...item);
  for (const item of page.finderItems || []) output.push(item[0], item[5]);
  for (const item of page.contacts || []) output.push(item[0], item[1]);
  for (const item of page.sources || []) output.push(item[0]);
  return output.filter(Boolean);
}
