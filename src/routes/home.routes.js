const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.get);

module.exports = router;
