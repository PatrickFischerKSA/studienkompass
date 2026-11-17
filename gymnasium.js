{
  const interests = {
    law: 'Recht', business: 'Wirtschaft', society: 'Gesellschaft',
    culture: 'Kultur und Sprachen', health: 'Gesundheit und Psychologie',
    science: 'Naturwissenschaften', tech: 'Technik und Informatik',
    arts: 'Kunst, Design und Musik'
  };

  // The subject areas are examples used by the interest filter and comparison.
  const schools = [
    ['lu', 'Universität Luzern', 'Luzern', 'Universität', 'Deutsch', ['law','business','society','culture','health'],
      'Rechtswissenschaft, Philosophy, Politics and Economics (PPE), Wirtschaftswissenschaften, Gesundheitswissenschaften, Kulturwissenschaften und Theologie.',
      'Jus lässt sich mit Wirtschaft kombinieren. Gesundheitswissenschaften untersuchen Gesundheit und Versorgung. Der Luzerner Track Humanmedizin führt über den Bachelor an der UZH zum gemeinsamen Master mit der Universität Luzern.',
      'https://www.unilu.ch/studium/studienangebot/bachelor/alle-studiengaenge/'],
    ['uzh', 'Universität Zürich', 'Zürich', 'Universität', 'Überwiegend Deutsch', ['law','business','society','culture','health','science','tech'],
      'Recht, Wirtschaft, Psychologie, Humanmedizin, Chiropraktische Medizin, Biologie und Informatik.',
      'Breites Fächerspektrum mit Psychologie, Naturwissenschaften und Informatik. Prüfe im gewünschten Studiengang, welche Haupt- und Nebenfächer sich kombinieren lassen.',
      'https://www.uzh.ch/de/studies/programs/bachelor.html'],
    ['bern', 'Universität Bern', 'Bern', 'Universität', 'Überwiegend Deutsch', ['law','business','society','culture','health','science','tech'],
      'Recht, Wirtschaft, Politikwissenschaft, Psychologie, Medizin und Biologie.',
      'Humanmedizin nutzt im Bachelor problemorientiertes Lernen (PBL), Tutorien, Selbststudium und das Hausarzt-Lehrsystem. Politikwissenschaft lässt sich mit Nebenfächern verbinden.',
      'https://www.unibe.ch/studies/programs/bachelor/programs/index_eng.html'],
    ['basel', 'Universität Basel', 'Basel', 'Universität', 'Überwiegend Deutsch', ['law','business','society','culture','health','science','tech'],
      'Recht, Wirtschaft, Psychologie, Medizin, Biologie und Pharmazeutische Wissenschaften.',
      'Pharmazeutische Wissenschaften und Biologie bieten Zugänge zur biomedizinischen Forschung.',
      'https://www.unibas.ch/en/Studies/Before-My-Studies/Degree-Programs'],
    ['fr', 'Universität Freiburg', 'Freiburg / Fribourg', 'Universität', 'Deutsch und/oder Französisch je nach Fach', ['law','business','society','culture','health','science','tech'],
      'Rechtswissenschaft, Management, Wirtschaft, Psychologie, Sprachen und Naturwissenschaften.',
      'Jus kann auf Deutsch, Französisch oder zweisprachig studiert werden. Auch wirtschaftlich-juristische Studien lassen sich zweisprachig gestalten.',
      'https://studies.unifr.ch/fr/offre/courses/'],
    ['ge', 'Université de Genève', 'Genf', 'Universität', 'Überwiegend Französisch', ['law','business','society','culture','health','science','tech'],
      'Recht, Internationale Beziehungen, Psychologie, Medizin und Naturwissenschaften.',
      'Der Bachelor Internationale Beziehungen verbindet Recht, Wirtschaft, Geschichte und Politikwissenschaft. Auch im Jurastudium ist internationales Recht präsent.',
      'https://www.unige.ch/bachelor-master/bachelors/'],
    ['hsg', 'Universität St. Gallen (HSG)', 'St. Gallen', 'Universität', 'Deutsch oder Englisch je nach Programm', ['law','business','society','tech'],
      'BWL, VWL, International Affairs, Recht, Recht und Wirtschaft sowie Informatik.',
      'Das Assessmentjahr in Wirtschaft, Recht und International Affairs legt die Grundlage für mehrere Majors. Informatik hat ein eigenes Assessmentjahr.',
      'https://www.unisg.ch/en/studying/programmes/bachelor/assessment-year-in-economics-law-and-international-affairs/'],
    ['usi', 'Università della Svizzera italiana', 'Lugano und Mendrisio', 'Universität', 'Italienisch oder Englisch je nach Fach', ['business','society','culture','tech'],
      'Wirtschaft, Kommunikation, Informatik und Architektur.',
      'Architektur wird in Mendrisio angeboten. Informatik wird auf Englisch unterrichtet.',
      'https://www.usi.ch/en/education/bachelor/bachelor-degrees-at-a-glance'],
    ['eth', 'ETH Zürich', 'Zürich', 'Technische Hochschule', 'Studienbeginn auf Deutsch', ['science','tech'],
      'Maschineningenieurwissenschaften, Informatik, Architektur, Physik und Umweltnaturwissenschaften.',
      'Umweltnaturwissenschaften und Erd- und Klimawissenschaften geben dir naturwissenschaftliche Zugänge zu Umwelt und Klima.',
      'https://ethz.ch/en/studies/bachelor/bachelors-degree-programmes.ethz_search.html'],
    ['epfl', 'EPFL', 'Lausanne', 'Technische Hochschule', 'Überwiegend Französisch', ['science','tech','health'],
      'Informatik, Architektur, Maschinenbau, Physik und Life Sciences Engineering.',
      'Life Sciences Engineering verbindet Ingenieurmethoden mit Biologie. Vergleiche mit der ETH auch die Unterrichtssprache und die Fächer im ersten Jahr.',
      'https://www.epfl.ch/education/bachelor/de/bachelor-studienangebot/'],
    ['hslu', 'Hochschule Luzern (HSLU)', 'Luzern, Horw und Rotkreuz', 'Fachhochschule', 'Je nach Studiengang', ['business','society','tech','arts'],
      'Wirtschaft, Soziale Arbeit, Informatik, Technik und Architektur sowie Design, Film, Kunst und Musik.',
      'Praxisorientierte Studiengänge in der Zentralschweiz. Prüfe bei gymnasialer Matura, welche Praxis vor der Anmeldung verlangt wird.',
      'https://www.hslu.ch/de-ch/hochschule-luzern/studium/bachelor/'],
    ['zhaw', 'ZHAW', 'Winterthur, Zürich und Wädenswil', 'Fachhochschule', 'Je nach Studiengang', ['business','society','health','science','tech'],
      'Angewandte Psychologie, Gesundheit, Medizininformatik, Engineering, Wirtschaft und Life Sciences.',
      'Angewandte Psychologie und Gesundheitsberufe bieten berufsfeldbezogene Einstiege. Eignungsabklärung und Praxisnachweis hängen vom Studiengang ab.',
      'https://www.zhaw.ch/de/studium/'],
    ['fhnw', 'FH Nordwestschweiz (FHNW)', 'Nordwestschweiz', 'Fachhochschule', 'Je nach Studiengang', ['business','society','health','tech','arts'],
      'Technik, Wirtschaft, Angewandte Psychologie, Soziale Arbeit, Gestaltung und Musik.',
      'Das Angebot verteilt sich auf mehrere Campus. Standort und Praxisanforderungen beim konkreten Bachelor prüfen.',
      'https://www.fhnw.ch/de/studium'],
    ['fernuni', 'FernUni Schweiz', 'Fernstudium', 'Universitäres Institut', 'Deutsch, Französisch oder Englisch je nach Fach', ['law','business','culture','health','science'],
      'Recht, Psychologie, Geschichte, Wirtschaft und Mathematik.',
      'Universitäres Fernstudium. Prüfe feste Termine, Prüfungsform und Unterrichtssprache pro Programm.',
      'https://fernuni.ch/studium'],
    ['ffhs', 'Fernfachhochschule Schweiz', 'Fernstudium mit Unterrichtsterminen', 'Fachhochschule', 'Je nach Studiengang', ['business','health','tech'],
      'Wirtschaftsinformatik, Betriebsökonomie und Ernährung und Gesundheit.',
      'Anwendungsorientiertes Fernstudium im Verbund der SUPSI. Informiere dich über Praxisnachweis und Studienrhythmus.',
      'https://www.ffhs.ch/de/studium/leben-und-studieren'],
    ['zhdk', 'Zürcher Hochschule der Künste', 'Zürich', 'Kunst- und Musikhochschule', 'Je nach Studiengang', ['arts'],
      'Design, Film, Fine Arts, Musik, Tanz und Theater.',
      'Das Major-Minor-Modell ermöglicht fachübergreifende Kombinationen. Auf der Bewerbungsseite findest du die Auswahlverfahren und Termine pro Fach.',
      'https://www.zhdk.ch/bewerben-an-der-zhdk'],
    ['music', 'Hochschule Luzern – Musik', 'Luzern', 'Musikhochschule', 'Je nach Studiengang', ['arts'],
      'Bachelor Musik mit Profilen unter anderem in Klassik, Jazz und Volksmusik.',
      'Die Aufnahmeprüfung zählt zum Zulassungsverfahren. Prüfe beim gewünschten Profil, welches Repertoire und welche Theoriekenntnisse erwartet werden.',
      'https://www.hslu.ch/de-ch/musik/studium/aufnahmepruefungen/zulassungsbedingungen/']
  ];

  const filters = document.getElementById('gym-interests');
  const profiles = document.getElementById('gym-schools');
  const first = document.getElementById('gym-first');
  const second = document.getElementById('gym-second');
  const comparison = document.getElementById('gym-comparison');
  const names = keys => keys.map(key => interests[key]).join(', ');
  const options = schools.map(([id, title]) => `<option value="${id}">${title}</option>`).join('');
  first.innerHTML = second.innerHTML = options;
  second.value = 'uzh';

  const finder = document.getElementById('gym-finder');
  const finderResults = document.getElementById('gym-finder-results');
  const finderQuestion = document.getElementById('gym-finder-question');
  const finderProgress = document.getElementById('gym-finder-progress');
  const finderBack = document.getElementById('gym-finder-back');
  const subjects = {
    law: {lu: 'Rechtswissenschaft / Jus mit Wirtschaft', uzh: 'Rechtswissenschaft', bern: 'Rechtswissenschaft', basel: 'Rechtswissenschaft', fr: 'Rechtswissenschaft, auch zweisprachig', ge: 'Droit', hsg: 'Law oder Law and Economics', fernuni: 'Bachelor of Law'},
    business: {lu: 'Wirtschaftswissenschaften oder PPE', uzh: 'Wirtschaftswissenschaften', bern: 'Betriebswirtschaftslehre', basel: 'Wirtschaftswissenschaften', fr: 'Management', ge: 'Économie et management', hsg: 'BWL oder VWL', usi: 'Wirtschaftswissenschaften', hslu: 'Business Administration', zhaw: 'Betriebsökonomie', fhnw: 'Betriebsökonomie', fernuni: 'Wirtschaftswissenschaften', ffhs: 'Betriebsökonomie'},
    society: {lu: 'Politikwissenschaft oder PPE', uzh: 'Soziologie', bern: 'Politikwissenschaft', basel: 'Soziologie', fr: 'Sozialwissenschaften', ge: 'Internationale Beziehungen', hsg: 'International Affairs', usi: 'Kommunikation', hslu: 'Soziale Arbeit', zhaw: 'Soziale Arbeit', fhnw: 'Soziale Arbeit'},
    culture: {lu: 'Kulturwissenschaften', uzh: 'Germanistik', bern: 'Geschichte', basel: 'Geschichte', fr: 'Sprachen oder Mehrsprachigkeit', ge: 'Lettres', usi: 'Italienische Sprache, Literatur und Kultur', fernuni: 'Geschichte'},
    health: {lu: 'Gesundheitswissenschaften', uzh: 'Psychologie, Humanmedizin oder Chiropraktik', bern: 'Humanmedizin mit PBL oder Psychologie', basel: 'Pharmazeutische Wissenschaften oder Humanmedizin', fr: 'Psychologie', ge: 'Psychologie oder Medizin', epfl: 'Life Sciences Engineering', zhaw: 'Angewandte Psychologie oder Ergotherapie', fhnw: 'Angewandte Psychologie', fernuni: 'Psychologie', ffhs: 'Ernährung und Gesundheit'},
    science: {uzh: 'Biologie', bern: 'Biologie', basel: 'Biologie', fr: 'Biologie', ge: 'Biologie', eth: 'Physik oder Umweltnaturwissenschaften', epfl: 'Physik oder Life Sciences Engineering', zhaw: 'Biotechnologie', fernuni: 'Mathematik'},
    tech: {uzh: 'Informatik', bern: 'Informatik', basel: 'Informatik', fr: 'Informatik', ge: 'Informatique', hsg: 'Computer Science', usi: 'Informatik oder Architektur', eth: 'Informatik, Architektur oder Maschineningenieurwissenschaften', epfl: 'Informatik, Architektur oder Maschinenbau', hslu: 'Informatik oder Architektur', zhaw: 'Informatik oder Medizininformatik', fhnw: 'Informatik', ffhs: 'Wirtschaftsinformatik'},
    arts: {hslu: 'Design, Film oder Kunst', fhnw: 'Gestaltung oder Musik', zhdk: 'Design, Film, Fine Arts, Musik, Tanz oder Theater', music: 'Musik in Klassik, Jazz oder Volksmusik'}
  };
  const photos = ['studying','banking','social','architecture','nursing','lab','studio','theatre'];
  const finderSteps = [
    ['Welches Fachgebiet zieht dich an?', Object.entries(interests).map(([key, title], index) => [key, title, photos[index]])],
    ['Wie möchtest du arbeiten?', [
      ['research', 'Fragen erforschen und Theorien verstehen', 'lab'],
      ['practice', 'In Projekten und an praktischen Aufgaben lernen', 'studio'],
      ['creative', 'Gestalten, auftreten oder künstlerisch arbeiten', 'theatre'],
      ['any', 'Ich möchte beides kennenlernen', 'studying']
    ]],
    ['Wie soll dein Studienalltag aussehen?', [
      ['campus', 'Vor Ort am Campus studieren', 'campus'],
      ['distance', 'Mit Fernstudium flexibel bleiben', 'studying'],
      ['any', 'Beide Studienformen prüfen', 'plan']
    ]]
  ];
  const finderAnswers = [];
  let finderStep = 0;
  const distanceIds = ['fernuni', 'ffhs'];

  function renderFinder() {
    const finished = finderStep === finderSteps.length;
    finderResults.hidden = !finished;
    finderBack.hidden = finderStep === 0;
    finderProgress.textContent = finished ? 'Deine Studienvorschläge' : `Frage ${finderStep + 1} von ${finderSteps.length}`;
    if (finished) {
      finderQuestion.replaceChildren();
      filters.value = finderAnswers[0];
      renderProfiles(filters.value, true);
      return;
    }
    const [question, choices] = finderSteps[finderStep];
    finderQuestion.innerHTML = `<fieldset><legend tabindex="-1">${question}</legend>
      <div class="career-question-cards">${choices.map(([key, title, photo]) =>
        `<button type="button" class="career-question-card" data-gym-answer="${key}" aria-pressed="${finderAnswers[finderStep] === key}">
          <img src="images/${photo}.webp" alt="" width="320" height="180"><span>${title}</span>
        </button>`).join('')}</div></fieldset>`;
  }

  function focusFinder() {
    (finderQuestion.querySelector('legend') ?? filters).focus({preventScroll: true});
    finder.scrollIntoView({block: 'start'});
  }

  finder.addEventListener('click', event => {
    const answer = event.target.closest('[data-gym-answer]');
    if (!answer) return;
    finderAnswers[finderStep++] = answer.dataset.gymAnswer;
    renderFinder();
    focusFinder();
  });
  finderBack.addEventListener('click', () => {
    finderStep--;
    renderFinder();
    focusFinder();
  });

  function fit(school) {
    const [id, , , type] = school;
    const [, approach, format] = finderAnswers;
    const distance = distanceIds.includes(id);
    const creative = id === 'hslu' || id === 'fhnw' || id === 'zhdk' || id === 'music';
    const practice = type.includes('Fachhochschule') || creative;
    return (format === 'distance' && distance || format === 'campus' && !distance ? 2 : 0)
      + (approach === 'research' && !practice || approach === 'practice' && practice || approach === 'creative' && creative ? 1 : 0);
  }

  function renderProfiles(interest = '', ranked = false) {
    const matches = schools.filter(school => !interest || school[5].includes(interest));
    if (ranked) matches.sort((a, b) => fit(b) - fit(a));
    document.getElementById('gym-count').textContent = ranked
      ? `${matches.length} Hochschulen · nach deinen Antworten geordnet`
      : `${matches.length} Hochschulen`;
    profiles.innerHTML = matches
      .map(([id, title, place, type, language, fields, programmes, focus, url]) => `<article class="panel gym-school">
        <h3>${title}</h3><p class="muted">${place} · ${type}</p>
        <p>${interest && subjects[interest][id] ? `<strong>${subjects[interest][id]}</strong>` : programmes}</p>
        <details><summary>Was zeichnet sie aus?</summary><p>${focus}</p><p>Unterrichtssprache: ${language}</p></details>
        <p><a href="${url}">Offizielles Angebot und Informationen</a></p>
        ${id === 'lu' ? '' : `<button type="button" class="secondary" data-gym-compare="${id}">Mit Luzern vergleichen</button>`}
      </article>`).join('');
  }

  function renderComparison() {
    const left = schools.find(([id]) => id === first.value);
    const right = schools.find(([id]) => id === second.value);
    if (left === right) {
      comparison.textContent = 'Wähle für den Vergleich zwei verschiedene Hochschulen.';
      return;
    }
    const shared = left[5].filter(field => right[5].includes(field));
    comparison.innerHTML = `<p><strong>Gemeinsame Studienbereiche</strong><br>${shared.length ? names(shared) : 'Die hier gezeigten Studienbereiche setzen unterschiedliche Schwerpunkte.'}</p>
      <div class="gym-comparison-grid">${[left, right].map(([id, title, place, type, language, fields, programmes, focus, url]) =>
        `<article><h4>${title}</h4><p>${place} · ${type}<br>${language}</p><p><strong>Bachelorbeispiele</strong><br>${programmes}</p><p><strong>Besonderheit</strong><br>${focus}</p><a href="${url}">Angebot nachlesen</a></article>`
      ).join('')}</div><p class="muted">Gemeinsame Bereiche können unterschiedliche Studiengänge einschliessen. Vergleiche die Pflichtmodule und Zulassung des konkreten Bachelors.</p>`;
  }

  function setupMode(sectionId, prefix) {
    const mode = document.getElementById(sectionId);
    const start = document.getElementById(`${prefix}-start`);
    const back = mode.querySelector('.mode-back');
    const views = mode.querySelectorAll('.gym-view');
    let lastEntry;

    function openView(view) {
      for (const panel of views) panel.hidden = panel !== view;
      start.hidden = Boolean(view);
      back.hidden = !view;
      (view?.querySelector('h3') ?? lastEntry)?.focus({preventScroll: true});
      mode.querySelector('h2').scrollIntoView({block: 'start'});
    }

    start.addEventListener('click', event => {
      const entry = event.target.closest('[data-mode-view]');
      if (!entry) return;
      lastEntry = entry;
      openView(document.getElementById(`${prefix}-${entry.dataset.modeView}`));
    });
    back.addEventListener('click', () => openView(null));
    return openView;
  }

  setupMode('fms', 'fms');
  const openView = setupMode('gymnasium', 'gym');
  const topicChoice = document.getElementById('gym-topic-select');

  function showTopic() {
    for (const topic of document.querySelectorAll('#gym-topics .gym-topic')) {
      topic.hidden = topic.id !== topicChoice.value;
    }
  }
  topicChoice.addEventListener('change', showTopic);
  showTopic();

  filters.innerHTML = [['', 'Alle Studienbereiche'], ...Object.entries(interests)].map(([key, label]) =>
    `<option value="${key}">${label}</option>`
  ).join('');
  filters.addEventListener('change', () => renderProfiles(filters.value, filters.value === finderAnswers[0]));
  profiles.addEventListener('click', event => {
    const picked = event.target.closest('[data-gym-compare]');
    if (!picked) return;
    first.value = 'lu';
    second.value = picked.dataset.gymCompare;
    renderComparison();
    openView(document.getElementById('gym-compare'));
  });
  first.addEventListener('change', renderComparison);
  second.addEventListener('change', renderComparison);
  renderFinder();
  renderComparison();
}
