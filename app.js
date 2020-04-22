const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const player = require('./App/routes/player.route')

const app = express()

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.json());
app.use('/api/blink', player)

let port = 8080;

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port + '!!!');
});