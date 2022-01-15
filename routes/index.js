const itemRouter = require("./item");
const viewsRouter = require("./views");

module.exports = (app) => {
  app.use("/api/items", itemRouter);
  app.use("/", viewsRouter);
};
