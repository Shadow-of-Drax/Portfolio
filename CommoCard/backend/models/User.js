const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String },
  statusMessage: { type: String, default: "Available" },
});

module.exports = mongoose.model("User", UserSchema);
