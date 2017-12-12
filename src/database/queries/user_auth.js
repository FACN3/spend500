const connection = require('../db_connection');


const user_auth = (username,password,cb)=>{
	connection.query(`SELECT 1 FROM users WHERE password=$1 AND username=$2`, 
		[password,username],
		(error, results)=>{
			if(error){
				cb(error);
			}			
			let isTrue = result===1? true:false;
			cb(null,isTrue);
		});
};


module.exports = user_auth;


select username where 