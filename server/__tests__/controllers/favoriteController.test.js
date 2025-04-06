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

  await getFavorites(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith([]);
});

test("addFavorite should add a city to favourites", async () => {
  const req = {
    body: {
      city: "London",
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await addFavorite(req, res);

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({ city: "London" })
  );
});

test("deleteFavorite should delete a city from favourites", async () => {
  const req = {
    params: {
      city: "London",
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await deleteFavorite(req, res);

  expect(res.status).toHaveBeenCalledWith(204);
  expect(res.json).toHaveBeenCalledWith({
    message: "City removed from favourites",
  });
});
