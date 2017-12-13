const fs = require('fs');
const path = require('path');

const handleBuy = (req, res) => {
  // Landing on the page we display the html file.
  const filepath = path.join(__dirname, '..', '..', 'public', 'buy.html');
  fs.readFile(filepath, (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = handleBuy;
