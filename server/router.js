const express = require("express");
const router = express.Router();
const {
  getWeather,
  getFavorites,
  addFavorite,
} = require("./controllers/weatherController");

router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);
router.delete("/favorites/:id", deleteFavorite);

module.exports = router;
