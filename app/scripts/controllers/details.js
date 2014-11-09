'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:DetailsController
 * @description
 * # DetailsController
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('DetailsController', ['$scope', '$http', '$routeParams',
            function ($scope, $http, $mdToast, $routeParams) {

            var data;
            if (typeof (Storage) !== 'undefined') {
                data = localStorage.getObject('talksxconf');
                $scope.talks = data;
            }

            if (!data) {
                $http.get('data.json').success(function (data) {
                    $scope.talks = data;
                    localStorage.setObject('talksxconf', data);
                }).error(function (data, status, headers, config) {
                    $scope.toastIt('Not able to fetch Details.');
                    console.log(status + headers + config);
                });
            }

            $scope.whichItem = $routeParams.talkid;
            if ($routeParams.talkid > 0) {
                $scope.prevItem = Number($routeParams.talkid) - 1;
            } else {
                $scope.prevItem = $scope.talks.length - 1;
            }

            if ($routeParams.talkid < $scope.talks.length - 1) {
                $scope.nextItem = Number($routeParams.talkid) + 1;
            } else {
                $scope.nextItem = 0;
            }

            $scope.toastIt = function (message) {
                $mdToast.show({
                    template: '<md-toast>Sorry, ' + message + '</md-toast>',
                    hideDelay: 2000,
                    position: 'top right'
                });
            };
    }]);
