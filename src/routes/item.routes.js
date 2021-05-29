const express = require('express');

const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/item/create', itemController.create);
router.patch('/item', itemController.update);
router.get('/item', itemController.findById);
router.get('/item/all', itemController.getAll);
router.delete('/item/delete', itemController.delete);

module.exports = router;
