var heroModel = require('../model/heromodel');
var battleModel = require('./battlemodel');
var monsterModel = require('../model/monstermodel');
var victoryModel = require('../model/victorymodel');

module.exports = (function () {

  return {
    heroModel: heroModel.api,
    battleModel: battleModel.api,
    monsterModel: monsterModel.api,
    victoryModel: victoryModel.api
  }
})();