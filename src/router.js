const handleHome = require('./handlers/handleHome');
const handleStatic = require('./handlers/handleStatic');
const handleCreateUser = require('./handlers/handleCreateUser');

const router = (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === '/') {
    handleHome(req, res);
  } else if (url === '/createuser') {
    handleCreateUser(req, res);
  } else {
    handleStatic(req, res);
  }
};

module.exports = router;
