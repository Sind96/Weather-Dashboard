const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  city: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
