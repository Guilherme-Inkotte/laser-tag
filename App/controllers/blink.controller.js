require('dotenv').config()
const Player = require('../models/player.model');
const five =require('johnny-five');

var board = new five.Board();

class PlayerController {
    async blink(req, res) {
        try {
            // board.on('ready',function(){
            //     var led= new five.Led(process.env.PORTA_LED);
            //     led.blink(500);
            // });
            console.log("vsf1")
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = PlayerController