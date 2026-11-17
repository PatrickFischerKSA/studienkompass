const sceneDefinitions = [
  ['praxis', 'Rein in die Praxis', 'studio'],
  ['fms', 'FMS-Modus', 'teaching'],
  ['gymnasium', 'Gymnasialmodus', 'studying'],
  ['beratung', 'Berufsguide', 'campus'],
  ['praxisvergleich', 'Praxisvergleich', 'lab'],
  ['profil', 'Anschlusswege', 'studio', 'wege', 'wege-vergleich'],
  ['ph-vergleich', 'PH-Vergleich', 'architecture'],
  ['ksa-paedagogik', 'FMS Pädagogik', 'teaching'],
  ['bildungswege', 'Schweizer Bildungssystem', 'architecture'],
  ['plan', 'Mein Plan', 'plan']
];

const scenes = new Map();
function makeScene(title, picture) {
  const dialog = document.createElement('dialog');
  dialog.className = 'scene';
  dialog.setAttribute('aria-label', title);

  const bar = document.createElement('div');
  bar.className = 'scene-bar';
  const label = document.createElement('strong');
  label.textContent = title;
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'secondary';
  close.textContent = 'Schliessen';
  close.addEventListener('click', () => dialog.close());
  bar.append(label, close);

  const photo = document.createElement('img');
  photo.className = 'scene-photo';
  photo.src = `images/${picture}.webp`;
  photo.alt = '';
  photo.loading = 'lazy';

  const inner = document.createElement('div');
  inner.className = 'scene-inner';
  dialog.append(bar, photo, inner);
  document.body.append(dialog);
  return {dialog, close, inner, photo, label};
}

function openScene(scene) {
  if (scene.dialog.open) return;
  scene.dialog.scrollTop = 0;
  scene.dialog.showModal();
  scene.close.focus({preventScroll: true});
}

for (const [id, title, picture, ...related] of sceneDefinitions) {
  const scene = makeScene(title, picture);
  for (const sectionId of [id, ...related]) {
    scene.inner.append(document.getElementById(sectionId));
    scenes.set(sectionId, scene);
  }
}

const storyScene = makeScene('Ausbildungsweg', 'campus');
storyScene.dialog.classList.add('story-scene');
document.documentElement.classList.add('has-scenes');

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a[href^="#"]');
  const scene = link && scenes.get(link.getAttribute('href').slice(1));
  if (scene) {
    event.preventDefault();
    openScene(scene);
    const section = document.getElementById(link.getAttribute('href').slice(1));
    if (section !== scene.inner.firstElementChild) section.scrollIntoView({block: 'start'});
    return;
  }

  const storyButton = event.target.closest('[data-story-open]');
  if (!storyButton) return;
  const story = storyButton.closest('.result-story');
  const title = story.querySelector('h3').textContent;
  storyScene.label.textContent = title;
  storyScene.dialog.setAttribute('aria-label', title);
  storyScene.photo.src = story.querySelector('img').src;
  const detail = story.querySelector('.result-story-detail').cloneNode(true);
  detail.classList.remove('result-story-detail');
  storyScene.inner.replaceChildren(story.querySelector('h3').cloneNode(true), story.querySelector('p').cloneNode(true), detail);
  openScene(storyScene);
});

function openLinkedScene() {
  const key = location.hash.slice(1);
  const shared = new URLSearchParams(key).has('vergleich');
  const scene = scenes.get(shared ? 'beratung' : key);
  if (scene) openScene(scene);
}

window.addEventListener('hashchange', openLinkedScene);
openLinkedScene();

function openExternalResourcesInNewTabs(container) {
  for (const link of container.querySelectorAll('a[href]')) {
    const url = new URL(link.href, document.baseURI);
    if (!['http:', 'https:'].includes(url.protocol) || url.origin === location.origin) continue;
    link.target = '_blank';
    link.relList.add('noopener');
  }
}

openExternalResourcesInNewTabs(document);
const externalLinkObserver = new MutationObserver(records => {
  for (const record of records) {
    for (const node of record.addedNodes) {
      if (!(node instanceof Element)) continue;
      openExternalResourcesInNewTabs(node.parentElement ?? node);
    }
  }
});
externalLinkObserver.observe(document.body, {childList: true, subtree: true});
