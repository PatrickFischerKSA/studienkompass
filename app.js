const interests = {
  research: 'Theorie und Forschung', practice: 'Praxis und Anwendung',
  teaching: 'Unterrichten', explore: 'Neues ausprobieren', work: 'Berufserfahrung sammeln',
  qualification: 'Einen Berufsabschluss erwerben'
};

const paths = [
  ['Universität / ETH', 'Studium', ['research'], 'Wissenschaftliche Grundlagen, Theorien und Forschung vertiefen.', 'Gymnasiale Maturität. Für einzelne Fächer gelten besondere Verfahren.', 'Bachelor meist 3 Jahre, Master zusätzlich 1,5–2 Jahre.', 5],
  ['Fachhochschule (FH)', 'Studium', ['practice'], 'Fachwissen in konkreten Projekten und beruflichen Zusammenhängen anwenden.', 'Mit gymnasialer Maturität ist meist einschlägige Arbeitswelterfahrung nötig. Je nach Studiengang gibt es eine Eignungsabklärung.', 'Bachelor in Vollzeit meist 3 Jahre.', 7],
  ['Pädagogische Hochschule (PH)', 'Studium', ['teaching', 'practice'], 'Lernen und Unterricht gestalten. Theorie, Didaktik und Schulpraxis verbinden.', 'Voraussetzungen und erforderliche Abschlüsse hängen von der Zielstufe ab.', 'Dauer und Abschluss hängen von der Zielstufe ab.', 9],
  ['Zwischenlösung', 'Orientierung', ['explore', 'work'], 'Mit einem Praktikum, Auslandaufenthalt, Job oder Dienst Zeit zum Erkunden nutzen.', 'Voraussetzungen richten sich nach dem gewählten Angebot.', 'Plane rückwärts vom gewünschten Ausbildungs- oder Studienstart.', 11],
  ['Höhere Fachschule (HF)', 'Höhere Berufsbildung', ['practice', 'qualification'], 'Dich auf berufliche Aufgaben spezialisieren und Gelerntes im Berufsalltag anwenden.', 'Prüfe beim Anbieter, ob Maturität, Berufspraxis oder weitere Nachweise erforderlich sind.', 'Dauer und berufsbegleitende Modelle hängen vom Bildungsgang ab.', 13],
  ['Berufliche Grundbildung', 'Berufsbildung', ['practice', 'work', 'qualification'], 'Einen Beruf im Lehrbetrieb und an der Berufsfachschule lernen. Way-up kann eine verkürzte Ausbildung ermöglichen.', 'Lehrbetrieb suchen und Verkürzung für den konkreten Beruf abklären.', 'Die Dauer hängt von Beruf und vereinbarter Verkürzung ab.', 15],
  ['Direkter Berufseinstieg', 'Arbeitswelt', ['work', 'explore'], 'Erste Arbeitserfahrung sammeln und berufliche Interessen im Alltag erproben.', 'Stellenprofile und Anforderungen von Betrieben prüfen.', 'Der Einstieg richtet sich nach Stellenangebot und Vertrag.', 17]
];

paths.push(['Fachmaturität erwerben', 'Anschluss an die FMS', ['practice', 'teaching', 'qualification'],
  'Vertiefe dein Berufsfeld und verfasse eine Fachmaturitätsarbeit.',
  'Fachmittelschulausweis. Kläre die Voraussetzungen für dein Berufsfeld mit der Schule.',
  'Im Kanton Schwyz etwa ein halbes bis ein Jahr. In Pädagogik ergänzt du die Allgemeinbildung. In Gesundheit und Sozialer Arbeit steht ein begleitetes Praktikum im Zentrum.']);

const routeOrder = {
  fms: [7, 4, 3, 5, 6, 2, 1, 0],
  education: [2, 4, 1, 0, 3, 5, 6],
  health: [1, 4, 0, 2, 3, 5, 6],
  social: [1, 4, 0, 2, 3, 5, 6],
  gym: [0, 1, 2, 3, 4, 5, 6]
};

const routes = {
  fms: 'Mit dem FMS-Ausweis kannst du eine passende Höhere Fachschule prüfen oder die Fachmaturität anschliessen. Für ein FH- oder PH-Studium ist die passende Fachmaturität ein typischer nächster Schritt.',
  education: 'Die Fachmaturität Pädagogik eröffnet den prüfungsfreien Zugang zum PH-Studium für Vorschule und Primarstufe. Prüfe die Anforderungen für andere Zielstufen separat.',
  health: 'Mit der Fachmaturität Gesundheit kommen insbesondere FH-Studiengänge im Gesundheitsbereich infrage, etwa Pflege oder Physiotherapie. Prüfe Eignungsabklärung und Praxisanforderungen.',
  social: 'Mit der Fachmaturität Soziale Arbeit kommt insbesondere ein FH-Studium in Sozialer Arbeit infrage. Kläre die Anforderungen an Berufspraxis und das Aufnahmeverfahren.',
  gym: 'Mit gymnasialer Matura stehen dir Uni und ETH in der Regel direkt offen. Für ein FH-Studium ist meist einschlägige Arbeitswelterfahrung erforderlich.'
};

function admission(path) {
  const index = paths.indexOf(path);
  const credential = state.credential;
  if (credential === 'gym') return path[4];
  if (index === 0) return credential === 'fms'
    ? 'Typischer Weg: Fachmaturität erwerben, dann die Passerellen-Ergänzungsprüfung bestehen. Fachspezifische Voraussetzungen separat prüfen.'
    : 'Mit bestandener Passerellen-Ergänzungsprüfung ist der Zugang zu Uni und ETH möglich. Fachspezifische Voraussetzungen separat prüfen.';
  if (index === 1) {
    if (credential === 'fms') return 'Typischer Weg: Fachmaturität im passenden Berufsfeld erwerben. Zusätzliche Anforderungen beim Studiengang prüfen.';
    if (credential === 'education') return 'Für einen fachfremden FH-Studiengang sind je nach Angebot zusätzliche Leistungen wie einschlägige Arbeitswelterfahrung nötig. Lass deinen Zugang von der FH prüfen.';
    return 'Zugang zu passenden FH-Studiengängen im Berufsfeld. Je nach Studiengang gelten zusätzliche Anforderungen oder Eignungsabklärungen.';
  }
  if (index === 2) return credential === 'education'
    ? 'Prüfungsfreier Zugang zum Studiengang Vorschule und Primarstufe mit Fachmaturität Pädagogik.'
    : 'Die Fachmaturität Pädagogik ist der direkte Zugang für Vorschule und Primarstufe. Frage die PH nach möglichen Aufnahmewegen mit deinem Abschluss.';
  if (index === 4) return 'Der Fachmittelschulausweis eröffnet den Zugang zu passenden HF-Ausbildungen. Prüfe Berufsfeld, Praxis und allfällige Eignungsabklärung bei der Schule.';
  return path[4];
}

const steps = [
  'Interessen, Fähigkeiten und Werte festhalten',
  'Eine Insiders-live-Veranstaltung besuchen',
  'Studien- und Berufsoptionen auf berufsberatung.ch recherchieren',
  'Perspektiven-Hefte in der Mediothek oder im BIZ durchsehen',
  'Studienpläne und Vorlesungsverzeichnisse vergleichen',
  'Einen Informationstag besuchen',
  'Einen Schnuppertag organisieren',
  'Mit Studierenden sprechen oder einen Hochschultag mitlaufen',
  'Persönliche Kontakte nach ihren Erfahrungen fragen',
  'Eine Studienwoche erkunden',
  'Mit der Wunschschule klären, welche Zulassung, Praxis und Fristen für meinen Abschluss gelten'
];

const byId = id => document.getElementById(id);
const storageKey = 'studienkompass-v1';
let state = { credential: 'fms', interests: [], compare: [], tasks: [], notes: '' };
try { Object.assign(state, JSON.parse(localStorage.getItem(storageKey))); } catch {}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
}
function toggle(values, value, checked) {
  return checked ? [...values, value] : values.filter(item => item !== value);
}

byId('choices').innerHTML = Object.entries(interests).map(([key, label]) =>
  `<label class="choice"><input type="checkbox" name="interest" value="${key}"> ${label}</label>`).join('');
for (const input of byId('profile').querySelectorAll('input')) input.checked = state.interests.includes(input.value);

if (!Object.hasOwn(routes, state.credential)) state.credential = 'fms';
byId('credential').value = state.credential;

function renderPaths() {
  byId('route').textContent = routes[state.credential];
  const ranked = routeOrder[state.credential].map(index => ({
    path: paths[index], index, matches: paths[index][2].filter(key => state.interests.includes(key))
  })).sort((a, b) => b.matches.length - a.matches.length);
  byId('cards').innerHTML = ranked.map(({path, index, matches}) => `<article>
    <div class="tag">${path[1]}</div><h3>${path[0]}</h3><p>${path[3]}</p>
    ${matches.length ? `<p><strong>Passt zu:</strong> ${matches.map(key => interests[key]).join(', ')}</p>` : ''}
    <details><summary>Zugang und Dauer</summary><p>${admission(path)}</p><p>${path[5]}</p>${path[6] ? `<p class="muted">Broschüre, S. ${path[6]}</p>` : '<p class="muted">Quelle: Kanton Schwyz</p>'}</details>
    <p><label><input type="checkbox" data-path="${index}" ${state.compare.includes(index) ? 'checked' : ''}> ${path[0]} vergleichen</label></p>
  </article>`).join('');
  updateComparison();
}
function updateComparison() {
  const selected = state.compare.filter(index => routeOrder[state.credential].includes(index)).map(index => paths[index]);
  for (const input of byId('cards').querySelectorAll('input')) input.disabled = selected.length >= 3 && !input.checked;
  byId('comparison').innerHTML = selected.length ? `<table><caption>${selected.length} von 3 Wegen ausgewählt</caption>
    <thead><tr><th scope="col">Merkmal</th>${selected.map(path => `<th scope="col">${path[0]}</th>`).join('')}</tr></thead>
    <tbody>${[[3, 'Schwerpunkt'], [4, 'Zugang'], [5, 'Zeitplanung']].map(([index, label]) =>
      `<tr><th scope="row">${label}</th>${selected.map(path => `<td>${index === 4 ? admission(path) : path[index]}</td>`).join('')}</tr>`).join('')}</tbody></table>`
    : 'Markiere oben die Wege, die du vergleichen möchtest.';
}
byId('credential').addEventListener('change', event => {
  state.credential = event.target.value;
  state.compare = state.compare.filter(index => routeOrder[state.credential].includes(index));
  save();
  renderPaths();
});
byId('cards').addEventListener('change', event => {
  const input = event.target;
  state.compare = toggle(state.compare, Number(input.dataset.path), input.checked);
  save();
  updateComparison();
});
byId('profile').addEventListener('submit', event => {
  event.preventDefault();
  state.interests = new FormData(event.currentTarget).getAll('interest');
  save();
  renderPaths();
  byId('feedback').textContent = state.interests.length
    ? 'Die Wege sind nach der Anzahl passender Interessen sortiert.'
    : 'Wähle Interessen aus oder erkunde alle Wege.';
});
byId('clear').addEventListener('click', () => {
  for (const input of byId('profile').querySelectorAll('input')) input.checked = false;
  byId('profile').requestSubmit();
});

byId('tasks').innerHTML = steps.map((step, index) =>
  `<label class="task"><input type="checkbox" value="${index}" ${state.tasks.includes(index) ? 'checked' : ''}> ${step}</label>`).join('');
function updateProgress() {
  byId('progress').textContent = `${state.tasks.length} von ${steps.length} Schritten erledigt`;
}
byId('tasks').addEventListener('change', event => {
  state.tasks = toggle(state.tasks, Number(event.target.value), event.target.checked);
  save();
  updateProgress();
});
byId('notes').value = state.notes;
byId('notes').addEventListener('input', event => {
  state.notes = event.target.value;
  save();
});
renderPaths();
updateProgress();
