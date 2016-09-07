/**
 * Created by semanticbits on 6/9/16.
 */
/**
 * Created by semanticbits on 2/9/16.
 */

describe('This will test question controller',function () {
    var scope;
    var controller;
    var questionservice;
    beforeEach(module('commonSpace'));

    beforeEach(inject(function (_$controller_, $rootScope,questionService) {
        scope=$rootScope.$new();
        controller=_$controller_;
        questionservice=questionService;
    }));
    it('should test controller',function(){
        var vm = controller("questionController",{questionService:questionservice});

    });
});
