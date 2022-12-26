const User = require("../models").User; //imported fruits array
const jwt = require("jsonwebtoken");

//handle index request
const index = (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
};

const show = (req, res) => {
  User.findByPk(req.params.index).then((user) => {
    res.json(user);
  });
};

const postUser = (req, res) => {
  User.create(req.body).then((newUser) => {
    const token = jwt.sign(
      {
        username: newUser.username,
        id: newUser.id,
      },
      "test jwt",
      {
        expiresIn: "30 days",
      }
    );


  res.cookie("jwt", token)  // send cookie before send to client
  res.json({"jwt": token})
  console.log("JWT Token : " + token);

    // res.json(newUser);
  });
};

const removeUser = (req, res) => {
  User.destroy({ where: { id: req.params.index } }).then(() => {
    res.json({ message: "User deleted" });
  });
};

const editUser = (req, res) => {
  User.update(req.body, {
    where: { id: req.params.index },
    returning: true,
  }).then((updatedUser) => {
    res.json(updatedUser);
  });
};

module.exports = {
  index,
  show,
  postUser,
  removeUser,
  editUser,
};
