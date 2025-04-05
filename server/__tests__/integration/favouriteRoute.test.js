import request from "supertest";
import mongoose from "mongoose";
import app from "../../index,js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB";
import Favorite from "../../model/Favorite.js";

