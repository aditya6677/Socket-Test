const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/profile', userController.getProfile)

module.exports = router;