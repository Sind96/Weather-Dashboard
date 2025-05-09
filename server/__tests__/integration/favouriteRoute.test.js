import request from "supertest";
import app from "../../index.js";
import { connectTestDB, disconnectTestDB } from "../../utils/setupTestDB.js";
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
    expect(response.body).toHaveProperty("_id");
    expect(response.body.city).toBe("Integration Test City");
  });

  test("GET /favorites should return favourite cities", async () => {
    await Favorite.create({
      city: "London",
    });

    const response = await request(app).get("/favorites");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].city).toBe("London");
  });

  test("DELETE /favorites/:city should delete city from favourite", async () => {
    const city = await Favorite.create({
      city: "London",
    });

    const response = await request(app).delete(`/favorites/${city.city}`);

    expect(response.status).toBe(202);
    expect(response.body.message).toBe("City removed from favourites");
  });
});
