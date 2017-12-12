const handleHome = require('./handlers/handleHome');
const handleStatic = require('./handlers/handleStatic');

const router = (req, res) => {
  const url = req.url;
  if (url === '/') {
    handleHome(req, res);
  } else {
    handleStatic(req, res);
  }
}


module.exports = router;
