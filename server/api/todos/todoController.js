var lodash = require('lodash');
var jsonfile = require('jsonfile');
var fileData = require('../../data/db.json');
var path = require('path');
var file = path.resolve(__dirname + '/../../data/db.json');
var customError = require('../../error/customError');

exports.params = function (req, res, next, id) {
  req.todoId = id;
  next();
};

exports.get = function(req, res, next) {
  res.status(200).json(fileData);
};

exports.post = function(req, res, next) {
  var newTodo = req.body;
  
  //TODO Change this by something more reliable
  req.body.id = Date.now();
  fileData.todos.push(newTodo);;
  jsonfile.writeFile(file, fileData, function (err) {
    if (err) {
      return next(new Error(err));
    }
    res.status(201).json(newTodo);
  });
};

exports.getOne = function(req, res, next) {
  var todo = lodash.find(fileData.todos, {id: parseInt(req.todoId)});
  if (!todo) {
    return next(new customError(1));
  }
  res.status(200).json(todo);
};

exports.delete = function(req, res, next) {
  var todoIndex = lodash.findIndex(fileData.todos, {id: parseInt(req.todoId)});
  fileData.todos.splice(todoIndex, 1);

  jsonfile.writeFile(file, fileData, function (err) {
    if (err) {
      return next(new Error('Error deleting todo'));
    }
    res.status(204).send();
  });
};