const express = require('express');

// Import userController
const userController = require('../controllers/userController');

// Create router instance
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/users', userController);

// Export the router
module.exports = router;
