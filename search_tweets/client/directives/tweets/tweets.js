(function(){
    'use strict';
    angular
        .module("searchTweets")
        .directive('tweets', tweets);
    function tweets(){
        var directive = {
            restrict: 'E',
            templateUrl: 'directives/tweets/tweets.html',
            transclude: true,
            scope: {},
            controller: tweetsController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }

    tweetsController.$inject = ['$scope','$mdDialog','$mdMedia','$state','dataService','Socket'];

    function tweetsController($scope,$mdDialog,$mdMedia, $state,dataService,Socket) {
        var vm = this;
        vm.tweets = [];
        vm.getTweets = getTweets;
        vm.term = '';
        vm.showLoader = 0;
        vm.showError = 0;
        vm.getTweets();
       
        function getTweets(){
             $scope.$on('catchTweets', function(event, res) {
                vm.showLoader = 0;
                if(res.data.status){
                    var data = res.data;
                    var query =data.query;
                    vm.term = query;
                    vm.tweets = data.tweet;
                    
                }
                else{
                    vm.showError = !0;
                    vm.term = res.data.query;
                }
                
            })
            $scope.$on('loader', function(event, res) {
               vm.showLoader = res.data;
            })
        }
    }

}());