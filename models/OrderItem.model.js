const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    order_id: {
        type: Schema.Types.ObjectId,
        ref: "order"
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const OrderModel = mongoose.model("order_item", orderSchema);

module.exports = OrderModel