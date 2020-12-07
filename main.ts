basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
for (let i = 0; i <= 255; i++) {
    led.setBrightness(i)
    basic.pause(1)
}
basic.forever(function () {
	
})
