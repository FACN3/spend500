const handleError = require('./handleError');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const handleAuth = (req) => {
  if (!req.headers.cookie) {
    return false;
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    let decodedjwt;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return err;
      } else {
        decodedjwt = decoded;
      }
    })
    return decodedjwt !== null ? true : false;
  }
}

module.exports = handleAuth;
