# Vraag 2: Analyse van speeltijd van videogames

Je hebt een tekstbestand genaamd `game_sessions.txt` met daarin gegevens over verschillende speelsessies. Elke rij bevat de volgende velden: `PlayerID`, `GameGenre` en `PlayTime`.

Schrijf in het bestand `games.py` een Python-functie `analyze_games(inputfile)` die:

* Het tekstbestand `inputfile` leest.
* De **gemiddelde speeltijd** bepaalt voor elk gamegenre.
* De resultaten afrondt op **1 cijfer na de komma**.
* De resultaten wegschrijft naar een bestand genaamd `game_analysis.txt`.

---

## Voorbeeld

### Input

```text
PlayerID,GameGenre,PlayTime
P001,RPG,120
P002,FPS,90
P003,Strategy,150
P004,RPG,180
P005,FPS,110
P006,Strategy,130
P007,RPG,150
P008,FPS,100
P009,Strategy,170
```

### Gewenste output

```text
Average Play Time per Game Genre:
- RPG: 150.0
- FPS: 100.0
- Strategy: 150.0
```

