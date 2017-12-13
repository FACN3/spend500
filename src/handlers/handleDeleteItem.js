const del_item = require('../database/queries/del_item');



const handleDeleteItem = (request, response)=>{
	item_id ='';
	del_item(item_id,(error, result)=>{
		if (error) {console.log(error);}
		
		console.log(result);
		console.log('Deletion was successful');
	});

};



module.exports = handleDeleteItem;