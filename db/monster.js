var Sequelize = require('sequelize');

var db = require('../config/db');

var Monster = db.define('Monster', {

  id : {
    type : Sequelize.INTEGER(11),
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
  },
  makerId : {
    type : Sequelize.INTEGER(11),
    allowNull : false
  },
  species : {
    type : Sequelize.STRING(45),
    allowNull : true
  },
  name : {
    type : Sequelize.STRING(45),
    allowNull : false
  },
  desc : {
    type : Sequelize.TEXT,
    allowNull : false
  },
  locationLat : {
    type : Sequelize.DOUBLE,
    allowNull : false,
  },
  locationLon : {
    type : Sequelize.DOUBLE,
    allowNull : false,
  },
  image : {
    type : Sequelize.STRING(45),
    allowNull : true
  }
});

module.exports = Monster;