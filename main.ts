input.onSound(DetectedSound.Quiet, function () {
    count += 10
    if (count > 10) {
        isOn = !(isOn)
        count = 0
    }
})
let isOn = false
let count = 0
count = 0
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
    if (count > 0) {
        count += -1
    }
})
