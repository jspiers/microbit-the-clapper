input.onSound(DetectedSound.Quiet, function () {
    clapCount += 10
    if (clapCount > 10) {
        isOn = !(isOn)
        clapCount = 0
    }
})
let isOn = false
let clapCount: number
clapCount = 0
soundExpression.hello.play()
basic.forever(function () {
    if (isOn) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
loops.everyInterval(100, function () {
    if (clapCount > 0) {
        clapCount += -1
    }
})
