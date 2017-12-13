const connection = require('../db_connection');

const del_cart = (username, cb) => {
  connection.query(
    `DELETE FROM cart WHERE user_id
		IN(SELECT users.id FROM users WHERE username=$1)`,
    [username],
    (error, result) => {
      if (error) {
        cb(error);
      }
      cb(null, result);
    }
  );
};

//
// del_cart('hoslack', (error,result)=>{
// 	if (error) {console.log(error);}
// 	console.log(result);
// });
