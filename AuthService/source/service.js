const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Auth Service is working....')
});

server.listen(3000, () => {
  console.log('Auth Service is working...');
});
