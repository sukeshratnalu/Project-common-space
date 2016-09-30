/**
 * Created by semanticbits on 9/9/16.
 */
describe('testing run block', function() {

    beforeEach(module('commonSpace'));

    beforeEach(inject(function($rootScope) {
    }));

    it('should allow me to test the run() block', inject(function ($rootScope) {
        expect( $rootScope.$on ).toBeDefined();
    }));
});
