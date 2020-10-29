const { Router } = require('express');
const Ctrl = require('../controllers/Employee.controller');
require('../db');

const router = Router();

router.route('/')
    .get(Ctrl.getEmployees)
    .post(Ctrl.postEmployee);

router.route('/:id')
    .get(Ctrl.getEmployee)
    .put(Ctrl.updateEmployee)
    .delete(Ctrl.deleteEmployee);

module.exports = router;