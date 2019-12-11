const socket = io();

document.querySelector("button").addEventListener("click", send);

function send() {
	socket.emit("lapChange", {
		"white": document.querySelector("#pushWhite").value,
		"red": document.querySelector("#pushRed").value,
		"yellow": document.querySelector("#pushYellow").value,
		"blue": document.querySelector("#pushBlue").value
	});
}