const jwt = require('jsonwebtoken');
const cookie = require('cookie');
require('env2')('config.env');

const handleAuth = (req, cb) => {
  if (!req.headers.cookie) {
    cb(null, false);
  } else {
    const token = cookie.parse(req.headers.cookie).token;
    jwt.verify(token, process.env.SECRET, cb);
  }
}

module.exports = handleAuth;
