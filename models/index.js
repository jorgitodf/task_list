var path = require('path');
var fs = require('fs');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:root@localhost:3306/tasklist');
var lodash = require('lodash');
var db = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file !== 'index.js');
  })
  .forEach(function(file, key) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db)
      .forEach(function(model){
          if (!db[model].hasOwnProperty('associate')) {
              return;
          } else {
              return db[model].associate(db);
          }
      });

module.exports = lodash.extend({
  Sequelize: Sequelize,
  sequelize: sequelize
}, db);
