const { Schema, model } = require('mongoose');

const Provider = new Schema({
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
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    registered_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Provider',Provider);