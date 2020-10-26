const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const player = require('./App/routes/player.route')

const app = express()


app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.json());


var server = app.listen(3000)

var io = require("socket.io").listen(server)

io.sockets.on('connection', socket => {
    console.log("Usuário conectado!")
    socket.emit("info", { msg: "vsf2" })
})