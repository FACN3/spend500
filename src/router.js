const handleHome = require('./handlers/handleHome');
const handleItems = require('./handlers/handleItems');
const handleHistory = require('./handlers/handleHistory');
const handleStatic = require('./handlers/handleStatic');
const handleCreateUser = require('./handlers/handleCreateUser');

const router = (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === '/') {
    handleHome(req, res);
  } else if (url === '/createuser') {
    handleCreateUser(req, res);
  } else if (url === '/items') {
    handleItems(req, res);
  } else if (url === '/history') {
    handleHistory(req, res)
  } else {
    handleStatic(req, res);
  }
}


module.exports = router;
