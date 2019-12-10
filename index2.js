const net = require("net");
require("colors");
// const ndjson = require("ndjson");

// const client = net.createConnection(52010, "192.168.10.249", () => {
//     client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"Marijn HTML Lapboard","version":"0.1"}\n`);
// });

const client = net.createConnection(52010, "127.0.0.1", () => {
    client.write(`{"applicationName":"Vantage Info Node V2019-12-06","instanceName":"Marijn HTML Lapboard","version":"0.1"}\n`);
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
        console.log(JSON.stringify(message));
        if(message.races) {
            var racers = arr.filter(i => message.races.race);
            console.log(racers);
        }
    });
}

client.on("end", () => {
    console.log("Connection was broken");
});