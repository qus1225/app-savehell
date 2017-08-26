var Sequelize = require('sequelize');

var db = require('../config/db');

var Victory = db.define('Victory', {

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  monsterId : {
    type : Sequelize.INTEGER(11),
    allowNull : false
  },
  approval : {
    type : Sequelize.BOOLEAN,
    allowNull : false,
    defaultValue: false
  }
});

module.exports = Victory;
