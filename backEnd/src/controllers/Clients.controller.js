const Client = require('../models/Client.model');
const clientsCtrl = {};

clientsCtrl.getClients = async (req,res) => {
    const response = await Client.find({});
    res.json(response);
}
clientsCtrl.postClient = async (req,res) => {
    const newClient = new Client({
        name: req.body.name,
        rfc: req.body.rfc,
        curp: req.body.curp,
        address: req.body.address,
        phone_number: req.body.phone_number,
        email: req.body.email
    });

    await newClient.save((err,result) => {
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
clientsCtrl.getClient = async (req,res) => {
    const id = req.params.id;
    const response = await Client.findOne({_id:id});
    res.json(response);
}
clientsCtrl.updateClient = async (req,res) => {
    const id = req.params.id;
    const client = {
        name: req.body.name,
        rfc: req.body.rfc,
        curp: req.body.curp,
        address: req.body.address,
        phone_number: req.body.phone_number,
        email: req.body.email
    };

    const response = await Client.updateOne({_id:id},client);

    res.json(response);
}
clientsCtrl.deleteClient = async (req,res) => {
    const id = req.params.id;
    const response = await Client.deleteOne({_id:id});
    res.json(response);
}

module.exports = clientsCtrl;