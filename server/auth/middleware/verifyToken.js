var jwt = require('jsonwebtoken');

module.exports.verifyToken = function (request, response, next) {
    // var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var bearerHeader = request.headers['authorization'];

    if (bearerHeader !== undefined) {
        var bearer = bearerHeader.split(' ');
        var token = bearer[1];
        request.token = token;
        //console.log('TOKEN: ', token)

        jwt.verify(request.token, 'secretKeySalt', function (error, data) {
            if (error) { response.sendStatus(403); /*forbidden*/ }
            else {
                request.authUser = data._doc;
                next();
            }
        });
    } else { response.sendStatus(403); /*forbidden*/ }
}