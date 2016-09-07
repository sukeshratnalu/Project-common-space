/**
 * Created by semanticbits on 7/9/16.
 */
(function(){
    angular.module('commonSpace')
        .service('questionService',questionService);
    questionService.$inject=['$rootScope'];
    function questionService($rootScope){
        var service={
            readQuestion:readQuestion

        };
        function readQuestion(name){
            var allSubject=$rootScope.allSubject;
            var topicQuestions=[];
            angular.forEach(allSubject,function(data){
                if(data.name==name){

                    angular.forEach(data.subject,function(data){
                        topicQuestions.push(data);
                    })
                }

            });
            return topicQuestions;
        }

        return service;
    }
}());
