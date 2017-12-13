const connection = require('../db_connection');

const getuserid = (username, hash, cb) => {
  connection.query(
    `select id from users where username=$1 and password=$2`,
    [username, hash],
    (error, result) => {
      if (error) {
        console.log('query error', error);
        return cb(error);
      }
      cb(null, result.rows);
    }
  );
};

module.exports = getuserid;
