// server.js

"use strict";

const express = require('express');
const server = express();
const port = 49309;

server.use(express.static('public'));

server.listen(port, () => console.log('The tortoise.team server is running.'));