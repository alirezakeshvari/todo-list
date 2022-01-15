const express = require("express");
const ItemsController = require("../controllers/ItemsController");
const router = express.Router();

router.get("/", ItemsController.getItemsList);
router.post("/", ItemsController.createItem);
router.put("/:id", ItemsController.changeItemStatus);
router.delete("/:id", ItemsController.deleteItem);

module.exports = router;
