const User = require("../models").User;

const index = (req, res) => {
  User.findAll().then((users) => {
    console.log(users);
    res.json(users);
  });
};
module.exports = {
  index,
};
