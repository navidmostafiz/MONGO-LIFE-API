//code format: ES5
//central place to merge all routes from different modules
var express = require('express');
var router = express.Router();
var userRoutes = require('./server/user/routes/routes');
var authRoutes = require('./server/auth/routes/routes');
console.log('* express api root route loaded');
/* RESTful user API */

//default api route
//localhost:4000/api/
router.get('/', (request, response, next) => {
  response.status(200).json({ message: 'RESTful web api' })
})

//localhost:3000/api/users/
router.use('/users', userRoutes);
//localhost:3000/api/login/
router.use('/login', authRoutes);

module.exports = router