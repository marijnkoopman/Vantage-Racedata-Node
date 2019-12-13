const socket = io();

window.addEventListener("load", () => {
	document.querySelector("audio").load();
});

socket.on("lap", data => {
	Object.entries(data).forEach(entry => {
		
		// Entry = [KLEUR, TOGO] dus b.v ["white", 5]
		let color = entry[0];
		let to_go = entry[1];

		let el = document.querySelector(`#${color}`);
		if(el) el.innerHTML = to_go;

	});
});
socket.on("test", data => {
	console.log(data);
});

let timeout;
socket.on("audio", obj => {
	
	// De object waarde is of het moet spelen of niet.
	// Dan is het pauzeren dus het omgekeerde.
	// Er is geen specifieke reden voor deze variabel om pauze te zijn.
	let pause = obj.play ? false : true;

	if(pause) {
		document.querySelector("audio").pause();
		clearTimeout(timeout);
	} else {
		document.querySelector("audio").play();
		timeout = setTimeout(() => {
			document.querySelector("audio").pause();
		}, 5e3);
	}

});