const express = require('express');
const application = express();

const run = () => {
  application.listen(8000, () => {
    console.log("Server is running ...");
  });
};

module.exports = run;