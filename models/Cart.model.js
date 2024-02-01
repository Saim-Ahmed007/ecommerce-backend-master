const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    order_completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
