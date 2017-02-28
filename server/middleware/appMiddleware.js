const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const helmet = require('helmet')

module.exports = (app) => {
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
};