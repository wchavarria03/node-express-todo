const logErrorHandler = require('./logErrorHandler');
const errorHandler = require('./errorHandler');

module.exports = (app) => {
  app.use(logErrorHandler);
  app.use(errorHandler);
};