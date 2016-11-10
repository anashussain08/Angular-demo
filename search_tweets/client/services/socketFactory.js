(function(){
    angular
        .module('searchTweets')
        .factory('Socket' , Socket);
    function Socket(socketFactory){
        return socketFactory();
    }
})();