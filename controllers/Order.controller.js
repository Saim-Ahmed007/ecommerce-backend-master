const CartModel = require("../models/Cart.model");
const OrderModel = require("../models/Order.model");
const Format = require("response-format");

async function getOrders(req, res, next) {
  try {
    if (req.query?.email) {
      const orders = await OrderModel.find({
        email: req.query?.email,
      }).populate([
        {
          path: "cart",
          model: "cart",
          populate: {
            path: "product",
            model: "product",
          },
        },
      ]);

      res.status(200).json(orders);
    } else {
      const orders = await OrderModel.find({}).populate([
        {
          path: "cart",
          model: "cart",
          populate: {
            path: "product",
            model: "product",
          },
        },
      ]);

      res.status(200).json(orders);
    }
  } catch (error) {
    next(error);
  }
}

async function getOrder(req, res, next) {
  try {
    const { orderId } = req.params || {};
    const order = await OrderModel.findById(orderId).populate([
      {
        path: "user",
        model: "user",
      },
      {
        path: "cart",
        model: "cart",
        populate: {
          path: "product",
          model: "product",
        },
      },
    ]);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}

async function addOrder(req, res, next) {
  try {
    const { email, cart } = req.body;

    const newOrder = new OrderModel({
      email,
      cart,
    });

    await newOrder.save();

    await CartModel.updateMany(
      { _id: { $in: cart } },
      {
        $set: {
          order_completed: true,
        },
      }
    );

    res.status(201).json(Format.success("Order successful.", newOrder));
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getOrders,
  getOrder,
  addOrder,
};
