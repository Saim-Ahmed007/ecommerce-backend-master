const { Schema, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel