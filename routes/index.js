var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Task = new Schema({
  task: String
});

var TaskCollection = mongoose.model('Task', Task);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/next', function(req, res, next) {
  res.render('index', { title: '你现在进入了下一个页面' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.render('index',{title: 'my friend you have registered'});
});

router.get('/user/:id', function(req, res, next) {
  res.render('index',{title: req.params.id});
});

router.get('/todoList', function(req, res, next) {
  TaskCollection.find({}, function(err, todoList){
    res.render('todoList',{todoList: todoList});
  });
});

router.get('/createTask', function(req, res){
  res.render('createTask', {title: 'New Task'});
});

router.post('/addTask', function(req, res){
  var task = new TaskCollection(req.body);
  task.save(function(err){
    if(!err){
      res.redirect('todoList');
    }else {
      res.redirect('createTask');
    }
  });
});

router.get('/:id/edit', function(req, res){
  TaskCollection.findById(req.params.id, function(err, todoList){
    res.render('edit', {
      title: 'Edit Task',
      todoList: todoList
    });
  });
});

module.exports = router;
