/**
 * Created by semanticbits on 7/9/16.
 */
describe('SERVICE: answerService', function() {

    var answerService;

    var name='Science';
    var question=' What is the effect of different amounts of chlorine on plant growth-large amount, smallamount, or no chlorine?';


    beforeEach(function() {

        module('commonSpace');

        inject(function(_answerService_) {
            answerService = _answerService_;
        });

    });

    it('should be a defined service', function() {
        expect(answerService).not.toBeUndefined();
    });

    it('should have a function called readAnswer', function() {
        expect(angular.isFunction(answerService.readAnswer)).toBe(true);
    });

    /*it('should return an array', function() {
        var result = answerService.readAnswer(name,question);
        console.log(result);
        expect(result.length).toBeGreaterThan(0);
    });*/

});
