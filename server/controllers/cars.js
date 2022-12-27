const Car = require("../models").Car; //imported fruits array
const Package = require("../models").Package;
const User = require("../models").User;

//handle index request
const index = (req, res) => {
  Car.findAll().then((cars) => {
    res.json(cars);
  });
};
const showMyCar = (req, res) => {
  Car.findAll({
    where: {
      user_id: req.params.index
    }
  }).then((cars) => {
    res.json(cars);
  });
};

const show = (req, res) => {
  Car.findByPk(req.params.index, {
    include: [{ model: Package }, { model: User }],
  }).then((car) => {
    res.json(car);
  });
};

const postCar = (req, res) => {
  Car.create(req.body).then((newCar) => {
    res.json(newCar);
  });
};

const removeCar = (req, res) => {
  Car.destroy({ where: { id: req.params.index } }).then(() => {
    res.json({ message: "Car deleted" });
  });
};

const editCar = (req, res) => {
  Car.update(req.body, {
    where: { id: req.params.index },
    returning: true,
  }).then((updatedCar) => {
    res.json(updatedCar);
  });
};

module.exports = {
  index,
  showMyCar,
  show,
  postCar,
  removeCar,
  editCar,
};
