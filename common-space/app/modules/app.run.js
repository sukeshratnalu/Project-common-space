/**
 * Created by semanticbits on 7/9/16.
 */
(function(){
    angular.module('commonSpace')
        .run(['$rootScope',function($rootScope){
            $rootScope.$on('$stateChangeSuccess', function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });
        }])
}());
