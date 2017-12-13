const connection = require('../db_connection');

const getuserid = (username, cb) => {
  connection.query(
    `select id from users where username=$1`,
    [username],
    (error, result) => {
      if (error) {
        cb(error);
      }
      cb(null, result);
    }
  );
};

module.exports = getuserid;
