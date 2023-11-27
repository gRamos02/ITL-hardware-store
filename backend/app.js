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

module.exports = app;