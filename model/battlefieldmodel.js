var battlefield = require('../db/battlefield');

module.exports =(function () {

  var api = {

    selectBattleField: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        battlefield.findAll().then(function(results) {
          success(results);
        }, error);
      } else {
        battlefield.findAll({where: conditions, order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        }, error);
      }
    }
  };

  return {
    api : api
  };
})();