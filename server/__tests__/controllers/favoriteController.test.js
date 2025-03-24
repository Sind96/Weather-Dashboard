import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "../../controller/favoriteController.js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB.js";
import Favorite from "../../model/Favorite.js";

beforeAll(async () => connectTestDB());
afterAll(async () => disconnectTestDB());
