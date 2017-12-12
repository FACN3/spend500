const connection = require('../db_connection');


const user_auth = (password,cb)=>{
	connection.query(`SELECT 1 FROM users WHERE password=$1`, [password],
		(error, results)=>{
			if(error){
				cb(error);
			}			
			let isTrue = result===1? true:false;
			cb(null,result);
		});
};


module.exports = user_auth;