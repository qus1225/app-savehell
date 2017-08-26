var Sequelize = require('sequelize');

var db = require('../config/db');

var Battle = db.define('Battle', {

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  heroId : {
    type : Sequelize.INTEGER(11),
    allowNull : false
  },
  monsterId : {
    type : Sequelize.INTEGER(11),
    allowNull : false
  },
  victoryId : {
    type : Sequelize.INTEGER(11),
    allowNull : true
  },
  memo : {
    type : Sequelize.TEXT,
    allowNull : true
  }
});

module.exports = Battle;
