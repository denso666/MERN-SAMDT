const Raw = require('../models/Raw.model');
const rawCtrl = {};

rawCtrl.getRaws = async (req,res) => {
    const response = await Raw.find({});
    res.json(response);
}
rawCtrl.postRaw = async (req,res) => {
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
}
rawCtrl.getRaw = async (req,res) => {
    const id = req.params.id;
    const response = await Raw.findOne({_id:id});
    res.json(response);
}
rawCtrl.updateRaw = async (req,res) => {
    const id = req.params.id;
    const raw = {
        name: req.body.name,
        description: req.body.description,
        actual_price: req.body.actual_price,
        quantity: req.body.quantity
    };

    const response = await Raw.updateOne({_id:id},raw);

    res.json(response);
}
rawCtrl.deleteRaw = async (req,res) => {
    const id = req.params.id;
    const response = await Raw.deleteOne({_id:id});
    res.json(response);
}

module.exports = rawCtrl;