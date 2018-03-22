var http = require('http');
var app = require('./app');
var port = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(port);
console.log("* API SERVER STARTED ON PORT: ", port);