module.exports = function(app) {
  app.factory('glassdoor', ['$http', function($http) {
    return {
      getCompany = function(company, callback) {
        var apiId = '56941';
		    var apiKey = 'bPTsEIdyLXk';
			  var apiUrl = 'http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=' + apiId +
			               '&t.k=' + apiKey +
			               '&action=employers&q=' + company +
			               '&callback=?';
        $http.get(apiUrl).then(function(data) {
          callback(null, data);
        }, function(err) {
          callback(err);
        });
      };
    };
  }]);
};
