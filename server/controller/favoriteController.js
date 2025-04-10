import Favorite from "../model/Favorite.js";

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    console.error(`Error in getFavorites: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const addFavorite = async (req, res) => {
  const { city } = req.body;
  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }
  try {
    const existingFavorite = await Favorite.findOne({ city });
    if (existingFavorite) {
      return res.status(409).json({ error: "City is already in favorites" });
    }
    const newFavorite = await Favorite.create({ city });
    res.status(201).json(newFavorite);
  } catch (error) {
    console.error(`Error in addFavorite: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const deleteFavorite = async (req, res) => {
  const { city } = req.params;
  try {
    await Favorite.findOneAndDelete({ city: city });
    res.status(202).json({ message: "City removed from favourites" });
  } catch (error) {
    console.error(`Error in deleteFavorite: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};
