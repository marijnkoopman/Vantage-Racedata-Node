const net = require("net");
const handle_message = require("./handle_message");
const client = connect();
client.on("data", onData);
client.on("error", onError);
client.on("close", onClose);

function connect() {
    const c = net.createConnection(process.env.PORT, process.env.HOST, () => {
		client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"${process.env.NAME}","version":"0.1"}\n`)},
    ()=>{
        console.log('Connected to Vantage Server')
    });

    return c
}

let cache = "";

function onData() {
	let str = evt.toString();
	cache += str;
	if(str.endsWith("\r\n")) {
		handle_json(cache.split("\r\n"));
		cache = "";
	}	
};

function handle_json(array) {
	array = array.filter(i => i.length > 0).map(i => JSON.parse(i));
	array.forEach(message => {
		console.log(`${new Date().toJSON().split(/T|\./)[1]} ${message.typeName} ${"-".repeat(30)}`.bold.green);
		handle_message(message);
	});
}

function onError(err) {									// on error try to auto reconnect every second
    if(err.message.indexOf('ECONNREFUSED') > -1) {
        console.log("Attempting to reconnect shortly")
        setTimeout(()=>{
            client = connect();
            client.on("data", onData);
            client.on("error", onError);
            client.on("close", onClose);

        },1000)
    }
}
function onClose() {
	console.log("Connection was broken");
};

module.exports = {
	client,
	handle_json,
	handle_message
};