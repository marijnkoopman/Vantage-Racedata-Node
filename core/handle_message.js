
const { io } = require("./server");
const giveColor = new Map([
	[0, "white"],
	[1, "red"],
	[2, "yellow"],
	[3, "blue"],
]);
let competitions = {};
let indexFirstHeat = {};
let indexSecondHeat = {};
let indexWhite = {};
let indexRed = {};
let indexYellow = {};
let indexBlue = {};
let racer_colors = {};

module.exports = message => {
	switch(get_message_type(message)) {
		case "races":
			handle_races(message);
			break;
		case "lap": 
			handle_lap(message);
			break;
		case "heatCleared": 
			console.log("Heat cleared");
			heatCleared();
			break;
		case "heatStarted": 
			console.log("Heat started");
			heatStarted();
			//lookup competitionId in object competitions and replace or append competition from mesage
			break;
		default:
			// Other message type
			break;
	}
};

function get_message_type(message) {
	if(message.races) return "races";
	if(message.lap) return "lap";
	if(message.typeName == "CompetitionActivatedEvent") return "newCompetition";
	if(message.typeName == "HeatActivatedEvent") return "heatActivated";
	if(message.typeName == "HeatStartedEvent") return "heatStarted";
	if(message.typeName == "RaceNextLapIndexChangedEvent") return "raceIndexChanged";
	if(message.typeName == "HeatNextLapIndexChangedEvent") return "heatIndexChanged";
	if(message.typeName == "HeatClearedEvent") return "heatCleared";
	return "Unknown";
}

let predictedToGo = {};

function handle_races(message) {
	for(let race of message.races) {
		racer_colors[race.race.id] = race.race.color;
	}

	// Mogelijk (meestal) HeatActivatedEvent
	let emit_obj = {};
	for(let obj of message.races) {
		let raceId = obj.race.id;
		let toGo = obj.estimatedLaps[0].roundsToGo;
		let color = giveColor.get(racer_colors[raceId]);
		emit_obj[color] = toGo;
	}
	console.log(emit_obj);
	// io.emit("lap", emit_obj);
	predictedToGo = emit_obj;
}

function heatStarted() {
	io.emit("lap", predictedToGo);
}

function heatCleared() {
	io.emit("lap", {});
}

function handle_lap(message) {
	console.log(message);
	let toGo = message.lap.roundsToGo - 1;
	let raceId = message.raceId;
	if(typeof toGo !== "undefined" && !isNaN(toGo)) {
		let color = giveColor.get(racer_colors[raceId]);
		console.log(`Racer ${color} moet nog ${toGo} rondjes`);
		if(toGo > -1) {
			let n_obj = {};
			n_obj[color] = toGo;
			io.emit("lap", n_obj);
		} else {
			race_end(message, color);
		}
	}
}

function race_end(message, color) {
	// Hier later iets anders...
	let n_obj = {};
	n_obj[color] = "...";
	io.emit("lap", n_obj);
}