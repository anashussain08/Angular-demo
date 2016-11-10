module.exports = function(app,Q){


app.api.getTweets = getTweets;
    function getTweets(req,res){
        var query = req.params.id;
        app.twitter.client.get('search/tweets',{ q:query}, function(error, tweet, response) {
       if(error){
           res.json(err(error));
       }
        else{
            res.json(success(response));   
        }
 });
    }
    function err(err){
        return {success:0,err:err}
    }
    function success(data){
        return {success:!0,data:data}
    }


}