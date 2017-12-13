const bcrypt = require('bcryptjs');

const handleLogIn = (req, res) => {
  if (req.method === 'post') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', ()=>{
      console.log(data);
      
    })
    req.on('error' ()=>{
      console.log('error');
    })
  }
};

module.exports = handleLogIn;
