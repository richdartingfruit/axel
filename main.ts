input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(80)
    servos.P2.stop()
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    servos.P1.setAngle(100)
    servos.P2.run(-68)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P1.setAngle(128)
    servos.P2.run(100)
})
