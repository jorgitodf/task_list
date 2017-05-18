var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/', function(req, res, next) {
    db.Tasks.findAll()
          .then(function(result){
              res.render('tasks', {tasks: result});
          })
          .catch(function(err){
              console.log('ERROR =>', err);
          });
});

router.get('/create', function(req, res, next) {
    res.render('new_tasks');
});

router.post('/', function(req, res, next) {
    if (!req.body.name || !req.body.name.length) {
        return res.redirect('/tasks');
    }

    db.Tasks.create(req.body)
          .then(function(result){
              return res.redirect('/tasks');
          })
          .catch(function(err){
              console.log('ERROR =>', err);
          });
});

router.delete('/:id', function(req, res, next) {
    db.Tasks.destroy({
      where: {
          id: req.params.id
      },
    })
    .then(function(){
        return res.redirect('/tasks');
    })
    .catch(function(err){
        console.log('ERROR =>', err);
    });
});

router.put('/:id', function(req, res, next) {
    db.Tasks.update(req.body, {
      where: {
          id: req.params.id
      },
    })
    .then(function(){
        return res.redirect('/tasks');
    })
    .catch(function(err){
        console.log('ERROR =>', err);
    });
});

router.get('/:id', function(req, res, next) {
    db.Tasks.findById(req.params.id)
        .then(function(result){
            res.render('task', {task: result});
        })
        .catch(function(err){
            console.log('ERROR =>', err);
        });
});

router.get('/edit/:id', function(req, res, next) {
    db.Tasks.findById(req.params.id)
        .then(function(result){
            res.render('edit_tasks', {task: result});
        })
        .catch(function(err){
            console.log('ERROR =>', err);
        });
});

module.exports = router;
