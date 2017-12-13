const connection = require('../db_connection');

const getHash = (username, cb)=>{
	connection.query(`SELECT password FROM users WHERE username=$1`,
		[username],(error,result)=>{
			if(error){
				return cb(error);
			}
      console.log(result.rows.length);
			cb(null, result.rows);
		});

};

module.exports = getHash;
