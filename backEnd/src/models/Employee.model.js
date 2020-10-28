const { Schema, model } = require('mongoose');

const Employee = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    rfc: {
        type: String,
        uppercase: true,
        unique: true,
        required: true
    },
    curp: {
        type: String,
        uppercase: true,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model('Employee',Employee);