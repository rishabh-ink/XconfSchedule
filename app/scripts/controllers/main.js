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
        $scope.predicate = 'slotNo';
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
    });
