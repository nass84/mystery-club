const express = require("express");
const cors = require("cors");
const app = express();
const port = 3004;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "not Sleepy" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
