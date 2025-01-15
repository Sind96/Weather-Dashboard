const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);

// Async function to connect to MongoDB & Start Server
(async function () {
  try {
    mongoose.connect(process.env.MONGO_URI);
    app.listen(port);
    console.log(
      `Server running on PORT ${port} and Database has successfully connected!🕊️`
    );
  } catch (error) {
    console.log(`Server & Database could not connect:`, error);
  }
})();
