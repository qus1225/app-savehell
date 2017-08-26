var victory = require('../db/victory');

module.exports =(function () {

  var api = {

    selectVictory: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        victory.findAll().then(function(results) {
          success(results);
        }, error);
      } else {
        victory.findAll({where: conditions, order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        }, error);
      }
    }
  };

  return {
    api : api
  };
})();