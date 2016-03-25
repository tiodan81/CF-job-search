require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./templates/company_template.html');
require('file?name=[name].[ext]!./templates/job_search_template.html');
require('file?name=[name].[ext]!./logo.jpg');
require('./scss/application.scss');
require('angular');
require('angular-route');

var cfJobSearch = angular.module('cfJobSearch', ['ngRoute']);
require('./js')(cfJobSearch);

cfJobSearch.config(['$routeProvider', function($route) {
  $route.when('/', {
    templateUrl: '/dist/job_search_template.html',
    controller: 'jobSearchCtrl'
  })
  .when('/company/:name', {
    templateUrl: '/dist/company_template.html',
    controller: 'companyCtrl'
  });
}]);
