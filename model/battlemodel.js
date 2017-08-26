var battle = require('../db/battle');

module.exports =(function () {

  var api = {

    selectBattle: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        battle.findAll().then(function(results) {
          success(results);
        }, error);
      } else {
        battle.findAll({where: conditions, order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        }, error);
      }
    }
  };

  return {
    api : api
  };
})();