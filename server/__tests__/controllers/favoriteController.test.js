import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "../../controller/favoriteController.js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB.js";
import Favorite from "../../model/Favorite.js";

beforeAll(async () => connectTestDB());
afterAll(async () => disconnectTestDB());

test("getFavourites should return an empty array initially", async () => {
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await getFavorites();

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ tasks: [] });
});

