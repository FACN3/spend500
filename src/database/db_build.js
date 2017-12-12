const connection = require('./db_connection');
const fs = require('fs');


const sql = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8');

const build = (cb)=>{connection.query(sql, (error, result)=>{
	if(error){
		cb(error);
	}
	cb(null,result);
	connection.end();
}); 
};

build((error, result)=>{
	if(error){
		throw error;
	}
	console.log('Build Successful');
});


module.exports = build;

