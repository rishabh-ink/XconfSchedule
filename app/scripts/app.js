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
            .when('/datafeeder', {
                templateUrl: 'views/datafeeder.html',
                controller: 'FeederController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
