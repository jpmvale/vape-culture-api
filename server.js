var cors = require("cors");
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const requireDir = require("require-dir");

dotenv.config();
requireDir("./src/models");
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('returnOriginal', false);

const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(require("./src/routes"));

server.listen(port, () => {
    console.log("Server is currently running on port " + port);
});