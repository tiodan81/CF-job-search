module.exports = function(app) {
  app.controller('jobSearchCtrl', ['$scope', 'jobData', function($scope, jobData) {
    $scope.jobs = jobData.getJobs();
  }]);
};
