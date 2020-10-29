const { Router } = require('express');
const Ctrl = require('../controllers/Product.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Ctrl.getProducts)
    .post(Ctrl.postProduct);

router.route('/:id')
    .get(Ctrl.getProduct)
    .put(Ctrl.updateProduct)
    .delete(Ctrl.deleteProduct);

module.exports = router;