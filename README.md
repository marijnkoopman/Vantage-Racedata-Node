# Introductie

Deze NodeJS-applicatie ontvangt data van de Vantage Server en maakt die vervolgens binnen het LAN beschikbaar in de vorm van HTML-pagina's met live-update van de data. Initieel met als doel het gebruik van een smart-TV als rondenbord. Maar andere pagina's met wedstrijdinformatie kunnen in de toekomst zeker toegevoegd worden. 

Webbrowsers zijn tegenwoordig standaard op vele apparaten aanwezig en webpagina's kunnen gemakkelijk op elk schermformaat optimaal weergegeven worden. Dat zorgt ervoor dat elk apparaat met een browser dmv deze applicatie om te toveren is in een Vantage Racedata Display. Dit zonder ook maar iets te hoeven installeren.

# Ingebruikname

Voor installatie is het noodzakelijk dat NodeJS geinstalleerd is op de betreffende computer, inclusief de NPM Package Manager. Vervolgens de map van deze app (\vantage-node) openen en daar dubbelklikken op runOnce. Dit installeert de benodigde node-packages.

Starten kan vervolgens door te dubbelklikken op "start". Stoppen van de node kan met ctrl-c.

Standaard zijn het volgende IP en Poortnummer ingesteld voor de Vantage Server:

	192.168.10.249
	52010
	
Indien een ander IP of een andere poort vereist is, dan kan dat aangepast worden op regel 3 van tcp.js. Op regel 4 kunt u eventueel de instancename aanpassen.

# Frontendgebruik

Navigeer in een webbrowser naar het IP van de computer waar de node op draait aangevuld met ":8080" dit opent het rondenbord. Iets vergelijkbaars geldt voor de testmodule van het rondenbord. Hieronder voorbeelden voor het navigeren op de eigen machine dmv het eigen IP 127.0.0.1

	127.0.0.1:8080/lapboard		//Rondenbord
	127.0.0.1:8080/remote		//Testmodule Rondenbord
