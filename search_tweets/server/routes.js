module.exports = function (app) {

    app.get('/', function (req, res) {
            res.sendFile('index.html');
    });
    app.get('/api/getTweet:id', app.api.getTweets);


};