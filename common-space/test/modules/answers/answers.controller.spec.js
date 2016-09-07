/**
 * Created by semanticbits on 7/9/16.
 */
describe('This will test answer controller',function () {
    var scope;
    var controller;
    var answerservice;
    var name='Science';
    var question=' What is the effect of different amounts of chlorine on plant growth-large amount, smallamount, or no chlorine?';
    beforeEach(module('commonSpace'));

    beforeEach(inject(function (_$controller_, $rootScope,_answerService_) {
        scope=$rootScope.$new();
        controller=_$controller_;
        answerservice=_answerService_;
    }));
    it('should test controller',function(){
        var vm = controller("answerController",{answerService:answerservice});
        var result = answerservice.readAnswer(name,question);
    });
});
