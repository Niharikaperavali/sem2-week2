const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    usernme: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    }
}, { timestamps: false });

const Admin = mongoose.model('AdminLogin',adminSchema);

module.exports = Admin;