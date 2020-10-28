const { Router } = require('express');
const Raw = require('../models/Raw.model');
require('../db');

const router = Router();

router.get('/', async (req,res) => {
    const response = await Raw.find({});
    res.json(response);
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const response = await Raw.findOne({_id:id});
    res.json(response);
});

router.post('/', async (req,res) => {
    const newRaw = new Raw({
        name: req.body.name,
        description: req.body.description,
        actual_price: req.body.actual_price,
        quantity: req.body.quantity
    });

    await newRaw.save((err,result) => {
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
    const response = await Raw.deleteOne({_id:id});
    res.json(response);
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;
    const raw = {
        name: req.body.name,
        description: req.body.description,
        actual_price: req.body.actual_price,
        quantity: req.body.quantity
    };

    const response = await Raw.updateOne({_id:id},raw);

    res.json(response);
});

module.exports = router;