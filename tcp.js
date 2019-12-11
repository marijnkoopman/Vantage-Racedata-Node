const net = require("net");
const { io } = require("./server");
const handle_message = require("./handle_message");
const giveColor = new Map([
	[0, "white"],
	[1, "red"],
	[2, "yellow"],
	[3, "blue"],
]);
let racer_colors = {}
const client = net.createConnection(52010, "192.168.10.249", () => {
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


// Eval
const serverline = require("serverline");
serverline.init();
function prompt() {
    serverline.question("Eval: ".bold.red, a => {
        let response = eval(a);
        if(response) console.log(response);
        prompt();
    });
}
prompt();

function send_fake() {
    handle_json([
        `{"races":[{"race":{"id":"df9fa9f8-6879-4ea0-b521-0c7347b78532","distanceId":"976f0586-5230-4b4c-bc24-50921348b7dc","competitor":{"name":{"initials":"J.","firstName":"Jannick","surnamePrefix":null,"surname":"Harmsen"},"personId":"72d9a7e4-5a3e-44b2-b68d-639ad2462c25","id":"4b6cbaf4-6553-45a6-a7c8-44efdf191fd3","listId":"ee29d01f-06d7-4f69-97c5-e7955c203145","startNumber":19,"legNumber":null,"nationalityCode":"NED","licenseDiscipline":"SpeedSkating.LongTrack","licenseKey":"10221010","licenseFlags":10,"status":1,"category":"HSA","class":null,"sponsor":null,"clubCountryCode":"NED","clubCode":5001,"clubShortName":"LACUSTRIS","clubFullName":"NSSSV Lacustris","from":"Nijmegen","transponder1":null,"transponder2":null,"fullName":"Jannick Harmsen","shortName":"Harmsen","gender":0,"added":"2019-11-06T10:42:01.8182455","source":0,"typeName":"PersonCompetitor"},"round":1,"heat":34,"lane":0,"color":0,"personalBest":3565760000,"seasonBest":null,"result":{"instanceName":"Tim","status":4,"timeInvalidReason":null,"points":null},"time":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","instanceName":"Tim","how":"Optical","time":3394420000,"timeInfo":4},"laps":[{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:26:50.361","time":378150000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:24.402","time":718560000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:59.741","time":1071950000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:28:35.55","time":1430040000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:12.607","time":1800610000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:51.364","time":2188180000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:30:30.713","time":2581670000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:11.547","time":2990010000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Tim","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:51.988","time":3394420000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null}],"transponders":[]},"start":{"instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Start"},"when":"2019-11-10T19:26:12.546","flags":0},"passings":[{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:26:50.361","flags":33,"time":378150000,"passed":null,"speed":null,"where":1},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:24.402","flags":33,"time":718560000,"passed":null,"speed":null,"where":0},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:59.741","flags":33,"time":1071950000,"passed":null,"speed":null,"where":1},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:28:35.55","flags":33,"time":1430040000,"passed":null,"speed":null,"where":0},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:12.607","flags":33,"time":1800610000,"passed":null,"speed":null,"where":1},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:51.364","flags":33,"time":2188180000,"passed":null,"speed":null,"where":0},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:30:30.713","flags":33,"time":2581670000,"passed":null,"speed":null,"where":1},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:11.547","flags":33,"time":2990010000,"passed":null,"speed":null,"where":0},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:51.988","flags":33,"time":3394420000,"passed":null,"speed":null,"where":1}],"laps":[{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:26:50.361","time":378150000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:24.402","time":718560000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:27:59.741","time":1071950000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:28:35.55","time":1430040000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:12.607","time":1800610000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:29:51.364","time":2188180000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:30:30.713","time":2581670000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:11.547","time":2990010000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null},{"raceId":"df9fa9f8-6879-4ea0-b521-0c7347b78532","instanceName":"Marijn","presentationSource":{"applianceName":"MYLAPS X2","applianceInstanceName":"Main","how":"Optical"},"when":"2019-11-10T19:31:51.988","time":3394420000,"flags":33,"points":null,"fixedIndex":null,"fixedRanking":null}],"estimatedLaps":[{"time":388110000,"index":0,"rounds":1,"roundsToGo":8,"passedLength":333,"lapTime":388100000,"ranking":null},{"time":764090000,"index":1,"rounds":2,"roundsToGo":7,"passedLength":667,"lapTime":375900000,"ranking":null},{"time":1146140000,"index":2,"rounds":3,"roundsToGo":6,"passedLength":1000,"lapTime":382100000,"ranking":null},{"time":1534250000,"index":3,"rounds":4,"roundsToGo":5,"passedLength":1333,"lapTime":388100000,"ranking":null},{"time":1928420000,"index":4,"rounds":5,"roundsToGo":4,"passedLength":1667,"lapTime":394200000,"ranking":null},{"time":2328660000,"index":5,"rounds":6,"roundsToGo":3,"passedLength":2000,"lapTime":400200000,"ranking":null},{"time":2734960000,"index":6,"rounds":7,"roundsToGo":2,"passedLength":2333,"lapTime":406300000,"ranking":null},{"time":3147330000,"index":7,"rounds":8,"roundsToGo":1,"passedLength":2667,"lapTime":412400000,"ranking":null},{"time":3565760000,"index":8,"rounds":9,"roundsToGo":0,"passedLength":3000,"lapTime":418400000,"ranking":null}]}],"heat":{"round":1,"number":34},"distanceId":"976f0586-5230-4b4c-bc24-50921348b7dc","competitionId":"3c53643a-6e0d-4f1e-b4a3-e38e3fdeefdd","typeName":"HeatActivatedEvent"}`
    ]);
}