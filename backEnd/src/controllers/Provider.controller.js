const Provider = require('../models/Provider.model');
const providerCtrl = {};


providerCtrl.getProviders = async (req,res) => {
    const response = await Provider.find({});
    res.json(response);
}
providerCtrl.postProvider = async (req,res) => {
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
}
providerCtrl.getProvider = async (req,res) => {
    const id = req.params.id;
    const response = await Provider.findOne({_id:id});
    res.json(response);
}
providerCtrl.updateProvider = async (req,res) => {
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
}
providerCtrl.deleteProvider = async (req,res) => {
    const id = req.params.id;
    const response = await Provider.deleteOne({_id:id});
    res.json(response);
}

module.exports = providerCtrl;