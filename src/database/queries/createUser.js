const connection = require('../db_connection');

const createUser = (username, firstname, lastname, address, password, cb) => {
  connection.query(
    `INSERT INTO users(username, firstname, lastname,address, password)
		VALUES($1,$2,$3,$4,$5) RETURNING id`,
    [username, firstname, lastname, address, password],
    (error, result) => {
      if (error) {
        cb(error);
      }
      console.log('inside createUser ', result.rows);
      cb(null, result.rows);
      // connection.query(
      //   `select id from users where username=$1`,
      //   [username],
      //   (error, result) => {
      //     if (error) {
      //       cb(error);
      //     } else {
      //       cb(null, result.rows);
      //     }
      //   }
      // );
    }
  );
};

module.exports = createUser;
