const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser").json(); // for api req.body as json

app.use(cors());
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use("/cars", routes.cars);
app.use("/packages", routes.packages);
app.use("/users", routes.users);

app.listen(3002, () => {
  console.log(`Listening on port ${3002}`);
});
