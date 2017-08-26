var Sequelize = require('sequelize');
var credential = require('../credentials')

module.exports = new Sequelize('savehell', 'root', credential.DB_PASS, {
  host: credential.HOST,
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 50,
    min: 0,
    idle: 10000
  },
  omitNull: false
});
