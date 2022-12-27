const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser").json(); // for api req.body as json
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(bodyParser);

app.use(cookieParser())

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const verifyToken = (req, res, next) => {
  // let token = req.cookies.jwt
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]
      req.token = bearerToken
  }

  console.log(req.token);

  jwt.verify(req.token,"test_jwt", (err, decodedUser) => {
      if (err || !decodedUser) return res.status(401).json({error: "Unauthorized Request"})

      req.user = decodedUser
      console.log(decodedUser);

      next();
  })
}
app.use("/auth", routes.auth);
app.use("/cars", routes.cars);
app.use("/packages", routes.packages);
app.use("/users",verifyToken, routes.users);

app.listen(3002, () => {
  console.log(`Listening on port ${3002}`);
});
