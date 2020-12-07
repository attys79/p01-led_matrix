basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
for (let i = 0; i <= 255; i++) {
    led.setBrightness(i)
    basic.pause(50)
}
basic.forever(function () {
	
})
