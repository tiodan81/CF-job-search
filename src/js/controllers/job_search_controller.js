module.exports = function(app) {
  app.controller('jobSearchCtrl', ['$scope', 'jobData', function($scope, jobData) {
    $scope.jobs = jobData.getJobs();

    $scope.stackFunction = function(job) {
      if (!$scope.stack) {
        return true;
      }
      return job[$scope.stack];
    };

    $scope.cityFunction = function(job) {
      if (!$scope.city) {
        return true;
      }
      return $scope.city === job.city;
    };

    $scope.sizeFunction = function(job) {
      if (!$scope.size) {
        return true;
      }
      return $scope.size === job.size;
    };

  }]);
};
