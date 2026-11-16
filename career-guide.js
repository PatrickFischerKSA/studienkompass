const careerQuestions = [
  ['Was würdest du gern öfter tun?', {
    teach: 'Unterrichten und erklären', support: 'Individuell fördern',
    language: 'Mit Sprache arbeiten', movement: 'Mit Bewegung und Spiel arbeiten',
    daily: 'Selbstständigkeit im Alltag fördern', counsel: 'Beraten und Konflikte klären',
    care: 'Kinder betreuen und begleiten', youth: 'Mit Jugendlichen arbeiten',
    mind: 'Erleben und Verhalten verstehen', research: 'Forschen und Daten auswerten',
    lab: 'Im Labor untersuchen', hospitality: 'Gäste betreuen und Reisen organisieren',
    business: 'Mit Kundschaft und Finanzfragen arbeiten', hands: 'Praktisch im Betrieb lernen',
    safety: 'Für Sicherheit sorgen', arts: 'Mit Theater und Gestaltung arbeiten'
  }],
  ['Wie gehst du an Aufgaben heran?', {
    patient: 'Geduldig', creative: 'Kreativ', structured: 'Strukturiert',
    empathic: 'Einfühlsam', calm: 'Ruhig in anspruchsvollen Situationen'
  }],
  ['Was kannst du schon gut oder möchtest du lernen?', {
    explain: 'Verständlich erklären', observe: 'Genau beobachten',
    listen: 'Aktiv zuhören', groups: 'Gruppen anleiten',
    plan: 'Aktivitäten planen', collaborate: 'Im Team zusammenarbeiten',
    analyse: 'Informationen systematisch auswerten',
    precise: 'Sorgfältig nach Vorgaben arbeiten', customer: 'Auf Kundschaft eingehen',
    craft: 'Mit Werkzeug oder Geräten arbeiten', decide: 'Unter Zeitdruck entscheiden'
  }]
];

const hfh = 'https://www.hfh.ch/ausbildung/';
const zhawSocial = 'https://www.zhaw.ch/de/sozialearbeit/';
const phzh = 'https://phzh.ch/de/studium/';
const hfhBachelor = {
  fms: 'Kläre zuerst den Erwerb der Fachmaturität Pädagogik oder einen anerkannten alternativen Zugang.',
  education: 'Die Fachmaturität Pädagogik ist ein anerkannter Vorbildungsausweis. Die HfH verlangt zudem ein Assessment.',
  health: 'Die Fachmaturität Gesundheit ist ein anerkannter Vorbildungsausweis. Die HfH verlangt zudem ein Assessment.',
  social: 'Die Fachmaturität Soziale Arbeit ist ein anerkannter Vorbildungsausweis. Die HfH verlangt zudem ein Assessment.',
  gym: 'Die gymnasiale Matura ist ein anerkannter Vorbildungsausweis. Die HfH verlangt zudem ein Assessment.'
};

const careers = [
  {
    title: 'Lehrperson Kindergarten, Unterstufe oder Primarstufe',
    admission: {fms: ['exam', 'degree'], education: ['direct'], gym: ['direct'], other: ['exam']},
    tags: ['teach', 'care', 'structured', 'creative', 'explain', 'groups', 'plan'],
    work: 'Unterricht vorbereiten, eine Klasse führen und Kinder beim Lernen begleiten.',
    route: {
      fms: 'An der KSA kannst du die Fachmaturität Pädagogik anschliessen. Alternativ kannst du ein PH-Aufnahmeverfahren prüfen.',
      education: 'Direkter Zugang zu den entsprechenden Bachelorstudiengängen an der PH Schwyz, PH Zürich und PH Zug.',
      gym: 'Direkter Zugang zu den entsprechenden Bachelorstudiengängen an der PH Schwyz, PH Zürich und PH Zug.',
      other: 'Kläre das Aufnahmeverfahren für deine Fachmaturität bei der gewünschten PH.'
    },
    next: 'Vergleiche die Zielstufen und Studienformen und besuche einen Infoanlass.',
    links: [['Drei PHs vergleichen', '#ph-vergleich'], ['Berufsfilm · Primarlehrerin', 'https://www.berufsberatung.ch/de/video/berufsbild-lehrer-in-auf-der-primarstufe']]
  },
  {
    title: 'Lehrperson Sekundarstufe I',
    admission: {fms: ['exam'], gym: ['direct'], other: ['exam']},
    tags: ['teach', 'youth', 'structured', 'calm', 'explain', 'groups', 'plan'],
    work: 'Jugendliche in mehreren Unterrichtsfächern durch die Schuljahre 9–11 begleiten.',
    route: {
      fms: 'Mit dem FMS-Ausweis kannst du an der PH Zürich eine Aufnahmeprüfung auf Niveau gymnasiale Maturität prüfen.',
      gym: 'Mit gymnasialer Matura ist an der PH Zürich ein direkter Zugang möglich.',
      other: 'Mit Fachmaturität kannst du die Passerelle oder an der PH Zürich die Aufnahmeprüfung auf Niveau gymnasiale Maturität prüfen.'
    },
    next: 'Kläre die Prüfungsfächer und hospitiere in einer Sekundarklasse.',
    links: [['PH Zürich · Studiengang', phzh + 'studiengaenge/sekundarstufe-1/sekundarstufe-1-voll-und-teilzeit/'], ['PH Zürich · Zulassung', phzh + 'studieren-an-der-phzh/zulassung/'], ['PH Luzern · Zulassung', 'https://www.phlu.ch/studium/zulassung-und-anmeldung.html']]
  },
  {
    title: 'Schulische Heilpädagogik',
    admission: {other: ['degree']},
    tags: ['support', 'teach', 'patient', 'empathic', 'observe', 'explain', 'collaborate'],
    work: 'Lernbarrieren erkennen, individuelle Förderung planen und mit Lehrpersonen zusammenarbeiten.',
    route: 'Ein Weg führt über ein PH-Studium mit Lehrdiplom zum Master. Bei bestimmten verwandten Abschlüssen prüft die HfH eine Zulassung mit Zusatzleistungen.',
    next: 'Frage eine schulische Heilpädagogin oder einen schulischen Heilpädagogen nach einer Hospitation.',
    links: [['HfH · Master', hfh + 'ma-schulische-heilpaedagogik/auf-einen-blick'], ['HfH · Zulassung', hfh + 'ma-schulische-heilpaedagogik/zulassung']]
  },
  {
    title: 'Logopädie',
    admission: {fms: ['degree', 'exam'], other: ['exam']},
    tags: ['language', 'support', 'patient', 'creative', 'observe', 'listen', 'plan'],
    work: 'Menschen mit Schwierigkeiten beim Sprechen, in der Sprache oder in der Kommunikation begleiten.',
    route: hfhBachelor,
    next: 'Schau dir an, wie eine logopädische Abklärung und eine Therapiestunde aufgebaut sind.',
    links: [['HfH · Bachelor', hfh + 'ba-logopaedie'], ['HfH · Zulassung', hfh + 'ba-logopaedie/zulassung']]
  },
  {
    title: 'Ergotherapie',
    admission: {fms: ['degree', 'practice', 'exam'], health: ['exam'], other: ['practice', 'exam']},
    tags: ['daily', 'movement', 'support', 'creative', 'patient', 'observe', 'plan'],
    work: 'Alltagshandlungen üben oder anpassen, etwa Schreiben und den Umgang mit Schulmaterial.',
    route: {
      fms: 'Kläre zuerst eine anerkannte Maturität. Die ZHAW verlangt je nach Vorbildung Arbeitswelterfahrung und eine Eignungsabklärung.',
      education: 'Die ZHAW verlangt mit Fachmaturität Pädagogik das zwölfmonatige Zusatzmodul A vor Studienbeginn sowie eine Eignungsabklärung.',
      other: 'Die ZHAW ordnet die erforderliche Arbeitswelterfahrung nach Vorbildung zu. Prüfe die Tabelle und die Eignungsabklärung.'
    },
    next: 'Kläre vor der Praktikumssuche mit der ZHAW, welche Einsätze an das Zusatzmodul angerechnet werden.',
    links: [['ZHAW · Bachelor und Beruf', 'https://www.zhaw.ch/kampagne/studiere-ergotherapie'], ['ZHAW · Zulassung und Termine', 'https://www.zhaw.ch/de/gesundheit/studium/bachelorstudium/bachelor-ergotherapie/zulassung-und-termine']]
  },
  {
    title: 'Psychomotoriktherapie',
    admission: {fms: ['degree', 'exam'], other: ['exam']},
    tags: ['movement', 'support', 'care', 'creative', 'patient', 'observe', 'plan'],
    work: 'Kinder mit Bewegung und Spiel in ihrer motorischen, emotionalen und sozialen Entwicklung unterstützen.',
    route: hfhBachelor,
    next: 'Achte bei einer Hospitation darauf, wie Spiel und Bewegung für individuelle Förderziele eingesetzt werden.',
    links: [['HfH · Zulassung zum Bachelor', hfh + 'ba-psychomotoriktherapie/zulassung'], ['HfH · Berufsfeldfilm Psychomotoriktherapie', 'https://www.hfh.ch/news/neuer-berufsfeldfilm-psychomotoriktherapie']]
  },
  {
    title: 'Schulsozialarbeit',
    admission: {fms: ['degree', 'practice'], social: [], other: ['practice']},
    tags: ['counsel', 'youth', 'support', 'empathic', 'calm', 'listen', 'collaborate'],
    work: 'Kinder und Jugendliche in schwierigen Situationen beraten und mit Eltern sowie der Schule zusammenarbeiten.',
    route: 'Ein Weg führt über den Bachelor Soziale Arbeit. Kläre bei der ZHAW, welche Praxiserfahrung für deinen Abschluss verlangt wird.',
    next: 'Triff eine Fachperson der Schulsozialarbeit und frage nach typischen Aufgaben und Praktikumsmöglichkeiten.',
    links: [['ZHAW · Bachelorzulassung', zhawSocial + 'studium/bachelor-in-sozialer-arbeit/zulassung/voraussetzungen-fuers-studium'], ['ZHAW · spätere Spezialisierung', zhawSocial + 'weiterbildung/detail/kurs/cas-schulsozialarbeit-cas-schulsozialpaedagogik']]
  },
  {
    title: 'Kindheitspädagogik HF',
    admission: {other: ['practice']},
    tags: ['care', 'daily', 'movement', 'empathic', 'creative', 'groups', 'plan', 'collaborate'],
    work: 'Kinder in Bildungs- und Betreuungseinrichtungen begleiten, etwa in schulergänzenden Tagesstrukturen.',
    route: 'Der anerkannte Fachmittelschulausweis kommt bei ARTISET als Vorbildung infrage. Prüfe auch Praxisausbildungsplatz und Aufnahmebedingungen.',
    next: 'Vereinbare einen Schnuppertag in einer schulergänzenden Betreuung.',
    links: [['ARTISET · Ausbildung und Zulassung', 'https://artiset.ch/de/bildung/ausbildung/hoehere-fachschule-kindheitspaedagogik']]
  },
  {
    title: 'Heilpädagogische Früherziehung',
    admission: {other: ['degree', 'practice']},
    tags: ['care', 'support', 'counsel', 'empathic', 'patient', 'observe', 'listen', 'collaborate'],
    work: 'Kinder mit Entwicklungsauffälligkeiten oder Behinderungen und ihre Familien vor und rund um den Schuleintritt begleiten.',
    route: 'Der HfH-Master setzt eine anerkannte tertiäre Vorbildung und einschlägige Berufserfahrung voraus. Je nach Abschluss kommen Zusatzleistungen hinzu.',
    next: 'Vergleiche vor der Wahl einer Erstausbildung die von der HfH anerkannten Vorbildungen.',
    links: [['HfH · Master', hfh + 'ma-heilpaedagogische-frueherziehung/auf-einen-blick'], ['HfH · Zulassung', hfh + 'ma-heilpaedagogische-frueherziehung/zulassung']]
  },
  {
    title: 'Angewandte Psychologie · ZHAW',
    admission: {fms: ['degree', 'practice', 'exam'], other: ['practice', 'exam']},
    tags: ['mind', 'research', 'counsel', 'empathic', 'structured', 'listen', 'analyse'],
    work: 'Psychologische Erkenntnisse auf Fragen aus Beruf, Gesundheit und Gesellschaft anwenden.',
    route: {
      fms: 'Erwirb zuerst eine anerkannte Fachmaturität. Plane auch Arbeitswelterfahrung und Eignungsprüfung ein.',
      other: 'Die ZHAW akzeptiert Fachmaturitäten aller Richtungen. Bei der Anmeldung brauchst du zwölf Monate Arbeitswelterfahrung zu 100 Prozent ausserhalb einer Ausbildung oder entsprechend länger in Teilzeit. Dazu kommt die Eignungsprüfung.'
    },
    next: 'Kläre bei der ZHAW, welche Tätigkeiten für deine Arbeitswelterfahrung zählen.',
    links: [['ZHAW · Bachelor in Zürich', 'https://www.zhaw.ch/de/psychologie/studium/bachelor'], ['ZHAW · Zulassung und Eignungsprüfung', 'https://www.zhaw.ch/de/psychologie/studium/bachelor/zulassung']]
  },
  {
    title: 'Angewandte Psychologie · FHNW Olten',
    admission: {fms: ['degree', 'practice', 'exam'], other: ['practice', 'exam']},
    tags: ['mind', 'research', 'structured', 'analyse', 'collaborate'],
    work: 'Untersuchen, wie Menschen bei der Arbeit, in Organisationen und in wirtschaftlichen Situationen handeln und entscheiden.',
    route: {
      fms: 'Erwirb zuerst eine anerkannte Fachmaturität. Kläre früh, welche Praxiserfahrung die FHNW anrechnet.',
      other: 'Für die verlinkten Bachelorangebote akzeptiert die FHNW anerkannte Fachmaturitäten aller Berufsfelder. Sie verlangt mindestens ein Jahr Arbeitswelterfahrung bei mindestens 80 Prozent sowie ein Eignungsverfahren.'
    },
    next: 'Vergleiche Arbeits-, Organisations- und Personalpsychologie mit Wirtschaftspsychologie. Die Studiengangsseiten nennen die jeweiligen Termine und Zulassungsbedingungen.',
    links: [['FHNW · Arbeits-, Organisations- und Personalpsychologie', 'https://www.fhnw.ch/de/psychologie/studium/angebot/studiengaenge/bachelor-arbeits-organisations-personalpsychologie'], ['FHNW · Wirtschaftspsychologie', 'https://www.fhnw.ch/de/psychologie/studium/angebot/studiengaenge/bachelor-wirtschaftspsychologie'], ['FHNW · Zulassungsbüro', 'https://www.fhnw.ch/de/psychologie/ueber-uns/personen/zulassung-bachelor-master']]
  },
  {
    title: 'Psychologie an der Universität',
    admission: {fms: ['degree', 'exam'], gym: ['direct'], other: ['exam']},
    tags: ['mind', 'research', 'structured', 'observe', 'analyse'],
    work: 'Erleben und Verhalten erforschen und dabei auch Statistik, Forschungsmethoden und psychologische Diagnostik kennenlernen.',
    route: {
      fms: 'Ein möglicher Weg führt über die Fachmaturität und die bestandene Passerelle zum universitären Bachelor.',
      gym: 'Die gymnasiale Matura ist ein regulärer Zugang zum Bachelor. Prüfe die Vorgaben der Universität.',
      other: 'Die bestandene Passerelle eröffnet dir mit der Fachmaturität den Weg zum universitären Bachelor.'
    },
    next: 'Vergleiche Studienpläne und Masterangebote, etwa an der Universität Zürich und der Universität Freiburg.',
    links: [['UZH · Psychologie und Zugang', 'https://www.psychologie.uzh.ch/de/studium/interesse/voraussetzungen.html'], ['Universität Freiburg · Bachelor und Zulassung', 'https://studies.unifr.ch/de/bachelor/pedpsy/psychology']]
  },
  {
    title: 'Schulpsychologie',
    admission: {other: ['degree']},
    tags: ['mind', 'support', 'counsel', 'youth', 'empathic', 'observe', 'listen', 'analyse', 'collaborate'],
    work: 'Lern-, Entwicklungs- und Verhaltensfragen abklären und Kinder, Eltern sowie Schulen beraten.',
    route: 'Plane einen Bachelor und danach einen Master in Psychologie. Der Kanton Schwyz verlangt für schulpsychologische Stellen einen Master oder ein Lizentiat in Psychologie.',
    next: 'Lies das Aufgabenprofil des Schulpsychologischen Dienstes und vergleiche Psychologiestudiengänge mit Blick auf Diagnostik, Entwicklungspsychologie und Praktika.',
    links: [['Kanton Schwyz · Schulpsychologischer Dienst', 'https://www.sz.ch/verwaltung/bildungsdepartement/amt-fuer-volksschulen-und-sport/besonderer-bildungsbedarf/schulpsychologie.html/8756-8758-8802-9466-9467-12713-12723'], ['Kanton Schwyz · Anforderungsprofil einer schulpsychologischen Stelle', 'https://jobs.sz.ch/offene-stellen/schulpsychologin-schulpsychologe/2077e80b-f676-42ea-a091-d19608261e62']]
  },
  {
    "title": "Sozialpädagogik HF",
    "admission": {
      "other": [
        "practice"
      ]
    },
    "tags": [
      "support",
      "youth",
      "care",
      "empathic",
      "calm",
      "listen",
      "collaborate"
    ],
    "work": "Menschen im Alltag begleiten und gemeinsam mit ihnen Ziele für mehr Selbstständigkeit entwickeln.",
    "route": {
      "fms": "Ja als schulische Vorbildung bei Agogis Zürich. Dazu kommen die geforderte Praxiserfahrung und das Aufnahmeverfahren.",
      "other": "Frage die HF, ob dein Fachmittelschulausweis oder dein anderer Abschluss anerkannt wird. Kläre Vorpraktikum, Praxisausbildungsplatz und Aufnahmeverfahren. Mit FMS-Ausweis: Ja als schulische Vorbildung bei Agogis Zürich. Dazu kommen die geforderte Praxiserfahrung und das Aufnahmeverfahren."
    },
    "next": "Besuche einen Infoanlass einer HF und frage nach Schnuppermöglichkeiten in einem Wohnheim oder Jugendangebot.",
    "links": [
      [
        "Agogis Zürich · Ausbildung und Zulassung",
        "https://www.agogis.ch/hohere-berufsbildung/sozialpadagogik-hf"
      ],
      [
        "Agogis · Zulassungsgrundlagen im Rahmenlehrplan",
        "https://www.agogis.ch/portals/0/inhalte/downloads/sozialpaedagogik_rahmenlehrplan_sbfi%20ab%20august%202023.pdf"
      ]
    ]
  },
  {
    "title": "Biomedizinische Analytik HF",
    "admission": {
      "other": [
        "exam"
      ]
    },
    "tags": [
      "lab",
      "research",
      "structured",
      "observe",
      "analyse",
      "precise",
      "craft"
    ],
    "work": "Proben im medizinischen Labor untersuchen und Ergebnisse sorgfältig dokumentieren.",
    "route": {
      "fms": "Ja als schulische Vorbildung beim Bildungsgang von Careum und Stadtspital Zürich. Das Aufnahmeverfahren musst du zusätzlich absolvieren.",
      "other": "Lass deinen Abschluss von der HF prüfen und frage nach Eignungsabklärung und Praktikumsorganisation. Mit FMS-Ausweis: Ja als schulische Vorbildung beim Bildungsgang von Careum und Stadtspital Zürich. Das Aufnahmeverfahren musst du zusätzlich absolvieren."
    },
    "next": "Frage nach einem Einblick in ein Spitallabor und vergleiche die Aufnahmebedingungen der Schulen.",
    "links": [
      [
        "Careum Zürich · Ausbildung und Aufnahme",
        "https://careum.ch/bildungsangebot/hoehere-fachschule/biomedizinische-analytik"
      ],
      [
        "Stadtspital Zürich · Praxis und Voraussetzungen",
        "https://www.stadt-zuerich.ch/stadtspital/de/ueber-uns/fachbereiche/labormedizin/bildungsgang-biomedizinische-analytik.html"
      ]
    ]
  },
  {
    "title": "Hotellerie und Tourismus HF",
    "admission": {
      "other": [
        "practice"
      ]
    },
    "tags": [
      "hospitality",
      "business",
      "structured",
      "calm",
      "customer",
      "plan",
      "collaborate"
    ],
    "work": "Gäste beraten, Angebote organisieren und Abläufe im Betrieb koordinieren.",
    "route": {
      "fms": "Die Hotelfachschule Zürich nennt die Bedingungen für die Berufsaufnahme auf ihrer Anmeldeseite. Lass vor der Anmeldung abklären, ob dein FMS-Ausweis für das gewünschte Modell anerkannt wird und welche Praxis du mitbringen musst.",
      "other": "Kläre bei der gewählten HF die Anerkennung deines Abschlusses und ob ein Vorpraktikum oder ein Praxisplatz nötig ist. Mit FMS-Ausweis: Die Hotelfachschule Zürich nennt die Bedingungen für die Berufsaufnahme auf ihrer Anmeldeseite. Lass vor der Anmeldung abklären, ob dein FMS-Ausweis für das gewünschte Modell anerkannt wird und welche Praxis du mitbringen musst."
    },
    "next": "Vergleiche eine Hotelfachschule mit einem Tourismus-Bildungsgang und frage nach den Praxisphasen.",
    "links": [
      [
        "Hotelfachschule Zürich · Ausbildung",
        "https://www.hfz.swiss/"
      ],
      [
        "Hotelfachschule Zürich · Anmeldung und Aufnahme",
        "https://www.hfz.swiss/studium/anmeldung/"
      ]
    ]
  },
  {
    "title": "Betriebsinterne Ausbildung und PWA",
    "admission": {
      "other": [
        "exam"
      ]
    },
    "tags": [
      "business",
      "hospitality",
      "structured",
      "customer",
      "plan",
      "analyse"
    ],
    "work": "Bei einer Bank, Versicherung oder der Post in die Arbeitswelt einsteigen oder eine praxisorientierte Wirtschaftsausbildung prüfen.",
    "route": {
      "fms": "Nein für den Bankeinstieg bei der Zuger Kantonalbank. Sie akzeptiert unter anderem die Fachmaturität. Für das PWA-Wirtschaftsprogramm der Kaderschule Zürich genügt der FMS-Ausweis allein ebenfalls nicht. Bei der Schwyzer Kantonalbank prüfst du die Anforderungen des Berufspraktikums.",
      "other": "Die Zulassung hängt vom Programm ab. Frage ausdrücklich, ob dein Fachmittelschulausweis oder deine Fachmaturität akzeptiert wird und ob der Betrieb ein Auswahlverfahren durchführt. Mit FMS-Ausweis: Nein für den Bankeinstieg bei der Zuger Kantonalbank. Sie akzeptiert unter anderem die Fachmaturität. Für das PWA-Wirtschaftsprogramm der Kaderschule Zürich genügt der FMS-Ausweis allein ebenfalls nicht. Bei der Schwyzer Kantonalbank prüfst du die Anforderungen des Berufspraktikums."
    },
    "next": "Suche ein konkretes Programm und prüfe Abschluss, Bewerbungsfrist und vergütete Praxisphasen.",
    "links": [
      [
        "Zuger Kantonalbank · BEM und Voraussetzungen",
        "https://www.zugerkb.ch/die-zugerkb/jobs-und-karriere/praktika/bankeinstieg"
      ],
      [
        "Kaderschule Zürich · PWA-Ausbildung",
        "https://www.pwa.ch/was-ist-die-pwa/ablauf"
      ],
      [
        "Kaderschule Zürich · PWA-Zulassung",
        "https://www.pwa.ch/was-ist-die-pwa/zulassung"
      ],
      [
        "Schwyzer Kantonalbank · Berufspraktikum und Bewerbung",
        "https://www.szkb.ch/die-szkb/jobs-karriere/dein-beruflicher-start/berufspraktikum"
      ]
    ]
  },
  {
    "title": "Berufslehre und mögliche Verkürzung",
    "admission": {
      "other": [],
      "gym": [
        "direct"
      ]
    },
    "tags": [
      "hands",
      "lab",
      "hospitality",
      "business",
      "structured",
      "craft",
      "precise",
      "collaborate"
    ],
    "work": "Einen Beruf im Lehrbetrieb erlernen und einen eidgenössischen Berufsabschluss erwerben.",
    "route": {
      "fms": "Ja für die Bewerbung um eine reguläre Lehrstelle, sofern du die Anforderungen des Betriebs erfüllst. Du brauchst einen Lehrvertrag. Eine Verkürzung ist ein separater Entscheid des kantonalen Amts. Für Way-up reicht der FMS-Ausweis nicht.",
      "other": "Du brauchst einen Lehrbetrieb. Eine Verkürzung klärst du mit dem Betrieb und dem kantonalen Berufsbildungsamt. Way-up richtet sich an gymnasiale Maturandinnen und Maturanden. Mit FMS-Ausweis: Ja für die Bewerbung um eine reguläre Lehrstelle, sofern du die Anforderungen des Betriebs erfüllst. Du brauchst einen Lehrvertrag. Eine Verkürzung ist ein separater Entscheid des kantonalen Amts. Für Way-up reicht der FMS-Ausweis nicht."
    },
    "next": "Wähle einen Lehrberuf und frage bei einer Schnupperlehre, ob deine Vorbildung angerechnet werden kann.",
    "links": [
      [
        "Post · Lehrberufe und Bewerbung",
        "https://career.post.ch/de/lernende"
      ],
      [
        "Kanton Schwyz · Lehrvertrag und Lehrbetrieb",
        "https://www.sz.ch/verwaltung/bildungsdepartement/amt-fuer-berufsbildung/berufsbildung/lehrvertrag-und-lehrbetrieb.html/8756-8758-8802-9466-9469-11319-11326/trc/1"
      ],
      [
        "Kanton Zug · Lehrvertrag",
        "https://zg.ch/de/bildung/berufslehre/informationen-fuer-lehrbetriebe/lehrvertrag"
      ],
      [
        "Verkürzte Lehre und Way-up",
        "https://www.berufsberatung.ch/dyn/show/65131"
      ]
    ]
  },
  {
    "title": "Berufsprüfung und höhere Fachprüfung",
    "admission": {
      "other": [
        "practice"
      ]
    },
    "tags": [
      "business",
      "research",
      "structured",
      "analyse",
      "customer",
      "plan"
    ],
    "work": "Sich nach dem Berufseinstieg spezialisieren, etwa in Finanzplanung, Marketing, Finanz- und Anlageexpertise oder Marketingleitung.",
    "route": {
      "fms": "Für die Berufsprüfung Marketingfachleute gilt der anerkannte FMS-Ausweis als Vorbildung. Für die eidgenössische Prüfung brauchst du zusätzlich einschlägige Berufspraxis. Für eine höhere Fachprüfung gelten die Voraussetzungen der jeweiligen Prüfung.",
      "other": "Prüfe die Prüfungsordnung des konkreten Abschlusses. Je nach Prüfung sind eine einschlägige Vorbildung und Berufspraxis nötig. Mit FMS-Ausweis: Für die Berufsprüfung Marketingfachleute gilt der anerkannte FMS-Ausweis als Vorbildung. Für die eidgenössische Prüfung brauchst du zusätzlich einschlägige Berufspraxis. Für eine höhere Fachprüfung gelten die Voraussetzungen der jeweiligen Prüfung."
    },
    "next": "Wähle eine Berufsprüfung oder höhere Fachprüfung und arbeite von deren Zulassung aus rückwärts zum passenden Berufseinstieg.",
    "links": [
      [
        "KV Business School Zürich · Lehrgang Marketingfachleute",
        "https://www.kv-business-school.ch/school/marketing-und-verkauf/marketingfachleute-praesenz"
      ],
      [
        "KV Business School Zürich · Zulassung zur eidgenössischen Prüfung",
        "https://www.kv-business-school.ch/en/node/2335"
      ],
      [
        "SBFI · Abschlüsse der höheren Berufsbildung",
        "https://www.sbfi.admin.ch/de/der-nationale-qualifikationsrahmen-nqr-berufsbildung"
      ]
    ]
  },
  {
    "title": "Polizei",
    "admission": {
      "other": [
        "exam"
      ]
    },
    "tags": [
      "safety",
      "counsel",
      "youth",
      "calm",
      "structured",
      "decide",
      "listen",
      "collaborate"
    ],
    "work": "Menschen in Konfliktsituationen unterstützen, für Sicherheit sorgen und Ereignisse dokumentieren.",
    "route": {
      "fms": "Der FMS-Ausweis allein sichert keinen Ausbildungsplatz. Die Zuger Polizei nennt eine Matura oder gleichwertige Ausbildung als mögliche Vorbildung. Lass die Anerkennung deines konkreten FMS-Ausweises beim Korps bestätigen. Dazu kommt das Auswahlverfahren.",
      "other": "Das zuständige Korps entscheidet, welche Abschlüsse es anerkennt und welche Eignungsabklärungen gelten. Mit FMS-Ausweis: Der FMS-Ausweis allein sichert keinen Ausbildungsplatz. Die Zuger Polizei nennt eine Matura oder gleichwertige Ausbildung als mögliche Vorbildung. Lass die Anerkennung deines konkreten FMS-Ausweises beim Korps bestätigen. Dazu kommt das Auswahlverfahren."
    },
    "next": "Besuche einen Infoanlass und kläre deinen Abschluss beim gewünschten Korps.",
    "links": [
      [
        "Kantonspolizei Schwyz · Ausbildung und Bewerbung",
        "https://www.sz.ch/behoerden/verwaltung/sicherheitsdepartement/kantonspolizei/ausbildung.html/8756-8758-8802-9496-9613-10833"
      ],
      [
        "Kantonspolizei Zürich · Ausbildung und Voraussetzungen",
        "https://www.zh.ch/de/arbeiten-beim-kanton/ein-kanton-viele-moeglichkeiten/sicherheitsdirektion/arbeiten-bei-der-kantonspolizei/polizistin-polizist.html"
      ],
      [
        "Zuger Polizei · Ausbildung und Voraussetzungen",
        "https://www.zg.ch/jobs/offene-stellen/polizei-anwaerterin-polizei-anwaerter-zweijaehrige-grundausbildung/7d44d619-74ce-4f21-8575-bb80c316acd9"
      ]
    ]
  },
  {
    "title": "Cabin Crew",
    "admission": {
      "other": [
        "exam"
      ]
    },
    "tags": [
      "hospitality",
      "safety",
      "care",
      "calm",
      "empathic",
      "customer",
      "decide",
      "collaborate"
    ],
    "work": "Fluggäste betreuen und mit dem Team für Sicherheit an Bord sorgen.",
    "route": {
      "fms": "SWISS in Zürich verlangt ein EFZ oder einen höheren Schulabschluss und nennt die Matura als Beispiel. Der FMS-Ausweis ist nicht ausdrücklich aufgeführt. Lass ihn vom Recruiting bestätigen. Dazu kommen unter anderem Sprachen, Assessment und medizinische Abklärung.",
      "other": "Kläre beim Unternehmen, welchen Abschluss, welche Sprachkenntnisse und welches Auswahlverfahren es für den Einstieg verlangt. Mit FMS-Ausweis: SWISS in Zürich verlangt ein EFZ oder einen höheren Schulabschluss und nennt die Matura als Beispiel. Der FMS-Ausweis ist nicht ausdrücklich aufgeführt. Lass ihn vom Recruiting bestätigen. Dazu kommen unter anderem Sprachen, Assessment und medizinische Abklärung."
    },
    "next": "Lies die Anforderungen eines konkreten Einstiegsprogramms und prüfe Sprachen, Einsatzzeiten und Auswahlverfahren.",
    "links": [
      [
        "SWISS Zürich · Ausbildung und Bewerbung",
        "https://www.swiss.com/corporate/de/careers/professional-fields/cabin-crew-member"
      ],
      [
        "SWISS · Infoveranstaltung und Einstieg",
        "https://www.swiss.com/corporate/en/careers/information-events/cabin.html"
      ]
    ]
  },
  {
    title: 'Fachmaturität anschliessen',
    tags: ['teach', 'support', 'research', 'structured', 'plan', 'explain'],
    admission: {fms: ['degree']},
    work: 'Vertiefe dein FMS-Profil. Für Pädagogik an der KSA gehören Unterricht, Fachmaturitätsarbeit und Abschlussprüfung dazu.',
    route: {
      fms: 'Erkundige dich nach der Fachmaturität in deinem FMS-Profil. Kläre einen möglichen Profilwechsel mit der Schule, bevor du ein Praktikum vereinbarst.',
      other: 'Prüfe direkt die Zulassung zum gewünschten Studium mit deinem vorhandenen Abschluss.'
    },
    next: 'Frag bei der Schule, welche Leistungen du für dein Profil erbringen musst.',
    links: [['KSA · FMS und Fachmaturität', 'https://www.ksasz.ch/de/fachmittelschule']]
  },
  {
    title: 'Passerelle zu Universität und ETH',
    tags: ['research', 'mind', 'structured', 'analyse', 'plan'],
    admission: {fms: ['degree', 'exam'], education: ['exam'], health: ['exam'], social: ['exam']},
    work: 'Die Ergänzungsprüfung erweitert den Zugang zur Hochschule, wenn dich ein Fach an einer Universität oder der ETH interessiert.',
    route: {
      fms: 'Erwirb zuerst eine Fachmaturität. Danach kannst du die Passerellenprüfung vorbereiten.',
      gym: 'Mit der gymnasialen Matura kannst du die Zulassung direkt bei der Universität oder ETH prüfen.',
      other: 'Mit der Fachmaturität und bestandener Passerelle kannst du dich an universitären Hochschulen bewerben.'
    },
    next: 'Vergleiche die Prüfungsfächer mit dem, was du für dein Wunschstudium brauchst.',
    links: [['EDK · Wege nach der Fachmittelschule', 'https://www.edk.ch/de/bildungssystem-ch/nachobligatorium/sek-ll/fms'], ['Schwyzer Übersicht · Passerelle und weitere Wege', 'https://www.theresianum.ch/cms/upload/dokumente/fms/Wege_nach_FMS_Langversion.pdf#page=25']]
  },
  {
    title: 'Pflege HF oder FH',
    tags: ['support', 'daily', 'care', 'empathic', 'calm', 'observe', 'precise', 'collaborate'],
    admission: {fms: ['exam', 'degree'], other: ['practice']},
    work: 'Begleite und pflege Menschen und arbeite mit Fachpersonen aus verschiedenen Gesundheitsberufen zusammen.',
    route: {
      fms: 'Prüfe mit dem FMS-Ausweis zuerst die Aufnahme in eine Pflege-HF. Für den FH-Weg brauchst du einen anerkannten Zulassungsausweis wie die Fachmaturität.',
      other: 'Für Pflege an der ZHAW hängt die geforderte Arbeitswelterfahrung von deiner Vorbildung ab. Prüfe parallel die HF-Zulassung beim jeweiligen Anbieter.'
    },
    next: 'Vergleiche einen Praxiseinblick bei einer Pflege-HF mit dem Studienplan an der ZHAW.',
    links: [['Schwyzer Übersicht · Höhere Fachschulen', 'https://www.theresianum.ch/cms/upload/dokumente/fms/Wege_nach_FMS_Langversion.pdf#page=6'], ['ZHAW · Zulassung Bachelor Pflege', 'https://www.zhaw.ch/de/gesundheit/studium/bachelorstudium/bachelor-pflege/zulassung-und-termine']]
  },
  {
    title: 'Tourismus HF im Kanton Schwyz',
    tags: ['hospitality', 'business', 'structured', 'creative', 'customer', 'plan'],
    admission: {other: ['direct']},
    work: 'Gäste beraten, Freizeitangebote planen und Tourismusbetriebe organisieren.',
    route: 'Die Höhere Fachschule Schwyz nennt den Fachmittelschulabschluss als mögliche Vorbildung. Kläre die weiteren Aufnahmebedingungen beim Anbieter.',
    next: 'Frag nach einer Schnupperlektion und nach den Praxisphasen.',
    links: [['Höhere Fachschule Schwyz · Tourismus und Zulassung', 'https://www.hfsz.ch/dipl-tourismusfachfrau-mann-hf/']]
  },
  {
    title: 'Lokführung und Zugverkehr',
    tags: ['safety', 'hands', 'structured', 'calm', 'precise', 'decide'],
    admission: {other: ['exam']},
    work: 'Führe Personenzüge oder koordiniere den Bahnverkehr in einer Betriebszentrale.',
    route: 'Die Schwyzer Übersicht nennt die Bahnberufe als mögliche Anschlüsse. Prüfe in der konkreten SBB-Ausschreibung, welcher Abschluss anerkannt wird und welche Eignungsabklärung gilt.',
    next: 'Vergleiche die Aufgaben im Führerstand und in der Betriebszentrale.',
    links: [['SBB · Lokführung', 'https://company.sbb.ch/de/jobs-karriere/berufswelten/bahnberufe/lokfuehrer-in.html'], ['SBB · Zugverkehrsleitung', 'https://company.sbb.ch/de/jobs-karriere/berufswelten/bahnberufe/zugverkehrsleiter-in.html']]
  },
  {
    title: 'Theaterpädagogik',
    tags: ['arts', 'teach', 'creative', 'empathic', 'groups', 'collaborate'],
    admission: {fms: ['degree', 'exam'], other: ['exam']},
    work: 'Entwickle mit Gruppen Theaterprojekte und vermittle künstlerische Arbeitsweisen.',
    route: 'Prüfe die schulische Vorbildung und die künstlerische Aufnahme bei der ZHdK. Kläre mit der Studienberatung, welchen Abschluss du für die Bewerbung brauchst.',
    next: 'Schau dir die Aufnahmeaufgaben an und besuche eine Theaterwerkstatt.',
    links: [['ZHdK · Bachelor Theaterpädagogik', 'https://www.zhdk.ch/studium/theater/ba-theater-theaterpaedagogik-836'], ['ZHdK · Zulassungsverfahren', 'https://www.zhdk.ch/studium/theater/ba-theater-theaterpaedagogik-836/anmeldung-theater-ba-theaterpaedagogik-3772']]
  }
];

const form = document.getElementById('career-form');
const credential = document.getElementById('career-credential');
const profileCredential = document.getElementById('credential');
const results = document.getElementById('career-results');
const status = document.getElementById('career-status');
const labels = Object.assign({}, ...careerQuestions.map(([, options]) => options));
const interestKeys = Object.keys(careerQuestions[0][1]);

const stepFilms = [
  ['_eJ9cQau39Y', 'Ich lerne meine Interessen und Stärken kennen'],
  ['HeIBH_EpLWE', 'Einfühlungsvermögen im Beruf'],
  ['x-FM4yZCGNA', 'Organisationsfähigkeit im Beruf'],
  ['TsX71LyHju0', 'Von der Studienwahl zum Studienalltag']
];

const direction = document.getElementById('career-direction');
const track = document.getElementById('career-track');
const trackNote = document.getElementById('career-track-note');
const learning = document.getElementById('career-learning');

const trackNotes = {
  all: 'Du kannst Wege über eine Höhere Fachschule, eine Berufsausbildung oder ein Studium vergleichen.',
  now: 'Hier findest du Höhere Fachschulen, Lehrstellen und Angebote mit Auswahlverfahren. Kläre beim Anbieter, ob er deinen Ausweis anerkennt.',
  study: 'Vergleiche PH, FH und Universität. Je nach Ziel brauchst du eine Fachmaturität, Praxis oder eine Passerelle.',
  switch: 'Ein Wechsel kann über eine HF, eine Lehre oder ein Studium führen. Schau zuerst, welche Zusatzleistungen das neue Feld verlangt.'
};
const trackTitles = {
  now: ['Kindheitspädagogik HF', 'Sozialpädagogik HF', 'Biomedizinische Analytik HF',
    'Hotellerie und Tourismus HF', 'Berufslehre und mögliche Verkürzung', 'Polizei', 'Cabin Crew',
    'Pflege HF oder FH', 'Tourismus HF im Kanton Schwyz', 'Lokführung und Zugverkehr'],
  study: [...careers.slice(0, 13).map(career => career.title), 'Fachmaturität anschliessen',
    'Passerelle zu Universität und ETH', 'Pflege HF oder FH', 'Theaterpädagogik'],
  switch: ['Logopädie', 'Ergotherapie', 'Psychomotoriktherapie', 'Schulsozialarbeit',
    ...careers.slice(9, 13).map(career => career.title),
    ...careers.slice(13).map(career => career.title)]
};

function careersForTrack() {
  const titles = trackTitles[track.value];
  return titles ? careers.filter(career => titles.includes(career.title)) : careers;
}

const questions = document.getElementById('career-questions');
const resourceGroups = form.querySelectorAll('[data-resource-step]');
const film = document.getElementById('career-film');
const admission = document.getElementById('career-admission');
const preference = document.getElementById('career-preference');
const progress = document.getElementById('career-progress');
const back = document.getElementById('career-back');
const next = document.getElementById('career-next');
const answers = careerQuestions.map(() => new Set());
let step = -1;

function showCareerStep(moveFocus = false) {
  const startStep = step === -1;
  const admissionStep = step === careerQuestions.length;
  progress.textContent = `Schritt ${step + 2} von ${careerQuestions.length + 2}`;
  admission.hidden = !admissionStep;
  direction.hidden = !startStep;
  for (const group of resourceGroups) {
    group.hidden = Number(group.dataset.resourceStep) !== step;
  }
  back.hidden = startStep;
  next.textContent = admissionStep ? 'Ergebnisse anzeigen' : 'Weiter';
  questions.replaceChildren();
  film.innerHTML = '';
  if (startStep) {
    trackNote.textContent = trackNotes[track.value];
    if (moveFocus) credential.focus();
    return;
  }
  const [videoId, title] = stepFilms[step];
  film.innerHTML = `<details><summary>Film der Berufsberatung · ${title}</summary>
    <button type="button" class="secondary" data-video="${videoId}">YouTube-Film laden</button>
    <a href="https://www.youtube.com/watch?v=${videoId}">Auf YouTube ansehen</a>
  </details>`;

  if (!admissionStep) {
    const [question, options] = careerQuestions[step];
    const relevantCareers = answers[0].size
      ? careersForTrack().filter(career => career.tags.some(tag => answers[0].has(tag)))
      : careersForTrack();
    const relevantTags = new Set(relevantCareers.flatMap(career => career.tags));
    const preferred = step === 2 ? answers[1] : new Set();
    const preferredCareers = relevantCareers.filter(career => career.tags.some(tag => preferred.has(tag)));
    const strengthTags = new Set(preferredCareers.flatMap(career => career.tags));
    const choices = Object.entries(options)
      .filter(([key]) => (strengthTags.size ? strengthTags : relevantTags).has(key));
    const visibleKeys = new Set(choices.map(([key]) => key));
    answers[step] = new Set([...answers[step]].filter(key => visibleKeys.has(key)));
    questions.innerHTML = `<fieldset><legend tabindex="-1">${question}</legend>
      <p class="muted">Du kannst mehrere Antworten ankreuzen.</p>
      <div class="choices">${choices.map(([key, label]) =>
        `<label class="choice"><input type="checkbox" name="trait" value="${key}" ${answers[step].has(key) ? 'checked' : ''}> ${label}</label>`
      ).join('')}</div></fieldset>`;
  }

  if (moveFocus) (admissionStep ? preference : questions.querySelector('legend')).focus();
}

film.addEventListener('click', event => {
  const button = event.target.closest('button[data-video]');
  if (!button) return;
  const player = document.createElement('iframe');
  player.src = `https://www.youtube-nocookie.com/embed/${button.dataset.video}`;
  player.title = stepFilms[step][1];
  player.className = 'career-player';
  player.allowFullscreen = true;
  button.replaceWith(player);
  player.focus();
});

function rememberCareerStep() {
  if (step >= 0 && step < careerQuestions.length) {
    answers[step] = new Set(new FormData(form).getAll('trait'));
  }
}

const counsellingOffers = {
  "Lehrperson Kindergarten, Unterstufe oder Primarstufe": [
    "Primarstufe und Kindergarten · PH Schwyz, Zürich und Zug",
    "/de/studium/hochschulzulassung/zulassung-zur-paedagogischen-hochschule",
    "Kläre die Fachmaturität Pädagogik an deiner FMS oder frage bei der PH nach dem Prüfungsweg."
  ],
  "Lehrperson Sekundarstufe I": [
    "Lehrdiplom Sekundarstufe I · PH Zürich",
    "/de/aus-weiterbildungen/paedagogische-hochschule-zuerich-phzh/lehrdiplom-fuer-die-sekundarstufe-i",
    "Vergleiche die Aufnahmeprüfung der PH Zürich mit dem Weg über Fachmaturität und Passerelle."
  ],
  "Logopädie": [
    "Bachelor Logopädie · HfH Zürich",
    "/de/aus-weiterbildungen/interkantonale-hochschule-fuer-heilpaedagogik-zuerich-hfh/speech-and-language",
    "Kläre mit der HfH, welche Fachmaturität oder welchen gleichwertigen Zugang sie anerkennt und welche Nachweise du danach brauchst."
  ],
  "Psychomotoriktherapie": [
    "Bachelor Psychomotoriktherapie · HfH Zürich",
    "/de/aus-weiterbildungen/interkantonale-hochschule-fuer-heilpaedagogik-zuerich-hfh/psychomotor-therapy",
    "Kläre die Fachmaturität und informiere dich über die Vorbereitung auf das Assessment der HfH."
  ],
  "Ergotherapie": [
    "Bachelor Ergotherapie · ZHAW Winterthur",
    "/de/aus-weiterbildungen/zuercher-hochschule-fuer-angewandte-wissenschaften-zhaw/ergotherapie-1",
    "Kläre zuerst deinen Weg zur Fachmaturität. Frage danach die ZHAW, welche Arbeitswelterfahrung sie für dein Profil anerkennt."
  ],
  "Schulsozialarbeit": [
    "Bachelor Soziale Arbeit · ZHAW Zürich",
    "/de/aus-weiterbildungen/zuercher-hochschule-fuer-angewandte-wissenschaften-zhaw/soziale-arbeit",
    "Vergleiche die Fachmaturitätsprofile und lass die Anforderungen an deine Praxiserfahrung vor der Praktikumssuche bestätigen."
  ],
  "Angewandte Psychologie · ZHAW": [
    "Bachelor Angewandte Psychologie · ZHAW Zürich",
    "/de/aus-weiterbildungen/zuercher-hochschule-fuer-angewandte-wissenschaften-zhaw/angewandte-psychologie",
    "Plane zuerst die Fachmaturität und kläre danach, wie du die für die Bewerbung nötige Arbeitswelterfahrung nachweist."
  ],
  "Angewandte Psychologie · FHNW Olten": [
    "Bachelor Arbeits-, Organisations- und Personalpsychologie · FHNW Olten",
    "/de/aus-weiterbildungen/fachhochschule-nordwestschweiz-fhnw/arbeits-und-organisationspsychologie",
    "Kläre zuerst die Fachmaturität und frage die FHNW, welche Praxiserfahrung bis zum Eignungsverfahren zählen kann."
  ],
  "Psychologie an der Universität": [
    "Bachelor Psychologie · Universität Zürich",
    "/de/aus-weiterbildungen/universitaet-zuerich-uzh/psychologie",
    "Vergleiche den Weg über Fachmaturität und Passerelle mit der gymnasialen Matura."
  ],
  "Schulpsychologie": [
    "Bachelor und Master Psychologie · Studienangebote",
    "/de/studienrichtungen/psychologie",
    "Plane den Zugang zu einem Psychologie-Bachelor und prüfe, welche Masterprogramme schulpsychologische Schwerpunkte bieten."
  ],
  "Pflege HF oder FH": [
    "Pflege HF und FH · Ausbildungsübersicht",
    "/web_file/get?id=5011",
    "Prüfe zuerst Pflege-HF-Angebote mit FMS-Ausweis. Vergleiche dann die Voraussetzungen für den FH-Weg über die Fachmaturität."
  ],
  "Passerelle zu Universität und ETH": [
    "Passerelle · Vorbereitung und Prüfung",
    "/de/studium/hochschulzulassung/zulassung-zur-universitaet/eth/ergaenzungspruefung-passerelle",
    "Kläre zuerst die Fachmaturität und vergleiche anschliessend die Vorbereitungskurse."
  ]
};

const comparisonOffers = {
  "Lehrperson Kindergarten, Unterstufe oder Primarstufe": ["PH Schwyz, PH Zürich, PH Zug", "Goldau, Zürich, Zug", "Vollzeit 3 Jahre. Teilzeit je nach PH.", "Bis 30. April für den regulären Herbststart. Für Aufnahmeprüfungen gelten andere Fristen.", "#ph-vergleich"],
  "Lehrperson Sekundarstufe I": ["PH Zürich", "Zürich", "4½ Jahre Vollzeit oder 6–7½ Jahre Teilzeit.", "Direkte Zulassung mit Schweizer Ausweis bis 30. April für den Herbststart. Aufnahmeprüfung separat.", "https://phzh.ch/de/studium/studiengaenge/sekundarstufe-1/sekundarstufe-1-voll-und-teilzeit/"],
  "Schulische Heilpädagogik": ["HfH", "Zürich", "3–12 Semester.", "Frist nach Studienbeginn auf der Zulassungsseite prüfen.", "https://www.hfh.ch/ausbildung/ma-schulische-heilpaedagogik/zulassung"],
  "Logopädie": ["HfH", "Zürich", "6 Semester Vollzeit.", "15. März für Herbst, 30. September für Frühling.", "https://www.hfh.ch/ausbildung/ba-logopaedie/zulassung"],
  "Ergotherapie": ["ZHAW", "Winterthur", "3 Jahre Vollzeit oder 4 Jahre Teilzeit.", "28. Februar 2027 für Studienstart im Herbst 2027.", "https://www.zhaw.ch/de/gesundheit/studium/bachelorstudium/bachelor-ergotherapie/zulassung-und-termine"],
  "Psychomotoriktherapie": ["HfH", "Zürich", "6 Semester Vollzeit.", "15. März für Herbst, 30. September für Frühling.", "https://www.hfh.ch/ausbildung/ba-psychomotoriktherapie/zulassung"],
  "Schulsozialarbeit": ["ZHAW · Bachelor Soziale Arbeit", "Zürich", "6 Semester Vollzeit.", "Nach Studienstart und Studienmodell bei der ZHAW prüfen.", "https://www.zhaw.ch/de/sozialearbeit/studium/bachelor-in-sozialer-arbeit/zulassung/voraussetzungen-fuers-studium"],
  "Kindheitspädagogik HF": ["ARTISET Bildung", "Zug und Zürich", "3 oder 4 Jahre je nach Vorbildung.", "Frist beim gewählten Bildungsgang prüfen.", "https://artiset.ch/de/bildung/ausbildung/hoehere-fachschule-kindheitspaedagogik"],
  "Heilpädagogische Früherziehung": ["HfH", "Zürich", "Mindestens 4 Semester.", "15. März 2027 für Studienstart im Herbst 2027.", "https://www.hfh.ch/ausbildung/ma-heilpaedagogische-frueherziehung/zulassung"],
  "Angewandte Psychologie · ZHAW": ["ZHAW", "Zürich", "6 Semester Vollzeit.", "31. Januar 2027 für Studienstart im September 2027.", "https://www.zhaw.ch/de/psychologie/studium/bachelor/anmeldung-bachelorstudiengang"],
  "Angewandte Psychologie · FHNW Olten": ["FHNW", "Olten", "6 Semester Vollzeit, 8 Teilzeit, 10–12 Flexzeit.", "Spätestens einen Monat vor der gewählten Eignungsrunde.", "https://www.fhnw.ch/de/psychologie/studium/angebot/studiengaenge/bachelor-arbeits-organisations-personalpsychologie"],
  "Psychologie an der Universität": ["Universität Zürich · Bachelor Psychologie", "Zürich", "6 Semester Regelstudienzeit.", "UZH regulär bis 30. April für Herbst, bis 30. November für Frühling.", "https://uzh.ch/de/studies/application/deadlines.html"],
  "Schulpsychologie": ["Zum Beispiel Universität Zürich · Psychologie", "Zürich", "Bachelor und Master zusammen in der Regel 5 Jahre Vollzeit.", "Bewerbungsfrist für Bachelor und Master separat prüfen.", "https://uzh.ch/de/studies/application/deadlines.html"],
  "Sozialpädagogik HF": ["Agogis", "Zürich", "3 Jahre im regulären Bildungsgang.", "Je nach Start und Aufnahmeverfahren.", "#praxisvergleich"],
  "Biomedizinische Analytik HF": ["Careum und Stadtspital Zürich", "Zürich", "3 Jahre Vollzeit.", "Je nach ausgeschriebenem Praxisplatz.", "#praxisvergleich"],
  "Hotellerie und Tourismus HF": ["Hotelfachschule Zürich", "Zürich", "6 Semester Vollzeit oder 7 berufsbegleitend.", "Bis kurz vor Studienstart, abhängig von freien Plätzen.", "#praxisvergleich"],
  "Betriebsinterne Ausbildung und PWA": ["Zuger Kantonalbank, Schwyzer Kantonalbank oder Kaderschule Zürich", "Zug, Schwyz oder Zürich", "BEM 18 Monate, PWA 24 Monate.", "Je nach Anbieter und Einstiegsjahr.", "#praxisvergleich"],
  "Berufslehre und mögliche Verkürzung": ["Zum Beispiel Schweizerische Post", "Je nach Lehrstelle", "Kaufleute EFZ regulär 3 Jahre.", "Gemäss Lehrstelleninserat.", "#praxisvergleich"],
  "Berufsprüfung und höhere Fachprüfung": ["KV Business School Zürich · Beispiel Marketingfachleute BP", "Zürich", "Beispiel Lehrgang mit 70 % online: 3 Semester.", "Lehrgang und eidgenössische Prüfung haben eigene Fristen.", "#praxisvergleich"],
  "Polizei": ["Zum Beispiel Kantonspolizei Schwyz oder Zuger Polizei", "Schwyz oder Zug sowie Hitzkirch", "Rund 2 Jahre.", "Gemäss Ausschreibung.", "#praxisvergleich"],
  "Cabin Crew": ["SWISS", "Flughafen Zürich", "Ausbildung im ersten Jahr.", "Gemäss Ausschreibung der nächsten Kurse.", "#praxisvergleich"],
  "Fachmaturität anschliessen": ["Zum Beispiel Kantonsschule Ausserschwyz", "Kanton Schwyz", "Fachmaturität Pädagogik an der KSA: 1 Semester.", "Bei der eigenen FMS nachfragen.", "https://www.ksasz.ch/de/fachmittelschule"],
  "Passerelle zu Universität und ETH": ["Vorbereitungskurs oder Selbststudium", "Je nach Anbieter", "Je nach Vorbereitungskurs und Prüfungsplanung.", "Fristen für Kurs und Prüfung separat prüfen.", "https://www.berufsberatung.ch/de/studium/hochschulzulassung/zulassung-zur-universitaet/eth/ergaenzungspruefung-passerelle"],
  "Pflege HF oder FH": ["Zum Beispiel ZHAW · Pflege FH", "Winterthur", "Für die Bachelor- und HF-Modelle je nach Anbieter.", "ZHAW FH: 15. April 2027 für Herbst 2027. HF je nach Anbieter.", "https://www.zhaw.ch/de/gesundheit/studium/bachelorstudium/bachelor-pflege/zulassung-und-termine"],
  "Tourismus HF im Kanton Schwyz": ["Höhere Fachschule Schwyz", "Kanton Schwyz", "6 Semester laut Schwyzer Übersicht.", "Frist für den nächsten Start beim Anbieter prüfen.", "https://www.hfsz.ch/dipl-tourismusfachfrau-mann-hf/"],
  "Lokführung und Zugverkehr": ["SBB", "Je nach Ausschreibung", "Je nach Funktion und Pensum.", "Gemäss Ausschreibung.", "https://company.sbb.ch/de/jobs-karriere/einsteigen/quereinstieg.html"],
  "Theaterpädagogik": ["ZHdK", "Zürich", "6 Semester Vollzeit.", "Termine und Vorbehalte beim Zulassungsverfahren prüfen.", "https://www.zhdk.ch/studium/theater/ba-theater-theaterpaedagogik-836/anmeldung-theater-ba-theaterpaedagogik-3772"]
};

function restoreSharedComparison() {
  const shared = new URLSearchParams(location.hash.slice(1)).getAll('vergleich');
  const knownTitles = new Set(careers.map(career => career.title));
  if (shared.length !== 4 || new Set(shared).size !== 4 || !shared.every(title => knownTitles.has(title))) {
    return false;
  }

  comparisonTitles = shared;
  track.value = 'all';
  step = careerQuestions.length;
  return true;
}

function admissionForCareer(career) {
  return typeof career.route === 'string'
    ? career.route
    : career.route[credential.value] ?? career.route.other;
}

const comparisonStorageKey = 'studienkompass-comparison-v1';
let comparisonTitles = [];

function saveCareerComparison() {
  try {
    localStorage.setItem(comparisonStorageKey, JSON.stringify({
      titles: comparisonTitles,
      track: track.value,
      preference: preference.value,
      learning: learning.value,
      answers: answers.map(answer => [...answer])
    }));
  } catch {}
}

function restoreCareerComparison() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(comparisonStorageKey));
  } catch {
    return false;
  }

  if (!Array.isArray(saved?.titles)) return false;
  const knownTitles = new Set(careers.map(career => career.title));
  comparisonTitles = [...new Set(saved.titles.filter(title => knownTitles.has(title)))].slice(0, 4);
  if (!comparisonTitles.length) return false;

  for (const [control, value] of [[track, saved.track], [preference, saved.preference], [learning, saved.learning]]) {
    if (Array.from(control.options).some(option => option.value === value)) control.value = value;
  }
  careerQuestions.forEach(([, options], index) => {
    const values = saved.answers?.[index];
    if (Array.isArray(values)) {
      answers[index] = new Set(values.filter(value => Object.hasOwn(options, value)));
    }
  });
  step = careerQuestions.length;
  return true;
}

function renderShortlistComparison(shortlist, others) {
  const headings = ['Hochschule oder Anbieter', 'Ort', 'Dauer', 'Zulassung mit deinem Abschluss', 'Anmeldefrist'];
  const rows = shortlist.map(({career}, slot) => {
    const [provider, place, duration, deadline, url] = comparisonOffers[career.title];
    const values = [provider, place, duration, admissionForCareer(career), `<a href="${url}">${deadline}</a>`];
    const replacement = others.length ? `<select data-comparison-slot="${slot}"
        aria-label="${career.title} im Vergleich austauschen">
        <option value="">Austauschen …</option>
        ${others.map(({career: option}) =>
          `<option value="${careers.indexOf(option)}">${option.title}</option>`).join('')}
      </select>` : '';
    return `<tr role="row"><th role="rowheader" scope="row">${career.title}${replacement}</th>
      ${values.map((value, index) => `<td role="cell" data-label="${headings[index]}">${value}</td>`).join('')}</tr>`;
  });
  return `<section class="shortlist-comparison" aria-labelledby="shortlist-title">
    <h3 id="shortlist-title">Deine ${shortlist.length} Vorschläge im Vergleich</h3>
    <p class="muted">Ausgangslage: ${credential.selectedOptions[0].textContent}. Die Links führen zu den aktuellen Fristen.</p>
    <div class="comparison-share">
      <button type="button" class="secondary" data-share-comparison>Vergleichslink kopieren</button>
      <div id="comparison-share-link" hidden>
        <label for="comparison-share-url">Link zum Vergleich</label>
        <input id="comparison-share-url" type="url" readonly>
        <span id="comparison-share-status" role="status"></span>
      </div>
    </div>
    <div class="compare" tabindex="0" role="region" aria-label="Vergleich deiner Vorschläge">
      <table class="shortlist-table" role="table">
        <thead role="rowgroup"><tr role="row"><th role="columnheader" scope="col">Vorschlag</th>
          ${headings.map(heading => `<th role="columnheader" scope="col">${heading}</th>`).join('')}</tr></thead>
        <tbody role="rowgroup">${rows.join('')}</tbody>
      </table>
    </div>
  </section>`;
}

function renderCareerResults() {
  const selected = new Set(answers.flatMap(answer => [...answer]));
  const ranked = careersForTrack().map(career => {
    const matches = career.tags.filter(tag => selected.has(tag));
    const score = matches.reduce((total, tag) => total + (interestKeys.includes(tag) ? 2 : 1), 0);
    const routes = career.admission[credential.value] ?? career.admission.other ?? [];
    const admissionMatch = routes.includes(preference.value);
    return {career, matches, score, admissionMatch};
  }).sort((a, b) => Number(b.admissionMatch) - Number(a.admissionMatch) || b.score - a.score);

  const matching = ranked.filter(item => item.admissionMatch).length;
  const admissionStatus = preference.value === 'all' ? '' : matching
    ? ` ${matching} Wege mit der gewählten Zulassungsoption stehen zuerst.`
    : ' Für diesen Abschluss ist in der Übersicht kein Weg mit dieser Zulassungsoption markiert.';
  status.textContent = `${ranked.length} Wege im Überblick.${admissionStatus}` +
    (selected.size ? ' Oben siehst du zuerst bis zu vier Vorschläge. Interessen zählen doppelt.' : '');

  const trialQuestions = {
    practice: 'Welche Aufgabe kann ich an einem Schnuppertag selbst ausprobieren?',
    people: 'Wie viel lerne ich im Team, mit einer Fachperson oder direkt mit Kundschaft?',
    judgment: 'Wo kommt KI zum Einsatz, und welche Entscheidungen muss ich selbst begründen?'
  };
  const trialQuestion = trialQuestions[learning.value];
  const reflection = trialQuestion
    ? `<article class="career-task"><h3>Frage für deinen nächsten Einblick</h3><p>${trialQuestion}</p></article>`
    : '';
  const renderCard = ({career, matches, admissionMatch}) => {
    const offer = counsellingOffers[career.title];
    const nextAction = credential.value === 'fms' && offer ? offer[2] : career.next;
    const route = admissionForCareer(career);
    return `<article>
      <h3>${career.title}</h3>
      <p>${career.work}</p>
      ${matches.length ? `<p><strong>Was zu deiner Auswahl passt</strong><br>${matches.map(tag => labels[tag]).join(', ')}</p>` : ''}
      ${admissionMatch ? '<p class="tag">Zulassungsschritt zum Prüfen</p>' : ''}
      ${offer ? `<p><strong>Studienangebot oder Ausbildungsweg</strong><br><a href="https://www.berufsberatung.ch${offer[1]}">${offer[0]}</a></p>` : ''}
      <p><strong>Zulassung mit deinem Abschluss</strong><br>${route}</p>
      <p><strong>Das kannst du als Nächstes tun</strong><br>${nextAction}</p>
      <ul>${career.links.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join('')}</ul>
    </article>`;
  };
  const byTitle = new Map(ranked.map(item => [item.career.title, item]));
  comparisonTitles = comparisonTitles.filter(title => byTitle.has(title));
  for (const {career} of ranked) {
    if (comparisonTitles.length === 4) break;
    if (!comparisonTitles.includes(career.title)) comparisonTitles.push(career.title);
  }
  const shortlist = comparisonTitles.map(title => byTitle.get(title));
  const others = ranked.filter(({career}) => !comparisonTitles.includes(career.title));
  results.innerHTML = reflection + renderShortlistComparison(shortlist, others) + shortlist.map(renderCard).join('') + (others.length
    ? `<details class="career-more"><summary>Weitere ${others.length} Wege ansehen</summary>
        <div class="grid">${others.map(renderCard).join('')}</div></details>`
    : '');
}

results.addEventListener('click', async event => {
  if (!event.target.closest('[data-share-comparison]')) return;

  const url = new URL('https://patrickfischerksa.github.io/studienkompass/');
  const params = new URLSearchParams();
  for (const title of comparisonTitles) params.append('vergleich', title);
  url.hash = params.toString();

  const field = document.getElementById('comparison-share-url');
  const message = document.getElementById('comparison-share-status');
  document.getElementById('comparison-share-link').hidden = false;
  field.value = url.href;
  try {
    await navigator.clipboard.writeText(field.value);
    message.textContent = 'Link kopiert.';
  } catch {
    field.focus();
    field.select();
    message.textContent = 'Du kannst den markierten Link kopieren.';
  }
});

results.addEventListener('change', event => {
  const select = event.target.closest('select[data-comparison-slot]');
  if (!select || select.value === '') return;
  const slot = Number(select.dataset.comparisonSlot);
  comparisonTitles[slot] = careers[Number(select.value)].title;
  renderCareerResults();
  saveCareerComparison();
  results.querySelector(`[data-comparison-slot="${slot}"]`)?.focus();
  status.textContent += ` Im Vergleich: ${comparisonTitles[slot]}.`;
});

credential.value = profileCredential.value;
profileCredential.addEventListener('change', () => {
  credential.value = profileCredential.value;
  if (results.innerHTML) renderCareerResults();
});
credential.addEventListener('change', () => {
  profileCredential.value = credential.value;
  profileCredential.dispatchEvent(new Event('change'));
});
track.addEventListener('change', () => { trackNote.textContent = trackNotes[track.value]; });
back.addEventListener('click', () => {
  rememberCareerStep();
  step--;
  comparisonTitles = [];
  results.replaceChildren();
  status.textContent = '';
  showCareerStep(true);
});
form.addEventListener('submit', event => {
  event.preventDefault();
  rememberCareerStep();
  if (step < careerQuestions.length) {
    step++;
    showCareerStep(true);
    return;
  }
  renderCareerResults();
  saveCareerComparison();
  status.focus();
});
const sharedComparison = restoreSharedComparison();
const restoredComparison = sharedComparison || restoreCareerComparison();
showCareerStep();
if (restoredComparison) renderCareerResults();
if (sharedComparison) {
  requestAnimationFrame(() => document.getElementById('shortlist-title').scrollIntoView());
}
