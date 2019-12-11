const socket = io();

socket.on("lap", data => {
	console.log(data);
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