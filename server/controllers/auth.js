const User = require('../models').User
// const bcrypt = require('bcryptjs')
// require('dotenv').config()
const jwt = require('jsonwebtoken')

const signup = (req, res) => {
            User.create(req.body)
            .then(newUser => {
                const token = jwt.sign(
                    {
                        username: newUser.username,
                        id: newUser.id,
                        is_admin:newUser.is_admin
                    },
                    "test_jwt",
                    {
                        expiresIn: "30 days",
                    }
                )

                res.cookie("jwt", token)
                res.json({"jwt": token})
                // res.redirect(`/users/profile/${newUser.id}`);
            })
            .catch(err => {
                console.log(err);
                // res.send(`error ${err}`)
            })

}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if (foundUser) {
                if (req.body.password ===  foundUser.password) {
                    const token = jwt.sign(
                        {
                            username: foundUser.username,
                            id: foundUser.id,
                            is_admin:foundUser.is_admin
                        },
                        "test_jwt",
                        {
                            expiresIn: "30 days",
                        }
                    )
    
                    res.cookie("jwt", token)
                res.json({"jwt": token})
                } else {
                    return res.sendStatus(400)
                }
            }
        })
}

// const logout = (req, res) => {
//     res.json({"jwt": null})
// }
module.exports = {
    signup,
    login,
    // logout  
}