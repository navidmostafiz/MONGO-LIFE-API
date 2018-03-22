var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var apiRouting = require('./routes');
console.log('* express app loaded');

//json persing middleware
app.use(bodyParser.json());

//cross-server
app.use(cors());

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/userDB';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', function () {
    console.error('Could not connect to MongoDB. make sure mongod is running!');
});

mongoose.connection.on('connected', function () {
    console.info('APP MONGODB@', mongoose.version);
});

mongoose.connection.on('disconnected', function () {
    console.info('Mongoose disconnected');
});

app.use('/api', apiRouting);

module.exports = app;