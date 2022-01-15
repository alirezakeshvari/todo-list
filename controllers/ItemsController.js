const Item = require("../models").Item;

class ItemsController {
  async getItemsList(req, res) {
    let items = await Item.findAll();
    if (items) {
      res.status(200).send({
        message: "Items listed successfully",
        status: 200,
        items: items,
      });
    } else {
      res.status(200).send({
        message: "No items founded!",
        status: 200,
      });
    }
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
