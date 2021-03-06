module.exports = function(app) {
  app.controller('companyCtrl', ['$scope', '$routeParams', 'jobData', 'glassdoor', function($scope, $routeParams, jobData, glassdoor) {
    $scope.company = jobData.getCompany($routeParams.name);

    $scope.getGlassdoor = function() {
      glassdoor.getCompany($routeParams.name, function(err, res) {
        if (err) console.log(err);
        $scope.glassdoor = res.data.response.employers[0];
      });
    };
  }]);
};
