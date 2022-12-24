const Package = require('../models').Package;//imported fruits array

//handle index request
const index = (req, res) => {
    Package.findAll().then(packages => {res.json(packages)})
}

const show = (req, res) => {
    Package.findByPk(req.params.index)
    .then(package => {res.json(package)})
}

const postPackage = (req, res) => {
    Package.create(req.body)
    .then(newPackage => {res.json(newPackage)})
}

const removePackage = (req, res) => {
    Package.destroy({ where: { id: req.params.index } })
    .then(() => {res.json({message: "Package deleted"})})	
}

const editPackage = (req, res) => {
    Package.update(req.body, {
          where: { id: req.params.index },
          returning: true,
        }
    )
    .then(updatedPackage => {res.json(updatedPackage);})
}

module.exports = {
    index,
    show,
    postPackage,
    removePackage,
    editPackage
}