const User = require("../models").User; //imported fruits array
const jwt = require("jsonwebtoken");
const jwt_decode =require( "jwt-decode")
//handle index request
const index = (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  req.token = jwt_decode(token)
  if(req.token.is_admin){
    User.findAll().then((users) => {
      res.json(users);
    });
  }else {
    res.send("ADMIN : NOT PERMISSION ")
  }

}

const show = (req, res) => {
  User.findByPk(req.params.index).then((user) => {
    res.json(user);
  });
};

// const postUser = (req, res) => {
//   User.create(req.body).then((newUser) => {
//     const token = jwt.sign(
//       {
//         username: newUser.username,
//         id: newUser.id,
//         is_admin:newUser.is_admin
//       },
//       "test jwt",
//       {
//         expiresIn: "30 days",
//       }
//     );


//   res.cookie("jwt", token)  // send cookie before send to client
//   res.json({"jwt": token})
//   console.log("JWT Token : " + token);

//     // res.json(newUser);
//   });
// };

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
  // postUser,
  removeUser,
  editUser,
};
