module.exports = function(app,Twitter){
    var config = 
   {
        consumer_key: "<your consumer key>",
        consumer_secret: "<your consumer secret>",
        access_token_key: "<your access token key>",
        access_token_secret: "<your token secret>"
    }
    app.twitter.client = createInstance();
    function createInstance(){
        return new Twitter(config);
    }
}