radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == randint(1, receivedNumber)) {
        basic.showString("You won a drink")
        radio.sendString("Gewonnen")
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("Verloren")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Aantal Mensen")
})
radio.setGroup(3)
