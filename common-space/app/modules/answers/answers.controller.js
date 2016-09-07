/**
 * Created by semanticbits on 7/9/16.
 */
(function(){
    angular.module('commonSpace')
        .controller('answerController',answerController);
    answerController.$inject=['$stateParams','answerService'];
    function answerController($stateParams,answerService){

        var am=this;
        am.name=$stateParams.name;
        am.question=$stateParams.question;
        /*getting answers from answerService*/
        am.answer=answerService.readAnswer(am.name,am.question);
        console.log(am.answer);
    }
}());
