const handleHome = require('./handlers/handleHome');
const handleItems = require('./handlers/handleItems');
const handleHistory = require('./handlers/handleHistory');
const handleStatic = require('./handlers/handleStatic');
const { handleCreateUser } = require('./handlers/handleCreateUser');
const handleLogIn = require('./handlers/handleLogIn');
const handleLogout = require('./handlers/handleLogout')
const handleBuy = require('./handlers/handleBuy');
const handleAuth = require('./handlers/handleAuth');
const handleCart = require('./handlers/handleCart');
const handleDeleteItem = require('./handlers/handleDeleteItem');
const handleAddItem = require('./handlers/handleAddItem');

const router = (req, res) => {
  const auth_routes = ['/buy', '/cart', '/items', '/history', '/logout', '/addItem'];
  const url = req.url;

  if (url === '/') {
    handleHome(req, res);
  } else if (url === '/createuser') {
    handleCreateUser(req, res);
  } else if (url === '/login') {
    handleLogIn(req, res);
  } else if (auth_routes.indexOf(url) !== -1) {
    handleAuth(req, (err, allowed) => {
      if  (allowed === false) {
        console.log(allowed);
        res.writeHead(401, { Location: '/' });
        res.end('Unauthorized user');
      } else {
        console.log(allowed);
        if (url === '/buy') {
          handleBuy(req, res);
        } else if (url === '/items') {
          handleItems(req, res);
        } else if (url==='/addItem') {
          console.log(url);
          handleAddItem(req,res);
        } else if (url === '/history') {
          handleHistory(req, res);
        } else if (url === '/cart') {
          handleCart(req, res);
        } else if (url === '/logout') {
          handleLogout(req, res);
        }
      }
    });
  } else {
    handleStatic(req, res);
  }
};

module.exports = router;
