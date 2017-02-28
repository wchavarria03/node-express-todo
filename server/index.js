// content of index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const api = require('./api');

//app middlewares
require('./middleware/appMiddleware')(app);

//api
app.use('/api/v1', api);

//Error Handlers
require('./error')(app);

module.exports = app;