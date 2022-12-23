const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());

app.use("/", routes.users);
app.listen(3002, () => {
  console.log(`Listening on port ${3002}`);
});
