/**
 * Created by semanticbits on 6/9/16.
 */
describe('directive: topAnswer', function() {
    var element, scope,$compile,$templateCache,$httpBackend;
    beforeEach(module('commonSpace'));
    beforeEach(inject(function ($rootScope,_$compile_,_$templateCache_,_$httpBackend_) {
        $compile = _$compile_;
        scope = $rootScope.$new();
        $templateCache = _$templateCache_;
        $httpBackend=_$httpBackend_;
        $templateCache.put('app/partials/topAnswer.html', 'app/partials/topAnswer.html');
        $httpBackend.whenGET('app/partials/topAnswer.html').respond($templateCache.get('app/partials/topAnswer.html'));
    }));
    it('Testing top-answer directive', inject(function ($httpBackend, $location) {
        $templateCache.put('app/partials/topAnswer.html', 'app/partials/topAnswer.html');
        $httpBackend.whenGET('app/partials/topAnswer.html').respond($templateCache.get('app/partials/topAnswer.html'));
        $httpBackend.whenGET('app/data/locale-en.json').respond({  "Description": "Description" });
        var element = $compile('<top-answer name="Science" question="What is the effect of different amounts of chlorine on plant growth-large amount, smallamount, or no chlorine?"></top-answer>')(scope);
        scope.$digest();
        expect(element.parent()[0].outerHTML).toEqual('<top-answer name="Science" question="What is the effect of different amounts of chlorine on plant growth-large amount, smallamount, or no chlorine?"></top-answer>');

    }));


});
