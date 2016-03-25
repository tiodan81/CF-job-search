var jobData = require('./jobdata');

module.exports = function(app) {
  app.factory('jobData', function() {
    return {
      getJobs: function() {
        return jobData;
      },
      getCompany: function(company) {
        for (var i = 0; i < jobData.length; i++) {
          if (jobData[i].company === company) {
            return jobData[i];
          }
        }
        return false;
      }
    };
  });
};
