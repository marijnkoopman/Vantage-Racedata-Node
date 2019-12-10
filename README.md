# Introductie

Deze NodeJS-applicatie ontvangt data van de Vantage Server en maakt die vervolgens binnen het LAN beschikbaar in de vorm van HTML-pagina's met live-update van de data. Initieel met als doel het gebruik van een smart-TV als rondenbord. Maar andere pagina's met wedstrijdinformatie kunnen in de toekomst zeker toegevoegd worden. 

Webbrowsers zijn tegenwoordig standaard op vele apparaten aanwezig en webpagina's kunnen gemakkelijk op elk schermformaat optimaal weergegeven worden. Dat zorgt ervoor dat elk apparaat met een browser dmv deze applicatie om te toveren is in een Vantage Racedata Display zonder ook maar iets te hoeven installeren.

# Ingebruikname

Voor installatie is het noodzakelijk dat NodeJS geinstalleerd is op de betreffende computer, inclusief de NPM Package Manager. Vervolgens in een Terminal naar de root-map van deze app (vantage-node) navigeren en daar de volgende commando's runnen:

	npm i
	node .

De Node-app start dan op. Stoppen kan met ctrl-c.

Standaard zijn het volgende IP en Poortnummer ingesteld voor de Vantage Server:

	192.168.10.249
	52010
	
Indien een ander IP of een andere poort vereist is dan kan dat aangepast worden op regel 4 van index.js

# Frontendgebruik

