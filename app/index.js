// content of index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const api = require('./api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', api);

//Error Handler
app.use((err, request, response, next) => {
	console.log(err);
	response.status(500).send('Something broke!');	
});

module.exports = app;