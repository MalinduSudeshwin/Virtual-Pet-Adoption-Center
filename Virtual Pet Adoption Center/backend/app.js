const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const petRoutes = require('./routes/petRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/pets', petRoutes);

module.exports = app;
