const addtocart = require('../database/queries/addtocart');
const qs = require('querystring');
const jwtdecode = require('jwt-decode');


const handleAddItem = (request,response)=>{
	let v = request.headers.cookie;
  	let w = jwtdecode(v);
	const userid = w.userid;
	let data ='';
	request.on('data',(chunk)=>{
		data+=chunk;
		
	});
	request.on('end', ()=>{
		const p_data = qs.parse(data);
		const id = Object.keys(p_data)[0];
		addtocart(userid, id, (error,result)=>{
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