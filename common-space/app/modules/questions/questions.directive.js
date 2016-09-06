/**
 * Created by semanticbits on 6/9/16.
 */
(function(){
    angular.module('commonSpace')
        .directive('topAnswer',topAnswer);
    topAnswer.$inject=['$rootScope'];
    function topAnswer($rootScope){
        var directive = {
            link: link,
            templateUrl: 'partials/topAnswer.html',
            restrict: 'EA',
            scope:{
                name:'@',
                question:'@'

            }
        };
        return directive;
        function link(scope) {
            scope.allSubject=$rootScope.allSubject;
            scope.topicAnswers=[];
            scope.answers=[];
            scope.topAnswer='';
            //logic for getting answers related topic name
            angular.forEach(scope.allSubject,function(data){
                if(data.name==scope.name){

                    angular.forEach(data.subject,function(data){
                        if(data.question==scope.question){
                            angular.forEach(data.answers,function(data){
                                scope.topicAnswers.push(data);
                            })
                        }


                    })
                }

            });
            //logic for sorting
            scope.topicAnswers.sort(function(a, b) {
                return parseInt(b.rate) - parseInt(a.rate);
            });
            angular.forEach(scope.topicAnswers,function(data){
                scope.answers.push(data.answer);
            });
            scope.topAnswer=scope.answers[0];
            console.log(scope.topAnswer)

        }
    }
}());
