'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('xconfScheduleApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should attach a list of talks to the scope', function () {
        expect(scope.talks.length).to.equal(7);
    });
});
