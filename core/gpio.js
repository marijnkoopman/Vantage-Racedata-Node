const gpio = require('onoff').Gpio;
const buttonUp = new gpio(4, 'in', 'rising', {debounceTimeout: 10});
 
buttonUp.watch((err, value) => {
  if (err) {
    throw err;
  }
  if (value = 1) console.log('buttonUp = 1');
  if (value = 0) console.log('buttonUp = 0');
}  

process.on('SIGINT', _ => {
  led.unexport();
  button.unexport();
});
