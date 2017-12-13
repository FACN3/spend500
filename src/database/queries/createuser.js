const connection = require('../db_connection');

const createuser = (username, firstname, lastname, password, cb) => {
  connection.query(
    `INSERT INTO users(username, firstname, lastname, password)
		VALUES($1,$2,$3,$4)`,
    [username, firstname, lastname, password],
    (error, result) => {
      if (error) {
        cb(error);
      }
      cb(null, result);
    }
  );
};

module.exports = createuser;
