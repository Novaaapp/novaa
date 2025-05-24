const express = require('express');
const router = express.Router();
const { sayHello, getUsers, createUser } = require('../controllers/helloController.js');

router.get('/', sayHello);
module.exports = router;
