var Q = require('q');
function connect(app, io) {
    console.log('in connect');
    io.on('connection',function(socket){
        console.log('user connected!');
    })
}
module.exports = connect;