import Favorite from "../model/Favorite.js";

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    console.error(`Error in getFavorites: ${error.message}`);
    res.status(500).json({ error: "Error fetching favorites" });
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
    res.status(500).json({ error: error.message });
  }
};

export const deleteFavorite = async (req, res) => {
  const { city } = req.params;
  try {
    await Favorite.findOneAndDelete({ city: city });
    res.status(204).send();
  } catch (error) {
    console.error(`Error in deleteFavorite: ${error.message}`);
    res.status(500).json({ error: "Error fetching favorites" });
  }
};
