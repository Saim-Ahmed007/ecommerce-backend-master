const express = require("express");
const {
    getCategorys, getCategory, addCategory
} = require("../controllers/Category.controller");
const router = express.Router();

router.get("/", getCategorys);
router.get("/:categoryId", getCategory);
router.post("/", addCategory);
// router.patch("/:categoryId", updateCategory);
// router.delete("/:categoryId", deleteCategory);

module.exports = router;
