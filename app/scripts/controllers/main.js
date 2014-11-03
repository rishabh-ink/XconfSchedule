'use strict';

/**
 * @ngdoc function
 * @name xconfScheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xconfScheduleApp
 */
angular.module('xconfScheduleApp')
    .controller('MainController', function ($scope) {
        $scope.talks = [
            {
                name: 'Talk1',
                length: '45min',
                speaker: 'twerker1',
                nickname: 'tk1',
                slotNo: 1,
                trackNo: 30
    },
            {
                name: 'Talk2',
                length: '30min',
                speaker: 'twerker2',
                nickname: 'tk1',
                slotNo: 1,
                trackNo: 20
    },
            {
                name: 'Talk3',
                length: '10min',
                speaker: 'twerker3',
                nickname: 'tk1',
                slotNo: 1,
                trackNo: 10
    },
            {
                name: 'Talk4',
                length: '30min',
                speaker: 'twerker4',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 10
    },
            {
                name: 'Talk5',
                length: '45min',
                speaker: 'twerker5',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 20
    },
            {
                name: 'Talk6',
                length: '30min',
                speaker: 'twerker6',
                nickname: 'tk1',
                slotNo: 2,
                trackNo: 30
    },
            {
                name: 'Talk7',
                length: '30min',
                speaker: 'twerker7',
                nickname: 'tk1',
                slotNo: 4,
                trackNo: 10
    }
];
    });
