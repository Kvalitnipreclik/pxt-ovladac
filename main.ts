// promene na hybani
let interval = 500

//promene na radio
radio.setGroup(93)
radio.setTransmitPower(7)
radio.setFrequencyBand(5)

//promene
let xmod = 0
let zamek = false
let posilaciString = ""

input.onButtonPressed(Button.A, function () {

    if (zamek === true) {
        zamek = false
        basic.showNumber(0)

    } else {
        zamek = true
        basic.showNumber(1)

    }




})

input.onButtonPressed(Button.B, function () {
basic.showNumber(5)
radio.sendString("nigger")



})


function pack(xmod: number) {


    xmod = input.acceleration(Dimension.X) + 1024
    xmod = Math.floor(xmod / 16)
    posilaciString = posilaciString + String.fromCharCode(x)

}


let x = 0
let y = 0
basic.forever(function () {
    if (zamek) {


     
        pack(x)
        pack(y)
        console.log(posilaciString)
        basic.showString(posilaciString)

        radio.sendString(posilaciString)
        posilaciString = ""

        basic.pause(interval)
    }
})
