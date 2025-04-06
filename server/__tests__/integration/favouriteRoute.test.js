import request from "supertest";
import mongoose from "mongoose";
import app from "../../index.js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB";
import Favorite from "../../model/Favorite.js";
import { response } from "express";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Test API Endpoints", () => {
  beforeEach(async () => await Favorite.deleteMany({}));

  test("POST /favourites should add favourite city to favourites", async () => {
    const response = await request(app).post("/favorites").send({
      city: "Integration Test City",
    });

    expect(response.status).toBe(201);
    expect(response.body.newFavorite).toHaveProperty("_id");
    expect(response.body.newFavorite.city).toBe("Integration Test City");
  });

  test("GET /favorites should return favourite cities", async () => {
    await Favorite.create({
      city: "London",
    });

    const response = await request(app).get("/favorites");

    expect(response.status).toBe(200);
    expect(response.body.favorites.length).toBe(1);
    expect(response.body.favorites[0].city).toBe("London");
  });

  test("", async () => {
    const city = await Favorite.create({
      city: "London",
    });

    const response = await request(app).delete("/favorites/${city}");

    expect(response.status).toBe(204);
    expect(response.body.message).toBe("City removed from favourites");
  });
});
