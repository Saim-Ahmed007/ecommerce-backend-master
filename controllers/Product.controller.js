const ObjectId = require("mongoose").Types.ObjectId;
const ProductModel = require("../models/Product.model");
const createResponse = require("../utility/createResponse");

async function getProducts(req, res, next) {
  try {
    const products = await ProductModel.find({}).populate(["category", "user"]);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const { productId } = req.params || {};
    const product = await ProductModel.findById(productId).populate([
      "category",
      "user",
    ]);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

async function addProduct(req, res, next) {
  try {
    const newProduct = new ProductModel(req.body);

    await newProduct.save();

    res.status(201).json(
      createResponse(true, {
        message: "Product add successfully",
        product: newProduct,
      })
    );
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { productId } = req.params || {};

    const result = await ProductModel.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(
      createResponse(true, {
        message: "Product update successfully",
        product: result,
      })
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { productId } = req.params || {};
    const product = await ProductModel.findById(productId);

    if (product) {
      await ProductModel.deleteOne({ _id: new ObjectId(productId) });
      res.status(200).json(
        createResponse(true, {
          message: "Product delete successfully",
          productId,
        })
      );
    } else {
      res.status(404).json(
        createResponse(false, {
          message: "Product is not found.",
        })
      );
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
