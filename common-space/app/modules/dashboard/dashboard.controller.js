/**
 * Created by semanticbits on 1/9/16.
 */
(function(){
    angular.module('commonSpace')
        .controller('dashboardController',dashboardController);
    dashboardController.$inject=['$rootScope','dashboardFactory'];
    function  dashboardController($rootScope,dashboardFactory){

        var vm=this;
        vm.subject=[];
        vm.subjects=[];
        vm.readAllSubject=readAllSubject;
        vm.showQuestion=showQuestion;
        function readAllSubject() {

            // The search service returns a promise API
            dashboardFactory.getSubject()
                .then(function(response) {
                    // This is set when the promise is resolved.
                    $rootScope.allSubject = response;
                    vm.subject=$rootScope.allSubject;
                    angular.forEach(vm.subject,function(data){
                        console.log(data.name);
                        if(data.name=='Science'){
                            angular.forEach(data.subject,function(data1){

                                console.log(data1.question);

                            });
                        }

                    });
                    //sorting by questions length
                    vm.subject.sort(function(a, b) {
                        return parseInt(b.subject.length) - parseInt(a.subject.length);
                    });




                });


        }
        vm.readAllSubject();
        function showQuestion(name){
               console.log(name)
        }




    }

}());
