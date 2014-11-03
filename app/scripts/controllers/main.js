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
        function ($scope, $http) {
            $http.get('data.json').success(function (data) {
                $scope.talks = data;
                $scope.predicate = 'slotNo';
            });
    }]);
