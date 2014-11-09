'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('MainController', ['$scope', '$http',
        function ($scope, $http, $mdToast) {
            $scope.predicate = 'slotNo';
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
                    $scope.toastIt('Not able to fetch schedules.');
                    console.log(status + headers + config);
                });
            }

            $scope.toastIt = function (message) {
                $mdToast.show({
                    template: '<md-toast>Sorry, ' + message + '</md-toast>',
                    hideDelay: 2000,
                    position: 'top right'
                });
            };
    }]);
