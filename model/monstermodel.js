var monster = require('../db/monster');

module.exports =(function () {

  var api = {

    selectMonster: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        monster.findAll().then(function(results) {
          success(results);
        });
      } else {
        monster.findAll({order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        });
      }
    },

    insertMonster: function (data, success) {
      var list = [data];
      monster.bulkCreate(list, {individualHooks: true}).then(function (results) {
        success(results);
      });
    }
  };

  return {
    api : api
  };
})();