const cookie = require('cookie');

const handleLogout = (req, res) => {
  res.writeHead(302, {
    'Set-Cookie': `${req.headers.cookie};Max-Age=0`,
    'Location': '/'
  });
  res.end('Logout successful');
}

module.exports = handleLogout;
