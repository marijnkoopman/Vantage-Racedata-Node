const net = require("net");
const handle_message = require("./handle_message");
const client = net.createConnection(process.env.VantageServerPort, process.env.VantageServerIP, () => {
	client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"${process.env.NAME}","version":"0.1"}\n`);
});

let cache = "";
client.on("data", evt => {
	let str = evt.toString();
	cache += str;
	if(str.endsWith("\r\n")) {
		handle_json(cache.split("\r\n"));
		cache = "";
	}	
});

function handle_json(array) {
	array = array.filter(i => i.length > 0).map(i => JSON.parse(i));
	array.forEach(message => {
		console.log(`${new Date().toJSON().split(/T|\./)[1]} ${message.typeName} ${"-".repeat(30)}`.bold.green);
		handle_message(message);
	});
}

client.on("end", () => {
	console.log("Connection was broken");
});

module.exports = {
	client,
	handle_json,
	handle_message
}