const express = require('express');
const userRouter = require('./users/userRouter');

const server = express();

server.use(express.json());

server.use('/api/users', userRouter);

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

// custom middleware

// logger(): logs request method, request url, and a timestamp. Runs on all requests to the API
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(Date.now());
  next();
};

module.exports = server;
