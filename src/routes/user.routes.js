const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/user/create', userController.create);
router.post('/user/acess', userController.acess);
router.patch('/user', userController.update);
router.get('/user', userController.findById);

module.exports = router;
