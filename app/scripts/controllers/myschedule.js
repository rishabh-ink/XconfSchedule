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

            var data;
            if (typeof (Storage) !== 'undefined') {
                data = localStorage.getObject('talksxconf');
                $scope.mySchedule = data;
            }

            $scope.isInMySchedule = function (talk) {
                return talk.attending;
            }

    }]);
