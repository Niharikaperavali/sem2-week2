var express = require('express');
var router = express.Router();
const authenticateAdmin = require('../middleware/authentication')
const {addAdmin} = require('../controllers/queries');

router.post('/login', async (req,res)=>{
    const { username, password } = req.body;
    console.log("got data from admin login");

    try{
        const result = await authenticateAdmin(username, password);
        res,send(result);
    } catch (eror) {
        console.error('Eror:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/add',async (req,res)=>{
    const{ username, password } = req.body;

    try{
        const saveAdmin = await addAdmin(usernme, password);
        console.log(savedAdmin);

        res.status(201).send(savedAdmin);
    }catch (error) {
        console.error('Error adding admin:',error.message);
        res.status(500).send('Internal server Error');
    }
});

module.exports = router