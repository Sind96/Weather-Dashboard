const Favorite = require("../models/weatherController");

// Get current weather data
exports.getWeather = async (req, res) => {
  const { city } = req.params;
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error in getWeather: ${error.message}`);
    res.status(500).json({ error: "Error fetching weather data" });
  }
};

// Get all favorite cities
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    console.error(`Error in getFavorites: ${error.message}`);
    res.status(500).json({ error: "Error fetching favorites" });
  }
};

// Add a city to favorites
exports.addFavorite = async (req, res) => {
  const { city } = req.body;
  try {
    const newFavorite = new Favorite({ city });
    await newFavorite.save();
    res.status(201).json(newFavorite);
  } catch (error) {
    console.error(`Error in addFavorite: ${error.message}`);
    res.status(500).json({ error: "Error saving favorite city" });
  }
};
