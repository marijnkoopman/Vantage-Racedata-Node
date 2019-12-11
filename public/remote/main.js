const socket = io();

document.querySelector("button").addEventListener("click", send);

function send() {
	let data = {
		"white": document.querySelector("#pushWhite").value,
		"red": document.querySelector("#pushRed").value,
		"yellow": document.querySelector("#pushYellow").value,
		"blue": document.querySelector("#pushBlue").value
	}
	console.log("Sent", data);
	socket.emit("manualLapChange", data);
}