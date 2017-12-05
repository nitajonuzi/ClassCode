var express = require('express');
var config = require('./config/config');
var app = express();

require('./config/express')(app, config);

console.log("creating HTTP server on port: " + config.port);//prints the http server has been made

require('http').createServer(app).listen(config.port, function () {
console.log("HTTP Server listening on port: %s, in %s mode", config.port);
});
module.exports = app;