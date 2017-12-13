const connection = require('../db_connection');

const createUser = (username, firstname, lastname, address, password, cb) => {
  connection.query(
    `INSERT INTO users(username, firstname, lastname,address, password)
		VALUES($1,$2,$3,$4,$5)`,
    [username, firstname, lastname, address, password],
    (error, result) => {
      if (error) {
        cb(error);
      }
      connection.query(
        `select id from users where username=$1`,
        [username],
        (error, result) => {
          if (error) {
            cb(error);
          } else {
            console.log('inside second createuuser query ', result.rows);
            cb(null, result.rows);
          }
        }
      );
    }
  );
};

// createUser(
//   'hoslack',
//   'hoslack',
//   'hoslack',
//   'Nairobi',
//   'kkkk',
//   (error, result) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log(result);
//   }
// );

module.exports = createUser;
