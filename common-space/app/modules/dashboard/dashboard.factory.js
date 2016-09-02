/**
 * Created by semanticbits on 1/9/16.
 */
(function(){
    angular.module('commonSpace')
        .factory('dashboardFactory',dashboardFactory);
    dashboardFactory.$inject=['$q','$http'];
    function  dashboardFactory($q,$http){
        var service={

        };

        service.getSubject = function getSubject () {
            // We make use of Angular's $q library to create the deferred instance
            var deferred = $q.defer();

            $http.get('data/subject.json',{header:{'Content-Type':'application/json;charset=UTF-8'}})
                .success(function(response) {
                    // The promise is resolved once the HTTP call is successful.
                    deferred.resolve(response);
                })
                .error(function() {
                    // The promise is rejected if there is an error with the HTTP call.
                    deferred.reject();
                });

            // The promise is returned to the caller
            return deferred.promise;
        }
        return service;

    }
}());
