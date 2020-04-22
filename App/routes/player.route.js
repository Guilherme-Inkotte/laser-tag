const express = require('express');
const router = express.Router();

const playerController = require('../controllers/blink.controller')
const player_controller = new playerController();

router.post('/blinkLed', player_controller.blink);

module.exports = router;