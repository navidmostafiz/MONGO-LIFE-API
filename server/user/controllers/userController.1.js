import User from '../models/user';
//code format: ES5
console.log('* express api controller loaded');

var users = [
    { _id: 1, firstName: 'Navid', lastName: 'Mostafiz', status: 'Active', role: 'Administrator' },
    { firstName: 'Mohaiminul', lastName: 'Islam', status: 'Active', role: 'User', id: 2 },
    { firstName: 'nafees', lastName: 'Mahbub', status: 'Active', role: 'User', id: 3 }
];

//get user
module.exports.getUser = function (request, response, next) {
    console.log('server.user.controller.getUsers');
    return response.status(200).json(users);
}

//add new user
module.exports.addUser = function (request, response, next) {
    console.log('server.user.controller.addUser');
    var newUser = request.body;
    console.log('newUser ', newUser);
    newUser.id = users.length + 1;
    users.push(newUser);
    return response.status(200).json({ message: 'new user created' });
}

//get user by Id
module.exports.getUserById = function (request, response, next) {
    var userId = request.params._id;
    console.log('server.user.controller.getUserById(' + userId + ')');
    users.forEach(function (user) {
        if (user.id == userId) {
            return response.status(200).json(user);
        };
    });
}

//update user
module.exports.updateUser = function (request, response, next) {
    console.log('server.user.controller.updateUser(' + request.body.id + request.body.firstName, request.body.lastName + ')');
    //var userId = request.params._id; //not using it, grabbing is form body
    var userToUpdate = request.body;

    //create new user list with replacing the element that has matching id
    var tempUsers = [];
    users.forEach(function (user) {
        if (user.id == userToUpdate.id) {
            console.log('userToUpdate ', userToUpdate);
            tempUsers.push(userToUpdate);
        } else { tempUsers.push(user); }
    });
    users = tempUsers;

    return response.status(200).json({ message: 'user updated' });
}

//delete user
module.exports.deleteUser = function (request, response, next) {
    console.log('server.user.controller.deleteUser');
    var userId = request.params._id;

    //create new user list without the elemnt that has matching id
    var tempUsers = [];
    users.forEach(function (user) {
        if (user.id != userId) {
            tempUsers.push(user);
        };
    });
    users = tempUsers;

    return response.status(200).json({ message: 'user deleted' });
}
