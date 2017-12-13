const connection = require('../db_connection');


const user_auth = (username,password,cb)=>{
	connection.query(`SELECT 1 AS col FROM users WHERE password=$1 AND username=$2`, 
		[password,username],
		(error, result)=>{
			if(error){
				cb(error);
			}		
			result = result.rows;
			let isTrue = false;
			if(result.length!==0){ isTrue=true;}else{isTrue=false;}	
			cb(null,isTrue);
		});
};

user_auth('hoslack', 'kkkk', (error,result)=>{
	if (error) {console.log(error);}
	console.log(result);
});


module.exports = user_auth;


