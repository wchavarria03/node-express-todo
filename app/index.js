// content of index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const error = require('./error/error.js');

const api = require('./api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/api/', api);

//Error Handler
app.use(error);

module.exports = app;