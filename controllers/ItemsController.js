const Item = require("../models").Item;

class ItemsController {
  index(req, res) {
    res.send({
      message: "worked",
    });
  }

  async createItem(req, res) {
    let item = req.body.item;
    let newItem = await Item.create(item);
    res.status(200).send({
      message: "item created successfully",
      status: 200,
      item: newItem,
    });
  }
}

module.exports = new ItemsController();
