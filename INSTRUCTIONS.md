# Handleiding: Projecten Beheren met Google Sheets

Volg deze stappen om je projectdata te beheren via een Google Sheet. Dit maakt het eenvoudig om projecten toe te voegen of te wijzigen zonder de code aan te passen.

## Stap 1: Maak een Google Sheet aan

1.  Ga naar [sheets.google.com](https://sheets.google.com) en maak een nieuwe, lege spreadsheet aan.
2.  Geef de spreadsheet een duidelijke naam, bijvoorbeeld "Mijn Portfolio Projecten".

## Stap 2: Voeg de Juiste Kolommen toe

In de **allereerste rij** van je spreadsheet, voeg de volgende kolomkoppen toe. De volgorde en exacte spelling zijn **zeer belangrijk**.

`type` | `name` | `description` | `link` | `githubLink` | `liveLink` | `status`
--- | --- | --- | --- | --- | --- | ---

### Uitleg van de kolommen:

*   **type**: Het type project. Dit moet **exact** een van de volgende drie waarden zijn:
    *   `chrome` (voor een Chrome Extension)
    *   `github` (voor een GitHub Project)
    *   `website` (voor een andere website)
*   **name**: De naam van je project (bv. "Mijn Coole App").
*   **description**: Een korte beschrijving van het project.
*   **link**: De hoofdlink voor het project.
    *   Voor `chrome` is dit de link naar de Chrome Web Store.
    *   Voor `website` is dit de link naar de website.
    *   Voor `github` is dit veld niet verplicht, maar kan gebruikt worden als er geen aparte live-link is.
*   **githubLink**: **Alleen** voor `github` projecten. De link naar de GitHub repository.
*   **liveLink**: **Alleen** voor `github` projecten. De link naar een live demo van het project.
*   **status**: (Optioneel) Bepaalt of de "Live Demo" knop getoond wordt. Zet op `active` om de knop te tonen. Elke andere waarde (of een lege cel) verbergt de knop. Dit is handig voor projecten die tijdelijk offline zijn.

## Stap 3: Publiceer de Spreadsheet op het Web

De website moet de data kunnen lezen. Dit doe je door de sheet te publiceren als een CSV-bestand.

1.  In je Google Sheet, ga naar `Bestand` -> `Delen` -> `Publiceren op internet`.
2.  In het venster dat verschijnt:
    *   Bij **Link**, selecteer de sheet die je zojuist hebt gemaakt (meestal "Blad1").
    *   Bij **Insluiten**, verander de selectie van `Webpagina` naar `Door komma's gescheiden waarden (.csv)`.
3.  Klik op de groene **Publiceren** knop. Bevestig dat je zeker weet dat je wilt publiceren.
4.  Kopieer de link die nu wordt getoond. Je hebt deze link nodig voor de volgende stap.

## Stap 4: Voeg de Link toe aan de Website Configuratie

1.  Open het bestand `src/config.ts` in de code van je project.
2.  Je zult een regel zien die er zo uitziet: `export const googleSheetUrl = 'HIER_JE_LINK_PLAKKEN';`
3.  Vervang `HIER_JE_LINK_PLAKKEN` met de link die je in de vorige stap hebt gekopieerd. Zorg ervoor dat de aanhalingstekens (`'`) blijven staan.

## (Optioneel maar Aangeraden) Stap 5: Maak een Google Form voor Eenvoudige Invoer

Om het nog makkelijker te maken, kun je een Google Form gebruiken om nieuwe projecten toe te voegen.

1.  Ga naar [forms.google.com](https://forms.google.com) en maak een nieuw formulier.
2.  Maak vragen aan die overeenkomen met de kolommen in je sheet: `type`, `name`, `description`, etc.
3.  Ga naar het tabblad **Antwoorden**.
4.  Klik op het groene Google Sheets-icoon ("Antwoorden in Spreadsheets bekijken").
5.  Kies "Bestaande spreadsheet selecteren" en selecteer de spreadsheet die je in Stap 1 hebt gemaakt.

Nu, elke keer als je het formulier invult, wordt er automatisch een nieuwe rij toegevoegd aan je Google Sheet, en zal deze na een paar minuten automatisch op je website verschijnen.
