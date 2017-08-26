var hero = require('../db/hero');

module.exports =(function () {

  var api = {

    selectHero: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        hero.findAll().then(function(results) {
          success(results);
        }, error);
      } else {
        hero.findAll({where: conditions, order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        }, error);
      }
    },

    updateHero: function (data, conditions, success) {
      hero.update(data, {where: conditions}).then(function (results) {
        success(results);
      });
    },

    insertHero: function (data, success) {
      var list = [data];
      hero.bulkCreate(list, {individualHooks: true}).then(function (results) {
        success(results);
      });
    }
  };

  return {
    api : api
  };
})();