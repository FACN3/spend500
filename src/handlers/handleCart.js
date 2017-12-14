const jwtdecode = require('jwt-decode');
const showcart = require('../database/queries/showcart');

const handleCart = (request,response)=>{
	let v = request.headers.cookie;
  	let w = jwtdecode(v);
	const userid = w.userid;
	showcart(userid,(error,result)=>{
		if (error) {console.log(error);}
		const stringItems = JSON.stringify(result.rows);
		response.writeHead(200,{'Content-Type':'application/json'});
		response.end(stringItems);
	});
};

module.exports = handleCart;