const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require("./route");
const mongoose = require("mongoose")
const cors = require("cors")
//DB setup
mongoose.connect("mongodb://robinuser:robinuser@ds245347.mlab.com:45347/robin001")
mongoose.connection
    .once('open', () => console.log('Connecté à MongoLab'))
    .on('error', error => console.log('Erreur de connexion à MongoLab:', error));

// App Setup
expressServer.use(morgan('combined'));
expressServer.use(cors())
expressServer.use(bodyParser.json({ type: '*/*' }));
router(expressServer);
// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(expressServer);
server.listen(port);
console.log('Server listening on:', port);