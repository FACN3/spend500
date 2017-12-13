const bcrypt = require('bcryptjs');
const qs = require('querystring');
const handleError = require('./handleError');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const handleAuth = (req, res) => {
  if (!req.headers.cookie) {
    return false;
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    let decodedjwt;
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decoded);
        decodedjwt = decoded;
      }
    })
    console.log(decodedjwt);
    return decodedjwt !== null ? true : false;
  }
}

module.exports = handleAuth;
