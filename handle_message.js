module.exports = () => {
	if(message.races) {
		for(let race of message.races) {
			racer_colors[race.race.id] = race.race.color;
		}
	}
	if(message.lap) {
		let toGo = message.lap.roundsToGo - 1;
		let raceId = message.raceId;
		if(toGo) {
			let color = giveColor.get(racer_colors[raceId]);
			console.log(`Racer ${color} moet nog ${toGo} rondjes`);
			io.emit("lapChange", { color, toGo });
		}
	}
}