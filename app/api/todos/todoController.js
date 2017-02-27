var lodash = require('lodash');
var jsonfile = require('jsonfile');
var fileData = require('../../data/db.json');
var path = require('path');
var file = path.resolve(__dirname + '/../../data/db.json');

exports.params = function (req, res, next, id) {
  req.todoId = id;
  next();
};

exports.get = function(req, res, next) {
  res.json(fileData);
};

exports.post = function(req, res, next) {
  var newTodo = req.body;
  
  //TODO Change this by something more reliable
  req.body.id = Date.now();
  fileData.todos.push(newTodo);;
  res.json(newTodo);
  
  jsonfile.writeFile(file, data, function (err) {
    if (err) {
      console.error(err)
    }
  });
};

exports.getOne = function(req, res, next) {
  var todo = lodash.find(fileData.todos, {id: parseInt(req.todoId)});
  res.json(todo);
};

exports.delete = function(req, res, next) {
  var todoIndex = lodash.findIndex(fileData.todos, {id: parseInt(req.todoId)});
  fileData.todos.splice(todoIndex, 1);

  jsonfile.writeFile(file, fileData, function (err) {
    if (err) {
      console.error(err)
    }
  });
  res.json('Deleted todo/' + req.todoId);
};