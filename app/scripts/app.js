'use strict';

/**
 * @ngdoc overview
 * @name xconfScheduleApp
 * @description
 * # xconfScheduleApp
 *
 * Main module of the application.
 */
angular
    .module('xconfScheduleApp', [
    'ngMaterial',
    'ngAnimate',
     'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/details/:talkid', {
                templateUrl: 'views/details.html',
                controller: 'DetailsController'
            })
            .when('/myschedule', {
                templateUrl: 'views/myschedule.html',
                controller: 'MyScheduleController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
/// Common controllers for the material design
angular.module('xconfScheduleApp')
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('left').close();
        };

        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };

    });
