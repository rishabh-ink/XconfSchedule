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
                slotNo: 4,
                trackNo: 'Third'
    },
            {
                name: 'Talk2',
                length: '30min',
                speaker: 'twerker2',
                nickname: 'tk1',
                slotNo: 1,
                trackNo: 'Second'
    },
            {
                name: 'Talk3',
                length: '10min',
                speaker: 'twerker3',
                nickname: 'tk1',
                slotNo: 3,
                trackNo: 'First'
    },
            {
                name: 'Talk4',
                length: '30min',
                speaker: 'twerker4',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 'First'
    },
            {
                name: 'Talk5',
                length: '45min',
                speaker: 'twerker5',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 'Second'
    },
            {
                name: 'Talk6',
                length: '30min',
                speaker: 'twerker6',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 'Third'
    },
            {
                name: 'Talk7',
                length: '30min',
                speaker: 'twerker7',
                nickname: 'tk1',
                slotNo: 1,
                trackNo: 'First'
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
