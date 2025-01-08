const express = require("express");
const routes = require("./routes"); // nao e necessario indicar o arquivo, pois esta como index.js

const app = express();

routes(app);

module.exports = app;
