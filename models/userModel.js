const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: [true, "Email already has been taken"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    role: {
      type: Number,
      required: [true, "User Type is Required"],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);