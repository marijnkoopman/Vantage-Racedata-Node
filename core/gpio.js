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

buttons.switchMode.watch(switchMode);
buttons.lapIncrease.watch(lapIncrease);
buttons.lapDecrease.watch(lapDecrease);
buttons.ringBell.watch(ringBell);

function switchMode(err, value) {
	if (err) throw err;
	console.log('switchmode =', value);
}

function lapIncrease(err, value) {
	if (err) throw err;
	console.log('lapIncrease =', value);
}

function lapDecrease(err, value) {
	if (err) throw err;
	console.log('lapDecrease =', value);
}

function ringBell(err, value) {
	if (err) throw err;
	console.log('ringBell =', value);
}

process.on('SIGINT', _ => {
	Object.values(buttons).forEach(b => b.unexport());
});
