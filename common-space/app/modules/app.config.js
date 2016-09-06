/**
 * Created by semanticbits on 1/9/16.
 */
(function(){
    angular.module('commonSpace')
        .config(function($stateProvider, $urlRouterProvider,$locationProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('dashboard',{
                    url: '/',
                    templateUrl: 'partials/dashboard.html',
                    controller:'dashboardController',
                    controllerAs:'vm'
                })
                .state('question',{
                    url:'/question:name',
                    templateUrl:'partials/question.html',
                    controller:'questionController',
                    controllerAs:'qm'
                });
            $locationProvider.html5Mode(true);
        })
}());
