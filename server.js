const express = require('express');
const userRouter = require('./users/userRouter');

const server = express();

server.use(express.json());

server.get('/', logger, (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
});

server.use('/api/users', userRouter);

// custom middleware

// logger(): logs request method, request url, and a timestamp. Runs on all requests to the API
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(Date.now());
  next();
};

module.exports = server;
