/**
 * Created by semanticbits on 7/9/16.
 */
describe('The test filter', function () {
    'use strict';

    var $filter;

    beforeEach(function () {
        module('CustomFilterModule');
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should convert date format', function () {
        // Arrange.
        var date = '29/8/2016', result,
        // Act.
            result = $filter('convertDate')(date, new Date(date));

        console.log(result);

        expect(result).toEqual(new Date(date));
    });
});
