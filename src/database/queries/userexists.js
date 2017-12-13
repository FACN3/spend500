const connection = require('../db_connection');

const userexists = (username, cb) => {
  connection.query(
    `SELECT 1 AS col FROM users WHERE username=$1`,
    [username],
    (error, result) => {
      if (error) {
        cb(error);
      }
      result = result.rows;
      let isTrue = false;
      if (result.length !== 0) {
        isTrue = true;
      } else {
        isTrue = false;
      }
      cb(null, isTrue);
    }
  );
};

// userexists('hoslck',(error,result)=>{
// 	if (error) {console.log(error);}
// 	console.log(result);
// });

module.exports = userexists;
