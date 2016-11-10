var express = require('express');
var path = require('path');
var http = require('http');
var Q = require('q');
var Twitter = require('twitter');
var app = express();
var port = process.env.PORT || 4000; // set our port
var socket = require('./socket/index');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
socket(app, io);

app.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");//http://localhost:4000
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../client')));
require('./config')(app,Twitter);
require('./controllers')(app, Q);
require('./routes')(app);
//require('./controllers')(app,Q,twitter);

// app.listen(port,function(){
//     console.log('listening on port 4000');
// });
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

module.exports = app;
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
