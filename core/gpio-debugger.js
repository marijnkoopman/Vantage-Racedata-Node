const gpio = require('onoff').Gpio;

for(let i = 0; i < 40; i++) {
    let btn = new gpio(i, 'in', 'both', {debounceTimeout: 10});
    btn.watch((err, value) => {
        console.log(`${i} = ${value}`);
    });
}


process.on('SIGINT', _ => {
	Object.values(buttons).forEach(b => b.unexport());
});
