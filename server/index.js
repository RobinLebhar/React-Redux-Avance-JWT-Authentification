const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require("./route");

// App Setup
expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({ type: '*/*' }));
router(expressServer);
// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(expressServer);
server.listen(port);
console.log('Server listening on:', port);