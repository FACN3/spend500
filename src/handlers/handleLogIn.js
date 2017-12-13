const bcrypt = require('bcryptjs');
const user_auth = require('../database/queries/user_auth');
const { createjwt } = require('./handleCreateUser');
const getuserid = require('../database/queries/getuserid');
const getHash = require('../database/queries/getHash');

const handleLogIn = (req, res) => {
  if (req.method === 'POST') {
    //We should check if the user already has our cookie in his headers. ???
    
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', ()=>{
      //Fetch the hash stored in the database
      data = data.split(',');
      let dbHash;
      getHash(data[0], (err, result) => {
        if (err) console.log(err);
        else if (result.length === 0) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end('Username does not exist');
        }
        else {
          dbHash = result[0].password;
          //Compare the retrieved hash with the one provided by user.
          bcrypt.compare(data[1], dbHash, (err, result) => {
            if (err) console.log('compare err: ', err);
            else {
              if (result === false) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('Wrong Password');
              } else {
                //If passwords match, create a cookie
                getuserid(data[0], dbHash, (err, user) => {
                  if (err) console.log('userid err ', err);
                  else {
                    const userid = user[0].id;
                    const token = createjwt(userid);
                    res.writeHead(200, {
                      'Content-Type': 'text/html',
                      'Set-Cookie': `token=${token}`
                    });
                    res.end('Login successful');
                  }
                })
              }
            }
          })
        }
      })
    })
  }
};

module.exports = handleLogIn;
