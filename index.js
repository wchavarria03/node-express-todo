var config = require('./app/config');
var app = require('./app');

app.listen(config.port);
console.log('listening on http://localhost:' + config.port);