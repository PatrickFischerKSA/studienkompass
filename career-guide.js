const careerQuestions = [
  ['Was möchtest du im Berufsalltag tun?', {
    teach: 'Unterrichten und erklären', support: 'Individuell fördern',
    language: 'Mit Sprache arbeiten', movement: 'Mit Bewegung und Spiel arbeiten',
    daily: 'Selbstständigkeit im Alltag fördern', counsel: 'Beraten und Konflikte klären',
    care: 'Kinder betreuen und begleiten', youth: 'Mit Jugendlichen arbeiten',
    mind: 'Erleben und Verhalten verstehen', research: 'Forschen und Daten auswerten'
  }],
  ['Welche Eigenschaften passen zu dir?', {
    patient: 'Geduldig', creative: 'Kreativ', structured: 'Strukturiert',
    empathic: 'Einfühlsam', calm: 'Ruhig in anspruchsvollen Situationen'
  }],
  ['Was gelingt dir bereits oder möchtest du gezielt üben?', {
    explain: 'Verständlich erklären', observe: 'Genau beobachten',
    listen: 'Aktiv zuhören', groups: 'Gruppen anleiten',
    plan: 'Aktivitäten planen', collaborate: 'Im Team zusammenarbeiten',
    analyse: 'Informationen systematisch auswerten'
  }]
];

const hfh = 'https://www.hfh.ch/ausbildung/';
const zhawSocial = 'https://www.zhaw.ch/de/sozialearbeit/';
const phzh = 'https://phzh.ch/de/studium/';
const hfhBachelor = {
  fms: 'Kläre zuerst den Erwerb der Fachmaturität Pädagogik oder einen anerkannten alternativen Zugang.',
  education: 'Die Fachmaturität Pädagogik ist ein anerkannter Vorbildungsausweis. Prüfe die weiteren Zulassungsschritte.',
  health: 'Die Fachmaturität Gesundheit ist ein anerkannter Vorbildungsausweis. Prüfe die weiteren Zulassungsschritte.',
  social: 'Die Fachmaturität Soziale Arbeit ist ein anerkannter Vorbildungsausweis. Prüfe die weiteren Zulassungsschritte.',
  gym: 'Die gymnasiale Matura ist ein anerkannter Vorbildungsausweis. Prüfe die weiteren Zulassungsschritte.'
};

const careers = [
  {
    title: 'Lehrperson Kindergarten, Unterstufe oder Primarstufe',
    tags: ['teach', 'care', 'structured', 'creative', 'explain', 'groups', 'plan'],
    work: 'Unterricht vorbereiten, eine Klasse führen und Kinder beim Lernen begleiten.',
    route: {
      fms: 'An der KSA kannst du die Fachmaturität Pädagogik anschliessen. Alternativ kannst du ein PH-Aufnahmeverfahren prüfen.',
      education: 'Direkter Zugang zu den entsprechenden Bachelorstudiengängen an der PH Schwyz, PH Zürich und PH Zug.',
      gym: 'Direkter Zugang zu den entsprechenden Bachelorstudiengängen an der PH Schwyz, PH Zürich und PH Zug.',
      other: 'Kläre das Aufnahmeverfahren für deine Fachmaturität bei der gewünschten PH.'
    },
    next: 'Vergleiche die Zielstufen und Studienformen und besuche einen Infoanlass.',
    links: [['Drei PHs vergleichen', '#ph-vergleich']]
  },
  {
    title: 'Lehrperson Sekundarstufe I',
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
    tags: ['support', 'teach', 'patient', 'empathic', 'observe', 'explain', 'collaborate'],
    work: 'Lernbarrieren erkennen, individuelle Förderung planen und mit Lehrpersonen zusammenarbeiten.',
    route: 'Ein Weg führt über ein PH-Studium mit Lehrdiplom zum Master. Bei bestimmten verwandten Abschlüssen prüft die HfH eine Zulassung mit Zusatzleistungen.',
    next: 'Frage eine schulische Heilpädagogin oder einen schulischen Heilpädagogen nach einer Hospitation.',
    links: [['HfH · Master', hfh + 'ma-schulische-heilpaedagogik/auf-einen-blick'], ['HfH · Zulassung', hfh + 'ma-schulische-heilpaedagogik/zulassung']]
  },
  {
    title: 'Logopädie',
    tags: ['language', 'support', 'patient', 'creative', 'observe', 'listen', 'plan'],
    work: 'Menschen mit Schwierigkeiten beim Sprechen, in der Sprache oder in der Kommunikation begleiten.',
    route: hfhBachelor,
    next: 'Schau dir an, wie eine logopädische Abklärung und eine Therapiestunde aufgebaut sind.',
    links: [['HfH · Bachelor', hfh + 'ba-logopaedie'], ['HfH · Zulassung', hfh + 'ba-logopaedie/zulassung']]
  },
  {
    title: 'Ergotherapie',
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
    tags: ['movement', 'support', 'care', 'creative', 'patient', 'observe', 'plan'],
    work: 'Kinder mit Bewegung und Spiel in ihrer motorischen, emotionalen und sozialen Entwicklung unterstützen.',
    route: hfhBachelor,
    next: 'Achte bei einer Hospitation darauf, wie Spiel und Bewegung für individuelle Förderziele eingesetzt werden.',
    links: [['HfH · Zulassung zum Bachelor', hfh + 'ba-psychomotoriktherapie/zulassung']]
  },
  {
    title: 'Schulsozialarbeit',
    tags: ['counsel', 'youth', 'support', 'empathic', 'calm', 'listen', 'collaborate'],
    work: 'Kinder und Jugendliche in schwierigen Situationen beraten und mit Eltern sowie der Schule zusammenarbeiten.',
    route: 'Ein Weg führt über den Bachelor Soziale Arbeit. Kläre bei der ZHAW, welche Praxiserfahrung für deinen Abschluss verlangt wird.',
    next: 'Triff eine Fachperson der Schulsozialarbeit und frage nach typischen Aufgaben und Praktikumsmöglichkeiten.',
    links: [['ZHAW · Bachelorzulassung', zhawSocial + 'studium/bachelor-in-sozialer-arbeit/zulassung/voraussetzungen-fuers-studium'], ['ZHAW · spätere Spezialisierung', zhawSocial + 'weiterbildung/detail/kurs/cas-schulsozialarbeit-cas-schulsozialpaedagogik']]
  },
  {
    title: 'Kindheitspädagogik HF',
    tags: ['care', 'daily', 'movement', 'empathic', 'creative', 'groups', 'plan', 'collaborate'],
    work: 'Kinder in Bildungs- und Betreuungseinrichtungen begleiten, etwa in schulergänzenden Tagesstrukturen.',
    route: 'Der anerkannte Fachmittelschulausweis kommt bei ARTISET als Vorbildung infrage. Prüfe auch Praxisausbildungsplatz und Aufnahmebedingungen.',
    next: 'Vereinbare einen Schnuppertag in einer schulergänzenden Betreuung.',
    links: [['ARTISET · Ausbildung und Zulassung', 'https://artiset.ch/de/bildung/ausbildung/hoehere-fachschule-kindheitspaedagogik']]
  },
  {
    title: 'Heilpädagogische Früherziehung',
    tags: ['care', 'support', 'counsel', 'empathic', 'patient', 'observe', 'listen', 'collaborate'],
    work: 'Kinder mit Entwicklungsauffälligkeiten oder Behinderungen und ihre Familien vor und rund um den Schuleintritt begleiten.',
    route: 'Der HfH-Master setzt eine anerkannte tertiäre Vorbildung und einschlägige Berufserfahrung voraus. Je nach Abschluss kommen Zusatzleistungen hinzu.',
    next: 'Vergleiche vor der Wahl einer Erstausbildung die von der HfH anerkannten Vorbildungen.',
    links: [['HfH · Master', hfh + 'ma-heilpaedagogische-frueherziehung/auf-einen-blick'], ['HfH · Zulassung', hfh + 'ma-heilpaedagogische-frueherziehung/zulassung']]
  },
  {
    title: 'Angewandte Psychologie · ZHAW',
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
    tags: ['mind', 'support', 'counsel', 'youth', 'empathic', 'observe', 'listen', 'analyse', 'collaborate'],
    work: 'Lern-, Entwicklungs- und Verhaltensfragen abklären und Kinder, Eltern sowie Schulen beraten.',
    route: 'Plane einen Bachelor und danach einen Master in Psychologie. Der Kanton Schwyz verlangt für schulpsychologische Stellen einen Master oder ein Lizentiat in Psychologie.',
    next: 'Lies das Aufgabenprofil des Schulpsychologischen Dienstes und vergleiche Psychologiestudiengänge mit Blick auf Diagnostik, Entwicklungspsychologie und Praktika.',
    links: [['Kanton Schwyz · Schulpsychologischer Dienst', 'https://www.sz.ch/verwaltung/bildungsdepartement/amt-fuer-volksschulen-und-sport/besonderer-bildungsbedarf/schulpsychologie.html/8756-8758-8802-9466-9467-12713-12723'], ['Kanton Schwyz · Anforderungsprofil einer schulpsychologischen Stelle', 'https://jobs.sz.ch/offene-stellen/schulpsychologin-schulpsychologe/2077e80b-f676-42ea-a091-d19608261e62']]
  }
];

const form = document.getElementById('career-form');
const credential = document.getElementById('career-credential');
const profileCredential = document.getElementById('credential');
const results = document.getElementById('career-results');
const status = document.getElementById('career-status');
const labels = Object.assign({}, ...careerQuestions.map(([, options]) => options));
const interestKeys = Object.keys(careerQuestions[0][1]);

document.getElementById('career-questions').innerHTML = careerQuestions.map(([question, options]) =>
  `<fieldset><legend>${question}</legend><div class="choices">${Object.entries(options).map(([key, label]) =>
    `<label class="choice"><input type="checkbox" name="trait" value="${key}"> ${label}</label>`
  ).join('')}</div></fieldset>`
).join('');

function renderCareerResults() {
  const selected = new Set(new FormData(form).getAll('trait'));
  const ranked = careers.map(career => {
    const matches = career.tags.filter(tag => selected.has(tag));
    const score = matches.reduce((total, tag) => total + (interestKeys.includes(tag) ? 2 : 1), 0);
    return {career, matches, score};
  }).sort((a, b) => b.score - a.score);

  status.textContent = selected.size
    ? 'Die Berufe mit den meisten Übereinstimmungen stehen zuerst. Interessen zählen doppelt. Die Reihenfolge dient zur Orientierung.'
    : `Alle ${careers.length} Berufs- und Studienwege. Wähle Interessen und Stärken aus, um die Reihenfolge anzupassen.`;

  results.innerHTML = ranked.map(({career, matches}) => {
    const route = typeof career.route === 'string'
      ? career.route
      : career.route[credential.value] ?? career.route.other;
    return `<article>
      <h3>${career.title}</h3>
      <p>${career.work}</p>
      ${matches.length ? `<p><strong>Deine Übereinstimmungen</strong><br>${matches.map(tag => labels[tag]).join(', ')}</p>` : ''}
      <p><strong>Dein Ausbildungsweg</strong><br>${route}</p>
      <p><strong>Dein nächster Schritt</strong><br>${career.next}</p>
      <ul>${career.links.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join('')}</ul>
    </article>`;
  }).join('');
}

credential.value = profileCredential.value;
profileCredential.addEventListener('change', () => {
  credential.value = profileCredential.value;
  renderCareerResults();
});
credential.addEventListener('change', () => {
  profileCredential.value = credential.value;
  profileCredential.dispatchEvent(new Event('change'));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  renderCareerResults();
  status.scrollIntoView({block: 'nearest'});
});
renderCareerResults();
