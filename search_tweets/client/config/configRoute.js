(function(){
    'use strict';
    angular
        .module('searchTweets')
        .config(config);
    config.$inject =['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state("dashboard", {
                url: "/dashboard",
                templateUrl: "dashboard/dashboard.html",
                controller: "SearchController",
                controllerAs:'dashboard'
            });
            
    }

}());
