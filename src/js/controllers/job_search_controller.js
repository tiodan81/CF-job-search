module.exports = function(app) {
  app.controller('jobSearchCtrl', ['$scope', 'jobData', function($scope, jobData) {
    $scope.jobs = jobData.getJobs();

    $scope.stackFunction = function(job) {
      if (!$scope.stack) {
        return true;
      }
      return job[$scope.stack];
    };

    $scope.resetCity = function() {
      if (!$scope.state) {
        $scope.city = '';
      }
    };

    $scope.filterFunction = function(filterBy) {
      return function(job) {
        if (!$scope[filterBy]) {
          return true;
        }
        return $scope[filterBy] === job[filterBy];
      };
    };
  }]);
};
