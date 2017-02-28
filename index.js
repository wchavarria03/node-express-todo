var config = require('./server/config');
var app = require('./server');

app.listen(config.port, (err) => {  
  if (err) {
    return console.log('Server does not work', err)
  }
  console.log(`server is listening on ${config.port}`)
});