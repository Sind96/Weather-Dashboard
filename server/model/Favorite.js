import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  userId: { type: String },
  city: { type: String, required: true, unique: true },
});

export default mongoose.model("Favorite", FavoriteSchema);
