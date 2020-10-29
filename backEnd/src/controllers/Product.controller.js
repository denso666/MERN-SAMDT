const Product = require('../models/Product.model');
const productCtrl = {};

productCtrl.getProducts = async (req,res) => {
    const response = await Product.find({});
    res.json(response);
}
productCtrl.postProduct = async (req,res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        actual_price: req.body.actual_price,
        quantity: req.body.quantity
    });

    await newProduct.save((err,result) => {
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
productCtrl.getProduct = async (req,res) => {
    const id = req.params.id;
    const response = await Product.findOne({_id:id});
    res.json(response);
}
productCtrl.updateProduct = async (req,res) => {
    const id = req.params.id;
    const product = {
        name: req.body.name,
        description: req.body.description,
        actual_price: req.body.actual_price,
        quantity: req.body.quantity
    };

    const response = await Product.updateOne({_id:id},product);

    res.json(response);
}
productCtrl.deleteProduct = async (req,res) => {
    const id = req.params.id;
    const response = await Product.deleteOne({_id:id});
    res.json(response);
}

module.exports = productCtrl;