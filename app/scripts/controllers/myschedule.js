'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:MyScdeduleControllor
 * @description
 * # MyScdeduleControllor
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('MyScdeduleControllor', ['$scope',
        function ($scope, $mdToast) {

            var data;
            if (typeof (Storage) !== 'undefined') {
                data = localStorage.getObject('talksxconf');
                $scope.mySchedule = data;
            } else {
                $scope.toastIt('This is not available on your device');
            }

            $scope.toastIt = function (message) {
                $mdToast.show({
                    template: '<md-toast>Sorry, ' + message + '</md-toast>',
                    hideDelay: 2000,
                    position: 'top right'
                });
            };
        }]);
