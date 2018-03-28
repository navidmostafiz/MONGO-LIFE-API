//code format: ES5
// var User = require('../models/user');
var jwt = require('jsonwebtoken');
var userController = require('../../user/controllers/userController')
console.log('* auth controller loaded');

//get user
module.exports.getToken = function (request, response, next) {
    console.log('authController.getToken()');
    var user = null;
    var token = jwt.sign({ user }, 'secretKeySalt')

    return response.status(200).json({
        success: true,
        message: 'getToken',
        token
    });
}

//get user
module.exports.getTokenByCred = function (request, response, next) {
    console.log('authController.getTokenByCred()');

    // var authUser = {
    //     status: "Active",
    //     role: "Subscriber",
    //     _id: "5ab3083cda14aa42c5b373c8",
    //     firstName: "Begu",
    //     lastName: "Miku",
    //     emailAddress: "begun@gmail.com",
    //     password: "$2a$10$ihCCV6rdEN4OtqlxkB5dtuD38.Pc0f/NEBGAEmiNR75BJG6MD4R.q",
    //     updatedAt: "2018-03-22T01:34:52.876Z",
    //     createdAt: "2018-03-22T01:34:52.876Z"
    // };
    var authUser = userController.getUserByCred(request.body.emailAddress, request.body.password)

    if (authUser != null) {
        var token = jwt.sign({ authUser }, 'secretKeySalt')

        return response.status(200).json({
            success: true,
            message: 'getTokenByCred',
            token
        });
    }
    else {
        return response.status(200).json({
            success: false,
            message: 'invalid user name or password',
        });
    }
}