const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/user/create', userController.create);
router.post('/user/acess', userController.acess);
router.post('/user/exists', userController.exists);
router.patch('/user', userController.update);
router.get('/user', userController.findById);
router.get('/user/position', userController.getPosition);

module.exports = router;
