const { Router } = require('express');
const Employee = require('../models/Employee.model');
require('../db');

const router = Router();

router.get('/', async (req,res) => {
    const response = await Employee.find({});
    res.json(response);
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const response = await Employee.findOne({_id:id});
    res.json(response);
});

router.post('/', async (req,res) => {
    const newEmployee = new Employee({
        name: req.body.name,
        rfc: req.body.rfc,
        curp: req.body.curp,
        address: req.body.address,
        phone_number: req.body.phone_number,
        area: req.body.area,
        position: req.body.position,
        password: req.body.password
    });

    await newEmployee.save((err,result) => {
        if(!err)
            res.json(result);
        else {
            console.log({dataDuplicated:err.keyValue});
            res.json({
                message:"Failed query",
                dataDuplicated:err.keyValue
            });
        }
    });
});

router.delete('/:id', async (req,res) => {
    const id = req.params.id;
    const response = await Employee.deleteOne({_id:id});
    res.json(response);
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;
    const employee = {
        name: req.body.name,
        rfc: req.body.rfc,
        curp: req.body.curp,
        address: req.body.address,
        phone_number: req.body.phone_number,
        area: req.body.area,
        position: req.body.position,
        password: req.body.password
    };

    const response = await Employee.updateOne({_id:id},employee);

    res.json(response);
});

module.exports = router;