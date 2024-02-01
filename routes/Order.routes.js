const express = require("express");
const {
    getOrders,
    getOrder,
    addOrder
} = require("../controllers/Order.controller");
const router = express.Router();

router.get("/", getOrders);
router.get("/:orderId", getOrder);
router.post("/", addOrder);

module.exports = router;
