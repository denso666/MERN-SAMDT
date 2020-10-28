const { Schema, model } = require('mongoose');

const Client = new Schema({
    name: {
        type: String,
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
    email: {
        type: String,
        required: true
    }
});

module.exports = model('Client',Client);