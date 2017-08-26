var heroModel = require('../model/heromodel');
var battleFieldModel = require('../model/battlefieldmodel');
var monsterModel = require('../model/monstermodel');
var victoryModel = require('../model/victorymodel');

module.exports = (function () {

  return {
    heroModel: heroModel.api,
    battleFieldModel: battleFieldModel.api,
    monsterModel: monsterModel.api,
    victoryModel: victoryModel.api
  }
})();