const Favorite = require("../model/Favorite");

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    console.error(`Error in getFavorites: ${error.message}`);
    res.status(500).json({ error: "Error fetching favorites" });
  }
};

exports.addFavorite = async (req, res) => {
  const { city } = req.body;
  try {
    const newFavorite = await Favorite.create({ city });
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFavorite = async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(`Error in deleteFavorite: ${error.message}`);
    res.status(500).json({ error: "Error fetching favorites" });
  }
};
