
// promene na hybani
let interval = 20

//promene na radio
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)

//promene
let xmod = 0
let zamek = false
let posilaciString = ""

input.onButtonPressed(Button.A, function () {

    if (zamek === true) {
        zamek = false
       
    } else {
        zamek = true
        
    }

   


})


function pack(x: number) {


    xmod = input.acceleration(Dimension.X) + 1024
    xmod = Math.floor(xmod / 8)
    posilaciString = posilaciString + String.fromCharCode(x)

}


let x = 0
let y = 0
basic.forever(function () {
    if (zamek) {


        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        pack(x)
        pack(y)
        console.log(posilaciString)

      
        radio.sendString(posilaciString)
        posilaciString = ""
        
        basic.pause(interval)
    }
})
