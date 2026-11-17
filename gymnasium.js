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

  function renderProfiles(interest = '') {
    profiles.innerHTML = schools.filter(school => !interest || school[5].includes(interest))
      .map(([id, title, place, type, language, fields, programmes, focus, url]) => `<article class="panel gym-school">
        <h3>${title}</h3><p class="muted">${place} · ${type}</p>
        <p>${programmes}</p>
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

  filters.innerHTML = [['', 'Alle Hochschulen'], ...Object.entries(interests)].map(([key, label]) =>
    `<button type="button" class="secondary" data-gym-interest="${key}" aria-pressed="${!key}">${label}</button>`
  ).join('');
  filters.addEventListener('click', event => {
    const picked = event.target.closest('[data-gym-interest]');
    if (!picked) return;
    for (const button of filters.querySelectorAll('button')) button.setAttribute('aria-pressed', String(button === picked));
    renderProfiles(picked.dataset.gymInterest);
  });
  profiles.addEventListener('click', event => {
    const picked = event.target.closest('[data-gym-compare]');
    if (!picked) return;
    first.value = 'lu';
    second.value = picked.dataset.gymCompare;
    renderComparison();
    first.focus({preventScroll: true});
    document.getElementById('gym-compare-title').scrollIntoView({block: 'start'});
  });
  first.addEventListener('change', renderComparison);
  second.addEventListener('change', renderComparison);
  renderProfiles();
  renderComparison();
}
