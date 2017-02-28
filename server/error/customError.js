var lodash = require('lodash');

const errorCodes = [
  {
    code: 1,
    message: 'Not found todo information'
  }
];

module.exports = (errorCode, message) => {

  var error = new Error(lodash.find(errorCodes, {code: errorCode}).message);
  error.code = errorCode;
};