const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

console.log('AuthController:', authController); // Add this line to debug

// Define the routes and their handlers
router.post('/register', authController.register); // Ensure authController.register is defined
router.post('/login', authController.login);       // Ensure authController.login is defined

module.exports = router;
