var express = require('express');
var userController = require('../controllers/userController');
var userRoutes = express.Router();
console.log('* user api root router loaded');
//we bind each user api methods to a user controller methods

//FOR GET & POST
//localhost:3000/api/users/
userRoutes.route('/')
  .get(userController.getAllUser)
  .post(userController.addUser);
//.post(verifyToken, addUser);

//FOR GET & PUT BY ID
//localhost:3000/api/users/:id
userRoutes.route('/:_id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);
//.put(verifyToken, updateUser);

module.exports = userRoutes
//export default userRoutes;