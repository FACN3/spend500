const bcrypt = require('bcryptjs');
const qs = require('querystring');
const handleError = require('./handleError');

const handleCreateUser = (req, res) => {
  // console.log(req.url);
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const pass = qs.parse(data).pass;
    console.log('pass from handleCreateUser is, ', pass);
    encrypt(req, res, pass, (error, result) => {
      if (error) {
        handleError(req, res, 500);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(JSON.stringify(result));
      }
    });
  });
  req.on('err', () => {
    handleError(req, res, 404);
  });
};

const encrypt = (req, res, str, callback) => {
  console.log('in encrypt');
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      handleError(req, res, 500);
    } else {
      console.log('in gensalt salt is', salt);
      bcrypt.hash(str, salt, (err, res) => {
        if (err) {
          console.log('errored in hash with ', err);
        } else {
          callback(null, res);
          //createuser in datbase
          //createjwt
        }
      });
    }
  });
};

module.exports = handleCreateUser;
