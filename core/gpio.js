const gpio = require('onoff').Gpio;
const buttonUp = new gpio(4, 'in', 'rising', {debounceTimeout: 10});

buttonUp.watch((err, value) => {
  if (err) {
    throw err;
  }
  console.log('buttonUp =', value);
});

process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});
