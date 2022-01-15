const Item = require("../models").Item;
const path = require("path");

class ItemsController {
  index(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  }

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

  async changeItemStatus(req, res) {
    let id = req.params.id;
    let item = await Item.findByPk(id);
    if (item) {
      item.status = !item.status;
      item.save();
      res.status(200).send({
        message: "Item status changed successfully",
        status: 200,
      });
    } else {
      res.status(404).send({
        message: "Item not found",
        status: 404,
      });
    }
  }

  async deleteItem(req, res) {
    let id = req.params.id;
    let item = await Item.findByPk(id);
    if (item) {
      await item.destroy();
      res.status(200).send({
        message: "Item deleted successfully!",
        status: 200,
      });
    } else {
      res.status(404).send({
        message: "Item not found!",
        status: 404,
      });
    }
  }
}

module.exports = new ItemsController();
