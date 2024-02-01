const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product.controller");
const validateRequestData = require("../middlewares/validateRequestData");
const {
  productSchema,
  productUpdateSchema,
} = require("../validator/product.validate");
const router = express.Router();

router.get("/", getProducts);
router.get("/:productId", getProduct);
router.post("/",  addProduct);
router.patch(
  "/:productId",
  // validateRequestData(productUpdateSchema),
  updateProduct
);
router.delete("/:productId", deleteProduct);

module.exports = router;
