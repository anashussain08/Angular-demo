(function(){
'use strict';
angular
    .module('searchTweets')
    .controller('SearchController',SearchController);
SearchController.$inject = ['dataService','$http']
function SearchController(dataService,$http){
        console.log('controller started!');
    }
})();