const { Router } = require('express');
const Ctrl = require('../controllers/Provider.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Ctrl.getProviders)
    .post(Ctrl.postProvider);

router.route('/:id')
    .get(Ctrl.getProvider)
    .put(Ctrl.updateProvider)
    .delete(Ctrl.deleteProvider);

module.exports = router;
