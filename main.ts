for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        basic.pause(250)
        led.unplot(x, y)
        basic.pause(250)
    }
}
basic.forever(function () {
	
})
