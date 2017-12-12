const displayItems = require('../database/queries/displayItems');

const handleItems = (req, res) => {
  displayItems((err, items) => {
    if (err) console.log(err);
    else {
      const stringItems = JSON.stringify(items);
      console.log(items);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(stringItems);
    }
  });
}

module.exports = handleItems;
