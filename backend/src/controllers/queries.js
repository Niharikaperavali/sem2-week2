const bcrypt = require('bcrypt');
const AdminSchema = require('../models/adminSchema');

const addAdmin = async (username, password) => {
    console.log(1)

    const existingAdmin = await AdminSchema.findOne({username});

    if(existingAdmin) {
        throw new Error('Admin with this username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin= new AdminSchema({
        username: username,
        password: hashedPassword,
    });

    const savedAdmin = await newAdmin.save();
    console.log(savedAdmin);

    return savedAdmin;
};

module.exports = { addAdmin };