const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
