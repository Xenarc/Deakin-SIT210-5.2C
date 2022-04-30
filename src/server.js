const express = require("express");
const Gpio = require('onoff').Gpio;

const Red = new Gpio(17, 'out');
const Green = new Gpio(18, 'out');
const Blue = new Gpio(19, 'out');

const app = express();

let LEDStates = {
  red: false,
  green: false,
  blue: false,
}

function resetAllLEDStates() {
  // Set all to false
  LEDStates.red = false;
  LEDStates.green = false;
  LEDStates.blue = false;
}

function updateLEDStates(){
  if(LEDStates.red) Red.writeSync(true);
  if(LEDStates.green) Green.writeSync(true);
  if(LEDStates.blue) Blue.writeSync(true);
}


app.get("/LED/red/1", () => {
  LEDStates.red = true;
  resetAllLEDStates();
  updateLEDStates()
});

app.get("/LED/red/0", () => {
  LEDStates.red = true;
  resetAllLEDStates();
  updateLEDStates()
});

app.get("/LED/green/1", () => {
  LEDStates.green = true;
  resetAllLEDStates();
  updateLEDStates()
});

app.get("/LED/green/0", () => {
  LEDStates.green = true;
  resetAllLEDStates();
  updateLEDStates()
});

app.get("/LED/blue/1", () => {
  LEDStates.blue = true;
  resetAllLEDStates();
  updateLEDStates()
});

app.get("/LED/blue/0", () => {
  LEDStates.blue = true;
  resetAllLEDStates();
  updateLEDStates()
});


const PORT = 3005;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

process.on('SIGINT', () => {
  // Cleanup
  Red.unexport();
  Green.unexport();
  Blue.unexport();
});
