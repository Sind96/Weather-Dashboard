const express = require("express");
const router = express.Router();
const {
  getFavorites,
  addFavorite,
  deleteFavorite,
} = require("./controller/favoriteController");

router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);
router.delete("/favorites/:city", deleteFavorite);

module.exports = router;
