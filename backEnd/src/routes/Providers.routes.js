const { Router } = require('express');
const Provider = require('../models/Provider.model');
require('../db');

const router = Router();

router.get('/', async (req,res) => {
    const response = await Provider.find({});
    res.json(response);
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const response = await Provider.findOne({_id:id});
    res.json(response);
});

router.post('/', async (req,res) => {
    const newProvider = new Provider({
        name: req.body.name,
        rfc: req.body.rfc,
        phone_number: req.body.phone_number,
        email: req.body.email,
        registered_at: new Date()
    });

    await newProvider.save((err,result) => {
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
    const response = await Provider.deleteOne({_id:id});
    res.json(response);
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;
    const provider = {
        name: req.body.name,
        rfc: req.body.rfc,
        phone_number: req.body.phone_number,
        email: req.body.email,
        registered_at: req.body.registered_at
    };

    const response = await Provider.updateOne({_id:id},provider);

    res.json(response);
});

module.exports = router;
