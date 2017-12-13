const addtocart = require('../database/queries/addtocart');
const qs = require('querystring');

const handleAddItem = (request,response)=>{
	const userid = 3;
	let data ='';
	request.on('data',(chunk)=>{
		data+=chunk;
		
	});
	request.on('end', ()=>{
		const p_data = qs.parse(data);
		const id = Object.keys(p_data)[0];
		addtocart(3, id, (error,result)=>{
			if (error) {
				console.log(error);
			}else {
				console.log(result);
				console.log('Item added successfully');
			}
		});
	});
	
};

module.exports = handleAddItem;