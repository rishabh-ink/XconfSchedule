'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:DetailsController
 * @description
 * # DetailsController
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('DetailsController', function ($scope, $routeParams) {

        $scope.talks = [
            {
                name: 'Talk1',
                length: '45min',
                speaker: 'twerker1',
                nickname: 'tk1',
                slotNo: 31
    },
            {
                name: 'Talk2',
                length: '30min',
                speaker: 'twerker2',
                nickname: 'tk1',
                slotNo: 21
    },
            {
                name: 'Talk3',
                length: '10min',
                speaker: 'twerker3',
                nickname: 'tk1',
                slotNo: 11
    },
            {
                name: 'Talk4',
                length: '30min',
                speaker: 'twerker4',
                nickname: 'tk1',
                slotNo: 12
    },
            {
                name: 'Talk5',
                length: '45min',
                speaker: 'twerker5',
                nickname: 'tk1',
                slotNo: 21
    },
            {
                name: 'Talk6',
                length: '30min',
                speaker: 'twerker6',
                nickname: 'tk1',
                slotNo: 22
    },
            {
                name: 'Talk7',
                length: '45min',
                speaker: 'twerker7',
                nickname: 'tk1',
                slotNo: 31
    }
];
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
    });
