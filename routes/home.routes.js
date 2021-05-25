const express = require('express');

const router = express.Router();
const homeController = require('../src/controllers/home.controller');

router.get('/', homeController.getController);
router.post('/', homeController.postController);
router.get('/haha', (req, res) => {
    console.log('uiaaaaaa');
    res.send('Hello Heroku');
});

module.exports = router;
