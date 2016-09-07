/**
 * Created by semanticbits on 7/9/16.
 */
(function(){
    angular.module('commonSpace')
        .service('answerService',answerService);
    answerService.$inject=['$rootScope'];
    function answerService($rootScope){
        var service={
            readAnswer:readAnswer,
            readTopAnswer:readTopAnswer
        };
        function readAnswer(name,question){
            var allSubject=$rootScope.allSubject;
            var answer=[];
            angular.forEach(allSubject,function(data){
                if(data.name==name){
                    angular.forEach(data.subject,function(data){
                        if(data.question==question){
                            angular.forEach(data.answers,function(data){
                                answer.push(data);
                            })
                        }
                    })
                }
            });
            return answer;
        }
        function readTopAnswer(name,question){

            var allSubject=$rootScope.allSubject;
            var topicAnswers=[];
            var answers=[];
            var topAnswer='';
            //logic for getting answers related topic name
            angular.forEach(allSubject,function(data){
                if(data.name==name){

                    angular.forEach(data.subject,function(data){
                        if(data.question==question){
                            angular.forEach(data.answers,function(data){
                                topicAnswers.push(data);
                            })
                        }
                    })
                }

            });
            //logic for sorting
            topicAnswers.sort(function(a, b) {
                return parseInt(b.rate) - parseInt(a.rate);
            });
            angular.forEach(topicAnswers,function(data){
                answers.push(data.answer);
            });
            topAnswer=answers[0];
            return topAnswer;
        }
        return service;
    }
}());
