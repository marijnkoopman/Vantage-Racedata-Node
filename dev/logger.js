
const fs = require("fs");
let known_events;
function update_known() {
	known_events = [];
	let all_log_dates = fs.readdirSync("dev/logs");
	for(let dir of all_log_dates) {
		let files = fs.readdirSync(`dev/logs/${dir}/`).map(name => name.split(" ").pop().replace(/\.json/g, ""));
		known_events = [...known_events, ...files];
	}
	// known_events = Array.from(new Set(known_events));
	known_events = Array.from(new Set(known_events));
	console.log(known_events)
}

require("colors");
require("dotenv").config();

const net = require("net");
const dir_path = __dirname + `/logs/${new Date().toJSON().replace(/\.|:/g, "-").replace(/T/g, "    ").split("-").slice(0, 5).join("-")}`;
if(!fs.existsSync(dir_path)) {
	fs.mkdirSync(dir_path);
}
update_known();

const client = net.createConnection(process.env.PORT, process.env.HOST, () => {
	client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"Logger","version":"0.1"}\n`);
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

		console.log(`${new Date().toJSON().split(/T|\./)[1]} NEW MESSAGE ${"-".repeat(30)}`.bold.green);
		
		if(known_events.includes(message.typeName)) return;
		console.log(message);
		
		let path = `${dir_path}/${ new Date().toJSON().replace(/\.|:/g, "-").replace(/T/g, "    ").split("-").slice(0, 6).join("-")} ${message.typeName}.json`;
		fs.writeFileSync(path, JSON.stringify(message, null, "\t"));
		update_known();
	});
}

client.on("end", () => {
	console.log("Connection was broken");
});

module.exports = {
	client,
	handle_json
}