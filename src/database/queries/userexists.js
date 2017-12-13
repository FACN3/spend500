const connection = require('../db_connection');

const userexists = (username, cb) => {
  connection.query(
    `SELECT 1 from users WHERE username=$1`,
    [username],
    (error, result) => {
      if (error) {
        cb(error);
      }
      let isTrue = result === 1 ? true : false;
      cb(null, isTrue);
    }
  );
};

module.exports = userexists;
