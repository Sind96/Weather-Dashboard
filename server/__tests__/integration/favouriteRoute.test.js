import request from "supertest";
import mongoose from "mongoose";
import app from "../../index,js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB";
import Favorite from "../../model/Favorite.js";

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
});
