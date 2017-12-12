const fs = require('fs');
const path = require('path');
// const jwt = require('jsonwebtoken');
const showHistory = require('../database/queries/showHistory');

const handleHistory = (req, res) => {
  const cookie = req.headers.cookie;
  console.log(cookie);
  // showHistory()
}
