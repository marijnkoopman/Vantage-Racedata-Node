const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 8080;

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
});

module.exports = {
	app,
	server,
	io
}