const { Schema, default: mongoose } = require("mongoose");

const discountSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    }
});

const DiscountModel = mongoose.model("discount", discountSchema);

module.exports = DiscountModel