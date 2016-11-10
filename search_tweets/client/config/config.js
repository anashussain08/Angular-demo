angular.module("searchTweets")
    // used self calling function to assign value in appConfig
    .constant("appConfig",(function (){

       // var environment = "production";
        var environment = "appUrl";

        var config = {
            appUrl : {
                'apiBaseUrl': 'http://localhost:4000/api/'
            }
        };
        return config[environment];
    })());

