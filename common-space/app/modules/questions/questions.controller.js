/**
 * Created by semanticbits on 6/9/16.
 */
(function(){
    angular.module('commonSpace')
        .controller('questionController',questionController);
    questionController.$inject=['$rootScope', '$state', '$stateParams'];
    function questionController($rootScope, $state, $stateParams){

        var qm=this;
        qm.getQuestions=getQuestions;
        qm.topicName=$stateParams.name;
        qm.allSubject=$rootScope.allSubject;
        qm.topicQuestions=[];
        //logic for getting questions related topics
        function getQuestions(){
            angular.forEach(qm.allSubject,function(data){
                if(data.name==qm.topicName){

                    angular.forEach(data.subject,function(data){
                        qm.topicQuestions.push(data);
                    })
                }

            });
        }
        qm.getQuestions();


    }
}());
