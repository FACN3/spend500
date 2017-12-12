const fs = require('fs');
const path = require('path');
const displayItems = require('../database/queries/displayItems');

const handleHome = (req, res) => {
  // Landing on the page we display the html file.
  const filepath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filepath, (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
      //Then we fetch the items
      displayItems((err, items) => {
        if (err) console.log(err);
        else {
          JSON.stringify(items);
          console.log(items);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(items);
        }
      });
    }
  });
};

module.exports = handleHome;
