// code away!
require("dotenv").config();
const express = require('express');
const server = require("./server");

const port = process.env.PORT || 3000;

const friends = [
  { id: 1, name: "Francis" },
  { id: 2, name: "Damilola" },
  { id: 3, name: "Amira" }
];

server.use(express.static(__dirname + '/client/build'));
server.use(express.json());

server.listen(port, () => {
  console.log(`\nServer running on port ${port}\n`);
});
