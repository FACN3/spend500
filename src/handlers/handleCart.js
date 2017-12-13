const showcart = require('../database/queries/showcart');

const handleCart = (request,response)=>{
	const username = 'mynah';
	showcart(username,(error,result)=>{
		if (error) {console.log(error);}
		const stringItems = JSON.stringify(result.rows);
		response.writeHead(200,{'Content-Type':'application/json'});
		response.end(stringItems);
	});
};

module.exports = handleCart;