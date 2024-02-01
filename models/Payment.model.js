const { Schema, default: mongoose } = require("mongoose");

const paymentSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    
}, { timestamps: true })

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel