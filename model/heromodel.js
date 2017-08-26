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
    }
  };

  return {
    api : api
  };
})();