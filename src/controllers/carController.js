const Car = require('../models/carModel');

const createCar = async (req, res) => {
  const { name, year, price } = req.body;

  try {
    const car = new Car({ name, year, price });
    await car.save();

    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const { name, year, price } = req.body;

  try {
    const car = await Car.findByIdAndUpdate(id, { name, year, price }, { new: true });

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car updated successfully', car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCar, getCars, updateCar, deleteCar };
