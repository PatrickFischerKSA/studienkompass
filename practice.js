{
  const fields = {
    people: ['Menschen betreuen und begleiten', 'social', ['Fachperson Betreuung EFZ', 'Fachperson Gesundheit EFZ'], ['Praktikum in einer Kita', 'Sozial- oder Pflegepraktikum'], ['Betreuungsassistenz', 'Patientenbegleitdienst']],
    tech: ['Bauen, reparieren und mit Technik arbeiten', 'studio', ['Elektroinstallateur:in EFZ', 'Polymechaniker:in EFZ'], ['Werkstattpraktikum', 'Produktionspraktikum'], ['Produktionsmitarbeit', 'Montagehilfe']],
    office: ['Organisieren und mit Kundschaft arbeiten', 'banking', ['Kaufmann/Kauffrau EFZ', 'Detailhandelsfachperson EFZ'], ['kaufmännisches Praktikum', 'Praktikum Kundendienst'], ['Empfang', 'Verkaufsaushilfe', 'Kundendienst']],
    food: ['Gäste empfangen und verpflegen', 'hospitality', ['Koch/Köchin EFZ', 'Hotel-Kommunikationsfachperson EFZ'], ['Servicepraktikum', 'Hotelpraktikum'], ['Serviceaushilfe', 'Küchenhilfe', 'Eventmitarbeit']],
    logistics: ['Waren bewegen und Abläufe im Blick behalten', 'train', ['Logistiker:in EFZ'], ['Logistikpraktikum', 'Lagerpraktikum'], ['Lagermitarbeit', 'Kommissionierung', 'Versandhilfe']],
    digital: ['Digital arbeiten und gestalten', 'studio', ['Mediamatiker:in EFZ', 'Informatiker:in EFZ'], ['Praktikum Kommunikation', 'Praktikum IT-Support'], ['IT-Support für Einsteiger:innen', 'Content-Assistenz']]
  };
  const paths = {
    job: { title: 'Job suchen', exampleIndex: 4, url: 'https://www.job-room.ch/', link: 'Zum Job-Room' },
    internship: { title: 'Praktikum suchen', exampleIndex: 3, url: 'https://www.job-room.ch/', link: 'Zum Job-Room' },
    apprenticeship: { title: 'Lehrstelle suchen', exampleIndex: 2, url: 'https://www.berufsberatung.ch/dyn/show/204406', link: 'Zur Lehrstellensuche' }
  };
  const steps = [
    ['Was möchtest du als Nächstes?', [
      ['job', 'Geld verdienen und direkt arbeiten', 'hospitality'],
      ['internship', 'In einen Beruf reinschauen', 'studio'],
      ['apprenticeship', 'Im Betrieb lernen und einen Berufsabschluss machen', 'teaching'],
      ['open', 'Ich möchte die Möglichkeiten vergleichen', 'plan']
    ]],
    ['Welche Aufgaben passen zu dir?', Object.entries(fields).map(([key, [title, image]]) => [key, title, image])],
    ['Was ist dir beim Einstieg wichtig?', [
      ['soon', 'Möglichst bald anfangen', 'train'],
      ['learn', 'Zeit zum Einarbeiten und Ausprobieren', 'campus'],
      ['long', 'Ein Einstieg mit Perspektive', 'studying']
    ]]
  ];
  const finder = document.getElementById('practice-finder');
  const question = document.getElementById('practice-question');
  const progress = document.getElementById('practice-progress');
  const back = document.getElementById('practice-back');
  const results = document.getElementById('practice-results');
  const answers = [];
  let step = 0;

  function renderResults() {
    const [chosenPath, field, priority] = answers;
    const preferred = {soon:'job', learn:'internship', long:'apprenticeship'}[priority];
    const first = chosenPath === 'open' ? preferred : chosenPath;
    const ordered = [first, ...Object.keys(paths).filter(key => key !== first)];
    const nextStep = {
      soon: 'Filtere nach «per sofort», «befristet» oder einem passenden Startdatum.',
      learn: 'Frag nach Einarbeitung, Betreuung und der Möglichkeit zum Schnuppern.',
      long: 'Frag nach Entwicklungsmöglichkeiten und wie es nach dem Einstieg weitergeht.'
    }[priority];
    results.innerHTML = ordered.map(key => {
      const path = paths[key];
      return `<article class="panel"><h4>${path.title}</h4><ul>${fields[field][path.exampleIndex].map(example => `<li>${example}</li>`).join('')}</ul>
        <p>${nextStep} Prüfe Anforderungen, Arbeitsort und Pensum im Inserat.</p><a href="${path.url}">${path.link}</a></article>`;
    }).join('');
  }

  function render() {
    const finished = step === steps.length;
    progress.textContent = finished ? 'Deine Praxisvorschläge' : `Frage ${step + 1} von ${steps.length}`;
    results.hidden = !finished;
    back.hidden = step === 0;
    question.replaceChildren();
    if (finished) {
      renderResults();
      return;
    }
    const [title, choices] = steps[step];
    question.innerHTML = `<fieldset><legend tabindex="-1">${title}</legend><div class="career-question-cards">${choices.map(([key, label, image]) =>
      `<button type="button" class="career-question-card" data-practice-answer="${key}" aria-pressed="${answers[step] === key}"><img src="images/${image}.webp" alt="" width="320" height="180"><span>${label}</span></button>`
    ).join('')}</div></fieldset>`;
  }
  function updateQuestion() {
    render();
    (question.querySelector('legend') ?? back).focus({preventScroll: true});
    finder.scrollIntoView({block: 'start'});
  }
  question.addEventListener('click', event => {
    const choice = event.target.closest('[data-practice-answer]');
    if (!choice) return;
    answers[step++] = choice.dataset.practiceAnswer;
    updateQuestion();
  });
  back.addEventListener('click', () => {
    step--;
    updateQuestion();
  });
  render();
}
