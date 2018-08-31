const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressServer = express();
const router = require("./route");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(
  "mongodb://robinuser:robinuser@ds245347.mlab.com:45347/robin001",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => console.log("Connecté à Mlab"))
  .on("error", error => console.log("Erreur de connexion à Mlab : ", error));

expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({ type: "*/*" }));
expressServer.use(cors());
const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);
