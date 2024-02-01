const { Schema, default: mongoose } = require("mongoose");

const WishlistSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const WishlistModel = mongoose.model("wishlist", WishlistSchema);

module.exports = WishlistModel