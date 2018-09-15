const chaosToNote = (type, spr, freq, interval, decay_rate) => {
  const oscillator = context.createOscillator()
  oscillator.type = type
  let spread = spr
  oscillator.frequency.value = 1
  let x = () => {
  	let rand = Math.random()
    let rand_interval = Math.random() * interval
    rand = (rand > 0.5 ? rand : -rand) * spread
    
    oscillator.frequency.exponentialRampToValueAtTime(freq + rand, context.currentTime+((rand_interval)/1000))
    spread *= decay_rate
    setTimeout(x, rand_interval)
  }
  x()
  return oscillator
}
