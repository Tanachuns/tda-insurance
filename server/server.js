const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ id: "1" });
});
app.listen(3002, () => {
  console.log(`Listening on port ${3002}`);
});
