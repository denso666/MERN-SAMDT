const { Schema, model } = require('mongoose');

const Product = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    actual_price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = model('Product',Product);