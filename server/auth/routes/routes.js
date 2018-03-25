var express = require('express');
var authController = require('../controllers/authController');
var authRoutes = express.Router();
console.log('* user api root router loaded');

//GET: localhost:3000/api/login/
//POST: localhost:3000/api/login/
authRoutes.route('/')
  .get(authController.getToken)
  .post(authController.getTokenByCred);
//.post(verifyToken, userController.addUser);

module.exports = authRoutes