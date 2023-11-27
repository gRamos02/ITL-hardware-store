const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(express.static("public"));
app.use(express.json());

//RUTAS
const routes = require('./routes')
app.use('/api', routes)

app.get('/api', (req, res) => {
    res.json({API: "UP"})
})

app.get('/', (req, res) => {
    res.status(200).send('ITL HARDWARE STORE API')
})

app.get('/healthcheck', (req, res) => {
    return res.sendStatus(200);
})

module.exports = app;