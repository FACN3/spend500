const connection = require('../db_connection');


const del_item = (item_id, cb)=>{
	connection.query(`DELETE FROM cart WHERE item_id=$1`, [item_id],(error,result)=>{
		if (error) {cb(error)};
		cb(null, result); 
	});
};