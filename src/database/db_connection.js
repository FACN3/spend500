const { Pool } = require('pg');

require('env2')('config.env');


if(!process.env.DB_URL){
	throw new Error('Environment variable not set');
}


const pool = new Pool({
	connectionString:process.env.DB_URL});


module.exports = pool;

