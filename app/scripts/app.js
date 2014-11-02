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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
            .otherwise({
                redirectTo: '/'
            });
    });
