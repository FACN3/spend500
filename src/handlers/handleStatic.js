const fs = require('fs');
const path = require('path');

const handleStatic = (req, res) => {
  const url = req.url;
  const ext = url.split('.')[1];
  const types = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg'
  }[ext];

  const filepath = path.join(__dirname, '..', '..', 'public', url);
  fs.readFile(filepath, (err, file) => {
    if (err) console.log(err);
    else {
      res.writeHead(200, { 'Content-Type': types });
      res.end(file);
    }
  });
};

module.exports = handleStatic;
