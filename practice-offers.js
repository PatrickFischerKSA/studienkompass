const regionalPracticeOffers = [
  {
    region: 'Schwyz', kind: 'apprenticeship', field: 'tech',
    title: 'Betriebsunterhalt EFZ', employer: 'Spital Schwyz', place: 'Schwyz', timing: 'Lehrbeginn 2027',
    requirements: 'Volksschulabschluss, Schnupperpraktikum im Spital sowie handwerkliches und technisches Geschick.',
    fms: 'possible', matura: 'possible',
    url: 'https://jobs.spital-schwyz.ch/Lehrstelle-Fachperson-Betriebsunterhalt-EFZ-2027-de-j548.html'
  },
  {
    region: 'Schwyz', kind: 'internship', field: 'office',
    title: 'Bankeinstieg nach der Matura (BEM)', employer: 'Schwyzer Kantonalbank', place: 'Schwyz · Hauptsitz', timing: 'Sommer 2027 · 18 Monate · 100 %',
    requirements: 'Maturazeugnisse, Lebenslauf und Motivationsschreiben. Freude am Kontakt mit Kundinnen und Kunden.',
    fms: 'insufficient', matura: 'accepted',
    url: 'https://szkb.jobs.hr.cloud.sap/job/Praktikum-Bankeinstieg-nach-Matura-%28BEM%29/1244-de_DE/'
  },
  {
    region: 'Schwyz', kind: 'job', field: 'office',
    title: 'Mitarbeit im Verkauf', employer: 'ALDI SUISSE', place: 'Küssnacht am Rigi', timing: 'Teilzeit',
    requirements: 'Verkaufs- oder vergleichbare Berufserfahrung, gutes Deutsch und flexible Einsatzzeiten. Ein passendes EFZ ist von Vorteil.',
    fms: 'conditional', matura: 'conditional',
    url: 'https://jobs.aldi-hofer.com/aldi-suisse-ch/job/K%C3%BCssnacht-am-Rigi-Mitarbeiter-Verkauf-%28mwd%29-Schw-6403/1445029733/'
  },
  {
    region: 'Zürich', kind: 'apprenticeship', field: 'people',
    title: 'Betreuung EFZ Kinder, verkürzt', employer: 'Stadt Zürich · Schulamt', place: 'Zürich', timing: 'Lehrbeginn 2027 · 2 Jahre',
    requirements: 'Obligatorische Schule auf mittlerer oder oberer Stufe, Deutsch B2, mindestens 20 Jahre alt und ein Jahr Betreuungserfahrung mit mindestens 60 % Pensum.',
    fms: 'conditional', matura: 'conditional',
    url: 'https://www.stadt-zuerich.ch/jobs/de/sam-51203.html'
  },
  {
    region: 'Zürich', kind: 'internship', field: 'people',
    title: 'Vorpraktikum Kindheitspädagogik', employer: 'Stadt Zürich · Kita Leutschenbach', place: 'Zürich', timing: 'Januar 2027 oder nach Vereinbarung · 8 Monate · 80–100 %',
    requirements: 'Abschluss auf Sekundarstufe II, Freude an der Arbeit mit Kindern und Belastbarkeit. Erste Praxiserfahrung und Interesse an der HF Kindheitspädagogik sind erwünscht.',
    fms: 'accepted', matura: 'accepted',
    url: 'https://www.stadt-zuerich.ch/jobs/de/seb-51597.html'
  },
  {
    region: 'Zürich', kind: 'job', field: 'office',
    title: 'Aushilfe im Verkauf', employer: 'Migros Ostschweiz', place: 'Hittnau', timing: '20 %',
    requirements: 'Abgeschlossene Grund- oder Weiterbildung, bevorzugt im Detailhandel. Verkaufserfahrung ist von Vorteil. Gutes Deutsch und flexible Einsätze.',
    fms: 'clarify', matura: 'clarify',
    url: 'https://jobs.migros.ch/it/le-nostre-imprese/job/genossenschaft-migros-ostschweiz/aushilfe-im-verkauf/7dc019ec-b775-49bd-b0ab-666e7d2c380a'
  },
  {
    region: 'Zug', kind: 'apprenticeship', field: 'office',
    title: 'Kaufmann/Kauffrau EFZ Privatversicherung', employer: 'Neutrass AG', place: 'Rotkreuz', timing: 'August 2027',
    requirements: 'Die Bewerbung erfolgt über das Lehrstelleninserat auf Yousty. Kläre bei Neutrass, welche Schulzeugnisse sie nach FMS oder Matura sehen wollen.',
    fms: 'clarify', matura: 'clarify',
    url: 'https://www.yousty.ch/de-CH/lehrstellen/profile/10356041-kaufmann-frau-kv-efz-risch-rotkreuz-zg-neutrass-ag'
  },
  {
    region: 'Zug', kind: 'internship', field: 'people',
    title: 'Kita-Praktikum mit möglichem Lehranschluss', employer: 'Kita Zwergenburg', place: 'Baar', timing: 'Sommer 2027',
    requirements: 'Lebenslauf und kurzes Motivationsschreiben. Bei gegenseitigem Interesse ist eine FaBe-Lehrstelle ab Sommer 2028 möglich. Das Inserat nennt keinen bestimmten Schulabschluss.',
    fms: 'possible', matura: 'possible',
    url: 'mailto:info@kita-zwergenburg.ch?subject=Bewerbung%20Kita-Praktikum%20Sommer%202027',
    source: 'https://krippenstellen.ch/de/frontend/inserate/72059', action: 'Per E-Mail bewerben'
  },
  {
    region: 'Zug', kind: 'job', field: 'food',
    title: 'Crew im Restaurant', employer: 'McDonald’s', place: 'Baarerstrasse 41, Zug', timing: 'Pensum und Start im Inserat abklären',
    requirements: 'Freude am Gästekontakt, Teamarbeit sowie Mitarbeit bei Zubereitung und Ausgabe. Das Inserat nennt keinen bestimmten Schulabschluss.',
    fms: 'possible', matura: 'possible',
    url: 'https://jobs.mcdonalds.ch/de-ch/crew/job/P8-318949-1'
  }
];
