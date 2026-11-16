const careerQuestions = [
  ['Was möchtest du im Berufsalltag tun?', {
    teach: 'Unterrichten und erklären', support: 'Individuell fördern',
    language: 'Mit Sprache arbeiten', movement: 'Mit Bewegung und Spiel arbeiten',
    daily: 'Selbstständigkeit im Alltag fördern', counsel: 'Beraten und Konflikte klären',
    care: 'Kinder betreuen und begleiten', youth: 'Mit Jugendlichen arbeiten',
    mind: 'Erleben und Verhalten verstehen', research: 'Forschen und Daten auswerten',
    lab: 'Im Labor untersuchen', hospitality: 'Gäste betreuen und Reisen organisieren',
    business: 'Mit Kundschaft und Finanzfragen arbeiten', hands: 'Praktisch im Betrieb lernen',
    safety: 'Für Sicherheit sorgen'
  }],
  ['Welche Eigenschaften passen zu dir?', {
    patient: 'Geduldig', creative: 'Kreativ', structured: 'Strukturiert',
    empathic: 'Einfühlsam', calm: 'Ruhig in anspruchsvollen Situationen'
  }],
  ['Was gelingt dir bereits oder möchtest du gezielt üben?', {
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

const questions = document.getElementById('career-questions');
const film = document.getElementById('career-film');
const admission = document.getElementById('career-admission');
const preference = document.getElementById('career-preference');
const progress = document.getElementById('career-progress');
const back = document.getElementById('career-back');
const next = document.getElementById('career-next');
const answers = careerQuestions.map(() => new Set());
let step = 0;

function showCareerStep(moveFocus = false) {
  const admissionStep = step === careerQuestions.length;
  progress.textContent = `Schritt ${step + 1} von ${careerQuestions.length + 1}`;
  admission.hidden = !admissionStep;
  back.hidden = step === 0;
  next.textContent = admissionStep ? 'Ergebnisse anzeigen' : 'Weiter';
  questions.replaceChildren();
  const [videoId, title] = stepFilms[step];
  film.innerHTML = `<details><summary>Film der Berufsberatung · ${title}</summary>
    <button type="button" class="secondary" data-video="${videoId}">YouTube-Film laden</button>
    <a href="https://www.youtube.com/watch?v=${videoId}">Auf YouTube ansehen</a>
  </details>`;

  if (!admissionStep) {
    const [question, options] = careerQuestions[step];
    const relevantCareers = answers[0].size
      ? careers.filter(career => career.tags.some(tag => answers[0].has(tag)))
      : careers;
    const relevantTags = new Set(relevantCareers.flatMap(career => career.tags));
    const preferred = step === 2 ? answers[1] : new Set();
    const preferredCareers = relevantCareers.filter(career => career.tags.some(tag => preferred.has(tag)));
    const strengthTags = new Set(preferredCareers.flatMap(career => career.tags));
    const choices = Object.entries(options)
      .filter(([key]) => step === 0 || (strengthTags.size ? strengthTags : relevantTags).has(key));
    const visibleKeys = new Set(choices.map(([key]) => key));
    answers[step] = new Set([...answers[step]].filter(key => visibleKeys.has(key)));
    questions.innerHTML = `<fieldset><legend tabindex="-1">${question}</legend>
      <p class="muted">Du kannst mehrere Antworten wählen oder direkt weitergehen.</p>
      <div class="choices">${choices.map(([key, label]) =>
        `<label class="choice"><input type="checkbox" name="trait" value="${key}" ${answers[step].has(key) ? 'checked' : ''}> ${label}</label>`
      ).join('')}</div></fieldset>`;
  }

  if (moveFocus) (admissionStep ? credential : questions.querySelector('legend')).focus();
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
  if (step < careerQuestions.length) {
    answers[step] = new Set(new FormData(form).getAll('trait'));
  }
}

function renderCareerResults() {
  const selected = new Set(answers.flatMap(answer => [...answer]));
  const ranked = careers.map(career => {
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
    (selected.size ? ' Interessen zählen bei der Sortierung doppelt. Die Auswahl dient zur Orientierung.' : '');

  results.innerHTML = ranked.map(({career, matches, admissionMatch}) => {
    const route = typeof career.route === 'string'
      ? career.route
      : career.route[credential.value] ?? career.route.other;
    return `<article>
      <h3>${career.title}</h3>
      <p>${career.work}</p>
      ${matches.length ? `<p><strong>Deine Übereinstimmungen</strong><br>${matches.map(tag => labels[tag]).join(', ')}</p>` : ''}
      ${admissionMatch ? '<p class="tag">Zulassungsschritt zum Prüfen</p>' : ''}
      <p><strong>Dein Ausbildungsweg</strong><br>${route}</p>
      <p><strong>Dein nächster Schritt</strong><br>${career.next}</p>
      <ul>${career.links.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join('')}</ul>
    </article>`;
  }).join('');
}

credential.value = profileCredential.value;
profileCredential.addEventListener('change', () => {
  credential.value = profileCredential.value;
  if (results.innerHTML) renderCareerResults();
});
credential.addEventListener('change', () => {
  profileCredential.value = credential.value;
  profileCredential.dispatchEvent(new Event('change'));
});
back.addEventListener('click', () => {
  rememberCareerStep();
  step--;
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
  status.focus();
});
showCareerStep();
