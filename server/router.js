import express from "express";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "./controller/favoriteController.js";
const router = express.Router();

router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);
router.delete("/favorites/:city", deleteFavorite);

export default router;
