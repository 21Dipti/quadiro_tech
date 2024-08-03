const express = require('express');
const { createCar, getCars, updateCar, deleteCar } = require('../controllers/carController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCar);
router.get('/', getCars);
router.put('/:id', authMiddleware, updateCar);
router.delete('/:id', authMiddleware, deleteCar);

module.exports = router;
