const { Schema, default: mongoose } = require("mongoose");

const states = ["processing", "shipped", "delivered"];

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cart: {
      type: [Schema.Types.ObjectId],
      ref: "cart",
    },
    status: {
      type: String,
      enum: states,
      default: "processing",
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
