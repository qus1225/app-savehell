var Sequelize = require('sequelize');

module.exports = new Sequelize('savehell', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 50,
    min: 0,
    idle: 10000
  },
  omitNull: false
});
