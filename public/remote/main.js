const socket = io();

document.querySelector("button.send").addEventListener("click", send);

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

document.querySelector(".audio").addEventListener("mousedown", audio_start);
document.querySelector(".audio").addEventListener("touchdown", audio_start);
document.querySelector(".audio").addEventListener("mouseup", audio_end);
document.querySelector(".audio").addEventListener("touchup", audio_end);

function audio_start() {
	console.log("Start...");
	socket.emit("audio", { play: true });
}
function audio_end() {
	console.log("End...");
	socket.emit("audio", { play: false });
}