# HSK Learning

Statische GitHub Pages-site om Chinees te leren voor de HSK, vanaf niveau 3.
Live: https://qunfong.github.io/HSK-Learning/

## Opbouw van een les
Gok eerst → het idee (patroon als plaatje + valkuil) → voorbeelden, 10 woorden, dialoog → oefenen
(meerkeuze, zinnen bouwen, eigen zin) → herhalen na 2 dagen (goed: pauze ×2, fout: morgen, geleerd bij 16+ dagen).

Lesopbouw volgt de HSK Tutor-skill (Leren → Oefenen → Herhalen) en de Tutor-skill
(één idee per les, gok vóór uitleg, afleiders op basis van echte misvattingen, spaced review).

## Structuur
- `assets/data/hsk3.js` – alle HSK 3-lessen als data. Nieuwe les = nieuw object in `lessons`.
- `assets/app.js` – rendering, oefeningen, voortgang (localStorage), herhaling.
- `hsk3/` – overzicht en `les.html?id=NN`.
- `herhaling.html` – herhaalvragen die vandaag klaarstaan.

Nieuw niveau toevoegen: `assets/data/hsk4.js` + map `hsk4/` (kopie van `hsk3/` met `data-level="hsk4"`),
en het script toevoegen aan `herhaling.html`.

Woorden zijn oefenwoorden op niveau, geen officiële HSK 3.0-lijst. Geen officiële examenvragen of scores.

Na een wijziging in `assets/`: verhoog `?v=N` in de HTML-bestanden, anders laden browsers tot 10 minuten de oude versie.
