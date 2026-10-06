# HSK Learning

Statische GitHub Pages-site om Chinees te leren voor de HSK, vanaf niveau 3.
Live: https://qunfong.github.io/HSK-Learning/

## Opbouw van een les
Gok eerst → het idee (patroon als plaatje + valkuil) → voorbeelden, 10 woorden, dialoog → oefenen
(meerkeuze, zinnen bouwen, eigen zin) → herhalen na 2 dagen (goed: pauze ×2, fout: morgen, geleerd bij 16+ dagen).

Lesopbouw volgt de HSK Tutor-skill (Leren → Oefenen → Herhalen) en de Tutor-skill
(één idee per les, gok vóór uitleg, afleiders op basis van echte misvattingen, spaced review).

## Structuur
- `assets/data/<niveau>.js` - lessen per niveau als data (hsk3, hsk4, hsk5, hsk6, hsk79). Nieuwe les = nieuw object in `lessons`.
  `vocab` is optioneel: een les zonder woorden slaat het woordenblok over.
- `assets/app.js` - rendering, oefeningen, voortgang (localStorage), herhaling, documentatie.
- `tools/build_pages.py` - genereert alle HTML-pagina's. Nieuw niveau: toevoegen aan `LEVELS` en opnieuw draaien.
- `tools/validate.js` - controleert de lesdata: `node tools/validate.js assets/data/*.js`.

Na een wijziging in `assets/`: verhoog `V` in `tools/build_pages.py` en draai het script, anders laden browsers tot 10 minuten de oude versie.

Woorden zijn oefenwoorden op niveau, geen officiële HSK 3.0-lijst. Geen officiële examenvragen of scores.
