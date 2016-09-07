/**
 * Created by semanticbits on 1/9/16.
 */
(function(){
    angular.module('commonSpace')
        .config(function($stateProvider, $urlRouterProvider,$locationProvider){
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('dashboard',{
                    url: '/',
                    templateUrl: 'partials/dashboard.html',
                    controller:'dashboardController',
                    controllerAs:'vm'
                })
                .state('question',{
                    url:'/question/:name',
                    templateUrl:'partials/question.html',
                    controller:'questionController',
                    controllerAs:'qm'
                })
                .state('answer',{
                    url:'/answer/:name?question',
                    templateUrl:'partials/answers.html',
                    controller:'answerController',
                    controllerAs:'am'
                });

        })
}());
