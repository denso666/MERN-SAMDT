const { Router } = require('express');
const Ctrl = require('../controllers/Client.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Ctrl.getClients)
    .post(Ctrl.postClient);

router.route('/:id')
    .get(Ctrl.getClient)
    .put(Ctrl.updateClient)
    .delete(Ctrl.deleteClient);

module.exports = router;