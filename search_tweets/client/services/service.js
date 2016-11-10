(function(){
'use strict';
angular
    .module('searchTweets')
    .service('dataService',DataService);

DataService.$inject = ['$http', '$q','appConfig','Socket','$rootScope']
function DataService($http,$q,appConfig,Socket,$rootScope){
    var vm = this;
    this.getData = getData;
    vm.searchterm = '';
    function getData(query){
        vm.searchterm = query; 
        query = encodeURIComponent(query);
        reg_loader(!0);   
        var defer = $q.defer(); 
     $http.get(appConfig.apiBaseUrl + "getTweet" + query)
                .success(function (res) {
                    if (res.success) {
                        defer.resolve(res.data);
                        var gData = res_manipulation(res.data);
                        reg_ev(gData);
                        vm.searchterm = '';    
                        
                        //Socket.emit('tweet',res.data);
                 
                }
                    else {
                        defer.reject(res)
                        reg_ev({status:0,err:res,query:vm.searchterm})
                    }
                })
                .error(function (err) {
                    defer.reject(err)
                });
            return defer.promise
    }
    function res_manipulation(res){
            var data = {status:0}
            if(typeof res.body == 'string'){
                var pData = JSON.parse(res.body);
                data.tweet = pData.statuses;
                data.tweet.length && (data.status = !0)
            }
            data.query = vm.searchterm;
            return data;

    }
    function reg_ev(data){
        $rootScope.$broadcast('catchTweets', {
                data: data
            });
    }
    function reg_loader(data){
        $rootScope.$broadcast('loader', {
                data: data
            });
    }
}

})();