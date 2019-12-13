# Introductie
Deze NodeJS-applicatie ontvangt data van de Vantage Server en maakt die vervolgens binnen het LAN beschikbaar in de vorm van HTML-pagina's met live-update van de data. Initieel met als doel het gebruik van een smart-TV als rondenbord. Maar andere pagina's met wedstrijdinformatie kunnen in de toekomst zeker toegevoegd worden.

Webbrowsers zijn tegenwoordig standaard op vele apparaten aanwezig en webpagina's kunnen gemakkelijk op elk schermformaat optimaal weergegeven worden. Dat zorgt ervoor dat elk apparaat binnen het netwerk aan een browser genoeg heeft om te fungeren als Vantage Racedata Display. Dit zonder ook maar iets te hoeven installeren.

# Ingebruikname
Deze node-app moet op een pc binnen het netwerk geinstalleerd worden, die pc fungeert dan als server. Op de 'clients' hoeft niets voorbereid. Voor installatie is het noodzakelijk dat NodeJS geinstalleerd is op de computer, inclusief de Node Package Manager (ofwel NPM). Vervolgens de map van deze app (\vantage-node) openen en daar dubbelklikken op runOnce. Dit installeert de benodigde node-packages.

Starten kan vervolgens door te dubbelklikken op "start". Stoppen van de node kan met ctrl-c.

Standaard zijn het volgende IP en Poortnummer ingesteld voor de Vantage Server:

	127.0.0.1		// De eigen computer, werkt als je installeert op de Vantage Server
	52010
	
Indien een ander IP of een andere poort vereist is, dan kan dat aangepast worden in het .env-bestand. Ook kunt u daar eventueel de Instancename aanpassen.

# Frontendgebruik
Navigeer in een webbrowser naar het IP van de computer waar de node op draait, aangevuld met ":3000" dit opent het rondenbord. Hieronder voorbeelden voor het navigeren op de eigen machine d.m.v. het eigen IP 127.0.0.1

	127.0.0.1:3000			// Rondenbord
	127.0.0.1:3000/lapboard		// Rondenbord
	127.0.0.1:3000/remote		// Testmodule Rondenbord
