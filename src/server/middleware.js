const jwt = require('jsonwebtoken');
const config = require('./config.js');
const client = require("./database");
const bcrypt = require('bcrypt');


module.exports = {

  createUser(req, res, next) {
    let { username, password } = req.body;
    let query = 'SELECT * FROM users WHERE username=$1;';
    client.query(query, [username], (err, result) => {
      if (result.rowCount) {
        res.json({
          success: false,
          message: 'User already exists'
        })
      } else {
        bcrypt.hash(`${password}`, 3, (err, hash) => {
          let insert = 'INSERT INTO users (username, password) VALUES ($1, $2);';
          client.query(insert, [username, hash])
        })
        res.json({
          sucess: true,
          message: 'welcome to the club'
        })
      }
    })
  },

  verifyLogin(req, res, next) {
    let { username, password } = req.body;
    let find = 'SELECT * FROM users WHERE username=$1;';

    client.query(find, [username], (err, result) => {
      if (result.rowCount) {
        let bcryptPass = result.rows[0].password
        bcrypt.compare(`${password}`, bcryptPass, (err, result) => {
          console.log("bcrypt password", result)
          if (result) {
            next()
          } else {
            res.json({
              success: false,
              message: "Incorrect Password"
            })
          }
        })
      } else {
        res.json({
          success: false,
          message: "Incorrect Username"
        })

      }
    })

  },

  sendJWT(req, res, next) {
    let { username, password } = req.body;
    let token = jwt.sign({ username: username }, config.secret, { expiresIn: '24h' })
    res.cookie('token', token, { secure: false, httpOnly: false, expires: new Date(Date.now() + 9999999) }).json({
      success: true,
      message: "Token Recieved"
    })
  },

  checkJWT(req, res, next) {
    console.log("these cookies tho", req.cookies)
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
          next();
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  }


}