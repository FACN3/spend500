const connection = require('../db_connection');

const showcart = (userid, cb) => {
  connection.query(
    `SELECT * FROM items INNER JOIN cart ON
		items.id = cart.item_id WHERE cart.user_id = $1`,
    [userid],
    (error, result) => {
      if (error) {
        cb(error);
      }
      cb(null, result);
    }
  );
};

// showcart('mynah',(error,result)=>{
// 	if (error) {console.log(error);}
// 	console.log(result);
// });

module.exports = showcart;
