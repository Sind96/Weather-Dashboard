const express = require("express");
const app = express();
var cors = require("cors");

const port = 3000;
const router = require("./router");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
