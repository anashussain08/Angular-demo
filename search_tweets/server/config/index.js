module.exports = function(app, Twitter){
        app.twitter = {};
        require('./twitter_config')(app,Twitter);
};