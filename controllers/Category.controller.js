const CategoryModel = require("../models/Category.model");
const Format = require("response-format");

async function getCategorys(req, res, next) {
  try {
    const categorys = await CategoryModel.find({});
    res.status(200).json(categorys);
  } catch (error) {
    next(error);
  }
}

async function getCategory(req, res, next) {
  try {
    const { categoryId } = req.params || {};
    const category = await CategoryModel.findById(categoryId);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
}

async function addCategory(req, res, next) {
  try {
    const { name, icon, featured } = req.body || {};

    const newCategory = new CategoryModel({
      name,
      icon,
      featured: featured ? featured : false,
    });

    await newCategory.save();

    res.json(Format.success(`${name} category add successful`, newCategory));
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getCategory,
  getCategorys,
  addCategory,
};
