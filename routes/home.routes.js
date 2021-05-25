const express = require('express');

const router = express.Router();
const homeController = require('../src/controllers/home.controller');

router.get('/', homeController.getController);
router.post('/', homeController.postController);
router.get('/favicon.ico', () => console.log('uiaaaaaa'))

module.exports = router;
