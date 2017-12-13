const bcrypt = require('bcryptjs');
const qs = require('querystring');
const handleError = require('./handleError');
const userexists = require('../database/queries/userexists');
const createUser = require('../database/queries/createUser');
const jwt = require('jsonwebtoken');

const handleCreateUser = (req, res) => {
  // console.log(req.url);
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const pass = qs.parse(data).pass;
    const user = qs.parse(data).user;
    const first = qs.parse(data).first;
    const last = qs.parse(data).last;
    const address = qs.parse(data).address;
    console.log('pass from handleCreateUser is, ', pass);
    userexists(user, (error, result) => {
      if (error) {
        console.log('error checking username', err);
      } else {
        if (result == true) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('username already exists');
        } else {
          encrypt(req, res, pass, (error, hash) => {
            if (error) {
              handleError(req, res, 500);
            } else {
              createUser(user, first, last, address, hash, (error, result) => {
                if (error) {
                  console.log('error in creating user', error);
                } else {
                  const userid = JSON.parse(result);
                  console.log(userid);
                  const token = createjwt(userid);
                  console.log('token is ', token);
                  res.writeHead(200, {
                    'Content-Type': 'text/html',
                    'set-cookie': `token=${token}`
                  });
                  res.end(JSON.stringify(result));
                }
              });
            }
          });
        }
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

const createjwt = (userid, callback) => {};

module.exports = handleCreateUser;
