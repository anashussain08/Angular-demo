(function(){
    'use strict';
    angular
        .module("searchTweets")
        .directive('searchBar', searchBar);
    function searchBar(){
        var directive = {
            restrict: 'E',
            templateUrl: 'directives/searchBar/searchBar.html',
            transclude: true,
            scope: {},
            controller: searchBarController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }

    searchBarController.$inject = ['$scope','$mdDialog','$mdMedia','$state','dataService'];

    function searchBarController($scope,$mdDialog,$mdMedia, $state,dataService) {
        var vm = this;
        vm.tweets = {};
        vm.getTweets = getTweets;

        function getTweets(){
            console.dir(vm.tweets);
            dataService.getData(vm.tweets.search)
            .then(function(res){
                console.log(res);
                vm.tweets = {};
            })
        }
    }

}());




