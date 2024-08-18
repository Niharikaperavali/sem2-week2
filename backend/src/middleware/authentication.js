const  AdminSchema = require('../models/adminSchema.js');
const bcrypt = require('bcrypt');

authenticateAdmin = async(username,password)=>{
    console.log("authentication verifying...");
    try{
        const user = await AdminSchema.findOne({ username });

    if(!user){
        console.log("No admin found ")
        return { success: false,message: 'Authentication failed.user not found.'};
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match) {
        console.log('Authentication failed ');
        return{ success: false,message: 'Authentication failed. Incorrect password.'};
    }
    console.log("Authentication succesful ")
    return { success:true,message: 'Authentication sucessful.'};
    } catch(error) {
        throw new Error('Authenticaion failed.Error occurred.');
    }
}

module.exports = authenticateAdmin;