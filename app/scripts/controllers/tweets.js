'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:TwitterController
 * @description
 * # TwitterController
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('TwitterController', ['$scope', '$http',
    function ($scope, $http) {

        $http.get('data.json').success(function (data) {
            $scope.tweets = data;
        });
    }
}]);
