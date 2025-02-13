import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  userId: { type: String },
});

export default mongoose.model("Favorite", FavoriteSchema);
