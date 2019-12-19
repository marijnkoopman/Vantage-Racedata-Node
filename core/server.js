const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.presentationPort;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.redirect("/lapboard/");
});

app.get("/lapboard/", (req, res) => {
	res.sendFile(__dirname + "/public/lapboard.html");
});

server.listen(port, () => {
	console.log("Listening on " + port);
});

io.on("connection", socket => {
	socket.on("manualLapChange", data => {
		console.log(data);
		io.emit("lap", data);
	});

	socket.on("audio", data => {
		
		// Ik wil niet dat zomaar alles verstuurd kan worden...
		io.emit("audio", { 
			play: data.play ? true : false 
		});

	});

});

module.exports = {
	app,
	server,
	io
}
