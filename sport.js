{
  const questions = [
    ['Wie steht dein sportlicher Plan?', [
      ['fix', 'Trainings- und Wettkampfplan stehen'],
      ['open', 'Selektion oder Pensum sind noch offen']
    ]],
    ['Was möchtest du neben dem Sport machen?', [
      ['study', 'Ein Studium beginnen'],
      ['work', 'Arbeiten, ein Praktikum oder eine Lehre machen'],
      ['focus', 'Eine Saison auf den Sport setzen']
    ]],
    ['Wo erwartest du den grössten Engpass?', [
      ['time', 'Training, Reisen und Wettkämpfe'],
      ['money', 'Finanzierung und Einkommen'],
      ['backup', 'Eine Perspektive bei Verletzung oder verpasster Selektion']
    ]]
  ];
  const priorities = {
    time: 'Markiere im Jahreskalender Trainingslager, Wettkämpfe und Reisezeiten. Vergleiche sie mit Präsenzterminen, Prüfungen oder fixen Arbeitsschichten.',
    money: 'Rechne Sport, Reisen und Lebenshaltungskosten gegen gesicherte Einnahmen. Kläre mit dem Verband, welche Unterstützung für dich infrage kommt.',
    backup: 'Vereinbare einen Termin zur Standortbestimmung nach der Selektion oder am Saisonende. Halte eine konkrete Bildungs- oder Bewerbungsoption mit Frist fest.'
  };
  const paths = {
    study: ['Studium und Spitzensport', 'Wähle ein Fach, das dich interessiert. Frage die Hochschule vor der Anmeldung, wie Teilzeit, Präsenz und Prüfungen geregelt sind, und reiche deinen Saisonplan ein.', '#gymnasium', 'Studienrichtungen erkunden'],
    work: ['Praxis und Spitzensport', 'Suche nach Arbeitsorten mit kurzen Wegen zum Training. Kläre Schichtzeiten, Pensum und Abwesenheiten vor einem Vertragsabschluss.', '#praxis', 'Lehrstellen, Praktika und Jobs ansehen'],
    focus: ['Eine Saison mit Sportfokus', 'Lege mit Trainerteam und Verband Saisonziele und Selektionsdaten fest. Halte fest, wie du die Saison finanzierst und wann du einen Bildungs- oder Berufseinstieg vorbereitest.', '#plan', 'Nächsten Schritt festhalten']
  };

  const question = document.getElementById('sport-question');
  const progress = document.getElementById('sport-progress');
  const back = document.getElementById('sport-back');
  const answers = [];
  let step = 0;

  function render(moveFocus = true) {
    const finished = step === questions.length;
    progress.textContent = finished ? 'Deine nächsten Schritte' : `Frage ${step + 1} von ${questions.length}`;
    back.hidden = step === 0;
    if (finished) {
      const [season, path, priority] = answers;
      const [title, description, link, label] = paths[path];
      const planning = season === 'fix'
        ? 'Nimm deinen Saisonplan zum Beratungsgespräch mit.'
        : 'Kläre mit Trainerteam und Verband, wann Selektion und Pensum feststehen. Plane bis dahin mit zwei möglichen Trainingsumfängen.';
      question.innerHTML = `<h4 tabindex="-1">${title}</h4><ol><li>${planning}</li><li>${description}</li><li>${priorities[priority]}</li></ol>
        <p><a href="${link}">${label}</a></p><p><a href="https://www.swissolympic.ch/athlete-hub/Aus--und-Weiterbildung/studium">Beratung und Planungshilfen von Swiss Olympic</a></p>`;
    } else {
      const [title, options] = questions[step];
      question.innerHTML = `<fieldset><legend tabindex="-1">${title}</legend><div class="choices">${options.map(([key, label]) =>
        `<button type="button" data-sport-answer="${key}" aria-pressed="${answers[step] === key}">${label}</button>`
      ).join('')}</div></fieldset>`;
    }
    if (moveFocus) question.querySelector('legend, h4').focus();
  }

  question.addEventListener('click', event => {
    const choice = event.target.closest('[data-sport-answer]');
    if (!choice) return;
    answers[step++] = choice.dataset.sportAnswer;
    render();
  });
  back.addEventListener('click', () => {
    step--;
    render();
  });
  render(false);
}
