const bycrypt = require('bcryptjs');

const handleCreateUser = (req, res) => {
  // console.log(req.url);
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    console.log('data from handleCreateUser is, ', data);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end();
  });
};

module.exports = handleCreateUser;
