/**
 * Created by semanticbits on 1/9/16.
 */
(function(){
    angular.module('commonSpace')
        .controller('dashboardController',dashboardController);
    dashboardController.$inject=['$rootScope','dashboardFactory','addTopicService'];
    function  dashboardController($rootScope,dashboardFactory,addTopicService){

        var vm=this;
        vm.subject=[];
        vm.subjects=[];
        vm.readAllSubject=readAllSubject;
        vm.addTopics=addTopics;
        function readAllSubject() {

            // The search service returns a promise API
            dashboardFactory.getSubject()
                .then(function(response) {
                    // This is set when the promise is resolved.
                    $rootScope.allSubject = response;
                    vm.subject=$rootScope.allSubject;
                    //sorting by questions length
                    vm.subject.sort(function(a, b) {
                        return parseInt(b.subject.length) - parseInt(a.subject.length);
                    });
                });


        }
        vm.readAllSubject();
        function addTopics(name){
            addTopicService.addTopic(name);
        }



    }

}());
