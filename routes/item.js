const express = require("express");
const ItemsController = require("../controllers/ItemsController");
const router = express.Router();

router.post("/", ItemsController.createItem);

module.exports = router;
