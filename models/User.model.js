const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
    },
    gender: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
