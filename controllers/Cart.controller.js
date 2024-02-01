const CartModel = require("../models/Cart.model");
const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");
const Format = require("response-format");

async function getCarts(req, res, next) {
  try {
    if (req.query?.email) {
      const carts = await CartModel.find({
        email: req.query?.email,
        order_completed: false,
      }).populate(["product"]);
      
      res.status(200).json(carts);
    } else {
      const carts = await CartModel.find({ order_completed: false }).populate([
        "product",
      ]);

      res.status(200).json(carts);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getCart(req, res, next) {
  try {
    const { cartId } = req.params || {};

    const cart = await CartModel.findById(cartId).populate(["product"]);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

async function addCart(req, res, next) {
  try {
    const email = req.user.email;
    const { product_id } = req.body;

    const product = await ProductModel.findById(product_id);

    if (!product) {
      return res.status(404).json(Format.error("Product is not found."));
    }

    const newCart = new CartModel({
      email,
      product: product_id,
      quantity: 1,
      price: product.price,
    });

    await newCart.save();

    await ProductModel.findByIdAndUpdate(product_id, {
      $set: {
        quantity: product.quantity - 1,
      },
    });

    res.status(201).json(Format.success("Product add successful.", newCart));
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function updateProductQuantity(req, res, next) {
  try {
    const { cartId } = req.params || {};
    const { type } = req.body;
    const cart = await CartModel.findById(cartId);
    const product = await ProductModel.findById(cart.product);

    let cartQuantity = cart.quantity;
    let productQuantity = product.quantity;

    if (type === "increase") {
      if (0 < product.quantity - 1) {
        cartQuantity = cart.quantity + 1;
        await ProductModel.findByIdAndUpdate(product._id, {
          $set: {
            quantity: productQuantity - 1,
          },
        });
      }
    }

    if (type === "decrease") {
      if (cart.quantity - 1 > 0) {
        cartQuantity = cart.quantity - 1;
        await ProductModel.findByIdAndUpdate(product._id, {
          $set: {
            quantity: productQuantity + 1,
          },
        });
      }
    }

    await CartModel.findByIdAndUpdate(cartId, {
      $set: {
        quantity: cartQuantity,
      },
    });

    res.status(200).json(
      Format.success("Product quantity update successful.", {
        productQuantity,
        cartQuantity,
      })
    );
  } catch (error) {
    next(error);
  }
}

async function deleteCart(req, res, next) {
  try {
    const { cartId } = req.params || {};
    const { quantity } = req.body;

    const cart = await CartModel.findById(cartId);
    const product = await ProductModel.findById(cart.product);

    await ProductModel.findByIdAndUpdate(cart.product, {
      $set: {
        quantity: product.quantity + quantity,
      },
    });

    const cartResult = await CartModel.deleteOne({ _id: cartId });

    res
      .status(200)
      .json(Format.success("Product remove successful.", cartResult));
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getCarts,
  getCart,
  addCart,
  updateProductQuantity,
  deleteCart,
};
