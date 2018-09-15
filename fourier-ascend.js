// code modified from https://www.sitepoint.com/using-fourier-transforms-web-audio-api/

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();

var real = new Float32Array([0,0.4,0.4,1,1,1,0.3,0.7,0.6,0.5,0.9,0.8]);

var imag = new Float32Array(real.length);
var hornTable = audioContext.createPeriodicWave(real, imag);

osc = audioContext.createOscillator();
osc.setPeriodicWave(hornTable);
osc.frequency.value = 160;
osc.connect(audioContext.destination);
osc.start(0);


setInterval(_ => {
real = new Float32Array([...real.map(r => r >= 1 ? 0 : r + 0.01), 1])

imag = new Float32Array(real.length)
var hornTable = audioContext.createPeriodicWave(real, imag);
osc.setPeriodicWave(hornTable);

}, 100)
