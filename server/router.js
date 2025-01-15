const express = require("express");
const router = express.Router();

const {
  getWeather,
  getFavorites,
  addFavorite,
} = require("./controllers/weatherController");

router.get("/weather/:city", getWeather);
router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);

module.exports = router;
