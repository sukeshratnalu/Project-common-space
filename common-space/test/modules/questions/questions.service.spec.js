/**
 * Created by semanticbits on 7/9/16.
 */
describe('factory: questionService', function() {
    var questionservice, service;

    beforeEach(module('commonSpace', function($provide) {
        service = {};

        service.readQuestion = jasmine.createSpy();


        $provide.value('$rootScope', service);
    }));

    beforeEach(inject(function(_questionService_) {
        questionservice = _questionService_;
    }));
    it('should log using the readQuestion function ', function() {
        questionservice.readQuestion('Science');
        expect(console.readQuestion).toHaveBeenCalledWith('Science');

    });

});
