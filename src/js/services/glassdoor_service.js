module.exports = function(app) {
  app.factory('glassdoor', ['$http', function($http) {
    return {
      getCompany: function(company, callback) {
        $http.get('/api/glassdoor/' + company).then(function(data) {
          callback(null, data);
        }, function(err) {
          callback(err);
        });
      }
    };
  }]);
};
