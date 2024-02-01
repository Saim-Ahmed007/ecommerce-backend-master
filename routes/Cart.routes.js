const express = require("express");
const {
  getCarts,
  getCart,
  addCart,
  updateProductQuantity,
  deleteCart,
} = require("../controllers/Cart.controller");
const verifyToken = require("../middlewares/verifyJwtToken");
const router = express.Router();

router.get("/", getCarts);
router.get("/:cartId", getCart);
router.post("/", verifyToken, addCart);
router.patch("/:cartId", verifyToken, updateProductQuantity);
router.delete("/:cartId", verifyToken, deleteCart);

module.exports = router;
