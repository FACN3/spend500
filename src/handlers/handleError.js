const handleError = (req, res, error) => {
  if (error == 404) {
    res.writeHead(404, {});
    res.end('<h1> there was an error, sorry </h1>');
  } else if (error == 500) {
    res.writeHead(500, {});
    res.end('<h1> there was a server error, sorry</h1>');
  }
};

module.exports = handleError;
