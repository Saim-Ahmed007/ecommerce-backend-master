const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true 
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    review: {
        type: [Schema.Types.ObjectId],
        ref: "review"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
    }
}, { timestamps: true });

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel