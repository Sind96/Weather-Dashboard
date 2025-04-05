import request from "supertest";
import mongoose from "mongoose";
import app from "../../index,js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB";
import Favorite from "../../model/Favorite.js";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Test API Endpoints", () => {
  beforeEach(async () => await Favorite.deleteMany({}));
});
