basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (mbit_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 15 && mbit_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) > 0) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 60)
        basic.pause(500)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 65)
        basic.pause(500)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
    }
})
