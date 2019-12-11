const socket = io();

socket.on("lap", data => {
	console.log(data);
});
socket.on("test", data => {
	console.log(data);
});