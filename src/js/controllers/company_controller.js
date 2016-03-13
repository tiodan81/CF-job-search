module.exports = function(app) {
  app.controller('companyCtrl', ['$scope', '$routeParams', 'jobData', function($scope, $routeParams, jobData) {
    $scope.company = jobData.getCompany($routeParams.name);
  }]);
};
