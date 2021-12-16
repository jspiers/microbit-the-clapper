input.onSound(DetectedSound.Quiet, function () {
    clapCount += 10
    if (clapCount > 10) {
        isOn = !(isOn)
        if (isOn) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        clapCount = 0
    }
})
let isOn = false
let clapCount: number
clapCount = 0
basic.showString("Clap on, clap off... the clapper!")
loops.everyInterval(100, function () {
    if (clapCount > 0) {
        clapCount += -1
    }
})
