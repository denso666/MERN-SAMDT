const { Router } = require('express');
const Client = require('../controllers/Clients.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Client.getClients)
    .post(Client.postClient);

router.route('/:id')
    .get(Client.getClient)
    .put(Client.updateClient)
    .delete(Client.deleteClient);

module.exports = router;