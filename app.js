const express = require("express");
const application = express();
const db = require("./models");
const bodyParser = require("body-parser");
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
require("./routes")(application);

const run = () => {
  application.listen(8000, () => {
    console.log("Server is running ...");
  });
};

module.exports = run;
