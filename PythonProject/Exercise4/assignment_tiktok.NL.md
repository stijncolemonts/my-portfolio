
# TikTok Agency en TikTokkers

## Klasse `TikToker`

De klasse `TikToker` stelt een TikTok-content creator voor.

### Vereisten

* Definieer een klasse `TikToker`.

* De constructor van `TikToker` moet **drie parameters** accepteren:

  * `username` (string)
  * `category` (string, bv. comedy, dance, education)
  * `followers` (int)

* Sla `username` en `category` op als **public fields**.

* Sla `followers` op als **private field** (`__followers`) met **getter en setter**:

  * `get_followers()` → geeft het aantal volgers terug
  * `set_followers(value)` → stelt het aantal volgers in
  * `followers` moet **tussen 0 en 1.000.000.000** liggen
    Zo niet, werp:

    ```python
    ValueError("Invalid number of followers!")
    ```

* Definieer een methode `get_info()` die een string teruggeeft, bijvoorbeeld:

  ```
  Username: khaby.lame, Category: Comedy, Followers: 160000000
  ```

---

## Klasse `TikTokAgency`

De klasse `TikTokAgency` stelt een agency voor die meerdere TikTokkers beheert.

### Vereisten

* Definieer een klasse `TikTokAgency`.
* De constructor accepteert **één parameter**:

  * `name` (string)
* Sla `name` op als **public field**.
* Maak een **private lijst** `__tiktokers`, die leeg begint.

### Methodes

* `add_tiktoker(tiktoker)`

  * Voegt een `TikToker`-object toe
  * Als een TikTokker met dezelfde username al bestaat
    (hoofdletterongevoelig), werp:

    ```
    ValueError("TikToker already exists!")
    ```

* `get_tiktokers()`

  * Retourneert de lijst van TikTokkers

* `remove_tiktoker(username)`

  * Verwijdert de TikTokker met deze username (hoofdletterongevoelig)
  * Als deze niet bestaat, doe niets

* `find_tiktokers_by_category(category)`

  * Retourneert een lijst van TikTokkers uit die categorie
    (hoofdletterongevoelig)

---

## Input / Output Programma

Schrijf een **menu-gestuurd programma met I/O** dat:

1. TikTokkers kan **toevoegen** (opslaan in een tekstbestand)
2. Alle TikTokkers kan **tonen** (lezen uit het tekstbestand)
3. Een TikTokker kan **verwijderen**
4. TikTokkers kan **zoeken op categorie**
5. Het programma kan **stoppen**

---

## Menu

```
--- Menu ---
1. Voeg een TikTokker toe
2. Toon alle TikTokkers
3. Verwijder een TikTokker
4. Zoek TikTokkers op categorie
5. Stoppen
```

---

## Verwachte interactie

```
Voer de naam van de agency in: SocialBoost

--- Menu ---
1. Voeg een TikTokker toe
2. Toon alle TikTokkers
3. Verwijder een TikTokker
4. Zoek TikTokkers op categorie
5. Stoppen

Maak een keuze: 1
Username: khaby.lame
Categorie: Comedy
Aantal volgers: 160000000
TikTokker toegevoegd!

--- Menu ---
Maak een keuze: 1
Username: charlidamelio
Categorie: Dance
Aantal volgers: 150000000
TikTokker toegevoegd!

--- Menu ---
Maak een keuze: 2
Username: khaby.lame, Category: Comedy, Followers: 160000000
Username: charlidamelio, Category: Dance, Followers: 150000000

--- Menu ---
Maak een keuze: 3
Username van TikTokker om te verwijderen: charlidamelio
TikTokker verwijderd!

--- Menu ---
Maak een keuze: 2
Username: khaby.lame, Category: Comedy, Followers: 160000000

--- Menu ---
Maak een keuze: 4
Categorie: Comedy
Username: khaby.lame, Category: Comedy, Followers: 160000000

--- Menu ---
Maak een keuze: 5
Programma afgesloten.
```
