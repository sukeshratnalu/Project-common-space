/**
 * Created by semanticbits on 6/9/16.
 */
(function(){
    angular.module('commonSpace')
        .controller('questionController',questionController);
    questionController.$inject=['$stateParams','questionService'];
    function questionController($stateParams,questionService){

        var qm=this;
        qm.topicName=$stateParams.name;
        qm.topicQuestions=questionService.readQuestion(qm.topicName);
    }
}());
