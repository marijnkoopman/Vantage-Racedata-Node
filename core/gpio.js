const gpio = require('onoff').Gpio;
const buttons = {
	switchMode:		4,
	lapIncrease:	17,
	lapDecrease:	27,
	ringBell:		22
}

for(let key of Object.keys(buttons)) {
	buttons[key] = new gpio(buttons[key], 'in', 'both', {debounceTimeout: 10});
}

button.switchMode.watch(switchMode);
button.lapIncrease.watch(lapIncrease);
button.lapDecrease.watch(lapDecrease);
button.ringBell.watch(ringBell);

function switchMode(err, value) {
	if (err) throw err;
	console.log('switchmode =', value);
}

function lapIncrease(err, value) {
	if (err) throw err;
	console.log('switchmode =', value);
}

function lapDecrease(err, value) {
	if (err) throw err;
	console.log('switchmode =', value);
}

function ringBell(err, value) {
	if (err) throw err;
	console.log('switchmode =', value);
}

process.on('SIGINT', _ => {
	Object.values(buttons).forEach(b => b.unexport());
});
