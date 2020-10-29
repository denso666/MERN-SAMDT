const { Router } = require('express');
const Ctrl = require('../controllers/Raw.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Ctrl.getRaws)
    .post(Ctrl.postRaw);

router.route('/:id')
    .get(Ctrl.getRaw)
    .put(Ctrl.updateRaw)
    .delete(Ctrl.deleteRaw);

module.exports = router;