const express = require("express");
const ItemsController = require("../controllers/ItemsController");
const router = express.Router();

router.get("/", ItemsController.index);

module.exports = router;
