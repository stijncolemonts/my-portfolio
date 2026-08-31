# IO Oefening

## Doel
Schrijf een Python-programma dat een tekstbestand leest, regels kopieert die aan een bepaalde voorwaarde voldoen naar een uitvoerbestand en regels weglaat die niet aan de voorwaarde voldoen.

## Vereisten
1. Maak een Python-functie `kopieer_regels_met_voorwaarde(bron, bestemming, voorwaarde)` die drie argumenten accepteert:
   - `source`: Het pad naar het invoertekstbestand.
   - `destination`: Het pad naar het uitvoertekstbestand waar regels die aan de voorwaarde voldoen, moeten worden opgeslagen.
   - `voorwaarde`: Regels die minstens 10 tekens lang zijn en een spatie bevatten, moeten worden gekopieerd naar het bestemmingsbestand.

2. Open binnen de functie het invoerbestand (`source`) en het uitvoerbestand (`destination`) respectievelijk voor lezen en schrijven.

3. Lees de regels uit het invoerbestand en pas de `voorwaarde`-functie toe op elke regel. Als de voorwaarde `True` is, kopieer dan de regel naar het uitvoerbestand; anders sla hem over.

4. Schrijf de regels die aan de voorwaarde voldoen naar het uitvoerbestand (`destination`).

5. Het programma moet kunnen omgaan met bestanden met tekstgegevens, waarbij elke regel is gescheiden door een newline-teken.


## Voorbeeld:

# Invoer

This line is 5 characters long. <br />
Another line that meets the condition.<br />
This line is too short.<br />
A longer line that contains a space.<br />
Shortline.<br />
Line with more than 10 characters.<br />
This is also a valid line.<br />
Notlongenough.<br />
This line meets the condition.<br />
Testline1<br />
Test line 2<br />
Testline3<br />

# Uitvoer

This line is 5 characters long.<br />
Another line that meets the condition.<br />
This line is too short.<br />
A longer line that contains a space.<br />
Line with more than 10 characters.<br />
This is also a valid line.<br />
This line meets the condition.<br />
Test line 2<br />

