const displayItems = require('../database/queries/displayItems');
const handleError = require('./handleError');

const handleItems = (req, res) => {
  displayItems((err, items) => {
    if (err) {
      handleError(req, res, err);
    }
    else {
      const stringItems = JSON.stringify(items);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(stringItems);
    }
  });
};

module.exports = handleItems;
