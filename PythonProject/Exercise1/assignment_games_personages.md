# Games en Personages

## Klasse `Character`

De klasse `Character` stelt een speelbaar personage voor.

### Constructor

Definieer een klasse `Character`.

De constructor accepteert:

* `name` (string)
* `level` (int)

Sla `name` op als een public field.

Sla `level` op in een private field.

### Getter en Setter

Voorzie:

* `get_level()`
* `set_level(value)`

Een level moet tussen **1 en 100** liggen. Anders wordt een `ValueError` opgegooid.

### Methoden

#### `is_high_level()`

Geeft `True` terug indien het personage minstens level **50** heeft.

#### `get_rank()`

Geeft terug:

| Level  | Rang         |
| ------ | ------------ |
| 90-100 | "Legend"     |
| 70-89  | "Master"     |
| 50-69  | "Expert"     |
| 20-49  | "Adventurer" |
| 1-19   | "Beginner"   |

---

## Klasse `Player`

De klasse `Player` houdt alle personages van één speler bij.

### Constructor

Parameters:

* `player_id`
* `username`

Maak een private lijst `characters` en maak ook een methode `get_characters()`.

### Methoden

#### `add_character(character)`

Voegt een personage toe.

Een personagenaam mag slechts één keer voorkomen.

Bij een duplicaat:

```python
ValueError("Character already exists!")
```

#### `calculate_average_level()`

Geeft het gemiddelde level van alle personages terug.

Indien geen personages aanwezig zijn:

```python
return 0
```

#### `get_high_level_characters()`

Geeft een lijst terug met alle personages vanaf level 50.

#### `get_best_character()`

Geeft het personage met het hoogste level terug.

Indien geen personages aanwezig zijn:

```python
return None
```

#### `remove_beginner_characters()`

Verwijdert alle personages met een level lager dan 50 uit de lijst.

---

## Voorbeeld

```python
c1 = Character("Knight", 82)
c2 = Character("Mage", 14)
c3 = Character("Archer", 67)

player = Player("P001", "Emma")

player.add_character(c1)
player.add_character(c2)
player.add_character(c3)

print(player.calculate_average_level())

print(player.get_best_character().name)

player.remove_beginner_characters()

for character in player.get_characters():
    print(character.name)
```

---

## Verwachte output

```text
54.333333333333336
Knight
Knight
Archer
```
