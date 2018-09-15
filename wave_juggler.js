const osc_skipper = (freqs, waves, up_time, down_time, context) => {
	let next_freq = freqs[0]
	const osc = context.createOscillator()
	const juggle = waves
	if (freqs.length !== juggle.length) throw new Error("no")
	let x = 0
	osc.frequency.value = 1
	let down = false
	let z = () => {
		osc.frequency.exponentialRampToValueAtTime(next_freq, context.currentTime + ((down ? down_time : up_time)/1000))
		if (next_freq === freqs[x]) {
			x++
			x %= 3
			osc.type = juggle[x]
			next_freq = 1
			down = true
        } else {
			next_freq = freqs[x]
			down = false
        }
		setTimeout(z, (down ? up_time : down_time))
    }
	z()
	return osc
}
