var Sequelize = require('sequelize');

var db = require('../config/db');

var Hero = db.define('Hero', {

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  provider: {
    type : Sequelize.STRING(45),
    allowNull : false
  },
  nickName : {
    type : Sequelize.STRING(45),
    allowNull : false
  },
  skill : {
    type : Sequelize.STRING(45),
    allowNull : false
  },
  location : {
    type : Sequelize.INTEGER(11),
    allowNull : false
  },
  exp : {
    type : Sequelize.INTEGER(20),
    allowNull : false,
    defaultValue: 0
  },
  level : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    defaultValue: 1
  },
  image : {
    type : Sequelize.STRING(45),
    allowNull : true
  }

});

module.exports = Hero;