var config = require('./app/config');
var app = require('./app');

app.listen(config.port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${config.port}`)
});