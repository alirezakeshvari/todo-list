const express = require("express");
const ItemsController = require("../controllers/ItemsController");
const router = express.Router();

router.get("/", ItemsController.getItemsList);
router.post("/", ItemsController.createItem);

module.exports = router;
