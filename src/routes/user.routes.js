const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/user/create', userController.create);
router.patch('/user', userController.update);
router.get('/user', userController.findById);
router.get('/user/acess', userController.acess);

module.exports = router;
