const jwt = require('jsonwebtoken');
const config = require('./config.js')


module.exports = {

  verifyLogin(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let token = jwt.sign({ username: username }, config.secret, { expiresIn: '24h' })
    res.cookie('token', token)
    res.send({ 'good': 'dude' })

    next()
  },
  checkJwt(req, res, next) {
    const token = req.cookies.token;

    if (token) {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }

      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          console.log(decoded)
          res.locals
          next();
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
    next()
  }






}