const router = require('express').Router();
const authController = require('../controller/auth');

router.post('/login',authController.userLogin);

module.exports = router;