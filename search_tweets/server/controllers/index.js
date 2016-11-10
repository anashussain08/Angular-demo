module.exports = function(app, Q){
    app.api = {};
    require('./authController')(app,Q);
};