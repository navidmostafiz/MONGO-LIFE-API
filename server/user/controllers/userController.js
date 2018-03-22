//code format: ES5
var User = require('../models/user');
console.log('* express api controller loaded');

//get user
module.exports.getAllUser = function (request, response, next) {
    console.log('userController.getAllUser()');
    User.find().sort({
        createdAt: -1,
    }).exec((err, users) => {
        if (err) return next(err);
        return response.status(200).json({
            success: true,
            message: 'Get all user',
            data: users,
        });
    });
}

//add new user
module.exports.addUser = function (request, response, next) {
    console.log('userController.addUser');
    var newUser = new User();
    Object.assign(newUser, request.body, {
        password: newUser.generateHash(request.body.password),
    });
    console.log('\t new user added with data: ', newUser);
    newUser.save(function (err, user) {
        if (err) return next(err);

        return response.status(201).json({
            success: true,
            message: 'New User Created!',
            data: user,
        });
    });
}

//get user by Id
module.exports.getUserById = function (request, response, next) {
    var userId = request.params._id;
    console.log('userController.getUserById(' + userId + ')');
    User.findById(ruserId)
        .exec((err, user) => {
            if (err) return next(err);
            console.log('\t user returned: ', user);
            return response.status(200).json({
                success: true,
                message: 'Get user',
                data: user,
            });
        });
}

//update user
module.exports.updateUser = function (request, response, next) {
    console.log('userController.updateUser(' + request.body.id + request.body.firstName, request.body.lastName + ')');
    User.findById(request.params._id, function (err, user) {
        if (err) return next(err);

        user.firstName = request.body.firstName;
        user.lastName = request.body.lastName;
        user.emailAddress = request.body.emailAddress;
        user.status = request.body.status;

        user.save(function (err) {
            if (err) return next(err);

            return response.status(201).json({
                success: true,
                message: 'Updated user!',
                data: user
            });
        });
    });
}

//delete user
module.exports.deleteUser = function (request, response, next) {
    console.log('userController.deleteUser: not functional');
    // var userId = request.params._id;

    // //create new user list without the elemnt that has matching id
    // var tempUsers = [];
    // users.forEach(function (user) {
    //     if (user.id != userId) {
    //         tempUsers.push(user);
    //     };
    // });
    // users = tempUsers;

    // return response.status(200).json({ message: 'user deleted' });
}
