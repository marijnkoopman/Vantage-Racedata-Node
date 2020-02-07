// const net = require("net");
const handle_message = require("./handle_message");
// const client = net.createConnection(process.env.VantageServerPort, process.env.VantageServerIP, () => {
// 	client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"${process.env.NAME}","version":"0.1"}\n`);
// });

const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', function open() {
	ws.send('something');
});


let cache = "";

ws.on('message', function incoming(data) {
	handle_json(data);
	});

// ws.on('message', evt => {
// 	let str = evt.toString();
// 	cache += str;
// 	if(str.endsWith("\r\n")) {
// 		handle_json(cache.split("\r\n"));
// 		cache = "";
// 	}	
// });


// client.on("data", evt => {
// 	let str = evt.toString();
// 	cache += str;
// 	if(str.endsWith("\r\n")) {
// 		handle_json(cache.split("\r\n"));
// 		cache = "";
// 	}	
// });

function handle_json(array) {
	// array = array.filter(i => i.length > 0).map(i => JSON.parse(i));
	// array.forEach(message => {
	// 	console.log(`${new Date().toJSON().split(/T|\./)[1]} ${message.typeName} ${"-".repeat(30)}`.bold.green);
		// handle_message(message);
		handle_message(JSON.parse(array));
		// console.log("New message:", array);
	// });
}

// client.on("end", () => {
// 	console.log("Connection was broken");
// });

module.exports = {
	WebSocket,
	// client,
	handle_json,
	handle_message
}