const context = new AudioContext()

/**
	* @param {OscillatorType} type - The type of oscillator.
	* @param {Number} freq - How often the frequency (pitch) will change. If constant is false, it will be random, otherwise it will change every `freq` milliseconds.
	* @param {Number} range - The highest the frequency of the oscillator can go.
	* @param {Boolean} constant - If false, the frequency will change at a random interval, otherwise change every `freq` milliseconds.
	* @returns {OscillatorNode} - Returns an already functioning oscillator node.
*/
function nightmare(type, freq, range, constant) {
	const oscillator = context.createOscillator()
	oscillator.type = type
	let rand = 0
	function loop() {
		rand = Math.random() * freq
		oscillator.frequency.exponentialRampToValueAtTime(Math.random() * range, context.currentTime+(rand/1000))
		setTimeout(loop, rand)
    }
	if (constant) { 
		setInterval(e => {
           oscillator.frequency.exponentialRampToValueAtTime(Math.random() * range, context.currentTime+(freq/1000))
        }, freq)
    } else {
		loop()
    }
	
	oscillator.connect(context.destination)
	oscillator.start()
	return oscillator
}
