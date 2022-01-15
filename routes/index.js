const itemRouter = require("./item");

module.exports = (app) => {
  app.use("/items", itemRouter);
};
