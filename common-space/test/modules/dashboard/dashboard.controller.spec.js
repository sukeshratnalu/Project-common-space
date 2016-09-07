/**
 * Created by semanticbits on 2/9/16.
 */

describe('This will test dashboard controller functionality operation',function () {
    var scope;
    var controller;
    var dashboard;
    var httpBackend;
    var $q,deferred;
    beforeEach(module('commonSpace'));

    beforeEach(inject(function ($controller, $rootScope, dashboardFactory, _$httpBackend_,_$q_) {
        scope=$rootScope.$new();
        controller=$controller;
        $q = _$q_;
        dashboard=dashboardFactory;
        httpBackend= _$httpBackend_;
        deferred = _$q_.defer();
        spyOn(dashboardFactory, 'getSubject').and.returnValue(deferred.promise);


    }));

    it('should test showQuestion function',function (){
        var vm = controller("dashboardController",{dashboardFactory:dashboard,$httpBackend:httpBackend});

    });
    it('should test controller',function(){
        var vm = controller("dashboardController",{dashboardFactory:dashboard,$httpBackend:httpBackend});
        httpBackend.expectGET("data/subject.json").respond(deferred.promise);
        httpBackend.flush();
    });
    it('should resolve promise when passed true', function() {
        var vm = controller("dashboardController",{dashboardFactory:dashboard,$httpBackend:httpBackend});

        httpBackend.expectGET("data/subject.json").respond(deferred);
        dashboard
            .getSubject()
            .then(function(res) {
                expect(res).toBe([]);
                done();
            });
        scope.$digest();
    });

});
