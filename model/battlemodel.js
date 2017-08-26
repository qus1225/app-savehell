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
    },

    insertBattle: function (data, success) {
      var list = [data];
      battle.bulkCreate(list, {individualHooks: true}).then(function (results) {
        success(results);
      });
    }
  };

  return {
    api : api
  };
})();