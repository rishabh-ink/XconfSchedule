'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:MyScheduleController
 * @description
 * # MyScdeduleController
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('MyScheduleController', ['$scope', '$http',
    function ($scope, $http) {
            $scope.predicate = 'slotNo';
            var data;
            if (typeof (Storage) !== 'undefined') {
                data = localStorage.getObject('talksxconf');
                $scope.mySchedule = data;
            }

            $scope.isInMySchedule = function (talk) {
                return talk.attending;
            }

            $scope.toggleSchedule = function (talk) {
                var index = $scope.mySchedule.indexOf(talk);
                $scope.mySchedule[index].attending = !$scope.mySchedule[index].attending;
                localStorage.setObject('talksxconf', $scope.mySchedule);
            };
    }]);
