/**
 * Created by semanticbits on 24/8/16.
 */
(function(){
    angular.module('CustomFilterModule', [])
        .filter('convertDate',convertDate);
    convertDate.$inject=[];
    function convertDate(){

        return function (input){

            input=input.split('/');

            var date=new Date(input);
            console.log(date);
            return date;
        };

    }
}());
