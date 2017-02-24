// content of index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());


//Validations
app.use((request, response, next) => {
	next();
});

//Routes
app.get('/', (request, response) => {  
	
});

//Error Handler
app.use((err, request, response, next) => {
	console.log(err);
	response.status(500).send('Something broke!');	
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

module.exports = app;