
const { io } = require("./server");
const giveColor = new Map([
	[0, "white"],
	[1, "red"],
	[2, "yellow"],
	[3, "blue"],
]);
let racer_colors = {}

module.exports = message => {
	switch(get_message_type(message)) {
		case "races":
			handle_races(message);
			break;
		case "lap": 
			handle_lap(message);
			break;
		default:
			// Other message type
			break;
	}
}

function get_message_type(message) {
	if(message.races) return "races";
	if(message.lap) return "lap";
	return "Unknown";
}

function handle_races(message) {
	for(let race of message.races) {
		racer_colors[race.race.id] = race.race.color;
	}

	// Mogelijk (meestal) HeatActivatedEvent
	let emit_obj = {}
	for(let obj of message.races) {
		let raceId = obj.race.id;
		let toGo = obj.estimatedLaps[0].roundsToGo;
		let color = giveColor.get(racer_colors[raceId]);
		emit_obj[color] = toGo;
	}
	console.log(emit_obj);
	io.emit("lap", emit_obj);

}
function handle_lap(message) {
	console.log(message);
	let toGo = message.lap.roundsToGo - 1;
	let raceId = message.raceId;
	if(typeof toGo !== "undefined" && !isNaN(toGo)) {
		let color = giveColor.get(racer_colors[raceId]);
		console.log(`Racer ${color} moet nog ${toGo} rondjes`);
		if(toGo > 0) {
			let n_obj = {}
			n_obj[color] = toGo;
			io.emit("lap", n_obj);
		} else {
			race_end(message, color);
		}
	}
}

function race_end(message, color) {
	// Hier later iets anders...
	let n_obj = {}
	n_obj[color] = "...";
	io.emit("lap", n_obj);
}